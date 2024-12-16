'use client'
import React, {useState, useEffect} from 'react';
import {Monitor, Users, Book, PenTool, Users2, GraduationCap, Calendar} from 'lucide-react';
import {CourseData} from "@/app/cursos/types/course";


const icons = {
    monitor: Monitor,
    users: Users,
    book: Book,
    'pen-tool': PenTool,
    'users-2': Users2,
    'graduation-cap': GraduationCap,
};

interface Props {
    data: CourseData;
}

const CourseDetail: React.FC<Props> = ({data}) => {
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section[id]');
            const scrollPosition = window.scrollY + 100;

            sections.forEach((section) => {
                const sectionTop = (section as HTMLElement).offsetTop;
                const sectionHeight = section.clientHeight;
                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    setActiveSection(section.id);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const offset = 80;
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo({
                top: elementPosition - offset,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="mt-48 min-h-screen bg-white">
            {/* Hero Section */}
            <div className="bg-primary text-white py-16">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl font-bold mb-6">{data.title}</h1>
                    <div className="flex items-center gap-4">
                        <Calendar className="w-5 h-5"/>
                        <span>{data.schedule}</span>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Left Column - Main Content */}
                    <div className="lg:col-span-8">
                        {/* Objective */}
                        <section id="objetivo" className="mb-12 scroll-mt-24">
                            <h2 className="text-2xl font-bold mb-4 text-primary">Objetivo del Programa</h2>
                            <p className="text-trueGray-700">{data.objective}</p>
                        </section>

                        {/* Intermediate Titles */}
                        <section id="titulos" className="mb-12 scroll-mt-24">
                            <h2 className="text-2xl font-bold mb-4 text-primary">Títulos Intermedios</h2>
                            <div className="bg-trueGray-50 p-6 rounded-lg">
                                {data.intermediateTitles.map((title, index) => (
                                    <div key={index} className="mb-3 text-trueGray-700">
                                        • {title}
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Study Plan */}
                        <section id="plan" className="mb-12 scroll-mt-24">
                            <h2 className="text-2xl font-bold mb-4 text-primary">Plan de Estudios</h2>
                            <div className="bg-trueGray-50 p-6 rounded-lg">
                                {data.studyPlan.map((item, index) => (
                                    <div key={index} className="flex items-start gap-2 mb-3">
                                        <span className="text-secondary font-bold">{index + 1}.</span>
                                        <p className="text-trueGray-700">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Requirements */}
                        <section id="requisitos" className="mb-12 scroll-mt-24">
                            <h2 className="text-2xl font-bold mb-4 text-primary">Requisitos</h2>
                            <div className="bg-primary/5 p-6 rounded-lg">
                                {data.requirements.map((req, index) => (
                                    <div key={index} className="flex items-start gap-2 mb-3">
                                        <span className="text-secondary">•</span>
                                        <p className="text-trueGray-700">{req}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* How to Study */}
                        <section id="estudiar" className="mb-12 scroll-mt-24">
                            <h2 className="text-2xl font-bold mb-4 text-primary">¿Cómo se Estudia?</h2>
                            <p className="text-trueGray-700 mb-8">{data.howToStudy.description}</p>
                            <div className="grid md:grid-cols-2 gap-6">
                                {data.howToStudy.methodologies.map((method, index) => {
                                    const IconComponent = icons[method.icon];
                                    return (
                                        <div key={index} className="bg-trueGray-50 p-6 rounded-lg">
                                            <div className="flex items-center gap-4 mb-4">
                                                <IconComponent className="w-6 h-6 text-secondary"/>
                                                <h3 className="font-semibold text-primary">{method.title}</h3>
                                            </div>
                                            <p className="text-trueGray-600">{method.description}</p>
                                        </div>
                                    );
                                })}
                            </div>
                        </section>
                    </div>

                    {/* Right Column - Navigation & Contact */}
                    <div className="lg:col-span-4">
                        <div className="space-y-6 sticky top-6">
                            {/* Navigation Menu */}
                            <div className="bg-white rounded-lg shadow-md p-4">
                                <h3 className="text-lg font-semibold text-primary mb-4">Contenido del Programa</h3>
                                <nav className="flex flex-col space-y-2">
                                    {[
                                        {id: 'objetivo', label: 'Objetivo'},
                                        {id: 'titulos', label: 'Títulos Intermedios'},
                                        {id: 'plan', label: 'Plan de Estudios'},
                                        {id: 'requisitos', label: 'Requisitos'},
                                        {id: 'estudiar', label: '¿Cómo se Estudia?'}
                                    ].map((item) => (
                                        <button
                                            key={item.id}
                                            onClick={() => scrollToSection(item.id)}
                                            className={`text-left px-4 py-2 rounded-lg transition-colors ${
                                                activeSection === item.id
                                                    ? 'bg-secondary/10 text-secondary font-semibold'
                                                    : 'text-trueGray-600 hover:bg-trueGray-50'
                                            }`}
                                        >
                                            {item.label}
                                        </button>
                                    ))}
                                </nav>
                            </div>

                            {/* Contact Info */}
                            <div className="bg-trueGray-50 p-6 rounded-lg">
                                <h3 className="text-xl font-bold mb-4 text-primary">Información de Contacto</h3>
                                <div className="space-y-4">
                                    <p className="text-trueGray-700">
                                        <strong>Dirección:</strong><br/>
                                        {data.contact.location}
                                    </p>
                                    <p className="text-trueGray-700">
                                        <strong>Teléfono:</strong><br/>
                                        {data.contact.phone}
                                    </p>
                                    <p className="text-trueGray-700">
                                        <strong>Email:</strong><br/>
                                        {data.contact.email}
                                    </p>
                                </div>

                                <button
                                    className="w-full bg-secondary text-white py-3 px-6 rounded-lg mt-6 hover:bg-secondary/90 transition-colors">
                                    Solicitar Información
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetail;
