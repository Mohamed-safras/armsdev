import Link from "next/link";
import React from "react";
import { BsSend } from "react-icons/bs";
import blobImage from "../../../public/Safras.jpg";
import Button from "../button/Button";
import SocialLinks from "../NavBar/SocialLinks";
import TypeWriterEffect from "../TypeWriter";
import styles from "./blob.module.css";

const Header = () => {
  return (
    <div
      className="flex justify-center flex-col h-[calc(100vh_-_70px)]"
      id="home"
    >
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="flex justify-center flex-col  p-2">
          <h1 className="text-2xl font-semibold my-5">
            <span className="inline-block text-[#292929]">
              <TypeWriterEffect
                strings={[
                  "Front-End developer",
                  "Back-End developer",
                  "Full-Stack developer",
                ]}
              />
            </span>
          </h1>
          <p className="text-[#292929] font-mono text-lg my-5 ">
            Hi👋🏻, I&apos;m{" "}
            <span className="text-gray-900 font-bold">Mohamed Safras</span>. A
            passionate Full-stack Developer based in Colombo,Sri Lanka.📍
          </p>
          <div className="flex items-center justify-around">
            <SocialLinks />
            <Link href={"#Contact"}>
              <Button variant="bgBlack" size="md" width="fit-content">
                Say Hello{" "}
                <span className="ml-4">
                  <BsSend />
                </span>
              </Button>
            </Link>
          </div>
        </div>
        <div
          className={`border-2 border-gray-500 ${styles.blob}`}
          style={{
            backgroundImage: `url(${blobImage.src})`,
          }}
        />
      </div>
    </div>
  );
};

export default Header;
