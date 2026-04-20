"use client";

import { OverlayView, InfoWindow } from "@react-google-maps/api";
import { useState } from "react";

const ICON_MAP = {
  masjid:     { emoji: "🕌", color: "#2d6a4f", bg: "#d8f3dc" },
  sekolah:    { emoji: "🏫", color: "#1565c0", bg: "#e3f2fd" },
  sungai:     { emoji: "🌊", color: "#0077b6", bg: "#caf0f8" },
  lapangan:   { emoji: "🏟️", color: "#4caf50", bg: "#e8f5e9" },
  jalan:      { emoji: "🛣️",  color: "#5c5c5c", bg: "#eeeeee" },
  kesehatan:  { emoji: "🏥", color: "#c0392b", bg: "#fde8e8" },
  pemerintahan: { emoji: "🏛️", color: "#e67e22", bg: "#fef3cd" },
  ekonomi:    { emoji: "🏪", color: "#8e44ad", bg: "#f3e5f5" },
};

function CustomMarker({ location, isSelected, onClick }) {
  const conf = ICON_MAP[location.category] || { emoji: "📍", color: "#7ecfff", bg: "#e3f5ff" };
  const size = isSelected ? 44 : 36;

  return (
    <OverlayView
      position={{ lat: location.coordinates[0], lng: location.coordinates[1] }}
      mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
    >
      <div
        onClick={onClick}
        style={{
          width: size,
          height: size,
          background: conf.bg,
          border: `2.5px solid ${conf.color}`,
          borderRadius: "50% 50% 50% 0",
          transform: "rotate(-45deg) translate(-50%, -50%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          boxShadow: isSelected
            ? `0 4px 16px rgba(0,0,0,0.4), 0 0 0 4px ${conf.color}44`
            : "0 4px 12px rgba(0,0,0,0.35)",
          transition: "all 0.2s",
          zIndex: isSelected ? 100 : 10,
          userSelect: "none",
        }}
      >
        <span
          style={{
            transform: "rotate(45deg)",
            fontSize: isSelected ? 20 : 16,
            lineHeight: 1,
            display: "block",
          }}
        >
          {conf.emoji}
        </span>
      </div>
    </OverlayView>
  );
}

function PopupContent({ location, category }) {
  const cat = category || {};
  return (
    <div style={{ minWidth: 200, fontFamily: "Inter, sans-serif", fontSize: 13 }}>
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 4,
          background: (cat.bgColor || "#eee") + "55",
          color: cat.color || "#333",
          border: `1px solid ${(cat.color || "#ccc")}44`,
          borderRadius: 6,
          padding: "2px 8px",
          marginBottom: 6,
          fontSize: 11,
          fontWeight: 600,
        }}
      >
        {cat.icon} {cat.label}
      </div>
      <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 4, color: "#111" }}>
        {location.name}
      </div>
      <div style={{ color: "#555", marginBottom: 6, lineHeight: 1.4 }}>
        {location.description}
      </div>
      <div style={{ display: "flex", alignItems: "flex-start", gap: 4, color: "#888", fontSize: 12 }}>
        <span>📍</span>
        <span>{location.address}</span>
      </div>
      {location.type && (
        <div style={{ marginTop: 4, color: "#888", fontSize: 12 }}>🏷️ {location.type}</div>
      )}
      <div style={{ marginTop: 4, color: "#aaa", fontSize: 11 }}>
        {location.coordinates[0].toFixed(5)}°, {location.coordinates[1].toFixed(5)}°
      </div>
    </div>
  );
}

export default function GoogleMarkerLayer({
  locations,
  categories,
  selectedLocation,
  onSelectLocation,
}) {
  const [infoWindowId, setInfoWindowId] = useState(null);

  const handleMarkerClick = (location) => {
    onSelectLocation(location);
    setInfoWindowId(location.id);
  };

  const handleInfoClose = () => {
    setInfoWindowId(null);
  };

  return (
    <>
      {locations.map((location) => {
        const isSelected = selectedLocation?.id === location.id;
        return (
          <CustomMarker
            key={location.id}
            location={location}
            isSelected={isSelected}
            onClick={() => handleMarkerClick(location)}
          />
        );
      })}

      {infoWindowId &&
        locations.map((location) => {
          if (location.id !== infoWindowId) return null;
          const category = categories[location.category];
          return (
            <InfoWindow
              key={`info-${location.id}`}
              position={{ lat: location.coordinates[0], lng: location.coordinates[1] }}
              onCloseClick={handleInfoClose}
              options={{ pixelOffset: { width: 0, height: -44 } }}
            >
              <PopupContent location={location} category={category} />
            </InfoWindow>
          );
        })}
    </>
  );
}
