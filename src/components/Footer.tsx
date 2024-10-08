import React from "react";
import { Container } from "@/components/Container";
import dynamic from 'next/dynamic';
import { LatLngExpression, LatLngTuple } from "leaflet";
import { Clock } from 'lucide-react';

const MapWithNoSSR = dynamic(() => import('./Map'), {
  ssr: false,
  loading: () => <p>Cargando mapa...</p>
});

export function Footer() {
  const center: LatLngExpression = [-16.5048959, -68.1300381];
  const zoom = 13;
  const markerPosition: LatLngTuple = [-16.5048959, -68.1300381];

  return (
      <footer className="bg-gray-100 dark:bg-gray-800 py-10">
        <Container>
          <div className="flex flex-row gap-4">
            <div className="basis-9/12">
              <MapWithNoSSR center={center} zoom={zoom} markerPosition={markerPosition} />
            </div>
            <div className="basis-3/12">
              <div className="flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Horarios de Atención</h3>
                <div className="flex items-center">
                  <Clock className="mr-2 text-gray-600 dark:text-gray-400" size={20} />
                  <p className="text-gray-600 dark:text-gray-400">Lunes a Viernes: 8:00 AM - 6:00 PM</p>
                </div>
                <div className="flex items-center">
                  <Clock className="mr-2 text-gray-600 dark:text-gray-400" size={20} />
                  <p className="text-gray-600 dark:text-gray-400">Sábado: 9:00 AM - 1:00 PM</p>
                </div>
                <div className="flex items-center">
                  <Clock className="mr-2 text-gray-600 dark:text-gray-400" size={20} />
                  <p className="text-gray-600 dark:text-gray-400">Domingo: Cerrado</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </footer>
  );
}