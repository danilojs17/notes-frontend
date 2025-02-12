import { useQuery } from "@tanstack/react-query";
import { Notes } from "../models/note.type";
import { getAllNotesService } from "../services";

export default function useGetAllNotes(filterValue: string) {
  return useQuery({
    queryKey: ["get-all-notes", filterValue],
    queryFn: async (): Promise<Notes[]> => getAllNotesService(filterValue),
  });
}
