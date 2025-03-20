import { Injectable } from "@nestjs/common";

import { PrismaProvider } from "src/db/prisma.provider";

import { Technology } from "@core";

@Injectable()
export class TechnologyProvider {
  constructor(private readonly prisma: PrismaProvider) {}

  async getAll(): Promise<Array<Technology>> {
    return this.prisma.technology.findMany();
  }

  async getEmphasis(): Promise<Array<Technology>> {
    return this.prisma.technology.findMany({
      where: {
        emphasis: true,
      },
    });
  }
}
