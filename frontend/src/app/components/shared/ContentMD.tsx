import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";

interface ContentMDProps {
  markdown: string;
}

const ContentMD = ({ markdown }: ContentMDProps) => {
  return (
    <div className="content">
      <Markdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        skipHtml={false}
      >
        {markdown}
      </Markdown>
    </div>
  );
};

export default ContentMD;
