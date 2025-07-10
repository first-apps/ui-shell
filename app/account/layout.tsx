export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="twcssflex flex-row">
      <h1>Account Pages</h1>
      {children}
    </div>
  );
}
