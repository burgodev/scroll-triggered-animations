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
      className="opacity-0 transition-opacity duration-1000 mt-50 grid grid-cols-12 gap-4"
    >
      <div className="col-span-5 max-h-[900px]">
        <Image
          src={img.src}
          alt={img.alt}
          className="w-[100%] h-[100%] object-contain"
        />
      </div>

      <div className="col-span-6 col-start-7 flex flex-col gap-[1.5rem]">
        <Image
          src={logo.src}
          alt={logo.alt}
          className="dark:invert "
          width={200}
          height={60}
          priority
        />
        <p>{description}</p>
        <a href={link} target="_blank">
          {"Visit site"}
        </a>
      </div>
    </div>
  );
};

export default Project;
