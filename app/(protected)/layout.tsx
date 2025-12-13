import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth(); // <- await is required
  const userId = session.userId;

  if (!userId) {
    redirect("/sign-in");
  }

  return <>{children}</>;
}
