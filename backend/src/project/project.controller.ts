import { Controller, Get, Param } from "@nestjs/common";
import { ProjectProvider } from "./project.provider";
import { Project } from "@core";

@Controller("projects")
export class ProjectController {
  constructor(private readonly projectProvider: ProjectProvider) {}

  @Get()
  async getAll(): Promise<Array<Project>> {
    return this.projectProvider.getAll();
  }

  @Get(":id")
  async getById(@Param("id") id: string): Promise<Project | null> {
    return this.projectProvider.getById(Number(id));
  }
}
