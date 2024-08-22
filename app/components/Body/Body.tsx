import React, { memo } from "react";
import "tailwindcss/tailwind.css";
import { Inter } from "next/font/google";

const Body: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <body
      className={
        "bg-[#EFEFEF] text-black-900 dark:bg-[#181818] dark:text-white dark:bg-none transition-colors duration-300 font-sans"
      }
    >
      {children}
    </body>
  );
};

export default memo(Body);
