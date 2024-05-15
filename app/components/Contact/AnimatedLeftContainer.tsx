"use client";
import { motion } from "framer-motion";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";

const AnimatedLeftContainer = () => {
  return (
    <motion.div
      initial={{ x: -200, opacity: 0 }}
      transition={{ duration: 1.2 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      className="bg-[#292929] rounded-lg p-10 w-full md:h-[400px] h-auto flex items-start flex-col justify-center shadow-md"
    >
      <h4 className="font-semibold text-sm tracking-[5px] uppercase text-gray-500 mb-2">
        Let&apos;s build together
      </h4>
      <p className="text-gray-500 text-sm text-left mb-2">
        Enthusiastic software engineer fueled by a deep passion for data science
        and an insatiable curiosity in the dynamic realm of technology. I am
        committed to continuous learning and advancement in the field of
        software development. My journey is propelled by a profound fascination
        with data and its transformative capabilities. I am devoted to
        leveraging data-driven insights to create innovative solutions.
        Let&apos;s establish a connection and collaborate on ventures that unite
        the realms of software engineering and data science, aiming to shape a
        more intelligent and interconnected future collectively.
      </p>

      <div className="flex flex-col">
        <div className="flex items-center text-gray-500 mb-2">
          <MdOutlineEmail
            style={{
              width: 25,
              height: 25,
            }}
            className=" hover:text-[#3498DB] mr-4"
          />
          <h4 className="font-semibold text-sm">awsafras@gmail.com</h4>
        </div>
        <div className="flex items-center text-gray-500 mb-2">
          <FaWhatsapp
            style={{
              width: 25,
              height: 25,
            }}
            className=" hover:text-[#3498DB] mr-4"
          />
          <h4 className="font-semibold text-sm">+94 757470688</h4>
        </div>
        <div className="flex items-center text-gray-500 mb-2">
          <FaLocationDot
            style={{
              width: 25,
              height: 25,
            }}
            className=" hover:text-[#3498DB] mr-4"
          />
          <h4 className="font-semibold text-sm">Colombo, Western, Sri lanka</h4>
        </div>
      </div>
    </motion.div>
  );
};

export default AnimatedLeftContainer;
