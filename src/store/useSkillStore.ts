import { create } from "zustand";
import { Skill } from "@/types/skill";
import { SkillService } from "@/services/skill.service";

interface SkillState {
  skills: Skill[];
  loading: boolean;
  fetchSkills: () => Promise<void>;
  addSkill: (skill: Skill) => Promise<void>;
}

export const useSkillStore = create<SkillState>((set, get) => ({
  skills: [],
  loading: false,
  fetchSkills: async () => {
    set({ loading: true });
    const res = await SkillService.fetch();
    set({ skills: res.data, loading: false });
  },
  addSkill: async (skill: Skill) => {
    await SkillService.create(skill);
    get().fetchSkills();
  }
}));
