import { Project } from "@core";
import ProjectItem from "./Item";

interface ProjectsListProps {
  title: string;
  projects: Project[];
}

const ProjectsList = ({ projects, title }: ProjectsListProps) => {
  return (
    <>
      <h3 className="text-2xl font-bold text-white/70">{title}</h3>

      <div className="flex gap-4 flex-wrap">
        {projects.map((project) => (
          <ProjectItem key={project.id} project={project} />
        ))}
      </div>
    </>
  );
};

export default ProjectsList;
