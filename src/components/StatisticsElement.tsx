import React, { useState, useEffect } from "react";
import Image from "next/image";

interface StatisticsElementType {
  icon: string;
  number: number;
  text: string;
  duration?: number;
}

export const StatisticsElement = ({ icon, number, text, duration = 2000 }: StatisticsElementType) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(number.toString(), 10);
    const incrementTime = (duration / end) * 1000;

    let timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);

    return () => {
      clearInterval(timer);
    };
  }, [number, duration]);

  return (
    <div className="flex flex-col items-center">
      <Image
        src={icon}
        width={60}
        height={60}
        alt={text}
        className="mb-4"
      />
      <h3 className="text-5xl font-bold mb-2">{count}</h3>
      <p className="text-sm uppercase">{text}</p>
    </div>
  );
};