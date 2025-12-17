"use client";

import { useEffect, useState } from "react";
import { useSkillStore } from "@/store/useSkillStore";

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
          {skills.map((skill) => (
            <li
              key={skill._id}
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
