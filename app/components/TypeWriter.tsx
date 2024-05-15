"use client";
import Typewriter from "typewriter-effect";

interface TypeWriterProps {
  strings: string[];
}

const TypeWriterEffect = ({ strings }: TypeWriterProps) => {
  return (
    <Typewriter
      options={{
        strings,
        autoStart: true,
        loop: true,
      }}
    />
  );
};

export default TypeWriterEffect;
