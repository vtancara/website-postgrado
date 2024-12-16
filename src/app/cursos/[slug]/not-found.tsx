// app/cursos/[slug]/not-found.tsx
import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 text-center">
                <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
                    Curso no encontrado
                </h2>
                <p className="mt-2 text-sm text-gray-600">
                    El curso que buscas no existe o ha sido movido.
                </p>
                <div className="mt-5">
                    <Link
                        href="/cursos"
                        className="text-primary hover:text-primary-dark transition-colors"
                    >
                        Ver todos los cursos disponibles
                    </Link>
                </div>
            </div>
        </div>
    );
}
