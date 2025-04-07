import axios from "axios";

const API_URL = import.meta.env.VITE_BASE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

const banhcafeAPI = axios.create({
  baseURL: API_URL,
});

banhcafeAPI.interceptors.request.use((config) => {
  config.headers = {
    ...config.headers,
    "Strict-Transport-Security": "max-age=63072000; includeSubDomains; preload",
    "X-Frame-Options": "SAMEORIGIN",
    "X-Content-Type-Options": "nosniff",
    "Referrer-Policy": "origin-when-cross-origin",
    "Permissions-Policy":
      "camera=(), microphone=(), geolocation=(), browsing-topics=()",
    "Content-Security-Policy": "default-src 'self' banhcafe.hn *.banhcafe.hn",
    Authorization: `Bearer ${JSON.parse(
      sessionStorage.getItem("banhcafedevjwt")
    )}`,
    apikey: API_KEY,
  };

  return config;
});

export default banhcafeAPI;
