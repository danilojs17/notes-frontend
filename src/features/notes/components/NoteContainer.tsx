"use client";

import dayjs from "dayjs";
import { Note } from "./Note";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import useGetAllNotes from "../hooks/useGetAllNotes";
import { SkeletonNote } from "./SkeletonNote";
import { ConfirmationDialog } from "@/components/confirmation-dialog/ConfirmationDialog";
import { useNoteContext } from "../context/NoteContext";
import { NotesActionReducer } from "../models/note-context.type";
import { initialStateConfirmationDialog } from "@/model/confirmation-dialog.type";
import useDeleteNote from "../hooks/useDeleteNote";
import { Input } from "@/components/ui/input";
import { useState } from "react";

dayjs.locale("es");

const loadingNotes = ["note-1", "note-2", "note-3"];

export function NoteContainer() {
  const { confirmationDialog, dispatch } = useNoteContext();
  const { mutateAsync: deleteNote, isPending: isLoading } = useDeleteNote();
  const router = useRouter();
  const [filterValue, setFilterValue] = useState("");
  const { data: notes = [], isFetching: isLoadingNotes } = useGetAllNotes(filterValue);

  const onClose = () => {
    dispatch({ type: NotesActionReducer.ConfirmationDialog, payload: initialStateConfirmationDialog });
  };

  const handleDelete = async (id: string) => {
    const response = await deleteNote(id);

    if (response) onClose();
  };

  const handleDeleteNote = (id: string) => {
    dispatch({
      type: NotesActionReducer.ConfirmationDialog,
      payload: {
        message: "¿Estás seguro que deseas eliminar la nota?",
        title: "Eliminar nota",
        onConfirm: async () => await handleDelete(id),
        open: true,
      },
    });
  };

  return (
    <div className="p-8">
      <div className="max-w-4xl mx-auto flex flex-col gap-2">
        <div
          className="flex w-full flex-row-reverse
         justify-end"
        >
          <Button onClick={() => router.push("/notes/new")}>
            <Plus className="w-4 h-4 mr-2" />
            Nueva Nota
          </Button>
        </div>
        <div className="flex gap-2 mt-2">
          <Input
            type="text"
            value={filterValue}
            placeholder="Buscar por..."
            onChange={(e) => setFilterValue(e.target.value)}
          />
        </div>
        <SkeletonNote />
        {isLoadingNotes && loadingNotes.map((loadingNote) => <SkeletonNote key={loadingNote} />)}
        {!isLoadingNotes && notes.map((note) => <Note key={note.id} {...note} deleteNote={handleDeleteNote} />)}
      </div>
      <ConfirmationDialog {...confirmationDialog} isLoading={isLoading} onClose={onClose} />
    </div>
  );
}
