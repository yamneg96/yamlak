"use client";

import { useEffect, useState } from "react";
import { useSkillStore } from "@/store/useSkillStore";

const demoSkills = [
  { id: '1', name: 'React', level: 'intermediate', category: 'Frontend' },
  { id: '2', name: 'Next.js', level: 'advanced', category: 'Frontend' },
  { id: '3', name: 'Node.js', level: 'intermediate', category: 'Backend' },
  { id: '4', name: 'MongoDB', level: 'intermediate', category: 'Database' },
  { id: '5', name: 'TypeScript', level: 'advanced', category: 'Language' },
  { id: '6', name: 'Tailwind CSS', level: 'advanced', category: 'Frontend' }
];

localStorage.setItem('skills', JSON.stringify(demoSkills));

export default function SkillsPage() {
  const { skills, fetchSkills, addSkill, loading } = useSkillStore();
  const [newSkill, setNewSkill] = useState("");

  useEffect(() => {
    fetchSkills();
  }, []);

  const handleAdd = async () => {
    if (!newSkill) return;
    await addSkill({ name: newSkill, level: "Beginner" });
    setNewSkill("");
  };

  return (
    <section className="p-8">
      <h2 className="text-3xl mb-4">Skills</h2>

      <div className="mb-4 flex gap-2">
        <input
          value={newSkill}
          onChange={(e) => setNewSkill(e.target.value)}
          placeholder="New skill"
          className="border p-2 rounded"
        />
        <button
          onClick={handleAdd}
          className="bg-black text-white border-2 hover:bg-white hover:text-black transition-all duration-500 cp px-4 rounded"
        >
          Add
        </button>
      </div>

      {loading ? (
        <p className="animate-pulse">Loading...</p>
      ) : skills.length === 0 ? (
        <p className="text-gray-500">No skills added yet.</p>
      ) : (
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {demoSkills.map((skill) => (
            <li
              key={skill.id}
              className="border p-4 rounded flex justify-between items-center"
            >
              <span>{skill.name}</span>
              <span className="text-sm opacity-70">{skill.level}</span>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
