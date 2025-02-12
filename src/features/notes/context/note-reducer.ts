import { NoteContextAction, NoteContextState, NotesActionReducer } from "../models/note-context.type";
import { ConfirmationDialog } from "@/model/confirmation-dialog.type";

const actionHandlers: Record<
  NotesActionReducer,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (state: NoteContextState, payload: any) => NoteContextState
> = {
  [NotesActionReducer.ConfirmationDialog]: (
    state: NoteContextState,
    payload: ConfirmationDialog
  ): NoteContextState => ({
    ...state,
    confirmationDialog: payload,
  }),
};

export default function useNoteReducer(state: NoteContextState, action: NoteContextAction) {
  const { payload, type } = action;
  const handler = actionHandlers[type];

  return handler ? handler(state, payload) : state;
}
