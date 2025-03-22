import Header from "../shared/Header";

const Main = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-[url('/principal.jpg')] bg-cover bg-center h-[500px]">
      <Header />

      <div className="flex-1 flex flex-col justify-center items-center text-white">
        <h1 className="flex items-center gap-3">
          <span className="w-2 h-2 bg-red-500 rounded-full"></span>
          <span className="text-3xl sm:text-5xl font-bold text-center">André Leite Carvalho</span>
          <span className="w-2 h-2 bg-red-500 rounded-full"></span>
        </h1>

        <h2 className="text-zinc-500">Desenvolvedor</h2>
      </div>
    </div>
  );
}

export default Main;
