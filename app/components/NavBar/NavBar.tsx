import Link from "next/link";
import React from "react";

import { navlinks } from "./NavLinks";
import NavMenu from "./NavMenu";

const NavBar = () => {
  return (
    <div className="flex items-center justify-between px-2 sticky top-0 text-[#292929] h-[70px] bg-white z-10 shadow-md md:p-4">
      <h1 className="text-lg font-bold italic">ARMS.DEV</h1>
      <ul className="items-center hidden md:flex">
        {navlinks.map(({ id, name }) => (
          <li className="m-4 text-base font-medium" key={id}>
            <Link href={`#${name}`}>{name}</Link>
          </li>
        ))}
      </ul>
      <NavMenu />
    </div>
  );
};

export default NavBar;
