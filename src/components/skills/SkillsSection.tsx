"use client";

import { useEffect } from "react";
import { useSkillStore } from "@/store/useSkillStore";

    const demoSkills = [
      { id: '1', name: 'React', level: 95, category: 'Frontend' },
      { id: '2', name: 'Next.js', level: 90, category: 'Frontend' },
      { id: '3', name: 'Node.js', level: 88, category: 'Backend' },
      { id: '4', name: 'MongoDB', level: 85, category: 'Database' },
      { id: '5', name: 'TypeScript', level: 92, category: 'Language' },
      { id: '6', name: 'Tailwind CSS', level: 90, category: 'Frontend' }
    ];
    localStorage.setItem('skills', JSON.stringify(demoSkills));

export default function SkillsSection() {
  const { skills, fetchSkills } = useSkillStore();

  useEffect(() => {
    fetchSkills();
  }, []);

  return (
    <section className="py-20">
      <h2 className="text-3xl font-semibold mb-8">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {/* {demoSkills?.map((s) => (
          <div key={s?.id || 'Skill Id'} className="p-4 rounded bg-gray-100 dark:bg-gray-800">
            {s?.name || 'Skill Name'}
          </div>
        ))} */}
      </div>
    </section>
  );
}