"use client";

import { GoogleMap as GoogleMapContainer, useJsApiLoader } from "@react-google-maps/api";
import { useEffect, useRef } from "react";
import GoogleBoundaryLayer from "./GoogleBoundaryLayer";
import GoogleMarkerLayer from "./GoogleMarkerLayer";

const LIBRARIES = ["geometry"];

const MAP_OPTIONS = {
  mapTypeId: "roadmap",
  disableDefaultUI: false,
  zoomControl: true,
  streetViewControl: false,
  mapTypeControl: true,
  fullscreenControl: true,
  styles: [
    { elementType: "geometry", stylers: [{ color: "#f5f5f5" }] },
    { elementType: "labels.text.fill", stylers: [{ color: "#616161" }] },
    { elementType: "labels.text.stroke", stylers: [{ color: "#f5f5f5" }] },
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [{ color: "#c9e8f5" }],
    },
    {
      featureType: "road",
      elementType: "geometry",
      stylers: [{ color: "#ffffff" }],
    },
    {
      featureType: "road",
      elementType: "geometry.stroke",
      stylers: [{ color: "#e0e0e0" }],
    },
    {
      featureType: "landscape.natural",
      elementType: "geometry",
      stylers: [{ color: "#e8f5e9" }],
    },
    {
      featureType: "poi.park",
      elementType: "geometry",
      stylers: [{ color: "#d4edda" }],
    },
  ],
};

// Komponen helper fly ke lokasi terpilih (harus dipanggil dalam konteks GoogleMap)
function useMapFlyTo(mapRef, selectedLocation) {
  useEffect(() => {
    if (selectedLocation && mapRef.current) {
      mapRef.current.panTo({
        lat: selectedLocation.coordinates[0],
        lng: selectedLocation.coordinates[1],
      });
      mapRef.current.setZoom(17);
    }
  }, [selectedLocation, mapRef]);
}

export default function GoogleMapComponent({
  center,
  locations,
  boundary,
  bounds,
  categories,
  selectedLocation,
  onSelectLocation,
}) {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "";

  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: apiKey,
    libraries: LIBRARIES,
  });

  const mapRef = useRef(null);
  useMapFlyTo(mapRef, selectedLocation);

  if (loadError) {
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#0f1923",
          color: "#7ecfff",
          gap: 12,
          fontFamily: "Inter, sans-serif",
        }}
      >
        <span style={{ fontSize: 40 }}>🗺️</span>
        <p style={{ fontWeight: 600 }}>Gagal memuat Google Maps</p>
        <p style={{ fontSize: 13, color: "#aaa", maxWidth: 300, textAlign: "center" }}>
          Pastikan <code>NEXT_PUBLIC_GOOGLE_MAPS_API_KEY</code> sudah diset di file <code>.env.local</code>.
        </p>
      </div>
    );
  }

  if (!isLoaded) {
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0f1923",
          color: "#7ecfff",
          fontFamily: "Inter, sans-serif",
          flexDirection: "column",
          gap: 12,
        }}
      >
        <div
          style={{
            width: 40,
            height: 40,
            border: "3px solid rgba(126,207,255,0.3)",
            borderTopColor: "#7ecfff",
            borderRadius: "50%",
            animation: "spin 0.9s linear infinite",
          }}
        />
        <p>Memuat Google Maps…</p>
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      </div>
    );
  }

  // Gabungkan MAP_OPTIONS dengan restriction jika bounds tersedia
  const mapOptions = bounds
    ? {
        ...MAP_OPTIONS,
        restriction: {
          latLngBounds: {
            south: bounds.south,
            north: bounds.north,
            west:  bounds.west,
            east:  bounds.east,
          },
          strictBounds: false, // boleh sedikit keluar agar tidak terasa kaku
        },
      }
    : MAP_OPTIONS;

  return (
    <GoogleMapContainer
      mapContainerStyle={{ width: "100%", height: "100%" }}
      center={{ lat: center[0], lng: center[1] }}
      zoom={15}
      options={mapOptions}
      onLoad={(map) => {
        mapRef.current = map;
        // Fit ke bounding box saat pertama kali dimuat
        if (bounds) {
          map.fitBounds({
            south: bounds.south,
            north: bounds.north,
            west:  bounds.west,
            east:  bounds.east,
          });
        }
      }}
      id="google-map"
    >
      <GoogleBoundaryLayer boundary={boundary} />

      <GoogleMarkerLayer
        locations={locations}
        categories={categories}
        selectedLocation={selectedLocation}
        onSelectLocation={onSelectLocation}
      />
    </GoogleMapContainer>
  );
}
