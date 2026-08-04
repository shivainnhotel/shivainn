// One-time migration: pushes the current hardcoded menu (extracted from
// the live VegMenuClient.tsx / NonVegMenuClient.tsx) into Supabase.
//
// Run once, after the schema.sql has been applied and env vars are set:
//   npx tsx scripts/seed.ts
//
// Safe to re-run: it wipes the menu_items table first, so re-running
// just re-syncs from these seed files (handy if you want to reset back
// to the original menu after testing the admin panel).

import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { createClient } from "@supabase/supabase-js";
import vegMenuSections from "./seed-data/vegMenuSeed";
import nonVegMenuSections from "./seed-data/nonvegMenuSeed";
import drinksMenuSections from "./seed-data/drinksMenuSeed";

function loadEnvLocal() {
  const envPath = join(process.cwd(), ".env.local");
  if (!existsSync(envPath)) return;

  const lines = readFileSync(envPath, "utf8").split(/\r?\n/);
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;

    const equalsIndex = trimmed.indexOf("=");
    if (equalsIndex === -1) continue;

    const key = trimmed.slice(0, equalsIndex).trim();
    let value = trimmed.slice(equalsIndex + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }

    if (key && process.env[key] === undefined) {
      process.env[key] = value;
    }
  }
}

loadEnvLocal();

const url = process.env.SUPABASE_URL!;
const key = process.env.SUPABASE_SERVICE_ROLE_KEY!;

if (!url || !key) {
  console.error("Set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY in your environment before running this.");
  process.exit(1);
}

const supabase = createClient(url, key);

type AnySection = { id: string; title: string; items: Record<string, unknown>[] };

function flatten(sections: AnySection[], menu_type: "veg" | "nonveg" | "drinks") {
  const rows: Record<string, unknown>[] = [];
  sections.forEach((section) => {
    section.items.forEach((item, index) => {
      rows.push({
        menu_type,
        section_id: section.id,
        section_title: section.title,
        sort_order: index,
        ...item, // name, price, price_750ml, etc - whatever fields exist
      });
    });
  });
  return rows;
}

async function main() {
  const rows = [
    ...flatten(vegMenuSections as AnySection[], "veg"),
    ...flatten(nonVegMenuSections as AnySection[], "nonveg"),
    ...flatten(drinksMenuSections as AnySection[], "drinks"),
  ];

  console.log(`Seeding ${rows.length} menu items...`);

  const { error: deleteError } = await supabase.from("menu_items").delete().neq("id", "00000000-0000-0000-0000-000000000000");
  if (deleteError) {
    console.error("Failed to clear existing rows:", deleteError.message);
    process.exit(1);
  }

  // Insert in batches to stay well under request size limits
  const BATCH = 200;
  for (let i = 0; i < rows.length; i += BATCH) {
    const batch = rows.slice(i, i + BATCH);
    const { error } = await supabase.from("menu_items").insert(batch);
    if (error) {
      console.error(`Failed on batch starting at ${i}:`, error.message);
      process.exit(1);
    }
    console.log(`Inserted ${Math.min(i + BATCH, rows.length)} / ${rows.length}`);
  }

  console.log("Done.");
}

main();
