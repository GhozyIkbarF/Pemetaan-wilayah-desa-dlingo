"use client";

import { Polygon } from "@react-google-maps/api";

// Konversi koordinat dari format [lat, lng] (Leaflet) ke { lat, lng } (Google Maps)
function toGoogleCoords(coords) {
  return coords.map(([lat, lng]) => ({ lat, lng }));
}

export default function GoogleBoundaryLayer({ boundary }) {
  return (
    <Polygon
      paths={toGoogleCoords(boundary)}
      options={{
        strokeColor: "#7ecfff",
        strokeOpacity: 0.8,
        strokeWeight: 2.5,
        fillColor: "#7ecfff",
        fillOpacity: 0.06,
        geodesic: true,
      }}
    />
  );
}
