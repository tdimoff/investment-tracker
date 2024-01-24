import axios from "axios";
import { IUser } from "../interfaces/IUser.interface";
import { IInvestmentItem } from "../interfaces/IInvestment.interface";

const api = axios.create({
  baseURL: "/api",
});

export const fetchInvestments = () => api.get("/investments");
export const fetchSettings = () => api.get("/settings");
export const fetchUser = () => api.get("/settings");
export const updateUser = (user: IUser) => api.put("/settings", user);
export const closeInvestment = (investment: IInvestmentItem) =>
  api.put(`/investments/${investment.id}/close`, investment);
