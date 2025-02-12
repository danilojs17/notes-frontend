"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { NoteForm } from "./form/NoteForm";
import { useRouter } from "next/navigation";
import { NoteFormData } from "../hooks";
import useCreateNote from "../hooks/useCreateNote";
import { Loader2 } from "lucide-react";

export function CreateNoteContainer() {
  const { mutateAsync: createNote, isPending: isLoadingCreate } = useCreateNote();
  const router = useRouter();

  const onSubmit = async (data: NoteFormData) => {
    const response = await createNote(data);

    if (response.id) {
      router.push("/");
      return true;
    }

    return false;
  };

  return (
    <Card className="w-full max-w-lg mx-auto p-4 sm:p-6 md:p-8">
      <CardHeader>
        <CardTitle>Crear una nota</CardTitle>
        <CardDescription>Así de facil es llenar una nota, digilencia los siguientes campos.</CardDescription>
      </CardHeader>
      <CardContent>
        <NoteForm handleSubmit={onSubmit} />
      </CardContent>
      <CardFooter className="flex gap-2 justify-end">
        <Button type="button" variant="secondary" onClick={() => router.back()}>
          Cancelar
        </Button>
        <Button form="note-form" type="submit" disabled={isLoadingCreate}>
          {isLoadingCreate ? <Loader2 className="animate-spin" /> : null}
          Guardar
        </Button>
      </CardFooter>
    </Card>
  );
}
