import { getTechnologies } from "../services/technologies";

import Cv from "../components/cv";
import Main from "../components/landing/Main";
import Container from "../components/shared/Container";
import ProjectsList from "../components/projects/List";
import { getProjects } from "../services/projects";

export default async function Home() {
  const technologies = await getTechnologies();
  const projects = await getProjects();

  return (
    <>
      <Main technologies={technologies.emphasis} />

      <Container className="py-16 flex flex-col gap-8">
        <ProjectsList title="Destaques" projects={projects.emphasis} />
        <ProjectsList title="Mobile" projects={projects.mobile} />
        <ProjectsList title="Web" projects={projects.web} />
        <ProjectsList title="Jogos" projects={projects.games} />

        <Cv technologies={technologies.all} />
      </Container>
    </>
  );
}
