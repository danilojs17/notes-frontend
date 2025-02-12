import { URL_API_NOTES } from "@/constants/url-api.constant";
import { Notes } from "../models/note.type";
import { axiosInstance } from "@/context/axios.interceptor";

export const getAllNotesService = async (filterValue: string): Promise<Notes[]> => {
  return axiosInstance
    .get<Notes[]>(URL_API_NOTES, {
      params: {
        title: filterValue,
      },
    })
    .then((response) => response.data);
};
