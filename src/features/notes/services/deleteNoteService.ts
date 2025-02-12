import { URL_API_NOTES } from "@/constants/url-api.constant";
import { axiosInstance } from "@/context/axios.interceptor";

export const deleteNoteService = async (id: string): Promise<string> => {
  return axiosInstance
    .delete(`${URL_API_NOTES}/delete`, {
      params: { id },
    })
    .then((response) => response.data);
};
