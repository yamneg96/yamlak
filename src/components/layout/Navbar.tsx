"use client";

import Link from "next/link";
import ThemeToggle from "../ui/ThemeToggle";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 border-b">
      <div className="flex items-center justify-center gap-3">
        <Image src="/favicon.ico" className="rounded-full h-10 w-10" alt="Profile Picture" width={40} height={40} />
        <Link href="/" className="font-bold text-xl cp">Yamlak Negash</Link>
      </div>
      <div className="flex gap-6 items-center">
        <Link href="/projects" className="cp">Projects</Link>
        <Link href="/skills" className="cp">Skills</Link>
        <ThemeToggle />
      </div>
    </nav>
  );
}
