import { create } from "zustand";
import { Project } from "@/types/project";
import { ProjectService } from "@/services/project.service";

interface ProjectState {
  projects: Project[];
  page: number;
  fetchMore: () => Promise<void>;
}

export const useProjectStore = create<ProjectState>((set, get) => ({
  projects: [],
  page: 1,
  fetchMore: async () => {
    const { page, projects } = get();
    const res = await ProjectService.fetch(page);
    set({
      projects: [...projects, ...res.data],
      page: page + 1
    });
  }
}));
