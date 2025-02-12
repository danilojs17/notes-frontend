import { NextResponse } from "next/server";
import { addDoc, collection, doc, getDoc, getDocs, updateDoc } from "firebase/firestore";
import { db } from "../firestore";
import { FirebaseError } from "firebase/app";
import { CreateNote, Notes } from "@/features/notes/models/note.type";
import { object, string } from "zod";
import dayjs from "dayjs";

const noteSchema = object({
  title: string().min(1, "El título es requerido."),
  content: string().min(1, "El contenido es requerido."),
});

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const title = searchParams.get("title") ?? "";

    const querySnapshot = await getDocs(collection(db, "notes"));
    const notesDoc = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })) as Notes[];

    const notes = notesDoc.filter((note) => note.title.includes(title));

    return NextResponse.json(notes, { status: 200 });
  } catch (error) {
    if (error instanceof FirebaseError) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
  }
}

export async function GET_BY_ID(id: string): Promise<Notes | undefined> {
  const noteRef = doc(db, "notes", id);
  const note = await getDoc(noteRef);

  if (!note.exists()) {
    return;
  }

  return { id: note.id, ...note.data() } as Notes;
}

export async function POST(request: Request) {
  try {
    const body: CreateNote = await request.json();

    const parsedBody = noteSchema.safeParse(body);

    if (!parsedBody.success) {
      return NextResponse.json({ error: parsedBody.error.format() }, { status: 400 });
    }

    const docRef = await addDoc(collection(db, "notes"), { ...body, createdAt: dayjs().format("YYYY-MM-DD") });

    return NextResponse.json({ id: docRef.id, ...body }, { status: 201 });
  } catch (error) {
    if (error instanceof FirebaseError) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
  }
}

export async function PUT(request: Request) {
  try {
    const body = await request.json();
    const { id, ...updateData } = body;

    if (!id) {
      return NextResponse.json({ error: "El ID es obligatorio para actualizar" }, { status: 400 });
    }

    const parsedBody = noteSchema.partial().safeParse(updateData);
    if (!parsedBody.success) {
      return NextResponse.json({ error: parsedBody.error.format() }, { status: 400 });
    }

    const noteRef = doc(db, "notes", id);
    await updateDoc(noteRef, { ...parsedBody.data, updatedAt: dayjs().format("YYYY-MM-DD") });

    return NextResponse.json({ id, ...parsedBody.data }, { status: 200 });
  } catch (error) {
    if (error instanceof FirebaseError) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
  }
}
