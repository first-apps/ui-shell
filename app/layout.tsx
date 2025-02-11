import type { Metadata } from "next";
import "./globals.css";
import { PageContainer } from "@first-apps/shared/components";

export const metadata: Metadata = {
  title: "Shell App",
  description: "Stream shell app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <PageContainer>{children}</PageContainer>
      </body>
    </html>
  );
}
