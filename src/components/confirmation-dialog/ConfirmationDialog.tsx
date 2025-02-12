import { Loader2 } from "lucide-react";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";

interface ConfirmationDialogProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  message: string;
  isLoading?: boolean;
}

export function ConfirmationDialog({
  open,
  title,
  message,
  onClose,
  onConfirm,
  isLoading = false,
}: Readonly<ConfirmationDialogProps>) {
  return (
    <Dialog onOpenChange={onClose} open={open}>
      <DialogContent onEscapeKeyDown={(e) => e.preventDefault()} className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <div>{message}</div>
        <div className="flex justify-end space-x-4">
          <Button variant="outline" onClick={onClose} disabled={isLoading}>
            Cancelar
          </Button>
          <Button onClick={onConfirm} disabled={isLoading}>
            {isLoading ? <Loader2 className="animate-spin" /> : null}
            Aceptar
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
