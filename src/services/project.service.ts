import API from "./axios";
import { Project } from "@/types/project";

export const ProjectService = {
  fetch: (page = 1) =>
    API.get<Project[]>(`/projects?page=${page}`),
  create: (data: Project) =>
    API.post("/projects", data)
};
