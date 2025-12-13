// app/(protected)/staff/layout.tsx
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function StaffLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await currentUser();

  if (user?.publicMetadata.role !== "staff") {
    redirect("/unauthorized");
  }

  return (
    <div className="flex min-h-screen">
      <aside className="w-56 bg-green-700 text-white p-4">
        Barber Workspace
      </aside>
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
