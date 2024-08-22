import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="w-[100%] h-[400px] md:h-[600px] lg:h-[820px] grid grid-cols-12 py-[52px] text-[24px] dark:bg-white dark:text-[#101010] bg-[#101010] text-white dark:bg-none font-sans">
      <div className="flex flex-col col-span-6 col-start-7 justify-end max-w-[820px] gap-6 px-3">
        <p className="text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl underline break-words">
          artem@ottofeller.com
        </p>

        <div className="flex gap-6 underline mt-[52px]">
          <a className="hover:cursor-pointer text-sm md:text-base lg:text-md">
            Blog
          </a>
          <a className="hover:cursor-pointer text-sm md:text-base lg:text-md">
            Policies
          </a>
        </div>

        <span className="text-sm md:text-base lg:text-md">
          © 2024 Ottofeller. All rights reserved.{" "}
        </span>
      </div>
    </footer>
  );
};

export default Footer;
