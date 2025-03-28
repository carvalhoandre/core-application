import { Technology } from "@core";

interface TechnologiesWorkedProps {
  technologies: Technology[];
}

const TechnologiesWorked = ({ technologies }: TechnologiesWorkedProps) => {
  return (
    <div className="flex justify-center items-center p-6 w-full lg:w-72 bg-black border border-zinc-800 rounded-2xl">
      <div className="flex justify-center gap-x-3 flex-wrap">
        {technologies.map((technology) => (
          <div key={technology.id}>
            <span className="text-red-500 font-bold">#</span>
            <span className="text-sm">{technology.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechnologiesWorked;
