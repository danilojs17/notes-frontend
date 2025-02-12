import { db } from "@/app/api/firestore";
import { NoteNotFound } from "@/features/notes/components/NoteNotFound";
import { UpdateNoteContainer } from "@/features/notes/components/UpdateNoteContainer";
import { Notes } from "@/features/notes/models/note.type";
import { doc, getDoc } from "firebase/firestore";

 async function getById(id: string): Promise<Notes | undefined> {
  const noteRef = doc(db, "notes", id);
  const note = await getDoc(noteRef);

  if (!note.exists()) {
    return;
  }

  return { id: note.id, ...note.data() } as Notes;
}

export default async function Page({ params }: Readonly<{ params: Promise<{ id: string }> }>) {
  const noteId = (await params).id;

  const note = await getById(noteId);

  return note ? <UpdateNoteContainer note={note} /> : <NoteNotFound />;
}
