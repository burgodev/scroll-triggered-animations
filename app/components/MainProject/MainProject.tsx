"use client";

import React from "react";
import "tailwindcss/tailwind.css";
import useElementsRef from "@/app/hooks/useElementsRef";
import Image from "next/image";
import worldcoinImage from "../../../public/worldcoin.webp";
import worldcoinLogo from "../../../public/worldcoin.svg";

const MainProject: React.FC = () => {
  const elementsRef = useElementsRef(); // TODO: either this is a multiple ref and I pass it as a prop for all components or I change the hook to be single ref and use internally

  return (
    <section>
      <div
        ref={(el: HTMLDivElement | null) => {
          if (el) elementsRef.current.push(el);
        }}
        className="opacity-0 transition-opacity duration-1000 flex flex-col gap-[1rem] md:gap-[2rem] lg:gap-[3rem]"
      >
        <Image
          src={worldcoinImage}
          alt="Worldcoin"
          layout="responsive"
          objectFit="contain"
        />

        <div className="flex justify-between gap-8">
          <div className="max-w-fit">
            <Image
              src={worldcoinLogo}
              alt="Worldcoin Logo"
              className="dark:invert w-svg-sm h-svg-sm md:w-svg-md md:h-svg-md lg:w-svg-lg lg:h-svg-lg xl:w-svg-xl xl:h-svg-xl"
              priority
            />
          </div>
          <div className="flex flex-col flex-1 gap-[1.5rem] max-w-fit">
            <p className="text-base md:text-md lg:text-lg">
              {"Our team supported Worldcoin's growth"}
              <br />
              {"from 80 to 3,000,000 unique users."}
            </p>
            <a href="https://worldcoin.org/" target="_blank">
              {"Visit site"}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainProject;
