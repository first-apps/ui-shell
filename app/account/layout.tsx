export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <h1>Account Pages</h1>
      {children}
    </div>
  );
}
