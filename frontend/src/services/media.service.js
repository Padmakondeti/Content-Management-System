import api from "./api";

const API_URL = "http://localhost:5000/api/media";

const getToken = () => {
  return localStorage.getItem("token");
};

// Upload Image
export const uploadMedia = async (file) => {
  const formData = new FormData();
  formData.append("image", file);

  const response = await api.post(
    `${API_URL}/upload`,
    formData,
    {
      headers: {
        Authorization: `Bearer ${getToken()}`
      }
    }
  );

  return response.data;
};

// Get All Images
export const getAllMedia = async () => {
  const response = await api.get(API_URL, {
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  });

  return response.data;
};

// Delete Image
export const deleteMedia = async (id) => {
  const response = await api.delete(`${API_URL}/${id}`, {
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  });

  return response.data;
};