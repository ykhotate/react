import axios from "axios";
import { BASE_URL } from "../consts";

// デフォルト config の設定
export const radikoClient = axios.create({
  baseURL: BASE_URL,
  responseType: "text",
  timeout: 5000,
  headers: {
    "Content-Type": "application/xml",
  },
});
