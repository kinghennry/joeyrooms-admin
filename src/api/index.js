import axios from "axios";

const API = axios.create({ baseURL: "https://trydemoo.com" });

// log in
export const signIn = (formData) => API.post("/auth/admin/signin", formData);
