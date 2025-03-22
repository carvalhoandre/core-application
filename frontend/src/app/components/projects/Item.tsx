import { Project } from "@core";
import Image from "next/image";
import Link from "next/link";

interface ProjectItemProps {
  project: Project;
}

const ProjectItem = ({ project }: ProjectItemProps) => {
  return (
    <Link href={`/projects/${project.id}`}>
      <div className="relative rounded-2xl overflow-hidden min-w-64 min-h-64 border border-zinc-800">
        <Image
          fill
          alt={project.name}
          src={project.images[0]}
          objectFit="object-cover"
        />
      </div>
    </Link>
  );
};

export default ProjectItem;
