import { FirebaseError } from "firebase/app";
import { deleteDoc, doc } from "firebase/firestore";
import { NextResponse } from "next/server";
import { db } from "../../firestore";

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);

    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ error: "El ID es obligatorio para eliminar" }, { status: 400 });
    }

    const userRef = doc(db, "notes", id);
    await deleteDoc(userRef);

    return NextResponse.json({ message: "Nota eliminada correctamente" }, { status: 200 });
  } catch (error) {
    if (error instanceof FirebaseError) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
  }
}
