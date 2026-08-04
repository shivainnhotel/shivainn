"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    setLoading(false);

    if (res.ok) {
      router.push("/admin");
      router.refresh();
    } else {
      setError("Wrong password");
    }
  }

  return (
    <main style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#111" }}>
      <form
        onSubmit={handleSubmit}
        style={{ background: "#fff", padding: 32, borderRadius: 12, width: 320, display: "flex", flexDirection: "column", gap: 12 }}
      >
        <h1 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8 }}>Shiva Inn Menu Admin</h1>
        <input
          type="password"
          placeholder="Admin password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ padding: "10px 12px", border: "1px solid #ccc", borderRadius: 8 }}
          autoFocus
        />
        {error && <p style={{ color: "crimson", fontSize: 13 }}>{error}</p>}
        <button
          type="submit"
          disabled={loading}
          style={{ padding: "10px 12px", background: "#111", color: "#fff", borderRadius: 8, fontWeight: 600 }}
        >
          {loading ? "Checking..." : "Log in"}
        </button>
      </form>
    </main>
  );
}
