import React from "react";
import AnimatedLeftContainer from "./AnimatedLeftContainer";
import AnimatedRightContainer from "./AnimatedRightContainer";

const ContactMe = () => {
  return (
    <div
      className="flex flex-col items-center text-center h-screen  md:justify-evenly p-2"
      id="Contact"
    >
      <h3 className="uppercase tracking-[20px] text-[#292929] text-xl my-10 md:text-2xl">
        ContactMe
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 flex-row justify-between items-center gap-5">
        <AnimatedLeftContainer />
        <AnimatedRightContainer />
      </div>
    </div>
  );
};

export default ContactMe;
