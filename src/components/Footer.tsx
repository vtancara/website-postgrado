import React from "react";
import { Container } from "@/components/Container";
import dynamic from 'next/dynamic';
import { LatLngExpression, LatLngTuple } from "leaflet";
import { Clock } from 'lucide-react';

const MapWithNoSSR = dynamic(() => import('./Map').then((module) => module.Map), { ssr: false });

export function Footer() {
  const center: LatLngExpression = [-16.5048959, -68.1300381];
  const zoom = 13;
  const markerPosition: LatLngTuple = [-16.5048959, -68.1300381];

  return (
    <footer className="bg-gray-100 dark:bg-gray-800">
      <Container>
        <div className="grid max-w-screen-xl grid-cols-1 gap-10 pt-10 mx-auto mt-5 border-t border-gray-200 dark:border-gray-700 lg:grid-cols-2">
          <div className="w-full h-64 lg:h-full min-h-[300px]">
            <MapWithNoSSR center={center} zoom={zoom} markerPosition={markerPosition} />
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Horarios de Atención</h3>
            <div className="flex items-center mb-2">
              <Clock className="mr-2 text-gray-600 dark:text-gray-400" size={20} />
              <p className="text-gray-600 dark:text-gray-400">Lunes a Viernes: 8:00 AM - 6:00 PM</p>
            </div>
            <div className="flex items-center mb-2">
              <Clock className="mr-2 text-gray-600 dark:text-gray-400" size={20} />
              <p className="text-gray-600 dark:text-gray-400">Sábado: 9:00 AM - 1:00 PM</p>
            </div>
            <div className="flex items-center">
              <Clock className="mr-2 text-gray-600 dark:text-gray-400" size={20} />
              <p className="text-gray-600 dark:text-gray-400">Domingo: Cerrado</p>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}