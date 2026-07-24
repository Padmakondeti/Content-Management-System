import api from "./api";

const API_URL = "http://localhost:5000/api/pages";

// Get JWT Token
const getToken = () => {
  return localStorage.getItem("token");
};

// Common Authorization Header
const authHeader = () => ({
  headers: {
    Authorization: `Bearer ${getToken()}`,
  },
});

// Get All Pages (with Search & Pagination)
export const getPages = async (
  page = 1,
  limit = 5,
  search = ""
) => {
  const response = await api.get(
    `${API_URL}?page=${page}&limit=${limit}&search=${encodeURIComponent(search)}`,
    authHeader()
  );

  return response.data;
};

// Get Single Page
export const getPage = async (id) => {
  const response = await api.get(
    `${API_URL}/${id}`,
    authHeader()
  );

  return response.data;
};

// Create Page
export const createPage = async (pageData) => {
  const response = await api.post(
    API_URL,
    pageData,
    authHeader()
  );

  return response.data;
};

// Update Page
export const updatePage = async (id, pageData) => {
  const response = await api.put(
    `${API_URL}/${id}`,
    pageData,
    authHeader()
  );

  return response.data;
};

// Delete Page
export const deletePage = async (id) => {
  const response = await api.delete(
    `${API_URL}/${id}`,
    authHeader()
  );

  return response.data;
};