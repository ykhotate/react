import { InternalAxiosRequestConfig } from "axios";
import { radikoClient } from "./client";
// import { useNavigate } from 'react-router-dom'

const useInterceptor = () => {
  // 関数コンポーネントなのでフックが使える
  //  const navigate = useNavigate()

  // リクエスト インターセプター
  radikoClient.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      if (config.headers !== undefined) {
        // const accessToken = getAccessToken()
        // if (accessToken) {
        //   config.headers.Authorization = `Bearer ${accessToken}`
        // }
      }
      return config;
    }
  );

  // レスポンス インターセプター
  radikoClient.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      switch (error.response?.status) {
        case 401:
          // なにかする
          break;
        default:
          break;
      }
      return Promise.reject(error);
    }
  );
};
export default useInterceptor;
