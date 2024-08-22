"use client";

import React from "react";
import "tailwindcss/tailwind.css";
import otofellerLogo from "../../../public/ottofellerlogo.svg";
import Image from "next/image";

const HomeButton: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button onClick={scrollToTop}>
      <Image
        src={otofellerLogo}
        alt={"Otofeller company logo"}
        className="dark:invert"
        width={72}
        height={72}
        priority
      />
    </button>
  );
};

export default HomeButton;
