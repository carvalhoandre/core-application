import { Project } from "@core";
import ProjectItem from "./Item";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "../ui/carousel"

interface ProjectsListProps {
  title: string;
  projects: Project[];
}

const ProjectsList = ({ projects, title }: ProjectsListProps) => {
  return (
    <div className="flex flex-col items-center sm:item-start w-7/10 md:w-11/12 xl:w-full gap-5">
      <h3 className="text-2xl font-bold text-white/70">{title}</h3>

      <Carousel
        opts={{
          align: "center",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {projects.map((project) => (
            <CarouselItem
              key={project.id}
              className="xl:basiss-1/4 lg:basiss-1/3 md:basiss-1/2"
            >
              <ProjectItem project={project} />
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default ProjectsList;
