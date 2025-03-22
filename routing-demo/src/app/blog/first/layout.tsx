export const metadata = {
    title:"blogs",
    description: 'Generated by Next.js',
}

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <html lang="en">
        <body>
          <header style={{ backgroundColor: "red", padding: "10px", textAlign: "center" }}>
            header
          </header>
          {children}
          <footer style={{ backgroundColor: "yellow", padding: "10px", textAlign: "center"}}>
            footer
          </footer>
        </body>
      </html>
    );
  }
  