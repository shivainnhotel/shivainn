import { createClient } from "@supabase/supabase-js";

// SERVER-ONLY. Never import this file into a "use client" component -
// it uses the service_role key, which bypasses Row Level Security.
// It must only run inside API routes / Server Components.

const url = process.env.SUPABASE_URL!;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

if (!url || !serviceRoleKey) {
  throw new Error(
    "Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY environment variables"
  );
}

export const supabaseAdmin = createClient(url, serviceRoleKey, {
  auth: { persistSession: false },
});

export type MenuType = "veg" | "nonveg" | "drinks";

export type MenuItemRow = {
  id: string;
  menu_type: MenuType;
  section_id: string;
  section_title: string;
  name: string;
  price: string | null;
  price_750ml: string | null;
  price_180ml: string | null;
  price_90ml: string | null;
  price_60ml: string | null;
  price_30ml: string | null;
  price_150ml: string | null;
  sort_order: number;
  created_at: string;
  updated_at: string;
};
