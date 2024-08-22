import React from "react";

import Image from "next/image";
import { Company as CompanyType } from "@/app/types/company";

type CompanyDescriptionProps = Pick<
  CompanyType,
  "description" | "link" | "logo"
>;

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
        className="dark:invert w-svg-xs h-svg-xs lg:w-svg-sm lg:h-svg-sm xl:w-svg-md xl:h-svg-md"
        width={132}
        height={60}
        priority
      />
      <p className="max-w-[820px] mt-3 text-md md:text-lg lg:text-xl">
        {description}
      </p>
      <a
        href={link}
        target="_blank"
        className="text-sm md:text-base lg:text-md"
      >
        {"Visit site"}
      </a>
    </div>
  );
};

export default CompanyDescription;
