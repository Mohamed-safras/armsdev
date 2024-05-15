"use client";
import { motion } from "framer-motion";
import React from "react";
import Button from "../button/Button";

const AnimatedRightContainer = () => {
  return (
    <motion.article
      initial={{ x: 200, opacity: 0 }}
      transition={{ duration: 1.2 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      className="flex flex-col rounded-lg items-start justify-center space-y-2 flex-shrink-0 w-full md:h-[400px]  h-auto snap-center bg-[#292929] p-10 overflow-hidden shadow-md"
    >
      <h4 className="text-gray-500 uppercase tracking-[10px]">Message</h4>
      <input
        type="text"
        className="px-3 py-2 bg-[rgb(36,36,36)] w-full outline-none font-normal rounded-sm text-white placeholder-gray-500 placeholder:font-normal capitalize"
        placeholder="Your Name"
      />
      <input
        type="text"
        className="px-3 py-2 bg-[rgb(36,36,36)] w-full outline-none font-normal rounded-sm text-white placeholder-gray-500 placeholder:font-normal capitalize "
        placeholder="Email Address"
      />
      <input
        type="text"
        className="px-3 py-2  bg-[rgb(36,36,36)] w-full outline-none font-normal rounded-sm text-white placeholder-gray-500 placeholder:font-normal capitalize"
        placeholder="Subject"
      />
      <textarea
        placeholder="Feel free to ask anything"
        className="px-3 py-2  w-full bg-[rgb(36,36,36)] font-normal rounded-sm outline-none resize-none min-h-16 max-h-32 text-white placeholder-gray-500 placeholder:font-normal capitalize"
      />
      <Button variant="gray" size="md">
        Send Message
      </Button>
    </motion.article>
  );
};

export default AnimatedRightContainer;
