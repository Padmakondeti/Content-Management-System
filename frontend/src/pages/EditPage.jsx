import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import RichTextEditor from "../components/editor/RichTextEditor";

import {
  getPage,
  updatePage,
} from "../services/page.service";

function EditPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    content: "",
    metaTitle: "",
    metaDescription: "",
    status: "Draft",
  });

  useEffect(() => {
    loadPage();
  }, []);

  const loadPage = async () => {
    try {
      const result = await getPage(id);

      setFormData(result.page);
    } catch (error) {
      console.error(error);
    }
  };

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
      await updatePage(id, formData);

      toast.success("Page updated successfully!");

      navigate("/pages");

    } catch (error) {

      toast.error(
        error.response?.data?.message ||
        "Update failed"
      );

    }
  };

  return (
    <div>

      <h1>Edit Page</h1>

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
          rows="3"
          name="metaDescription"
          value={formData.metaDescription}
          onChange={handleChange}
        />

        <p>Status</p>

        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
        >
          <option value="Draft">
            Draft
          </option>

          <option value="Published">
            Published
          </option>

        </select>

        <br />
        <br />

        <button type="submit">
          Update Page
        </button>

      </form>

    </div>
  );
}

export default EditPage;