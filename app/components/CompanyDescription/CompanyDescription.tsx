"use client";

import React from "react";
import "tailwindcss/tailwind.css";
import useElementsRef from "@/app/hooks/useElementsRef";
import Image, { StaticImageData } from "next/image";

type CompanyDescriptionProps = {
  description: string; // TODO: pick types
  link: string;
  logo: {
    src: StaticImageData;
    alt: string;
  };
};

const CompanyDescription: React.FC<CompanyDescriptionProps> = ({
  description,
  link,
  logo,
}) => {
  return (
    <div className="col-span-6 col-start-7 flex flex-col gap-[1.5rem] justify-center">
      <Image
        src={logo.src}
        alt={logo.alt}
        className="dark:invert"
        width={200}
        height={60}
        priority
      />
      <p className="max-w-[550px]">{description}</p>
      <a href={link} target="_blank">
        {"Visit site"}
      </a>
    </div>
  );
};

export default CompanyDescription;
