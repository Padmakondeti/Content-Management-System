import { useEffect, useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import api from "../api/axios";

function Dashboard() {
  const [stats, setStats] = useState({
    totalPages: 0,
    publishedPages: 0,
    draftPages: 0,
    recentPages: [],
  });

  useEffect(() => {
    fetchDashboard();
  }, []);

  const fetchDashboard = async () => {
    try {
      const res = await api.get("/dashboard");
      setStats(res.data.stats);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <DashboardLayout>
      <div className="p-6">

        <h1 className="text-3xl font-bold mb-8">
          CMS Dashboard
        </h1>

        {/* Statistics Cards */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="bg-blue-600 text-white rounded-xl p-6 shadow-lg">
            <h2 className="text-lg">Total Pages</h2>
            <p className="text-4xl font-bold mt-3">
              {stats.totalPages}
            </p>
          </div>

          <div className="bg-green-600 text-white rounded-xl p-6 shadow-lg">
            <h2 className="text-lg">Published</h2>
            <p className="text-4xl font-bold mt-3">
              {stats.publishedPages}
            </p>
          </div>

          <div className="bg-yellow-500 text-white rounded-xl p-6 shadow-lg">
            <h2 className="text-lg">Draft</h2>
            <p className="text-4xl font-bold mt-3">
              {stats.draftPages}
            </p>
          </div>

        </div>

        {/* Recent Pages */}

        <div className="mt-10 bg-white rounded-xl shadow-lg p-6">

          <h2 className="text-2xl font-semibold mb-5">
            Recent Pages
          </h2>

          {stats.recentPages.length === 0 ? (
            <p>No pages available.</p>
          ) : (
            <table className="w-full border-collapse">

              <thead>
                <tr className="bg-gray-100">
                  <th className="p-3 text-left">Title</th>
                  <th className="p-3 text-left">Status</th>
                  <th className="p-3 text-left">Updated</th>
                </tr>
              </thead>

              <tbody>

                {stats.recentPages.map((page) => (

                  <tr
                    key={page._id}
                    className="border-b"
                  >
                    <td className="p-3">
                      {page.title}
                    </td>

                    <td className="p-3">
                      <span
                        className={
                          page.status === "published"
                            ? "text-green-600 font-semibold"
                            : "text-yellow-600 font-semibold"
                        }
                      >
                        {page.status}
                      </span>
                    </td>

                    <td className="p-3">
                      {new Date(page.updatedAt).toLocaleDateString()}
                    </td>

                  </tr>

                ))}

              </tbody>

            </table>
          )}

        </div>

      </div>
    </DashboardLayout>
  );
}

export default Dashboard;