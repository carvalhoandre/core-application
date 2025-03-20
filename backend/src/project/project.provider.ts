import { Project, Type } from "@core";
import { Injectable } from "@nestjs/common";
import { PrismaProvider } from "src/db/prisma.provider";

@Injectable()
export class ProjectProvider {
  constructor(private readonly prisma: PrismaProvider) {}

  async getAll(): Promise<Array<Project>> {
    return (await this.prisma.project.findMany()) as any;
  }

  async getById(id: number): Promise<Project | null> {
    return this.prisma.project.findUnique({
      where: { id },
      include: { technologies: true },
    }) as any;
  }
}
