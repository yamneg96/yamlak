import {create} from "zustand";

export const useSkillStore = create(() => ({
  skills: [],
  fetchSkills: async () => {
    // Fetch skills logic here
  },
}));