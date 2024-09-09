import Image from "next/image";
import { Container } from "@/components/Container";
import heroImg from "../../public/img/student2.jpg";

export const Hero = () => {
  return (
    <>
      <Container className="flex flex-wrap ">
        <div className="flex items-center w-full justify-center">
          <div className="max-w-5xl mb-8">
            <h1 className="text-8xl font-bold text-primary text-center">
              PGI - Postgrado en Informática
            </h1>
            <p className="py-5 text-xl text-center leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              Carrera de Informática - Facultad de Ciencias Puras y Naturales - Universidad Mayor de San Andres.
            </p>

            <div className="flex flex-col items-center justify-center space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <a
                href=""
                target="_blank"
                rel="noopener"
                className="px-8 py-4 text-lg font-medium text-center text-white bg-secondary rounded-md ">
                Ver mas
              </a>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

