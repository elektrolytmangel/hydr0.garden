import axios from "axios";

export const backendApi = axios.create({
  baseURL: import.meta.env.VITE_APP_BACKEND_URL + "/api/",
  timeout: 15000,
});
