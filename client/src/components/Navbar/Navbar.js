import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div style={{
      display: "flex",
      justifyContent: "space-between",
      padding: "15px 20px",
      background: "#222",
      color: "white"
    }}>

      <h2>AniVerse</h2>

      <div style={{ display: "flex", gap: "20px" }}>

        <Link to="/" style={{ color: "white", textDecoration: "none" }}>
          Explore
        </Link>

        <Link to="/watchlist" style={{ color: "white", textDecoration: "none" }}>
          Watchlist
        </Link>

      </div>

    </div>
  );
}

export default Navbar;