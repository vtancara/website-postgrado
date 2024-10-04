import React, {useState, useEffect} from 'react';
import {ChevronLeft, ChevronRight} from 'lucide-react';

const academicOffers = [
    {
        title: "Maestría en Inteligencia Artificial",
        description: "Programa avanzado que cubre machine learning, redes neuronales y procesamiento de lenguaje natural.",
        duration: "2 años (4 semestres)",
        requirements: "Grado en Informática, Matemáticas o campo relacionado. CGPA mínimo de 3.0.",
        image: "/api/placeholder/400/300"
    },
    {
        title: "Doctorado en Ciencias de la Computación",
        description: "Investigación avanzada en áreas como algoritmos, sistemas distribuidos y computación cuántica.",
        duration: "3-5 años",
        requirements: "Maestría en Ciencias de la Computación o campo afín. Propuesta de investigación.",
        image: "/api/placeholder/400/300"
    },
    {
        title: "Especialización en Ciberseguridad",
        description: "Programa enfocado en seguridad de redes, criptografía y análisis forense digital.",
        duration: "1 año (2 semestres)",
        requirements: "Grado en Informática o experiencia relevante en el campo de la seguridad.",
        image: "/api/placeholder/400/300"
    },
    {
        title: "Maestría en Desarrollo de Software",
        description: "Enfoque en metodologías ágiles, arquitectura de software y desarrollo de aplicaciones empresariales.",
        duration: "2 años (4 semestres)",
        requirements: "Grado en Informática o campo relacionado. Experiencia en programación.",
        image: "/api/placeholder/400/300"
    }
];

const AcademicOfferSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const nextSlide = () => {
        if (!isAnimating) {
            setIsAnimating(true);
            setCurrentIndex((prevIndex) =>
                prevIndex === academicOffers.length - 1 ? 0 : prevIndex + 1
            );
        }
    };

    const prevSlide = () => {
        if (!isAnimating) {
            setIsAnimating(true);
            setCurrentIndex((prevIndex) =>
                prevIndex === 0 ? academicOffers.length - 1 : prevIndex - 1
            );
        }
    };

    useEffect(() => {
        const timer = setTimeout(() => setIsAnimating(false), 500);
        return () => clearTimeout(timer);
    }, [currentIndex]);

    return (
        <section className="bg-gray-100 py-12">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">Nuestra Oferta Académica</h2>
                <div className="relative max-w-4xl mx-auto">
                    <div className="overflow-hidden rounded-lg shadow-lg">
                        <div
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{transform: `translateX(-${currentIndex * 100}%)`}}
                        >
                            {academicOffers.map((offer, index) => (
                                <div key={index} className="w-full flex-shrink-0">
                                    <div className="bg-white">
                                        <img
                                            src={offer.image}
                                            alt={offer.title}
                                            className="w-full h-64 object-cover"
                                        />
                                        <div className="p-6">
                                            <h3 className="text-2xl font-semibold mb-4">{offer.title}</h3>
                                            <p className="text-gray-600 mb-4">{offer.description}</p>
                                            <div className="mb-4">
                                                <h4 className="font-semibold">Duración:</h4>
                                                <p>{offer.duration}</p>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold">Requisitos:</h4>
                                                <p>{offer.requirements}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <button
                        onClick={prevSlide}
                        className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 bg-white p-2 rounded-full shadow-md"
                        disabled={isAnimating}
                    >
                        <ChevronLeft className="w-6 h-6 text-gray-600"/>
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 bg-white p-2 rounded-full shadow-md"
                        disabled={isAnimating}
                    >
                        <ChevronRight className="w-6 h-6 text-gray-600"/>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default AcademicOfferSlider;
