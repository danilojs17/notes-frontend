import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Notes, UpdateNote } from "../models/note.type";
import { updateNoteService } from "../services";
import { toast } from "sonner";

export default function useUpdateNote() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["update-note"],
    mutationFn: async (data: UpdateNote): Promise<Notes> => updateNoteService(data),
    onSuccess: () => {
      toast.success("Nota actualizada con éxito.");

      queryClient.invalidateQueries({
        queryKey: ["get-all-notes"],
      });
    },
  });
}
