import axios from "axios";
import { VOICEVOX_BASE_URL, RADIKO_BASE_URL } from "../consts";

// デフォルト config の設定
export const radikoClient = axios.create({
  baseURL: RADIKO_BASE_URL,
  responseType: "text",
  timeout: 5000,
  headers: {
    "Content-Type": "application/xml",
  },
});

export const voicevoxQueryClient = axios.create({
  baseURL: VOICEVOX_BASE_URL,
  responseType: "json",
  headers: {
    "Content-Type": "application/json",
  },
});

export const voicevoxSynthesisClient = axios.create({
  baseURL: VOICEVOX_BASE_URL,
  responseType: "blob",
  headers: {
    "Content-Type": "application/json",
  },
});
