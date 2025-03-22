import Header from "@/app/components/shared/Header";

const PageProject = async (props: { params: Promise<{ id: string }> }) => {
  const { id } = await props.params;

  return (
    <div className="bg-black ">
      <Header />

      <h1>Projeto {id}</h1>
    </div>
  );
};

export default PageProject;
