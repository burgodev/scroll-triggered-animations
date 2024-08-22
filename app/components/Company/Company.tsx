"use client";

import React, { memo } from "react";
import { CompanyImage } from "./components/CompanyImage";
import { CompanyDescription } from "./components/CompanyDescription";
import { Company as CompanyType } from "@/app/types/company";
import { useIntersectionAnimation } from "@/app/hooks";

type CompanyProps = CompanyType;

const Company: React.FC<CompanyProps> = ({ ...props }) => {
  const intersectionAnimation = useIntersectionAnimation({
    animation: "animate-fadeIn",
  });

  return (
    <div
      ref={intersectionAnimation}
      className="opacity-0 transition-opacity duration-1000 mt-50 grid grid-cols-12 gap-4"
    >
      <CompanyImage {...props} />
      <CompanyDescription {...props} />
    </div>
  );
};

export default memo(Company);
