import { toast } from "react-toastify";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createPage } from "../services/page.service";
import RichTextEditor from "../components/editor/RichTextEditor";

function CreatePage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    content: "",
    metaTitle: "",
    metaDescription: "",
    status: "Draft",
  });

  const generateSlug = (text) => {
  return text
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-");
  };

  const handleChange = (e) => {
  const { name, value } = e.target;

  if (name === "title") {
    setFormData({
      ...formData,
      title: value,
      slug: generateSlug(value),
    });
  } else {
    setFormData({
      ...formData,
      [name]: value,
    });
  }
 };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createPage(formData);
      toast.success("Page created successfully!");
      navigate("/pages");
    } catch (error) {
      toast.error(error.response?.data?.message || "Error creating page");
    }
  };

  return (
    <div>
      <h1>Create New Page</h1>

      <form onSubmit={handleSubmit}>
        <p>Title</p>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />

        <p>Slug</p>
        <input
          type="text"
          name="slug"
          value={formData.slug}
          onChange={handleChange}
        />

        <p>Content</p>
        <RichTextEditor
            value={formData.content}
            onChange={(value) =>
                setFormData({
                ...formData,
                content: value,
                })
            }
        />

        <p>Meta Title</p>
        <input
          type="text"
          name="metaTitle"
          value={formData.metaTitle}
          onChange={handleChange}
        />

        <p>Meta Description</p>

        <textarea
            name="metaDescription"
            rows="4"
            value={formData.metaDescription}
            onChange={handleChange}
        />

        <p>Status</p>

        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
        >
          <option value="Draft">Draft</option>
          <option value="Published">Published</option>
        </select>

        <br />
        <br />

        <button type="submit">
          Save Page
        </button>
      </form>
    </div>
  );
}

export default CreatePage;