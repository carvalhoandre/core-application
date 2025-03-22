import { Technology } from "@core";
import Header from "../shared/Header";
import Technologies from "../technologies/inde";

interface MainProps {
  technologies: Technology[];
}

const Main = ({ technologies }: MainProps) => {
  return (
    <div className="flex flex-col items-center justify-center bg-[url('/principal.jpg')] bg-cover bg-center h-[500px]">
      <Header />

      <div className="flex-1 w-full flex flex-col justify-center items-center text-white gap-5">
        <div className="flex flex-col gap-1 items-center">
          <h1 className="flex items-center gap-3">
            <span className="w-2 h-2 bg-red-500 rounded-full"></span>
            <span className="text-3xl sm:text-5xl font-bold text-center">
              André Leite Carvalho
            </span>
            <span className="w-2 h-2 bg-red-500 rounded-full"></span>
          </h1>
          <h2 className="text-zinc-500 text-center">Desenvolvedor</h2>
        </div>

        <Technologies technologies={technologies} />
      </div>
    </div>
  );
};

export default Main;
