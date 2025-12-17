"use client";

import Link from "next/link";
import ThemeToggle from "../ui/ThemeToggle";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 border-b">
      <Link href="/" className="font-bold text-xl cp">Yamlak Negash</Link>
      <div className="flex gap-6 items-center">
        <Link href="/projects" className="cp">Projects</Link>
        <Link href="/admin" className="cp">Admin</Link>
        <ThemeToggle />
      </div>
    </nav>
  );
}
