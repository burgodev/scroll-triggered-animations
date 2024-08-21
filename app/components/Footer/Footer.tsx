import React, { memo } from "react";
import "tailwindcss/tailwind.css";

const Footer: React.FC = () => {
  {
    /* todo: color theme bg-#101010*/
  }
  return (
    <footer className="w-[100%] h-[50vh] grid grid-cols-12 bg-[#101010] py-10 text-white text-[24px]">
      <div className="flex flex-col col-span-6 col-start-7 justify-end max-w-[820px] gap-6">
        <span className="text-[80px] underline">artem@ottofeller.com</span>
        {/* <div className="h-[4px] w-[100%] "></div> */}

        <div className="flex gap-6 underline mt-2">
          {/* TODO: a can be component */}
          <a className="hover:cursor-pointer">Blog</a>
          <a className="hover:cursor-pointer">Policies</a>
        </div>

        <span>© 2024 Ottofeller. All rights reserved. </span>
      </div>
    </footer>
  );
};

export default memo(Footer);
