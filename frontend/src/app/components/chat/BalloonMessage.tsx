import Message from "@/model/menssages";
import Image from "next/image";
import ContentMD from "../shared/ContentMD";

export interface BalloonMessageProps {
  message: Message;
  author?: boolean;
}

const BalloonMessage = (props: BalloonMessageProps) => {
  return props.message.side === "left" ? (
    <BalloonLeft {...props} />
  ) : (
    <BalloonRight {...props} />
  );
};

const BalloonLeft = ({ author, message }: BalloonMessageProps) => {
  return (
    <div className="flex gap-4">
      {!author && (
        <Image src="/chat.svg" alt="Assistente" width={40} height={40} />
      )}
      <div className={`flex flex-col ${author && "pl-16"}`}>
        {!author && (
          <span className="text-xs text-zinc-600">{message.author}</span>
        )}
        <div className="bg-black text-white px-7 py-4 sm:w-80 rounded-r-3xl rounded-bl-3xl">
          <ContentMD markdown={message.text} />
        </div>
      </div>
    </div>
  );
};

const BalloonRight = ({ author, message }: BalloonMessageProps) => {
  return (
    <div className={`flex flex-col items-end ${author && "pr-2"}`}>
      {!author && (
        <span className="text-xs text-zinc-600">{message.author}</span>
      )}
      <div className="bg-red-700 text-white px-7 py-4 sm:w-80 rounded-l-3xl rounded-br-3xl">
        <ContentMD markdown={message.text} />
      </div>
    </div>
  );
};

export default BalloonMessage;
