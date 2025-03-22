import { Technology } from "@core";
import TechnologiesWorked from "./technologiesWorked";

interface CvProps {
  technologies: Technology[];
}

const Cv = ({ technologies }: CvProps) => {
  if (!technologies) return null;

  return (
    <div>
      <TechnologiesWorked technologies={technologies} />
    </div>
  );
};

export default Cv;
