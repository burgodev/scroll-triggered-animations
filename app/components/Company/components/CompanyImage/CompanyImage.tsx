"use client";

import React from "react";
import "tailwindcss/tailwind.css";
import Image, { StaticImageData } from "next/image";

type Image = {
  src: string;
  alt: string;
};

type CompanyImageProps = {
  img: {
    src: StaticImageData; // TODO: type pick
    alt: string;
  };
};

const CompanyImage: React.FC<CompanyImageProps> = ({ img }) => {
  return (
    <div className="col-span-5">
      <Image
        src={img.src}
        alt={img.alt}
        className="w-[100%] h-[100%] object-contain"
      />
    </div>
  );
};

export default CompanyImage;
