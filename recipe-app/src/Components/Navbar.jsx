import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav
      style={{
        padding: "10px 20px",
        borderBottom: "1px solid #ccc",
        marginBottom: "20px",
      }}
    >
      <Link to="/" style={{ marginRight: "20px" }}>Home</Link>
      <Link to="/recipes">Recipes</Link>
    </nav>
  );
}