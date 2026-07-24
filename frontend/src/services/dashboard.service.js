import api from "./api";

const API_URL = "http://localhost:5000/api/dashboard";

const getToken = () => localStorage.getItem("token");

export const getDashboardStats = async () => {
  const response = await api.get(API_URL, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });

  return response.data;
};