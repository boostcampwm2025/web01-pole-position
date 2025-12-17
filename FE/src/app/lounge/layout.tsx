export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        라운지 레이아웃
        {children}
      </body>
    </html>
  );
}
