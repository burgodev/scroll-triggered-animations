import React from "react";
import "tailwindcss/tailwind.css";
import Image from "next/image";
import { Image as ImageType } from "@/app/types/image";

type CompanyImageProps = {
  img: ImageType;
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
