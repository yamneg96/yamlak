"use client";

import { useState } from "react";
import { ProjectService } from "@/services/project.service";

export default function ProjectForm() {
  const [title, setTitle] = useState("");

  const data = { 
      title,
      description: "Description",
      imageUrl: "",
      featured: false,
      techStack: [] };

  const submit = async () => {
    await ProjectService.create({
      ...data
    });
  };

  return (
    <div>
      <input
        className="border p-2 rounded-2xl mr-4"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={submit} className="cp border-2 rounded-2xl p-2 hover:bg-white hover:text-black transition-colors duration-500">Create</button>
    </div>
  );
}
