import Hero from "@/components/hero/Hero";
import SkillsSection from "@/components/skills/SkillsSection";
import ProjectCard from "@/components/projects/ProjectCard";
import ContactSection from "@/components/contact/ContactSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <SkillsSection />
      {/* <ProjectCard  project={project}/> */}
      <ContactSection />
    </>
  );
}
