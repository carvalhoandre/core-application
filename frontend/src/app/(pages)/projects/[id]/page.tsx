'use client';

import Readme from "@/app/components/projects/Readme";

import Carrossel from "@/app/components/shared/Carrossel";
import Container from "@/app/components/shared/Container";
import Header from "@/app/components/shared/Header";
import Technologies from "@/app/components/technologies/inde";
import { getReadme } from "@/services/github";
import { getProject } from "@/services/projects";

const PageProject = async (props: { params: Promise<{ id: string }> }) => {
  const { id } = await props.params;
  const project = await getProject(id);

  if (!project) return null;

  const readme = await getReadme(project.repository);

  return (
    <div className="bg-black ">
      <Header />


      <Container className="py-7 flex flex-col gap-10">
        <h1 className="text 3xl font-bold self-start">{project.name}</h1>

        <Carrossel imagens={project.images.slice(1)} />
        <Technologies technologies={project.technologies} size="small" />
        <Readme content={readme} />
      </Container>
    </div>
  );
};

export default PageProject;
