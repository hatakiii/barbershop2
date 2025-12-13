// app/(protected)/admin/layout.tsx
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await currentUser();

  if (user?.publicMetadata.role !== "admin") {
    redirect("/unauthorized");
  }

  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-black text-white p-4">Admin Sidebar</aside>
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
