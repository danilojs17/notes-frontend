import { GET_BY_ID } from "@/app/api/notes/route";
import { NoteNotFound } from "@/features/notes/components/NoteNotFound";
import { UpdateNoteContainer } from "@/features/notes/components/UpdateNoteContainer";

export default async function Page({ params }: Readonly<{ params: Promise<{ id: string }> }>) {
  const noteId = (await params).id;

  const note = await GET_BY_ID(noteId);

  return note ? <UpdateNoteContainer note={note} /> : <NoteNotFound />;
}
