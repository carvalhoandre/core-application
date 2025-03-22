const Item = (props: { emphasis: string; label: string }) => {
  return (
    <div className="flex flex-col items-center">
      <span className="text-red-500 text-3xl font-bold leading-6">
        {props.emphasis}
      </span>
      <span className="text-zinc-400 text-sm text-center">{props.label}</span>
    </div>
  );
};

const Experience = () => {
  return (
    <div className="flex flex-col sm:flex-row lg:flex-col items-center justify-around gap-6 p-6 bg-black rounded-2xl border-zinc-800">
      <Item emphasis="+150" label="países atentidos" />
      <Item emphasis="+20" label="anos de experiência" />
      <Item emphasis="420k" label="alunos matriculados" />
    </div>
  );
};

export default Experience;
