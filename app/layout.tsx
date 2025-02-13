import type { Metadata } from "next";
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
      <head>
        <link rel="stylesheet" href="/css/core.css" />
      </head>
      <body>
        <PageContainer>{children}</PageContainer>
      </body>
    </html>
  );
}
