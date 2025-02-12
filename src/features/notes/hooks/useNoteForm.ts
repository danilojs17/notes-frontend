import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { object, string } from "zod";

const noteSchema = object({
  title: string().min(1, "El título es requerido."),
  content: string().min(1, "El contenido es requerido."),
});

export type NoteFormData = Zod.infer<typeof noteSchema>;

export function useNoteForm() {
  return useForm<NoteFormData>({
    resolver: zodResolver(noteSchema),
    defaultValues: {
      content: "",
      title: "",
    },
  });
}
