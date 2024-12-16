// app/cursos/[slug]/page.tsx

import {notFound} from 'next/navigation';
import CourseDetail from "@/app/cursos/components/CourseDetail";
import {coursesData, getCourseBySlug} from '../types/course';

interface CoursePageProps {
    params: {
        slug: string;
    };
}

export default function CoursePage({params}: CoursePageProps) {
    const course = getCourseBySlug(params.slug);

    if (!course) {
        notFound();
    }

    return <CourseDetail data={course}/>;
}

// Genera rutas estáticas en build time
export async function generateStaticParams() {
    // Obtén los slugs de todos los cursos disponibles
    const slugs = Object.keys(coursesData);

    return slugs.map((slug) => ({
        slug: slug,
    }));
}
