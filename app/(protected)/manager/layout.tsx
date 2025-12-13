// app/(protected)/manager/layout.tsx
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function ManagerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await currentUser();

  if (user?.publicMetadata.role !== "manager") {
    redirect("/unauthorized");
  }

  return (
    <div className="flex min-h-screen">
      <aside className="w-56 bg-blue-900 text-white p-4">Manager Panel</aside>
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
