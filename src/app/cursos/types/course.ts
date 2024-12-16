// types/course.ts
export interface CourseData {
    id: string;
    slug: string;
    title: string;
    objective: string;
    intermediateTitles: string[];
    studyPlan: string[];
    requirements: string[];
    schedule: string;
    academicOffer: string;
    howToStudy: {
        description: string;
        methodologies: Array<{
            title: string;
            description: string;
            icon: 'monitor' | 'users' | 'book' | 'pen-tool' | 'users-2' | 'graduation-cap';
        }>;
    };
    contact: {
        location: string;
        phone: string;
        email: string;
    };
}

// Datos de ejemplo para múltiples cursos
export const coursesData: Record<string, CourseData> = {
    "docencia-universitaria": {
        id: "1",
        slug: "docencia-universitaria",
        title: "Maestría en Docencia Universitaria en Ciencias Empresariales",
        objective: "Potenciar las habilidades de los profesionales en el área de la educación superior de manera activa, dinámica y colaborativa de manera que la experiencia universitaria sea vivir docencia de calidad, a través de una formación que permita diseñar e implementar ambientes de aprendizaje para el bienestar de los estudiantes y las instituciones autosustentadoras.",
        intermediateTitles: [
            "Diplomado en educación superior y entornos virtuales"
        ],
        studyPlan: [
            "El curriculum y planificación del nivel académico",
            "Innovación y creatividad en el aula universitaria",
            "Aprendizaje y didáctica en entornos virtuales",
            "La investigación en la docencia universitaria",
            "Evaluación de los aprendizajes",
            "Administración académica universitaria",
            "Calidad y acreditación universitaria",
            "Diseño curricular",
            "Redacción y publicación de textos académicos",
            "Redacción y publicación de artículos científicos",
            "Taller I: Perfil trabajo final de grado",
            "Taller II: Trabajo final de grado"
        ],
        requirements: [
            "Una fotografía del Título Académico o en Provisión Nacional (Digitalizado)",
            "Dos fotocopias del Carnet de Identidad",
            "Hoja de vida (Formato UAGRM)",
            "Dos fotografías 3×4 fondo rojo"
        ],
        schedule: "Sábados de 08:30 a 12:30 (100% Virtual)",
        academicOffer: "La Maestría en Docencia Universitaria sigue una metodología online flexible, con el enfoque en ayudar a superar los estudios postgrado.",
        howToStudy: {
            description: "En la Maestría en Docencia Universitaria sigue una metodología online flexible, con un enfoque en ayudar a superar los estudios de postgrado.",
            methodologies: [
                {
                    title: "Clases en Directo",
                    description: "Participación activa durante las clases online en directo. Solo necesitas acceso a internet y una portátil con webcam.",
                    icon: "monitor"
                },
                {
                    title: "Campus Virtual",
                    description: "Innovación y eficiencia con nuestro campus virtual con formación gamificada, flexible e interactiva.",
                    icon: "users"
                },
                {
                    title: "Contenidos Actualizados",
                    description: "Los contenidos del programa son 100% prácticos, orientados a la aplicación en el posterior desempeño profesional.",
                    icon: "book"
                },
                {
                    title: "Trabajo Integrador",
                    description: "A través de los diferentes contenidos y casos de estudios podrás integrar el conocimiento y así poder enfrentar los desafíos y mejorar tu capacidad profesional.",
                    icon: "pen-tool"
                },
                {
                    title: "Trabajo en Grupo",
                    description: "Como parte de la evaluación continua, deberás desarrollar actividades grupales propuestas en grupos de trabajo multidisciplinarios.",
                    icon: "users-2"
                },
                {
                    title: "Trabajo Fin de Master",
                    description: "Pon a prueba tus conocimientos desarrollando el proyecto fin de máster, donde demostrarás la respuesta a necesidades planteadas por empresas del sector.",
                    icon: "graduation-cap"
                }
            ]
        },
        contact: {
            location: "Calle General Agustín Saavedra Esquina Calle Chiquitos",
            phone: "+591 78988957",
            email: "info@uagrm-mba.bo"
        }
    },
    "gestion-tecnologias": {
        id: "2",
        slug: "gestion-tecnologias",
        title: "Maestría en Gestión de Tecnologías de Información",
        objective: "Formar profesionales capaces de liderar la transformación digital de las organizaciones, mediante la gestión estratégica de tecnologías de información y la implementación de soluciones innovadoras que generen valor empresarial.",
        intermediateTitles: [
            "Diplomado en Gestión de Proyectos Tecnológicos",
            "Diplomado en Transformación Digital"
        ],
        studyPlan: [
            "Fundamentos de Gestión de TI",
            "Arquitectura Empresarial",
            "Gobierno de TI",
            "Gestión de Proyectos de TI",
            "Transformación Digital",
            "Seguridad de la Información",
            "Gestión de Servicios de TI",
            "Business Intelligence y Analytics",
            "Innovación y Tecnologías Emergentes",
            "Metodologías Ágiles",
            "Taller I: Perfil trabajo final de grado",
            "Taller II: Trabajo final de grado"
        ],
        requirements: [
            "Título profesional en el área de Sistemas, Informática o afines",
            "Experiencia laboral mínima de 2 años",
            "Dos fotografías 3×4 fondo azul",
            "Fotocopia legalizada del título profesional",
            "Carta de motivación"
        ],
        schedule: "Viernes 18:30-22:30 y Sábados 08:30-12:30 (Híbrido)",
        academicOffer: "Programa diseñado para profesionales que buscan desarrollar competencias en la gestión estratégica de TI y liderazgo de la transformación digital.",
        howToStudy: {
            description: "El programa combina sesiones presenciales y virtuales, con un enfoque práctico basado en casos reales y proyectos aplicados.",
            methodologies: [
                {
                    title: "Clases Híbridas",
                    description: "Combina sesiones presenciales y virtuales para mayor flexibilidad y alcance.",
                    icon: "monitor"
                },
                {
                    title: "Casos Prácticos",
                    description: "Análisis y resolución de casos reales de empresas nacionales e internacionales.",
                    icon: "book"
                },
                {
                    title: "Laboratorios Tecnológicos",
                    description: "Acceso a herramientas y plataformas líderes en el mercado.",
                    icon: "pen-tool"
                },
                {
                    title: "Proyectos Aplicados",
                    description: "Desarrollo de proyectos reales con empresas colaboradoras.",
                    icon: "users-2"
                },
                {
                    title: "Mentoría Especializada",
                    description: "Acompañamiento personalizado por expertos del sector.",
                    icon: "users"
                },
                {
                    title: "Proyecto de Grado",
                    description: "Desarrollo de un proyecto de transformación digital para una organización real.",
                    icon: "graduation-cap"
                }
            ]
        },
        contact: {
            location: "Campus Universitario UAGRM, Módulo 235",
            phone: "+591 78988958",
            email: "maestria.ti@uagrm.edu.bo"
        }
    },
    "ingenieria-software": {
        id: "3",
        slug: "ingenieria-software",
        title: "Maestría en Ingeniería de Software",
        objective: "Desarrollar profesionales especializados en el diseño, desarrollo y gestión de software de alta calidad, con énfasis en arquitecturas modernas, metodologías ágiles y mejores prácticas de la industria.",
        intermediateTitles: [
            "Diplomado en Desarrollo de Software Avanzado",
            "Diplomado en Arquitectura de Software"
        ],
        studyPlan: [
            "Fundamentos de Ingeniería de Software",
            "Arquitectura de Software",
            "Metodologías Ágiles Avanzadas",
            "Diseño de Software",
            "Testing y Calidad de Software",
            "DevOps y Continuous Integration",
            "Microservicios y Contenedores",
            "Cloud Computing",
            "Seguridad en el Desarrollo",
            "Gestión de Proyectos de Software",
            "Taller I: Perfil trabajo final de grado",
            "Taller II: Trabajo final de grado"
        ],
        requirements: [
            "Título en Ingeniería de Sistemas o carreras afines",
            "Conocimientos básicos de programación",
            "Dos fotografías 3×4 fondo azul",
            "Carta de recomendación académica o profesional",
            "CV documentado"
        ],
        schedule: "Martes y Jueves 18:30-22:30 (Presencial)",
        academicOffer: "Formación especializada en desarrollo de software empresarial, con énfasis en tecnologías modernas y prácticas de la industria.",
        howToStudy: {
            description: "Programa intensivo con enfoque práctico en laboratorios especializados y desarrollo de proyectos reales.",
            methodologies: [
                {
                    title: "Clases Presenciales",
                    description: "Sesiones teórico-prácticas en laboratorios equipados.",
                    icon: "monitor"
                },
                {
                    title: "Proyectos Prácticos",
                    description: "Desarrollo de software en entornos realistas.",
                    icon: "pen-tool"
                },
                {
                    title: "Laboratorios",
                    description: "Práctica con tecnologías y herramientas actuales.",
                    icon: "book"
                },
                {
                    title: "Trabajo en Equipo",
                    description: "Desarrollo colaborativo de proyectos de software.",
                    icon: "users-2"
                },
                {
                    title: "Mentoría Técnica",
                    description: "Acompañamiento por desarrolladores senior.",
                    icon: "users"
                },
                {
                    title: "Proyecto Final",
                    description: "Desarrollo de un producto de software completo.",
                    icon: "graduation-cap"
                }
            ]
        },
        contact: {
            location: "Campus Universitario UAGRM, Módulo 236",
            phone: "+591 78988959",
            email: "software@uagrm.edu.bo"
        }
    },
    "seguridad-informatica": {
        id: "4",
        slug: "seguridad-informatica",
        title: "Maestría en Seguridad Informática",
        objective: "Formar expertos en ciberseguridad capaces de proteger infraestructuras críticas, implementar estrategias de seguridad y gestionar incidentes en entornos empresariales complejos.",
        intermediateTitles: [
            "Diplomado en Ethical Hacking",
            "Diplomado en Gestión de Seguridad de la Información"
        ],
        studyPlan: [
            "Fundamentos de Ciberseguridad",
            "Ethical Hacking y Pentesting",
            "Seguridad en Redes",
            "Criptografía Aplicada",
            "Análisis de Malware",
            "Seguridad en Aplicaciones Web",
            "Forensia Digital",
            "Gestión de Incidentes",
            "Normativas y Compliance",
            "Seguridad en Cloud Computing",
            "Taller I: Perfil trabajo final de grado",
            "Taller II: Trabajo final de grado"
        ],
        requirements: [
            "Título profesional en áreas de TI",
            "Conocimientos básicos de redes y sistemas",
            "Dos fotografías 3×4 fondo azul",
            "Certificado de antecedentes",
            "Carta de compromiso ético"
        ],
        schedule: "Viernes 18:30-22:30 y Sábados 14:30-18:30 (Híbrido)",
        academicOffer: "Programa especializado en ciberseguridad con laboratorios prácticos y casos reales de la industria.",
        howToStudy: {
            description: "Formación intensiva que combina teoría con práctica en laboratorios especializados de seguridad.",
            methodologies: [
                {
                    title: "Laboratorios Virtuales",
                    description: "Práctica en entornos seguros y controlados.",
                    icon: "monitor"
                },
                {
                    title: "Casos de Estudio",
                    description: "Análisis de incidentes reales de seguridad.",
                    icon: "book"
                },
                {
                    title: "Proyectos Prácticos",
                    description: "Implementación de soluciones de seguridad.",
                    icon: "pen-tool"
                },
                {
                    title: "CTF Challenges",
                    description: "Competencias de seguridad y hacking ético.",
                    icon: "users-2"
                },
                {
                    title: "Mentoría Especializada",
                    description: "Guía de expertos en ciberseguridad.",
                    icon: "users"
                },
                {
                    title: "Proyecto Final",
                    description: "Investigación y solución de seguridad empresarial.",
                    icon: "graduation-cap"
                }
            ]
        },
        contact: {
            location: "Campus Universitario UAGRM, Módulo 237",
            phone: "+591 78988960",
            email: "seguridad@uagrm.edu.bo"
        }
    }
};

// Función helper para obtener un curso por slug
export const getCourseBySlug = (slug: string): CourseData | null => {
    return coursesData[slug] || null;
};
