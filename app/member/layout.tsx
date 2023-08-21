import type { Metadata } from "next";
import { getServerSession } from "@/lib/auth";
import Unauthorized from "@/components/error/unauthorized";

export const metadata: Metadata = {
  title: "個人檔案",
};

type MemberLayoutProps = {
  children: React.ReactNode;
};

export default async function MemberLayout({ children }: MemberLayoutProps) {
  const session = await getServerSession();

  if (!session) {
    return <Unauthorized />;
  }

  return <>{children}</>;
}
