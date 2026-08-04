import { redirect } from "next/navigation";
import { isAdminAuthed } from "@/lib/admin-auth";
import AdminDashboard from "./AdminDashboard";

export const metadata = { title: "Menu Admin | Hotel Shiva Inn" };

export default async function AdminPage() {
  if (!(await isAdminAuthed())) {
    redirect("/admin/login");
  }

  return <AdminDashboard />;
}
