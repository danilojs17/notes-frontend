"use client";

import Link from "next/link";

export function Navbar() {
  return (
    <header className="max-w-4xl mx-auto p-6 pb-2 sticky top-0 z-50 backdrop-blur-md flex justify-between">
      <Link href="/">
        <h1 className="text-4xl font-bold mb-4 text-primary">NOTAS</h1>
        <div className="h-1 w-32 bg-primary rounded-full"></div>
      </Link>
    </header>
  );
}
