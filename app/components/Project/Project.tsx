"use client";

import React from "react";
import "tailwindcss/tailwind.css";
import useElementsRef from "@/app/hooks/useElementsRef";
import Image, { StaticImageData } from "next/image";

type Image = {
  src: string;
  alt: string;
};

type ProjectProps = {
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
  position: "left" | "right";
};

const Project: React.FC<ProjectProps> = ({
  id,
  description,
  link,
  img,
  logo,
}) => {
  const elementsRef = useElementsRef(); // TODO: either this is a multiple ref and I pass it as a prop for all components or I change the hook to be single ref and use internally

  return (
    <div
      ref={(el: HTMLDivElement | null) => {
        if (el) elementsRef.current.push(el);
      }}
      className="opacity-0 transition-opacity duration-1000 gap-[1rem] md:gap-[2rem] lg:gap-[3rem] mt-50 flex justify-between gap-24"
    >
      <div className="flex-1">
        <Image
          src={img.src}
          alt={img.alt}
          layout="responsive"
          objectFit="contain"
          className="w-[100%] h-auto"
        />
      </div>

      <div className="flex flex-col flex-1 gap-[1.5rem]">
        <Image
          src={logo.src}
          alt={logo.alt}
          className="dark:invert "
          width={300}
          height={44}
          priority
        />
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
  );
};

export default Project;
