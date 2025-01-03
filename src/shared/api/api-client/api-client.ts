import axios, { AxiosInstance, InternalAxiosRequestConfig } from "axios";

const BASE_URL = import.meta.env.VITE_API_URL;
const TOKEN = import.meta.env.VITE_TOKEN;

export const apiClient: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    if (TOKEN) {
      console.log("url", BASE_URL);
      config.headers.Authorization = `Bearer ${TOKEN}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      if (error.response.status === 401) {
        console.error("Unauthorized! Redirecting to login...");
      }
      if (error.response.status === 403) {
        console.error("Forbidden! Access denied.");
      }
    } else if (error.request) {
      console.error("No response received from server.");
    } else {
      console.error("Error during request setup:", error.message);
    }
    return Promise.reject(error);
  },
);
