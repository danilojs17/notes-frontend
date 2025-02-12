import { NoteForm } from "./NoteForm";

export function NoteFormContainer() {
  return (
    <div className="p-8">
      <div className="max-w-4xl mx-auto flex flex-col gap-2">
        <NoteForm />
      </div>
    </div>
  );
}
