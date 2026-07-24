import api from "./api";

const API_URL = "http://localhost:5000/api/settings";


// Get Settings
export const getSettings = async () => {

    const token = localStorage.getItem("token");

    const response = await api.get(API_URL, {
        headers:{
            Authorization:`Bearer ${token}`
        }
    });

    return response.data;
};


// Update Settings
export const updateSettings = async (data) => {

    const token = localStorage.getItem("token");

    const response = await api.put(
        API_URL,
        data,
        {
            headers:{
                Authorization:`Bearer ${token}`
            }
        }
    );

    return response.data;
};