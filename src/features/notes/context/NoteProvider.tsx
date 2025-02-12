"use client";

import { ReactNode, useReducer } from "react";
import { NotesContext } from "./NoteContext";
import { initialState } from "../models/note-context.type";
import useNoteReducer from "./note-reducer";

export default function NoteProvider({ children }: Readonly<{ children: ReactNode }>) {
  const [state, dispatch] = useReducer(useNoteReducer, initialState);

  return <NotesContext.Provider value={{ ...state, dispatch }}>{children}</NotesContext.Provider>;
}
