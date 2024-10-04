import React from "react";
import { StatisticsElement } from "./StatisticsElement";

export const Statistics = () => {
  return (
      <div className="relative items-center justify-between w-full max-w-5xl gap-5 mx-auto text-gray-800 bg-white px-7 py-7 lg:px-12 lg:py-6 lg:flex-nowrap -mt-32">
      <div className="flex lg:flex-row md:flex-row flex-col items-center text-center">
          <div className="basis-1/3">
            <StatisticsElement image={"/img/statistics/001-business-people.png"} text={"Unidad de postgrado"}/>
          </div>
          <div className="basis-1/3">
            <StatisticsElement image={"/img/statistics/002-programa.png"} text={"Campus virtual"} />
          </div>
          <div className="basis-1/3">
            <StatisticsElement image={"/img/statistics/003-birrete.png"} text={"Informaciones"} />
          </div>
        </div>
      </div>
  );
};
