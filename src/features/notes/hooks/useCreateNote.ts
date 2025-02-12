import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CreateNote, Notes } from "../models/note.type";
import { createNoteService } from "../services";
import { toast } from "sonner";

export default function useCreateNote() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["create-note"],
    mutationFn: async (data: CreateNote): Promise<Notes> => createNoteService(data),
    onSuccess: () => {
      toast.success("Nota creada con éxito.");

      queryClient.invalidateQueries({
        queryKey: ["get-all-notes"],
      });
    },
  });
}
