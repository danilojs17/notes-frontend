import { URL_API_NOTES } from "@/constants/url-api.constant";
import { Notes, UpdateNote } from "../models/note.type";
import { axiosInstance } from "@/context/axios.interceptor";

export const updateNoteService = async (data: UpdateNote): Promise<Notes> => {
  return axiosInstance.put<Notes>(URL_API_NOTES, data).then((response) => response.data);
};
