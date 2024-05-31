import React from "react";
import AnimatedLeftContainer from "./AnimatedLeftContainer";
import AnimatedRightContainer from "./AnimatedRightContainer";

const ContactMe = () => {
  return (
    <div
      // style={{ height: "calc(100% - 70px)" }}
      className="flex flex-col items-center text-center   md:justify-evenly p-5"
      id="Contact"
    >
      <h3 className="uppercase tracking-[10px] text-[#292929] text-xl my-10 md:text-2xl">
        Contact US
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 flex-row justify-between items-center gap-5">
        <AnimatedLeftContainer />
        <AnimatedRightContainer />
      </div>
    </div>
  );
};

export default ContactMe;
