import { ConfirmationDialog, initialStateConfirmationDialog } from "@/model/confirmation-dialog.type";
import { ActionDispatch } from "react";

export type NoteContextAction = { type: NotesActionReducer.ConfirmationDialog; payload: ConfirmationDialog };

export interface NoteContextState {
  confirmationDialog: ConfirmationDialog;
  dispatch: ActionDispatch<[action: NoteContextAction]>;
}

export const initialState: NoteContextState = {
  confirmationDialog: initialStateConfirmationDialog,
  dispatch: () => {},
};

export enum NotesActionReducer {
  ConfirmationDialog = "CONFIRMATION_DIALOG",
}
