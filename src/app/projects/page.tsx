"use client";

import { useEffect } from "react";
import { useProjectStore } from "@/store/useProjectStore";
import ProjectCard from "@/components/projects/ProjectCard";

export default function ProjectsPage() {
  const { projects, fetchMore } = useProjectStore();

  useEffect(() => {
    fetchMore();
  }, []);

  return (
    <section className="p-8 grid md:grid-cols-3 gap-6">
      {projects.map(p => (
        <ProjectCard key={p._id} project={p} />
      ))}
      <button onClick={fetchMore} className="cp border-2 max-w-20 p-2 rounded-2xl hover:bg-white hover:text-black transition-colors duration-500">More</button>
    </section>
  );
}
