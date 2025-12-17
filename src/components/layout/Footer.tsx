import { Github, Linkedin, Twitter, Instagram, Send } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-8 border-t text-center">
      <div className="flex justify-center gap-6 mb-4">
        <Github className="hover:text-indigo-500 cp"/>
        <Linkedin className="hover:text-indigo-500 cp"/>
        <Twitter className="hover:text-indigo-500 cp"/>
        <Instagram className="hover:text-indigo-500 cp"/>
        <Send className="hover:text-indigo-500 cp"/>
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