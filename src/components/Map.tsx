'use client'
import { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L, {LatLngExpression, LatLngTuple} from 'leaflet';

// Asegúrate de que estas rutas sean correctas
const iconRetinaUrl = '/leaflet/images/marker-icon-2x.png';
const iconUrl = '/leaflet/images/marker-icon.png';
const shadowUrl = '/leaflet/images/marker-shadow.png';

L.Icon.Default.mergeOptions({
    iconRetinaUrl,
    iconUrl,
    shadowUrl,
});

interface MapProps {
    center: LatLngExpression|undefined,
    zoom: number;
    markerPosition: LatLngTuple
}

const Map = ({ center, zoom, markerPosition }: MapProps) => {
    useEffect(() => {
        const L = require('leaflet');
        delete L.Icon.Default.prototype._getIconUrl;
        L.Icon.Default.mergeOptions({
            iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
            iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
            shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
        });
    }, []);

    return (
        <MapContainer center={center} zoom={zoom} style={{ height: '400px', width: '100%' }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={markerPosition}>
                <Popup>
                    Nuestra ubicación
                </Popup>
            </Marker>
        </MapContainer>
    );
};

export default Map;
