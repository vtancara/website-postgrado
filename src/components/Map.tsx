'use client'
import { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L, { LatLngExpression, LatLngTuple } from 'leaflet';

// Fix for the default icon issue
//delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: '/leaflet/images/marker-icon-2x.png',
  iconUrl: '/leaflet/images/marker-icon.png',
  shadowUrl: '/leaflet/images/marker-shadow.png',
});

interface MapType {
  center: LatLngExpression|undefined,
  zoom: number,
  markerPosition: LatLngTuple
}
export const Map = ({ center, zoom, markerPosition }: MapType) => {
  useEffect(() => {
    // This is to handle a known issue with Leaflet in Next.js
    const L = require('leaflet');
    delete L.Icon.Default.prototype._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: '/leaflet/images/marker-icon-2x.png',
      iconUrl: '/leaflet/images/marker-icon.png',
      shadowUrl: '/leaflet/images/marker-shadow.png',
    });
  }, []);

  return (
    <MapContainer center={center} zoom={zoom} style={{ height: '150px', width: '700px' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={markerPosition}>
        <Popup>
          A marker at {markerPosition[0]}, {markerPosition[1]}
        </Popup>
      </Marker>
    </MapContainer>
  );
};
