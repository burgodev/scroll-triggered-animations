"use client";

import { useIntersectionAnimation } from "@/app/hooks";
import React from "react";

const Welcome: React.FC = () => {
  const intersectionAnimation = useIntersectionAnimation({
    animation: "animate-scaleDown",
  });

  return (
    <section>
      <div
        ref={intersectionAnimation}
        className="grid min-h-svh place-items-center grid-cols-entire max-w-[85vw] lg:max-w-[50vw]"
      >
        <h1 className="text-center mb-[60px] text-[5vw] lg:text-[3vw]">
          Software engineering turns ideas into multi-billion dollar companies.
          <br />
          <span>We cut through the complexity to make businesses thrive.</span>
        </h1>
      </div>
    </section>
  );
};

export default Welcome;
