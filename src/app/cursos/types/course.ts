// types/course.ts
export type CourseData = {
    id: number;
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
};

export const courseData: CourseData = {
    id: 1,
    title: "Maestría en Docencia Universitaria en Ciencias Empresariales",
    objective: "Potenciar las habilidades de los profesionales en el área de la educación superior de manera activa, dinámica y colaborativa de manera que la experiencia universitaria sea vivir docencia de calidad, a través de una formación que permita diseñar e implementar ambientes de aprendizaje para el bienestar de los estudiantes y las instituciones autosustentadoras, centrado en el estudiante y con énfasis en la investigación.",
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
        description: "En la Maestría en Docencia Universitaria en Ciencias Empresariales sigue una metodología online flexible, con un enfoque en ayudar a superar los estudios de postgrado.",
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
                description: "Como parte de la evaluación continua, deberás desarrollar actividades grupales propuestas en grupos de trabajo multidisciplinarios, sin también desarrollar tu red socioacadémica o networking.",
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
        email: "info@umsa.bo"
    }
};
