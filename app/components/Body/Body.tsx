import React, { memo } from "react";
import "tailwindcss/tailwind.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const Body: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <body className={inter.className}>{children}</body>;
};

export default memo(Body);
