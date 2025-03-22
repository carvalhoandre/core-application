import { Technology } from "@core";
import Technologies from "./technologies";

interface CvProps {
  technologies: Technology[];
}

const Cv = ({ technologies }: CvProps) => {
  if (!technologies) return null;

  return (
    <div>
      <Technologies technologies={technologies} />
    </div>
  );
};

export default Cv;
