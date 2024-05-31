import Image from "next/image";
import React, { FC } from "react";

interface ToolsProps {
  src: string;
}

const Tools: FC<ToolsProps> = ({ src }) => {
  return (
    <div className="flex items-center justify-center w-[120px] h-[120px] shadow-2xl rounded-full bg-white hover:scale-105">
      <Image
        className="rounded-sm"
        src={src}
        alt="nextjs"
        width={80}
        height={80}
      />
    </div>
  );
};

export default Tools;
