import { Controller, Get } from "@nestjs/common";
import { Technology } from "@core";
import { TechnologyProvider } from "./technology.provider";

@Controller("technology")
export class TechnologyController {
  constructor(private readonly technologyProvider: TechnologyProvider) {}

  @Get()
  async getAll(): Promise<Array<Technology>> {
    return this.technologyProvider.getAll();
  }

  @Get("emphasis")
  async getEmphasis(): Promise<Array<Technology>> {
    return this.technologyProvider.getEmphasis();
  }
}
