import { Github, Linkedin, Twitter, Instagram, Send, X } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-8 border-t text-center">
      <div className="flex justify-center gap-6 mb-4">
        <Link href="https://github.com/yamneg96"><Github className="hover:text-indigo-500 cp transition-all duration-500 scale-75 hover:scale-100"/></Link>
        <Link href="https://x.com/Mtnl"><Twitter className="hover:text-indigo-500 cp transition-all duration-500 scale-75 hover:scale-100"/></Link>
        <Link href="https://instagram.com/username11384918"><Instagram className="hover:text-indigo-500 cp transition-all duration-500 scale-75 hover:scale-100"/></Link>
        <Link href="https://t.me/user1name_123"><Send className="hover:text-indigo-500 cp transition-all duration-500 scale-75 hover:scale-100"/></Link>
      </div>
      <p className="text-sm opacity-70">
        Built with Next.js and Tailwind CSS
      </p>
      <p className="text-sm opacity-70">
        © {new Date().getFullYear()} All rights reserved
      </p>
    </footer>
  );
}