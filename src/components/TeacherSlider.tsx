import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { teachers } from '../data/data-docentes';

const TeacherSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) =>
        prevIndex === teachers.length - 3 ? 0 : prevIndex + 1
      );
    }
  };

  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? teachers.length - 3 : prevIndex - 1
      );
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimating(false), 300);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <section className="bg-gray-100 py-12 mb-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 lg:text-4xl dark:text-white">
          Nuestros Docentes
        </h2>
        <div className="relative max-w-5xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
            >
              {teachers.map((teacher, index) => (
                <div key={index} className="w-1/3 flex-shrink-0 px-2">
                  <Link href={`/docentes/${teacher.id}`}>
                    <div className="bg-white rounded-lg shadow-md p-4">
                      <img
                        src={teacher.image}
                        alt={teacher.name}
                        className="w-24 h-24 rounded-full mx-auto mb-3"
                      />
                      <h3 className="text-lg font-semibold text-center">
                        {teacher.name}
                      </h3>
                      <p className="text-sm text-blue-600 text-center mb-2">
                        {teacher.specialty}
                      </p>
                      <p className="text-xs text-gray-600 text-center">
                        {teacher.description}
                      </p>
                    </div>
                  </Link>
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
      </div>
    </section>
  );
};

export default TeacherSlider;
