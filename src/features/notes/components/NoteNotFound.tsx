"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { useRouter } from "next/navigation";

export function NoteNotFound() {
  const router = useRouter();
  return (
    <Card className="w-full max-w-lg mx-auto p-4 sm:p-6 md:p-8 text-center">
      <CardHeader>
        <CardTitle className="text-lg sm:text-xl">Nota no encontrada</CardTitle>
      </CardHeader>
      <CardContent>
        <Image
          width={400}
          height={400}
          src="/not-found.webp"
          alt="Nota no encontrada"
          className="w-32 h-32 mx-auto mb-4"
        />
        <CardDescription className="text-sm sm:text-base">
          No pudimos encontrar la nota que buscas. Intenta de nuevo o crea una nueva nota.
        </CardDescription>
      </CardContent>
      <CardFooter className="flex justify-center">
        <Button type="button" variant="secondary" onClick={() => router.back()} className="w-full sm:w-auto">
          Volver
        </Button>
      </CardFooter>
    </Card>
  );
}
