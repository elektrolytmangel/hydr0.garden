import axios from "axios";

export const backendApi = axios.create({
  baseURL: "https://stylish-action-13d8141cb2.strapiapp.com/api/",
  timeout: 10000,
});
