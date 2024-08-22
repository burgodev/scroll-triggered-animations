"use client";

import React from "react";
import "tailwindcss/tailwind.css";
import useElementsRef from "@/app/hooks/useElementsRef";

const Welcome: React.FC = () => {
  const elementsRef = useElementsRef();

  return (
    <section>
      <div
        ref={(el: HTMLDivElement | null) => {
          if (el) elementsRef.current.push(el);
        }}
        className="grid min-h-svh place-items-center grid-cols-entire max-w-[1600px]"
      >
        <h1 className="text-center mb-[60px] text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
          Software engineering turns ideas into multi-billion dollar companies.
          <br />
          <span>We cut through the complexity to make businesses thrive.</span>
        </h1>
      </div>
    </section>
  );
};

export default Welcome;
