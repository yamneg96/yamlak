import API from "./axios";
import { Skill } from "@/types/skill";

export const SkillService = {
  fetch: () => API.get<Skill[]>("/skills"),
  create: (data: Skill) => API.post("/skills", data)
};
