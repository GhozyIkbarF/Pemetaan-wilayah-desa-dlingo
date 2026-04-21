"use client";

import { useEffect, useRef, useState } from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import MarkerLayer from "./MarkerLayer";
import BoundaryLayer from "./BoundaryLayer";

// Komponen untuk fly ke lokasi yang dipilih
function FlyToLocation({ selectedLocation }) {
  const map = useMap();
  useEffect(() => {
    if (selectedLocation) {
      map.flyTo(selectedLocation.coordinates, 17, { duration: 1.2 });
    }
  }, [selectedLocation, map]);
  return null;
}

export default function MapComponent({
  center,
  locations,
  boundary,
  categories,
  selectedLocation,
  onSelectLocation,
}) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <MapContainer
      center={center}
      zoom={15}
      style={{ width: "100%", height: "100%" }}
      zoomControl={!isMobile}
      id="leaflet-map"
    >
      {/* Basemap OpenStreetMap */}
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        maxZoom={19}
      />

      {/* Layer batas wilayah desa */}
      <BoundaryLayer boundary={boundary} />

      {/* Layer marker per lokasi */}
      <MarkerLayer
        locations={locations}
        categories={categories}
        selectedLocation={selectedLocation}
        onSelectLocation={onSelectLocation}
      />

      {/* Fly to selected location */}
      <FlyToLocation selectedLocation={selectedLocation} />
    </MapContainer>
  );
}
