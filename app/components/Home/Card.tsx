import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { FC } from "react";
import { FaEye, FaRegEyeSlash } from "react-icons/fa";

interface CardProps {
  describtion: string;
  title: string;
  src: string;
}
const Card: FC<CardProps> = ({ describtion, title, src }) => {
  return (
    <div className="p-5 shadow-lg flex items-center  flex-col ">
      <div className="flex items-center mb-5">
        <Image alt="vision" src={src} width={20} height={20} />
        <p className="uppercase tracking-[5px] text-[#292929] text-sm ml-2 md:text-lg">
          {title}
        </p>
      </div>

      <p className="text-gray-500 text-sm">{describtion}</p>
    </div>
  );
};

export default Card;
