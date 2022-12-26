import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://blogs-black.vercel.app/",
  headers: {
    Accept: "application/json",
    "Accept-Encoding": "identity"
  }
});
