import { httpGet } from ".";
import { Project } from "@core";

export async function getProjects() {
  const projects = await httpGet<Array<Project>>("projects");

  return {
    all: projects,
    get mobile() {
      return projects.filter((project) => project.type === "mobile");
    },
    get games() {
      return projects.filter((project) => project.type === "game");
    },
    get web() {
      return projects.filter((project) => project.type === "web");
    },
    get emphasis() {
      return projects.filter((project) => project.emphasis);
    }
  };
}

export async function getProject(id: string): Promise<Project | null> {
  return await httpGet<Project>(`projects/${id}`);
}
