import { Module } from "@nestjs/common";
import { ProjectProvider } from "./project.provider";
import { DbModule } from "src/db/db.module";
import { ProjectController } from './project.controller';

@Module({
  providers: [ProjectProvider],
  imports: [DbModule],
  controllers: [ProjectController],
})

export class ProjectModule {}
