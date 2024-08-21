"use client";

import React from "react";
import "tailwindcss/tailwind.css";
import useElementsRef from "@/app/hooks/useElementsRef";
import Image from "next/image";
import worldCoinImage from "../../../public/worldcoin.webp";

const Worldcoin: React.FC = () => {
  const elementsRef = useElementsRef();

  return (
    <section>
      <div
        ref={(el: HTMLDivElement | null) => {
          if (el) elementsRef.current.push(el);
        }}
        className="opacity-0 transition-opacity duration-1000 flex flex-col gap-[1rem] md:gap-[2rem] lg:gap-[3rem]"
      >
        <Image
          src={worldCoinImage}
          alt="Worldcoin"
          layout="responsive"
          objectFit="contain"
          className="w-[100%] h-auto"
        />

        <div className="flex flex-col sm:flex-row justify-between">
          <div className="flex-1">
            <Image
              src="/worldcoin.svg"
              alt="Worldcoin Logo"
              className="dark:invert "
              width={300}
              height={44}
              priority
            />
          </div>
          <div className="flex flex-col flex-1 gap-[1.5rem]">
            <p>
              Our team supported Worldcoin's growth
              <br />
              from 80 to 3,000,000 unique users.
            </p>
            <a href="https://worldcoin.org/" target="_blank">
              Visit site
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Worldcoin;
