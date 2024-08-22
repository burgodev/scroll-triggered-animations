"use client";

import React, { memo } from "react";
import "tailwindcss/tailwind.css";
import useElementsRef from "@/app/hooks/useElementsRef";
import { CompanyImage } from "./components/CompanyImage";
import { CompanyDescription } from "./components/CompanyDescription";
import { Company as CompanyType } from "@/app/types/company";

type CompanyProps = CompanyType;

const Company: React.FC<CompanyProps> = ({ ...props }) => {
  const elementsRef = useElementsRef(); // TODO: either this is a multiple ref and I pass it as a prop for all components or I change the hook to be single ref and use internally

  return (
    <div
      ref={(el: HTMLDivElement | null) => {
        if (el) elementsRef.current.push(el);
      }}
      className="opacity-0 transition-opacity duration-1000 mt-50 grid grid-cols-12 gap-4"
    >
      <CompanyImage {...props} />
      <CompanyDescription {...props} />
    </div>
  );
};

export default memo(Company);
