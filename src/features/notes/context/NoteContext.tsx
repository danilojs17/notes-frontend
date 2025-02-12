import { createContext, useContext } from "react";
import { initialState, NoteContextState } from "../models/note-context.type";

export const NotesContext = createContext<NoteContextState>(initialState);

export function useNoteContext() {
  const context = useContext(NotesContext);
  if (context === undefined) {
    throw new Error("useNoteContext must be used within a NotesProvider");
  }
  return context;
}
