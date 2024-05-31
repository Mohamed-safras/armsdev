"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { FC } from "react";
import { SocialIcon } from "react-social-icons";
interface ContributorProps {
  image: string;
  name: string;
  position: string;
  linkedInUrl: string;
  aboutContributor: string;
  id: number;
}

const Contributor: FC<ContributorProps> = ({
  image,
  name,
  position,
  linkedInUrl,
  aboutContributor,
  id,
}) => {
  const Position =
    id % 2 === 0 ? { x: 100, opacity: 0 } : { x: -100, opacity: 0 };
  return (
    <motion.div
      initial={Position}
      transition={{ duration: 1.2 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center  relative  shadow-md bg-white p-5 hover:scale-105 transition-transform"
    >
      <Image
        alt="Safras"
        src={image}
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "60%", height: "auto" }} // optional
        className="rounded-md"
      />
      <h4 className="font-semibold text-sm tracking-[5px] text-gray-500 mt-2 mb-2 ">
        {name}
      </h4>
      <p className="font-semibold text-sm tracking-[5px] text-gray-500 opacity-75 mb-2">
        {position}
      </p>
      <p className="font-medium text-sm   text-gray-500 opacity-75 mb-2">
        {aboutContributor}
      </p>
      <div className="absolute top-5 right-5">
        <SocialIcon
          style={{ width: 40, height: 40 }}
          url="https://www.linkedin.com/"
          href={linkedInUrl}
        />
      </div>
    </motion.div>
  );
};

export default Contributor;
