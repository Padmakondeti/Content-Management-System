import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div
      style={{
        width: "220px",
        background: "#1f2937",
        color: "#fff",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <h2>CMS Admin</h2>

      <hr />

      <p>
        <Link
          to="/"
          style={{ color: "#fff", textDecoration: "none" }}
        >
          Dashboard
        </Link>
      </p>

      <p>
        <Link
          to="/settings"
          style={{ color: "#fff", textDecoration: "none" }}
        >
          Settings
        </Link>
      </p>

      <p>
        <Link
          to="/media"
          style={{ color: "#fff", textDecoration: "none" }}
        >
          Media
        </Link>
      </p>
      <p>
        <Link
            to="/pages"
            style={{
            color: "#fff",
            textDecoration: "none",
        }}
        >
            Pages
        </Link>
    </p>
    </div>
  );
}

export default Sidebar;