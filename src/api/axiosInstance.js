import axios from "axios";
import config from "../../config.json";

export const axiosInstance = axios.create({
  baseUrl: `${config.serverUrl}/api`,
  method: "POST",
});

export const authAPI = axios.create({
  baseURL: `${config.serverUrl}/api`,
  method: "POST",
});
