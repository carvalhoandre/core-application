import { getTechnologies } from "../services/technologies";

import Cv from "../components/cv";
import Main from "../components/landing/Main";
import Container from "../components/shared/Container";

export default async function Home() {
  const technologies = await getTechnologies();

  return (
    <>
      <Main />

      <Container className="py-16">
        <Cv technologies={technologies.all} />
      </Container>
    </>
  );
}
