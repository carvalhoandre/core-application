import { Technology } from "@core";
import TechnologiesWorked from "./technologiesWorked";
import Experience from "./Experience";

interface CvProps {
  technologies: Technology[];
}

const Cv = ({ technologies }: CvProps) => {
  if (!technologies) return null;

  return (
    <div className="flex flex-col lg:flex-row gap-4 min-h-72 w-full">
      <Experience />
      <TechnologiesWorked technologies={technologies} />

    </div>
  );
};

export default Cv;
