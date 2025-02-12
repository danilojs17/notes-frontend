"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { NoteForm } from "./form/NoteForm";
import { useRouter } from "next/navigation";
import { NoteFormData } from "../hooks";
import { Notes } from "../models/note.type";
import useUpdateNote from "../hooks/useUpdateNote";
import { Loader2 } from "lucide-react";

interface UpdateNoteContainerProps {
  note: Notes;
}

export function UpdateNoteContainer({ note }: Readonly<UpdateNoteContainerProps>) {
  const { mutateAsync: updateNote, isPending: isLoadingUpdate } = useUpdateNote();
  const router = useRouter();

  const onSubmit = async (data: NoteFormData) => {
    if (!note) return false;

    const response = await updateNote({ ...data, id: note.id });

    if (response.id) {
      router.push("/");
      return true;
    }

    return false;
  };

  return (
    <Card className="w-full max-w-lg mx-auto p-4 sm:p-6 md:p-8">
      <CardHeader>
        <CardTitle>Actualizar una nota</CardTitle>
        <CardDescription>Diligencia los siguientes campor para actualizar tu nota.</CardDescription>
      </CardHeader>
      <CardContent>
        <NoteForm handleSubmit={onSubmit} note={note} />
      </CardContent>
      <CardFooter className="flex gap-2 justify-end">
        <Button type="button" variant="secondary" onClick={() => router.back()}>
          Cancelar
        </Button>
        <Button form="note-form" type="submit" disabled={isLoadingUpdate}>
          {isLoadingUpdate ? <Loader2 className="animate-spin" /> : null}
          Guardar
        </Button>
      </CardFooter>
    </Card>
  );
}
