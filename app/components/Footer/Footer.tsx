import React from "react";
import "tailwindcss/tailwind.css";

const Footer: React.FC = () => {
  {
    /* todo: color theme bg-#101010*/
  }
  return (
    <footer className="w-[100%] h-[820px] grid grid-cols-12 py-[52px] text-[24px] dark:bg-white dark:text-[#101010] bg-[#101010] text-white dark:bg-none font-sans">
      <div className="flex flex-col col-span-6 col-start-7 justify-end max-w-[820px] gap-6 px-3">
        <p className="text-[80px] underline">artem@ottofeller.com</p>

        <div className="flex gap-6 underline mt-[52px]">
          {/* TODO: a can be component */}
          <a className="hover:cursor-pointer">Blog</a>
          <a className="hover:cursor-pointer">Policies</a>
        </div>

        <span>© 2024 Ottofeller. All rights reserved. </span>
      </div>
    </footer>
  );
};

export default Footer;
