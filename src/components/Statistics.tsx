import React from "react";
import {StatisticsElement} from "./StatisticsElement";

export const Statistics = () => {
    return (
        <div className="w-full max-w-5xl mx-auto text-gray-800 bg-white px-4 py-8 lg:px-12 lg:py-10">
            <h2 className="text-3xl font-bold mb-8 text-center">
                Nuestras <span className="text-primary">estadísticas</span>
            </h2>

            <div className="flex flex-col lg:flex-row justify-between items-center text-center gap-8">
                <StatisticsElement
                    icon="/img/statistics/001-business-people.png"
                    number={1150}
                    text="POSTGRADUANTES"
                    duration={2000}
                />
                <StatisticsElement
                    icon="/img/statistics/002-programa.png"
                    number={44}
                    text="PROGRAMAS ACTIVOS"
                    duration={2000}
                />
                <StatisticsElement
                    icon="/img/statistics/003-birrete.png"
                    number={200}
                    text="TITULADOS ANUALMENTE"
                    duration={2000}
                />
            </div>
        </div>
    );
};
