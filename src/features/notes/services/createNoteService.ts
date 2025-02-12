import { URL_API_NOTES } from "@/constants/url-api.constant";
import { CreateNote, Notes } from "../models/note.type";
import { axiosInstance } from "@/context/axios.interceptor";

export const createNoteService = async (data: CreateNote): Promise<Notes> => {
  return axiosInstance.post<Notes>(URL_API_NOTES, data).then((response) => response.data);
};
