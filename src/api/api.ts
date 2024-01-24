import axios from "axios";

const api = axios.create({
  baseURL: "/api"
});

export const fetchInvestments = () => api.get("/investments");
export const fetchSettings = () => api.get("/settings");
