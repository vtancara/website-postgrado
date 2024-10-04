import React from "react";
import {Container} from "@/components/Container";
import dynamic from 'next/dynamic';
import {LatLngExpression, LatLngTuple} from "leaflet";


const MapWithNoSSR = dynamic(() => import('./Map').then((module) => module.Map), { ssr: false });

export function Footer() {
  const center: LatLngExpression = [-16.5048959, -68.1300381];
  const zoom = 13;
  const markerPosition: LatLngTuple = [-16.5048959, -68.1300381];

  return (
    <div className="relative">
      <Container>
        <div
          className="grid max-w-screen-xl grid-cols-1 gap-10 pt-10 mx-auto mt-5 border-t border-gray-100 dark:border-trueGray-700 lg:grid-cols-4">
          <div>
            <h1>Ubicacion</h1>
            <MapWithNoSSR center={center} zoom={zoom} markerPosition={markerPosition} />
          </div>
        </div>
      </Container>
    </div>
  );
}

