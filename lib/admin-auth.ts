import { cookies } from "next/headers";
import crypto from "crypto";

const COOKIE_NAME = "shivainn_admin";

// Simple signed-token approach: no session DB needed. The cookie value is
// itself an HMAC of a fixed string using your admin password's hash as the
// key, so it can't be forged without knowing ADMIN_PASSWORD.
function getToken(): string {
  const secret = process.env.ADMIN_PASSWORD!;
  if (!secret) {
    throw new Error("Missing ADMIN_PASSWORD environment variable");
  }
  return crypto.createHmac("sha256", secret).update("shivainn-admin-ok").digest("hex");
}

export async function setAdminCookie() {
  const store = await cookies();
  store.set(COOKIE_NAME, getToken(), {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7, // 7 days
  });
}

export async function clearAdminCookie() {
  const store = await cookies();
  store.delete(COOKIE_NAME);
}

export async function isAdminAuthed(): Promise<boolean> {
  const store = await cookies();
  const value = store.get(COOKIE_NAME)?.value;
  if (!value) return false;
  return value === getToken();
}

export { COOKIE_NAME };
