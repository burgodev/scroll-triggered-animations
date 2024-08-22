import React from "react";
import "tailwindcss/tailwind.css";
import { ThemeToggle } from "../ThemeToggle";
import otofellerLogo from "../../../public/ottofellerlogo.svg";
import Image from "next/image";

const Header: React.FC = () => {
  return (
    <header className="flex justify-between fixed top-0 w-[100%] py-[38px] px-[52px]">
      <Image
        src={otofellerLogo}
        alt={"Otofeller company logo"}
        className="dark:invert"
        width={72}
        height={72}
        priority
      />
      <ThemeToggle />
    </header>
  );
};

export default Header;
