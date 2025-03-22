import ContentMD from "../shared/ContentMD";

interface ReadmeProps {
  content: string;
}

const Readme = ({ content }: ReadmeProps) => {
  return (
    <div className="flex flex-col items-stretch bg-black border border-zinc-800 rounded-2xl p-6">
      <div className="prose prose-zinc prose-invert" style={{ maxWidth: "100%" }}>
        <ContentMD markdown={content} />
      </div>
    </div>
  );
};

export default Readme;
