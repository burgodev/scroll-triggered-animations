import React from "react";

import { ThemeToggle } from "../ThemeToggle";
import { HomeButton } from "../HomeButton";

const Header: React.FC = () => {
  return (
    <header className="flex justify-between fixed top-0 w-[100%] py-[38px] px-[52px] z-10">
      <HomeButton />
      <ThemeToggle />
    </header>
  );
};

export default Header;
