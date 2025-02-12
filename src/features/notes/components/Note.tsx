"use client";
import { Calendar, Clock, Pencil, Trash2 } from "lucide-react";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Notes } from "../models/note.type";
import { useRouter } from "next/navigation";
import dayjs from "dayjs";
import "dayjs/locale/es";

dayjs.locale("es");

type NoteProps = Notes & {
  deleteNote: (id: string) => void;
};

export function Note({ content, createdAt, title, updatedAt, id, deleteNote }: Readonly<NoteProps>) {
  const router = useRouter();

  return (
    <Card className="border border-border bg-card">
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className="text-2xl font-semibold text-primary">{title}</CardTitle>
          <div className="flex gap-2">
            <Button variant="ghost" size="icon" onClick={() => router.push(`/notes/edit/${id}`)}>
              <Pencil className="w-4 h-4 text-primary" />
            </Button>
            <Button variant="ghost" size="icon" onClick={() => deleteNote(id)}>
              <Trash2 className="w-4 h-4 text-destructive" />
            </Button>
          </div>
        </div>
        <CardDescription className="text-muted-foreground">{content}</CardDescription>
      </CardHeader>
      <CardFooter className="flex flex-col items-start gap-2 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4" />
          <span>Creación: {dayjs(createdAt).format("MMMM D, YYYY")}</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4" />
          <span>Actualización: {updatedAt ? dayjs(updatedAt).format("MMMM D, YYYY") : "Sin fecha actualización"}</span>
        </div>
      </CardFooter>
    </Card>
  );
}
