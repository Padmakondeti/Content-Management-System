import { toast } from "react-toastify";
import { useEffect, useState } from "react";

import {
  uploadMedia,
  getAllMedia,
  deleteMedia,
} from "../services/media.service";

function Media() {
  const [file, setFile] = useState(null);
  const [media, setMedia] = useState([]);
  const [message, setMessage] = useState("");

  const loadMedia = async () => {
    try {
      const result = await getAllMedia();
      setMedia(result.media);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadMedia();
  }, []);

  const handleUpload = async () => {
    if (!file) {
      setMessage("Please select an image.");
      return;
    }

    try {
      await uploadMedia(file);

      toast.success("Image uploaded successfully!");

      setFile(null);

      document.getElementById("imageInput").value = "";

      loadMedia();

    } catch (error) {

      toast.error("Image upload failed!");
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this image?")) {
      return;
    }

    try {
      await deleteMedia(id);

      loadMedia();

    } catch (error) {

      console.error(error);

    }
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>Media Library</h1>

      <input
        id="imageInput"
        type="file"
        accept="image/*"
        onChange={(e) => setFile(e.target.files[0])}
      />

      <button
        onClick={handleUpload}
        style={{
          marginLeft: "10px",
        }}
      >
        Upload
      </button>

      <p>{message}</p>

      <hr />

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fill, minmax(220px,1fr))",
          gap: "20px",
        }}
      >
        {media.map((item) => (
          <div
            key={item._id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "10px",
            }}
          >
            <img
              src={`http://localhost:5000${item.url}`}
              alt={item.filename}
              style={{
                width: "100%",
                height: "180px",
                objectFit: "cover",
              }}
            />

            <h4>{item.filename}</h4>

            <p>{(item.size / 1024).toFixed(2)} KB</p>

            <button
              onClick={() =>
                handleDelete(item._id)
              }
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Media;