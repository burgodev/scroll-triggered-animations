"use client";

import React from "react";
import "tailwindcss/tailwind.css";
import useElementsRef from "@/app/hooks/useElementsRef";
import Image, { StaticImageData } from "next/image";
import { CompanyImage } from "../CompanyImage";
import { CompanyDescription } from "../CompanyDescription";

type CompanyProps = {
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

const Company: React.FC<CompanyProps> = ({ ...props }) => {
  const elementsRef = useElementsRef(); // TODO: either this is a multiple ref and I pass it as a prop for all components or I change the hook to be single ref and use internally

  return (
    <div
      ref={(el: HTMLDivElement | null) => {
        if (el) elementsRef.current.push(el);
      }}
      className="opacity-0 transition-opacity duration-1000 mt-50 grid grid-cols-12 gap-4"
    >
      <CompanyImage {...props} />,
      <CompanyDescription {...props} />
    </div>
  );
};

export default Company;
