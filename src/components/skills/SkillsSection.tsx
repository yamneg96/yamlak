"use client";

import { useEffect } from "react";
import { useSkillStore } from "@/store/useSkillStore";

export default function SkillsSection() {
  const { skills, fetchSkills } = useSkillStore();

  useEffect(() => {
    fetchSkills();
  }, []);

  return (
    <section className="py-20">
      <h2 className="text-3xl font-semibold mb-8">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {skills?.map((s) => (
          <div key={s?._id || 'Skill Id'} className="p-4 rounded bg-gray-100 dark:bg-gray-800">
            {s?.name || 'Skill Name'}
          </div>
        ))}
      </div>
    </section>
  );
}