"use client";
import { motion } from "framer-motion";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";

const AnimatedLeftContainer = () => {
  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      transition={{ duration: 1.2 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      className="bg-[#292929] rounded-lg p-10 w-full md:h-[400px] h-auto flex items-start flex-col justify-center shadow-md"
    >
      <h4 className="font-semibold text-sm tracking-[5px] uppercase text-gray-500 mb-2 text-left">
        REDUCING MANGO WASTE: A DYNAMIC PRICING SOLUTION FOR SUSTAINABLE SUPPLY
        CHAINS
      </h4>
      <p className="text-gray-500 text-sm text-left mb-2">
        For further information about our research on reducing mango waste and
        implementing dynamic pricing strategies, or to discuss potential
        collaborations and partnerships, please feel free to contact us through
        the following channels
      </p>

      <div className="flex flex-col">
        <h1 className="font-semibold text-sm tracking-[5px] uppercase text-gray-500 mb-2 text-left">
          Find Us
        </h1>
        <div className="flex items-center text-gray-500 mb-2">
          <MdOutlineEmail
            style={{
              width: 25,
              height: 25,
            }}
            className=" hover:text-[#3498DB] mr-4"
          />
          <h4 className="font-semibold text-sm text-left">
            ict19858@fot.sjp.ac.lk | ict19804@fot.sjp.ac.lk
          </h4>
        </div>
        <div className="flex items-center text-gray-500 mb-2">
          <FaWhatsapp
            style={{
              width: 25,
              height: 25,
            }}
            className=" hover:text-[#3498DB] mr-4"
          />
          <h4 className="font-semibold text-sm text-left">
            +94 757470688 | +94 766053098
          </h4>
        </div>
        <div className="flex items-center text-gray-500 mb-2">
          <FaLocationDot
            style={{
              width: 25,
              height: 25,
            }}
            className=" hover:text-[#3498DB] mr-4"
          />
          <h4 className="font-semibold text-sm text-left">
            Faculty of technology, University of Sri Jayewardenepura
          </h4>
        </div>
      </div>
    </motion.div>
  );
};

export default AnimatedLeftContainer;
