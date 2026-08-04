"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";

type MenuType = "veg" | "nonveg" | "drinks";

type MenuItemRow = {
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
};

const TABS: { value: MenuType; label: string }[] = [
  { value: "veg", label: "Veg Menu" },
  { value: "nonveg", label: "Non-Veg Menu" },
  { value: "drinks", label: "Drinks" },
];

const DRINK_PRICE_FIELDS = [
  { key: "price_750ml", label: "750ml" },
  { key: "price_180ml", label: "180ml" },
  { key: "price_90ml", label: "90ml" },
  { key: "price_60ml", label: "60ml" },
  { key: "price_30ml", label: "30ml" },
] as const;

function slugify(text: string) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function priceSummary(item: MenuItemRow) {
  if (item.menu_type === "drinks") {
    const sizeParts = DRINK_PRICE_FIELDS.filter((f) => item[f.key]).map((f) => `${f.label}: ${item[f.key]}`);
    if (sizeParts.length > 0) return sizeParts.join(" / ");
    return item.price || "—";
  }
  return item.price || "—";
}

export default function AdminDashboard() {
  const router = useRouter();
  const [tab, setTab] = useState<MenuType>("veg");
  const [items, setItems] = useState<MenuItemRow[]>([]);
  const [sections, setSections] = useState<{ section_id: string; section_title: string }[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [showAddForm, setShowAddForm] = useState(false);

  async function loadItems() {
    setLoading(true);
    const [itemsRes, sectionsRes] = await Promise.all([
      fetch(`/api/menu?menu_type=${tab}`).then((r) => r.json()),
      fetch(`/api/menu/sections?menu_type=${tab}`).then((r) => r.json()),
    ]);
    setItems(itemsRes.items ?? []);
    setSections(sectionsRes.sections ?? []);
    setLoading(false);
  }

  useEffect(() => {
    loadItems();
    setEditingId(null);
    setShowAddForm(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tab]);

  const filteredGrouped = useMemo(() => {
    const q = search.trim().toLowerCase();
    const filtered = q ? items.filter((i) => i.name.toLowerCase().includes(q)) : items;

    const groups = new Map<string, { title: string; items: MenuItemRow[] }>();
    for (const item of filtered) {
      if (!groups.has(item.section_id)) {
        groups.set(item.section_id, { title: item.section_title, items: [] });
      }
      groups.get(item.section_id)!.items.push(item);
    }
    return Array.from(groups.entries());
  }, [items, search]);

  async function handleDelete(id: string) {
    if (!confirm("Delete this item?")) return;
    await fetch(`/api/menu/${id}`, { method: "DELETE" });
    loadItems();
  }

  async function handleLogout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
  }

  return (
    <main style={{ maxWidth: 900, margin: "0 auto", padding: 24, fontFamily: "system-ui, sans-serif" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
        <h1 style={{ fontSize: 22, fontWeight: 700 }}>Shiva Inn Menu Admin</h1>
        <button onClick={handleLogout} style={{ fontSize: 13, color: "#666", background: "none", border: "none", cursor: "pointer" }}>
          Log out
        </button>
      </div>

      <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
        {TABS.map((t) => (
          <button
            key={t.value}
            onClick={() => setTab(t.value)}
            style={{
              padding: "8px 16px",
              borderRadius: 999,
              border: "1px solid #ddd",
              background: tab === t.value ? "#111" : "#fff",
              color: tab === t.value ? "#fff" : "#111",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div style={{ display: "flex", gap: 8, marginBottom: 20 }}>
        <input
          placeholder="Search dish name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ flex: 1, padding: "10px 14px", border: "1px solid #ddd", borderRadius: 8 }}
        />
        <button
          onClick={() => setShowAddForm((v) => !v)}
          style={{ padding: "10px 16px", borderRadius: 8, background: "#0a7d34", color: "#fff", fontWeight: 600, border: "none", cursor: "pointer" }}
        >
          {showAddForm ? "Cancel" : "+ Add Item"}
        </button>
      </div>

      {showAddForm && (
        <AddItemForm
          menuType={tab}
          sections={sections}
          onDone={() => {
            setShowAddForm(false);
            loadItems();
          }}
        />
      )}

      {loading && <p style={{ color: "#888" }}>Loading...</p>}

      {!loading && filteredGrouped.length === 0 && <p style={{ color: "#888" }}>No items found.</p>}

      {filteredGrouped.map(([sectionId, group]) => (
        <div key={sectionId} style={{ marginBottom: 24 }}>
          <h2 style={{ fontSize: 15, fontWeight: 700, textTransform: "uppercase", color: "#555", marginBottom: 8 }}>
            {group.title}
          </h2>
          <div style={{ border: "1px solid #eee", borderRadius: 10, overflow: "hidden" }}>
            {group.items.map((item) => (
              <div key={item.id} style={{ borderBottom: "1px solid #f0f0f0" }}>
                {editingId === item.id ? (
                  <EditItemRow
                    item={item}
                    onCancel={() => setEditingId(null)}
                    onSaved={() => {
                      setEditingId(null);
                      loadItems();
                    }}
                  />
                ) : (
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 14px" }}>
                    <span>{item.name}</span>
                    <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                      <span style={{ color: "#333", fontWeight: 600, fontSize: 13 }}>{priceSummary(item)}</span>
                      <button onClick={() => setEditingId(item.id)} style={linkBtnStyle}>
                        Edit
                      </button>
                      <button onClick={() => handleDelete(item.id)} style={{ ...linkBtnStyle, color: "crimson" }}>
                        Delete
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </main>
  );
}

const linkBtnStyle: React.CSSProperties = {
  background: "none",
  border: "none",
  color: "#0a63d1",
  cursor: "pointer",
  fontSize: 13,
  fontWeight: 600,
};

const inputStyle: React.CSSProperties = {
  padding: "8px 10px",
  border: "1px solid #ddd",
  borderRadius: 6,
  fontSize: 13,
};

function PriceFields({
  menuType,
  values,
  onChange,
}: {
  menuType: MenuType;
  values: Record<string, string>;
  onChange: (key: string, value: string) => void;
}) {
  if (menuType === "drinks") {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {DRINK_PRICE_FIELDS.map((f) => (
            <input
              key={f.key}
              placeholder={f.label}
              value={values[f.key] ?? ""}
              onChange={(e) => onChange(f.key, e.target.value)}
              style={{ ...inputStyle, width: 90 }}
            />
          ))}
        </div>
        <input
          placeholder="Overall price (use this if it's a single-size item, e.g. 650ml beer)"
          value={values.price ?? ""}
          onChange={(e) => onChange("price", e.target.value)}
          style={{ ...inputStyle, width: "100%" }}
        />
      </div>
    );
  }
  return (
    <input
      placeholder="Price e.g. 180 or 180 / 220"
      value={values.price ?? ""}
      onChange={(e) => onChange("price", e.target.value)}
      style={{ ...inputStyle, width: 160 }}
    />
  );
}

function AddItemForm({
  menuType,
  sections,
  onDone,
}: {
  menuType: MenuType;
  sections: { section_id: string; section_title: string }[];
  onDone: () => void;
}) {
  const [sectionChoice, setSectionChoice] = useState<string>(sections[0]?.section_id ?? "__new__");
  const [newCategoryName, setNewCategoryName] = useState("");
  const [name, setName] = useState("");
  const [prices, setPrices] = useState<Record<string, string>>({});
  const [saving, setSaving] = useState(false);

  const isNewCategory = sectionChoice === "__new__";

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim()) return;

    const section_id = isNewCategory ? slugify(newCategoryName) : sectionChoice;
    const section_title = isNewCategory
      ? newCategoryName.trim().toUpperCase()
      : sections.find((s) => s.section_id === sectionChoice)?.section_title ?? sectionChoice;

    if (!section_id) return;

    setSaving(true);
    await fetch("/api/menu", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ menu_type: menuType, section_id, section_title, name: name.trim(), ...prices }),
    });
    setSaving(false);
    onDone();
  }

  return (
    <form onSubmit={handleSubmit} style={{ border: "1px solid #ddd", borderRadius: 10, padding: 16, marginBottom: 20, display: "flex", flexDirection: "column", gap: 10 }}>
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        <select value={sectionChoice} onChange={(e) => setSectionChoice(e.target.value)} style={inputStyle}>
          {sections.map((s) => (
            <option key={s.section_id} value={s.section_id}>
              {s.section_title}
            </option>
          ))}
          <option value="__new__">+ New category</option>
        </select>
        {isNewCategory && (
          <input
            placeholder="New category name e.g. Tandoor Specials"
            value={newCategoryName}
            onChange={(e) => setNewCategoryName(e.target.value)}
            style={{ ...inputStyle, flex: 1, minWidth: 200 }}
          />
        )}
      </div>

      <input placeholder="Dish name" value={name} onChange={(e) => setName(e.target.value)} style={inputStyle} required />

      <PriceFields menuType={menuType} values={prices} onChange={(k, v) => setPrices((p) => ({ ...p, [k]: v }))} />

      <button
        type="submit"
        disabled={saving}
        style={{ alignSelf: "flex-start", padding: "8px 16px", background: "#111", color: "#fff", borderRadius: 6, fontWeight: 600, border: "none", cursor: "pointer" }}
      >
        {saving ? "Saving..." : "Save item"}
      </button>
    </form>
  );
}

function EditItemRow({ item, onCancel, onSaved }: { item: MenuItemRow; onCancel: () => void; onSaved: () => void }) {
  const [name, setName] = useState(item.name);
  const [prices, setPrices] = useState<Record<string, string>>({
    price: item.price ?? "",
    price_750ml: item.price_750ml ?? "",
    price_180ml: item.price_180ml ?? "",
    price_90ml: item.price_90ml ?? "",
    price_60ml: item.price_60ml ?? "",
    price_30ml: item.price_30ml ?? "",
  });
  const [saving, setSaving] = useState(false);

  async function handleSave() {
    setSaving(true);
    await fetch(`/api/menu/${item.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, ...prices }),
    });
    setSaving(false);
    onSaved();
  }

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 8, alignItems: "center", padding: "10px 14px", background: "#fafafa" }}>
      <input value={name} onChange={(e) => setName(e.target.value)} style={{ ...inputStyle, flex: 1, minWidth: 140 }} />
      <PriceFields menuType={item.menu_type} values={prices} onChange={(k, v) => setPrices((p) => ({ ...p, [k]: v }))} />
      <button onClick={handleSave} disabled={saving} style={{ ...linkBtnStyle, color: "#0a7d34" }}>
        {saving ? "Saving..." : "Save"}
      </button>
      <button onClick={onCancel} style={linkBtnStyle}>
        Cancel
      </button>
    </div>
  );
}
