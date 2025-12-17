"use client";

import ProjectForm from "@/components/projects/ProjectForm";

export default function AdminPage() {
  return (
    <section className="p-8">
      <h2 className="text-3xl mb-4">Admin Dashboard</h2>
      <ProjectForm />
    </section>
  );
}
