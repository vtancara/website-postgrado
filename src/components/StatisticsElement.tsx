import React from "react";
import Image from "next/image";

interface StatisticsElementType {
  image: string
  text: string
}

export const StatisticsElement = ({ image, text }: StatisticsElementType) => {
  return (
    <>
      <div className="container p-6 ">
        <div className="flex justify-center px-4">
          <Image
            src={image}
            height={'200'}
            width={'200'}
            alt={''}
          />
        </div>
        <div className="flex-grow p-2">
          <p className="mt-2 font-medium text-opacity-90 lg:text-xl">
            {text}
          </p>
        </div>
        <div className="flex-shrink-0 w-full text-center lg:w-auto">
          <a
            href=""
            target="_blank"
            rel="noopener"
            className="text-customBlueBtnLink text-lg font-medium text-center"
          >
            Ver más
          </a>
        </div>
      </div>
    </>
  );
};