import Navbar from "./components/Navbar";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: "#0b0f19", color: "white", margin: 0 }}>

        <Navbar />

        <main style={{ padding: "20px" }}>
          {children}
        </main>

      </body>
    </html>
  );
}