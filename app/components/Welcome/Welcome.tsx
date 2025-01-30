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
        className="grid place-items-center grid-cols-entire max-w-[85vw] lg:max-w-[50vw]"
      >
        <div>
          <h1 className="text-center text-[5vw] lg:text-[3vw]">
            Software engineering turns ideas into multi-billion dollar
            companies.
          </h1>
          <h1 className="text-center mb-[60px] text-[5vw] lg:text-[3vw] custom-color-mix">
            We cut through the complexity to make businesses thrive.
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
