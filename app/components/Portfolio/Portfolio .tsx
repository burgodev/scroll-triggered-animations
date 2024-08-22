import React, { memo } from "react";

import { Company, MainProject } from "..";
import { COMPANIES_DATA } from "@/app/api/mocks/data";

const Portfolio: React.FC = () => {
  return (
    <div className="flex flex-col">
      <MainProject />

      <div className="flex flex-col gap-[220px] mt-[500px]">
        {COMPANIES_DATA.map((company) => (
          <Company {...company} key={company.id} />
        ))}
      </div>
    </div>
  );
};

export default memo(Portfolio);
