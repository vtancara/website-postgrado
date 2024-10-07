import React, {useState, useEffect} from "react";
import Image from "next/image";

interface StatisticsElementType {
    icon: string;
    number: number;
    text: string;
    duration?: number;
}

export const StatisticsElement = ({icon, number, text, duration = 2000}: StatisticsElementType) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let startTimestamp: number | null = null;
        const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            setCount(Math.floor(progress * number));
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
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
            <h3 className="text-5xl font-bold mb-2">{count.toLocaleString()}</h3>
            <p className="text-sm uppercase">{text}</p>
        </div>
    );
};
