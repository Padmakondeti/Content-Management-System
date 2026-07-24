import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-slate-900 text-white">

      <div className="text-2xl font-bold p-6 border-b border-slate-700">
        CMS Admin
      </div>

      <nav className="flex flex-col p-4 gap-3">

        <Link
          to="/dashboard"
          className="hover:bg-slate-700 rounded-lg px-4 py-3"
        >
          📊 Dashboard
        </Link>

        <Link
          to="/pages"
          className="hover:bg-slate-700 rounded-lg px-4 py-3"
        >
          📄 Pages
        </Link>

        <Link
          to="/create-page"
          className="hover:bg-slate-700 rounded-lg px-4 py-3"
        >
          ➕ Create Page
        </Link>

        <Link
          to="/upload"
          className="hover:bg-slate-700 rounded-lg px-4 py-3"
        >
          🖼 Upload
        </Link>

      </nav>
    </aside>
  );
}

export default Sidebar;