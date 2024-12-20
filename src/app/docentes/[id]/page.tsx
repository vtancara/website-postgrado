"use client"
import { redirect } from "next/navigation";
import { teachers } from "@/data/data-docentes";

export default function DocentePage({ params }: { params: { id: string } }) {
  const { id } = params;
  if (params.id === '0' || !params.id) {
    // Redirect to a different page if the ID is '0'
    redirect('/not-found');
  }
  const docente = teachers.find((docente) => docente.id === id)
  if (!docente) redirect('/not-found');

  return (
    <div className="container p-8 mx-auto xl:px-0 ">
      <div className="flex justify-center items-center w-full mt-28 pt-100">
        <div className="flex justify-center items-center w-full mt-28 pt-100 p-10">
          <div className="w-full relative group">
            <div className="flex xl:flex-row lg:flex-row md:flex-row sm:flex-col xs:flex-col space-x-8">
              <div className="basis-1/4">
                <img
                  src={docente.image}
                  alt={docente.name}
                  className="w-50 h-50 mx-auto mb-3 rounded-lg"
                />
              </div>
              <div className="basis-6/8">
                <h2 className="text-2xl font-bold mb-4 text-primary">{docente.name}</h2>
                <p className="text-lg">{docente.position}</p>
                <hr className="p-4" />
                <h3 className="text-xl font-semibold text-primary mb-4">Estudios realizados</h3>
                <ul className="list-disc p-4">
                  {docente.studies.map((study, index) => (
                    <li key={index}>{study.descripcion}</li>
                  ))}
                </ul>
                <hr className="p-4" />
                <h3 className="text-xl font-semibold text-primary mb-4">Experiencia profesional - laboral</h3>
                <ul className="list-disc p-4">
                  {docente.expertise.map((expertise, index) => (
                    <li key={index}>{expertise.descripcion}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
