"use client";

import { useEffect } from "react";
import { useProjectStore } from "@/store/useProjectStore";
import ProjectCard from "@/components/projects/ProjectCard";

const demoProjects = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.',
    techStack: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    imageUrl: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800',
    liveUrl: 'https://demo.com',
    githubUrl: 'https://github.com/demo',
    featured: true,
    createdAt: new Date().toISOString()
  },
  {
    id: '2',
    title: 'Task Management App',
    description: 'Collaborative task manager with real-time updates, team workspaces, and activity tracking.',
    techStack: ['Next.js', 'PostgreSQL', 'Prisma', 'WebSocket'],
    imageUrl: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800',
    liveUrl: 'https://demo.com',
    githubUrl: 'https://github.com/demo',
    featured: true,
    createdAt: new Date().toISOString()
  },
  {
    id: '3',
    title: 'Social Media Dashboard',
    description: 'Analytics dashboard for social media management with scheduled posts and engagement metrics.',
    techStack: ['Vue.js', 'Express', 'Redis', 'Chart.js'],
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
    liveUrl: 'https://demo.com',
    githubUrl: 'https://github.com/demo',
    featured: false,
    createdAt: new Date().toISOString()
  }
];
localStorage.setItem('projects', JSON.stringify(demoProjects));

export default function ProjectsPage() {
  const { projects, fetchMore } = useProjectStore();

  useEffect(() => {
    fetchMore();
  }, []);

  return (
    <section className="p-8 grid md:grid-cols-3 gap-6">
      {demoProjects.map(p => (
        <ProjectCard key={p.id} project={p} />
      ))}
      <button onClick={fetchMore} className="cp border-2 max-w-20 p-2 rounded-2xl hover:bg-white hover:text-black transition-colors duration-500">More</button>
    </section>
  );
}
