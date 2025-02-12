"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export function NoteFilter() {
  const [filterValue, setFilterValue] = useState("");
  return (
    <div className="flex gap-2 mt-2">
      <Input
        type="text"
        value={filterValue}
        placeholder="Buscar por..."
        onChange={(e) => setFilterValue(e.target.value)}
      />
      <Button variant="secondary">Buscar</Button>
    </div>
  );
}
