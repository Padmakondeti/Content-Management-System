import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";
import api from "../api/axios";

function Pages() {
  const [pages, setPages] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchPages();
  }, []);

  const fetchPages = async () => {
    try {
      const res = await api.get("/pages");
      setPages(res.data.pages);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this page?"
    );

    if (!confirmDelete) return;

    try {
      await api.delete(`/pages/${id}`);

      alert("Page deleted successfully");

      fetchPages();
    } catch (error) {
      console.error(error);
      alert("Failed to delete page");
    }
  };

  const filteredPages = pages.filter((page) =>
    page.title.toLowerCase().includes(search.toLowerCase()) ||
    page.slug.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <DashboardLayout>
      <div className="p-6">

        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">
            Pages
          </h1>

          <Link
            to="/create-page"
            className="bg-blue-600 text-white px-5 py-2 rounded-lg"
          >
            + Create Page
          </Link>
        </div>

        <input
          type="text"
          placeholder="Search pages..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border rounded-lg px-4 py-3 mb-6"
        />

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">

          <table className="w-full">

            <thead className="bg-gray-100">

              <tr>
                <th className="p-4 text-left">Title</th>
                <th className="p-4 text-left">Slug</th>
                <th className="p-4 text-left">Status</th>
                <th className="p-4 text-left">Updated</th>
                <th className="p-4 text-center">Actions</th>
              </tr>

            </thead>

            <tbody>

              {filteredPages.map((page) => (

                <tr
                  key={page._id}
                  className="border-b hover:bg-gray-50"
                >
                  <td className="p-4">
                    {page.title}
                  </td>

                  <td className="p-4">
                    {page.slug}
                  </td>

                  <td className="p-4">

                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        page.status === "published"
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {page.status}
                    </span>

                  </td>

                  <td className="p-4">
                    {new Date(page.updatedAt).toLocaleDateString()}
                  </td>

                  <td className="p-4 text-center">

                    <Link
                      to={`/edit-page/${page._id}`}
                      className="bg-blue-600 text-white px-3 py-2 rounded mr-2"
                    >
                      Edit
                    </Link>

                    <button
                      onClick={() => handleDelete(page._id)}
                      className="bg-red-600 text-white px-3 py-2 rounded"
                    >
                      Delete
                    </button>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>
    </DashboardLayout>
  );
}

export default Pages;