import axios from "axios";
const baseURL = import.meta.env.VITE_BASE_URL;

export const Api = axios.create({ baseURL });

Api.interceptors.request.use((config) => {
  if (!config) {
      config = {};
  }
  if (!config.headers) {
      config.headers = {};
  }
  config.headers.Authorization= `Bearer ${localStorage.getItem('token')}`;
  return config;
});
