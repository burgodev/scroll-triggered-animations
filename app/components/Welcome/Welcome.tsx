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
        className="grid min-h-svh place-items-center grid-cols-entire max-w-[65vw]"
      >
        <h1 className="text-center mb-[60px]">
          Software engineering turns ideas into multi-billion dollar companies.
          <br />
          <span>We cut through the complexity to make businesses thrive.</span>
        </h1>
      </div>
    </section>
  );
};

export default Welcome;
