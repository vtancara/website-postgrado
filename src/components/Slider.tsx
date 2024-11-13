import { useEffect, useState } from "react";
import EventCard from "./EventCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useBreakpoints from "@/hooks/useBreakpoint";


const Slider = ({
  items
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const { isXs, isSm, isMd, isLg, isXl, is2Xl } = useBreakpoints()
  console.log(isXs, isSm, isMd, isLg, isXl, is2Xl)

  let elementsInSlide = 3
  if (isSm && !isLg) elementsInSlide = 2
  if (isXs && !isSm) elementsInSlide = 1

  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => {
        return prevIndex === items.length - elementsInSlide ? 0 : prevIndex + 1
      }
      );
    }
  };

  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? items.length - elementsInSlide : prevIndex - 1
      );
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimating(false), 300);
    return () => clearTimeout(timer);
  }, [currentIndex]);


  return (
    <div className="relative max-w-5xl mx-auto">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * (100 / elementsInSlide)}%)` }}
        >
          {items.map((item, index) => (
            <div key={index} className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 flex-shrink-0 px-2">
              {item}
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 bg-white p-2 rounded-full shadow-md"
        disabled={isAnimating}
      >
        <ChevronLeft className="w-6 h-6 text-gray-600" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 bg-white p-2 rounded-full shadow-md"
        disabled={isAnimating}
      >
        <ChevronRight className="w-6 h-6 text-gray-600" />
      </button>
    </div>
  );
}

export default Slider;