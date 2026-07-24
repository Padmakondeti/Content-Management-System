import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";
import api from "../api/axios";

function EditPage() {
  const { id } = useParams();

  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    slug: "",
    content: "",
    status: "",
    seoTitle: "",
    seoDescription: "",
  });

  useEffect(() => {
    loadPage();
  }, []);

  const loadPage = async () => {
    try {
      const res = await api.get("/pages");

      const page = res.data.pages.find((p) => p._id === id);

      if (!page) {
        alert("Page not found");
        navigate("/pages");
        return;
      }

      setForm(page);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const updatePage = async (e) => {
    e.preventDefault();

    try {
      await api.put(`/pages/${id}`, form);

      alert("Page updated successfully");

      navigate("/pages");
    } catch (error) {
      alert(error.response?.data?.message || "Update failed");
    }
  };

  return (
    <DashboardLayout>
      <h2>Edit Page</h2>

      <form onSubmit={updatePage}>

        <input
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Title"
        />

        <br /><br />

        <input
          name="slug"
          value={form.slug}
          onChange={handleChange}
          placeholder="Slug"
        />

        <br /><br />

        <textarea
          rows="8"
          name="content"
          value={form.content}
          onChange={handleChange}
        />

        <br /><br />

        <select
          name="status"
          value={form.status}
          onChange={handleChange}
        >
          <option value="draft">Draft</option>
          <option value="published">Published</option>
        </select>

        <br /><br />

        <input
          name="seoTitle"
          value={form.seoTitle}
          onChange={handleChange}
          placeholder="SEO Title"
        />

        <br /><br />

        <textarea
          rows="3"
          name="seoDescription"
          value={form.seoDescription}
          onChange={handleChange}
        />

        <br /><br />

        <button type="submit">
          Update Page
        </button>

      </form>
    </DashboardLayout>
  );
}

export default EditPage;