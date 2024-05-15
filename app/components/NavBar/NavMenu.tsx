"use client";
import React, { useState } from "react";
import { BsMenuButtonFill } from "react-icons/bs";

const NavMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleModel = () => {
    console.log("cscso");
  };
  return (
    <div className="cursor-pointer flex items-center justify-center md:hidden">
      <BsMenuButtonFill size={24} onClick={handleModel} />
    </div>
  );
};

export default NavMenu;
