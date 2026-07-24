import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";
import RichTextEditor from "../components/RichTextEditor";
import api from "../api/axios";

function CreatePage() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    slug: "",
    content: "",
    status: "draft",
    seoTitle: "",
    seoDescription: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await api.post("/pages", form);

      if (response.data.success) {
        alert("Page Created Successfully");

        navigate("/pages");
      }
    } catch (error) {
      console.error(error);

      alert(
        error.response?.data?.message || "Failed to create page"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <DashboardLayout>
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-8">

        <h1 className="text-3xl font-bold mb-8">
          Create New Page
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >

          {/* Title */}

          <div>
            <label className="block mb-2 font-semibold">
              Page Title
            </label>

            <input
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
              placeholder="Enter page title"
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Slug */}

          <div>
            <label className="block mb-2 font-semibold">
              Slug
            </label>

            <input
              type="text"
              name="slug"
              value={form.slug}
              onChange={handleChange}
              placeholder="about-us"
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* SEO Title */}

          <div>
            <label className="block mb-2 font-semibold">
              SEO Title
            </label>

            <input
              type="text"
              name="seoTitle"
              value={form.seoTitle}
              onChange={handleChange}
              placeholder="SEO Title"
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* SEO Description */}

          <div>
            <label className="block mb-2 font-semibold">
              SEO Description
            </label>

            <textarea
              rows="4"
              name="seoDescription"
              value={form.seoDescription}
              onChange={handleChange}
              placeholder="SEO Description"
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Content */}

          <div>
            <label className="block mb-2 font-semibold">
              Page Content
            </label>

            <RichTextEditor
              value={form.content}
              onChange={(value) =>
                setForm({
                  ...form,
                  content: value,
                })
              }
            />
          </div>

          {/* Status */}

          <div>
            <label className="block mb-2 font-semibold">
              Status
            </label>

            <select
              name="status"
              value={form.status}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="draft">
                Draft
              </option>

              <option value="published">
                Published
              </option>
            </select>
          </div>

          {/* Submit Button */}

          <div className="pt-4">

            <button
              type="submit"
              disabled={loading}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold disabled:bg-gray-400"
            >
              {loading ? "Saving..." : "Save Page"}
            </button>

          </div>

        </form>

      </div>
    </DashboardLayout>
  );
}

export default CreatePage;