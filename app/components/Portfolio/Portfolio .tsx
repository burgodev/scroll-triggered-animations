"use client";

import React, { memo } from "react";
import "tailwindcss/tailwind.css";
import useElementsRef from "@/app/hooks/useElementsRef";
import zeroImage from "../../../public/zero.webp";
import zeroLogo from "../../../public/zerologo.svg";
import microfellerImage from "../../../public/microfeller.webp";
import microfellerLogo from "../../../public/microfellerlogo.svg";
import neroImage from "../../../public/nero.webp";
import neroLogo from "../../../public/nerologo.svg";

import { MainProject, Project } from "..";

const projects = [
  {
    id: "zero",
    img: { src: zeroImage, alt: "Zero company" },
    logo: { src: zeroLogo, alt: "Zero company logo" },
    description: "A modern secrets manager with usability at its core.",
    link: "https://tryzero.com/",
  },
  {
    id: "microfeller",
    img: { src: microfellerImage, alt: "Microfeller company" },
    logo: { src: microfellerLogo, alt: "Microfeller company logo" },
    description:
      "Our software consulting studio, focused on advanced web projects.",
    link: "https://microfeller.com/",
  },
  {
    id: "nero",
    img: { src: neroImage, alt: "Nero company" },
    logo: { src: neroLogo, alt: "Nero company logo" },
    description: "An AI software engineer to increase your velocity.",
    link: "https://heynero.com/",
  },
];

const Projects: React.FC = () => {
  const elementsRef = useElementsRef(); // TODO: either this is a multiple ref and I pass it as a prop for all components or I change the hook to be single ref and use internally

  return (
    <div className="flex flex-col">
      <MainProject />

      <div className="flex flex-col gap-[220px] mt-[500px]">
        {projects.map((project) => (
          <Project key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
};

export default memo(Projects);
