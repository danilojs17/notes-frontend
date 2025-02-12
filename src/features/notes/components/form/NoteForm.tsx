"use client";

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { NoteFormData, useNoteForm } from "../../hooks";
import { Notes } from "../../models/note.type";
import { useEffect } from "react";

interface NoteFormProps {
  handleSubmit: (data: NoteFormData) => Promise<boolean>;
  note?: Notes;
}

export function NoteForm({ handleSubmit, note }: Readonly<NoteFormProps>) {
  const form = useNoteForm();

  const onSubmit = async (data: NoteFormData) => {
    const response = await handleSubmit(data);

    if (response) {
      form.reset();
    }
  };

  useEffect(() => {
    if (note) {
      form.reset({ content: note.content, title: note.title });
    } else {
      form.reset();
    }
  }, [note]);

  return (
    <Form {...form}>
      <form id="note-form" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-semibold">Título</FormLabel>
              <FormControl>
                <Input placeholder="Ingresa el título de la nota" {...field} />
              </FormControl>
              <FormMessage className="text-red-400" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-semibold">Descripción</FormLabel>
              <FormControl>
                <Textarea placeholder="Escribe el contenido de tu nota" {...field} />
              </FormControl>
              <FormMessage className="text-red-400" />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
