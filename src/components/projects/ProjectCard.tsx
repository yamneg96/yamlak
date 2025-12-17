import { Project } from "@/types/project";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="border rounded p-4">
      <img src={project.imageUrl} alt={project.title} />
      <h3 className="font-semibold mt-2">{project.title}</h3>
      <p className="text-sm">{project.description}</p>
    </div>
  );
}
