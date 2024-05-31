"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import Mango from "../../../public/pngtree.jpg";
const About = () => {
  return (
    <div
      // style={{ height: "calc(100vh - 70px)" }}
      className="flex flex-col items-center text-centers  md:justify-evenly p-5"
      id="About"
    >
      <h3 className="uppercase tracking-[10px] text-[#292929] text-xl my-10 md:text-2xl">
        About
      </h3>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          transition={{ duration: 1.2 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-500 text-base mb-5">
            Our project aims to address the issue of mango waste and optimize
            pricing strategies by developing an innovative mobile application.
            The objective is to leverage artificial intelligence to accurately
            predict the ripeness stages of mangoes, enabling dynamic pricing to
            reduce waste and maximize value throughout the supply chain. This
            solution is designed to benefit farmers, retailers, and consumers by
            enhancing the efficiency and sustainability of the agricultural
            supply chain, ultimately contributing to reduced food waste and
            optimized market practices.
          </p>
        </motion.div>
        <motion.div
          initial={{ x: 200, opacity: 0 }}
          transition={{ duration: 1.2 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          style={{ width: "100%", height: "100%", position: "relative" }}
        >
          <Image
            alt="mango"
            src={Mango.src}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }} // optional
            className="rounded-md"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default About;
