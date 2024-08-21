"use client";

import React from "react";
import "tailwindcss/tailwind.css";
import useElementsRef from "@/app/hooks/useElementsRef";
import Image, { StaticImageData } from "next/image";
import worldCoinImage from "../../../public/worldcoin.webp";

type Image = {
  src: string;
  alt: string;
};

type MainProjectProps = {
  id: string;
  description: string;
  link: string;
  img: {
    src: StaticImageData;
    alt: string;
  };
  logo: {
    src: StaticImageData;
    alt: string;
  };
};

const MainProject: React.FC<MainProjectProps> = ({
  id,
  description,
  link,
  img,
  logo,
}) => {
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
          src={worldCoinImage}
          alt="Worldcoin"
          layout="responsive"
          objectFit="contain"
          className="w-[100%] h-auto"
        />

        <div className="flex flex-col sm:flex-row justify-between">
          <div className="flex-1">
            <Image
              src="/worldcoin.svg"
              alt="Worldcoin Logo"
              className="dark:invert "
              width={300}
              height={44}
              priority
            />
          </div>
          <div className="flex flex-col flex-1 gap-[1.5rem]">
            <p>
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
