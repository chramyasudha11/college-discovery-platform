import Link from "next/link";

export default function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        gap: "40px",
        padding: "16px",
        backgroundColor: "black",
      }}
    >
      <Link href="/" style={{ color: "white", textDecoration: "none" }}>
        Home
      </Link>

      <Link href="/compare" style={{ color: "white", textDecoration: "none" }}>
        Compare
      </Link>

      <Link href="/predictor" style={{ color: "white", textDecoration: "none" }}>
        Predict
      </Link>

      <Link href="/discussion" style={{ color: "white", textDecoration: "none" }}>
        Discussion
      </Link>
    </nav>
  );
}