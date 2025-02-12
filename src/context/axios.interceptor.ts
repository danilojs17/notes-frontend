import axios from "axios";
import { toast } from "sonner";

const createAxiosInterceptor = () => {
  const instance = axios.create();

  instance.interceptors.response.use(
    (response) => response,
    (error) => {
      toast.error(error.response?.data?.message ?? "");

      return Promise.reject(error);
    }
  );

  return instance;
};

export const axiosInstance = createAxiosInterceptor();
