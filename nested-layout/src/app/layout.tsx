export default function RootLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <html lang="en">
        <body>
          <header style={{ backgroundColor: "lightcoral", padding: "10px", textAlign: "center" }}>
            <h1>My Website</h1>
          </header>
          
          <main>{children}</main>
          
          <footer style={{ backgroundColor: "lightblue", padding: "10px", textAlign: "center" }}>
            <p>&copy; 2025 My Website</p>
          </footer>
        </body>
      </html>
    );
  }
  