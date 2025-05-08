import axios from "axios";

const BASE_URL =
  import.meta.env.MODE === "development"
    ? "http://localhost:5001/api"
    : "/api/"; // Replace with your production URL

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});
