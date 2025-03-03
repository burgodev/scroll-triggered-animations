"use client";

import React from "react";

import otofellerLogo from "../../../public/ottofellerlogo.svg";
import Image from "next/image";
import { useScrollToTop } from "@/app/hooks";

const HomeButton: React.FC = () => {
  const scrollToTop = useScrollToTop();

  return (
    <button onClick={scrollToTop}>
      <Image
        src={otofellerLogo}
        alt={"Otofeller company logo"}
        className="dark:invert w-svg-xxs h-svg-xxs md:w-svg-xs md:h-svg-xs"
        priority
      />
    </button>
  );
};

export default HomeButton;
