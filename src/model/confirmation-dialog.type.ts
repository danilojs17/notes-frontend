export interface ConfirmationDialog {
  open: boolean;
  title: string;
  message: string;
  onConfirm: () => void;
}

export const initialStateConfirmationDialog = {
  open: false,
  title: "",
  message: "",
  onConfirm: () => {},
};
