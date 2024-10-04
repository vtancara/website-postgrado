import React from "react";
import { Container } from "@/components/Container";
import Image from "next/image";
import { ReadMoreElement } from "./ReadMoreElement";

export const ReadMore = () => {
  return (
      <div className="relative items-center justify-between w-full max-w-5xl gap-5 mx-auto text-gray-800 bg-white px-7 py-7 lg:px-12 lg:py-6 lg:flex-nowrap -mt-32">
      <div className="flex lg:flex-row md:flex-row flex-col items-center text-center">
          <div className="basis-1/4">
            <ReadMoreElement image={"/img/read-more/001-school.png"} text={"Unidad de postgrado"}/>
          </div>
          <div className="basis-1/4">
            <ReadMoreElement image={"/img/read-more/002-virtual-assistant.png"} text={"Campus virtual"} />
          </div>
          <div className="basis-1/4">
            <ReadMoreElement image={"/img/read-more/003-website.png"} text={"Informaciones"} />
          </div>
          <div className="basis-1/4">
            <ReadMoreElement image={"/img/read-more/004-social-media.png"} text={"Redes sociales"} />
          </div>
        </div>
      </div>
  );
};
