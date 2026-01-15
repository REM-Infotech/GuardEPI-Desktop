import axios from "axios";

const url = new URL(import.meta.env.VITE_API_URL).toString();

export default axios.create({
  baseURL: url,
  withCredentials: true,
  withXSRFToken: true,
  headers: {
    "Content-Type": "application/json",
  },
});
