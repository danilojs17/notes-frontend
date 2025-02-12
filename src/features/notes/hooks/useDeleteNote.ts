import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteNoteService } from "../services";
import { toast } from "sonner";

export default function useDeleteNote() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["delete-note"],
    mutationFn: async (id: string): Promise<string> => deleteNoteService(id),
    onSuccess: () => {
      toast.success("Nota eliminada con éxito.");

      queryClient.invalidateQueries({
        queryKey: ["get-all-notes"],
      });
    },
  });
}
