import { useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import api from "../api/axios";

function UploadImage() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState("");
  const [uploadedImage, setUploadedImage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];

    if (!selectedFile) return;

    setFile(selectedFile);
    setPreview(URL.createObjectURL(selectedFile));
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Please select an image.");
      return;
    }

    const formData = new FormData();
    formData.append("image", file);

    try {
      setLoading(true);

      const response = await api.post("/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.data.success) {
        setUploadedImage(
          `http://localhost:5000${response.data.imageUrl}`
        );

        alert("Image uploaded successfully!");

        setFile(null);
      }
    } catch (error) {
      console.error(error);

      alert(
        error.response?.data?.message ||
          "Image upload failed."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <DashboardLayout>
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-xl p-8">

        <h1 className="text-3xl font-bold mb-8">
          Upload Image
        </h1>

        <div className="space-y-6">

          <div>
            <label className="block font-semibold mb-2">
              Select Image
            </label>

            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="block w-full border rounded-lg p-3"
            />
          </div>

          {preview && (
            <div>
              <h3 className="font-semibold mb-3">
                Image Preview
              </h3>

              <img
                src={preview}
                alt="Preview"
                className="w-72 rounded-lg border shadow"
              />
            </div>
          )}

          <button
            onClick={handleUpload}
            disabled={loading}
            className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white px-8 py-3 rounded-lg font-semibold"
          >
            {loading ? "Uploading..." : "Upload Image"}
          </button>

          {uploadedImage && (
            <div className="mt-8">

              <h3 className="text-xl font-semibold mb-3">
                Uploaded Image
              </h3>

              <img
                src={uploadedImage}
                alt="Uploaded"
                className="w-72 rounded-lg border shadow"
              />

              <div className="mt-4">
                <label className="block font-semibold mb-2">
                  Image URL
                </label>

                <input
                  type="text"
                  readOnly
                  value={uploadedImage}
                  className="w-full border rounded-lg px-4 py-2 bg-gray-100"
                />
              </div>

            </div>
          )}

        </div>

      </div>
    </DashboardLayout>
  );
}

export default UploadImage;