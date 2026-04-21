"use client";

import { useEffect } from "react";
import { Marker, Popup } from "react-leaflet";
import L from "leaflet";

// Buat ikon custom berbasis SVG untuk setiap kategori
function createCustomIcon(category, isSelected = false) {
  const iconMap = {
    masjid: { emoji: "🕌", color: "#2d6a4f", bg: "#d8f3dc" },
    gereja: { emoji: "⛪", color: "#2d6a4f", bg: "#d8f3dc" },
    sekolah: { emoji: "🏫", color: "#1565c0", bg: "#e3f2fd" },
    sungai: { emoji: "🌊", color: "#0077b6", bg: "#caf0f8" },
    lapangan: { emoji: "🏟️", color: "#4caf50", bg: "#e8f5e9" },
    jalan: { emoji: "🛣️", color: "#5c5c5c", bg: "#eeeeee" },
    kesehatan: { emoji: "🏥", color: "#c0392b", bg: "#fde8e8" },
    pemerintahan: { emoji: "🏛️", color: "#e67e22", bg: "#fef3cd" },
    ekonomi: { emoji: "🏪", color: "#8e44ad", bg: "#f3e5f5" },
    pemakaman: { emoji: "⚰️", color: "#6c757d", bg: "#f8f9fa" },  
  };

  const config = iconMap[category] || { emoji: "📍", color: "#7ecfff", bg: "#e3f5ff" };
  const size = isSelected ? 44 : 36;
  const glow = isSelected ? `filter: drop-shadow(0 0 8px ${config.color});` : "";

  const svg = `
    <div style="
      width: ${size}px;
      height: ${size}px;
      background: ${config.bg};
      border: 2.5px solid ${config.color};
      border-radius: 50% 50% 50% 0;
      transform: rotate(-45deg);
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 4px 12px rgba(0,0,0,0.35), 0 0 0 ${isSelected ? "4px" : "0"} ${config.color}44;
      ${glow}
      transition: all 0.2s;
    ">
      <span style="
        transform: rotate(45deg);
        font-size: ${isSelected ? 20 : 16}px;
        line-height: 1;
        display: block;
      ">${config.emoji}</span>
    </div>
  `;

  return L.divIcon({
    html: svg,
    className: "",
    iconSize: [size, size],
    iconAnchor: [size / 2, size],
    popupAnchor: [0, -size],
  });
}

function PopupContent({ location, category }) {
  const cat = category || {};
  return (
    <div className="custom-popup">
      <div
        className="popup-category-badge"
        style={{
          background: cat.bgColor + "33",
          color: cat.color,
          border: `1px solid ${cat.color}44`,
        }}
      >
        {cat.icon} {cat.label}
      </div>
      <div className="popup-name">{location.name}</div>
      <div className="popup-description">{location.description}</div>
      <div className="popup-address">
        <span>📍</span>
        <span>{location.address}</span>
      </div>
      <div className="popup-detail-row">
        {location.type && <span>🏷️ {location.type}</span>}
        <span className="popup-coords">
          {location.coordinates[0].toFixed(5)}°, {location.coordinates[1].toFixed(5)}°
        </span>
      </div>
    </div>
  );
}

export default function MarkerLayer({ locations, categories, selectedLocation, onSelectLocation }) {
  useEffect(() => {
    // Fix untuk Leaflet marker image issue di Next.js
    delete L.Icon.Default.prototype._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
      iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
      shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
    });
  }, []);

  return (
    <>
      {locations.map((location) => {
        const isSelected = selectedLocation?.id === location.id;
        const icon = createCustomIcon(location.category, isSelected);
        const category = categories[location.category];

        return (
          <Marker
            key={location.id}
            position={location.coordinates}
            icon={icon}
            eventHandlers={{
              click: () => onSelectLocation(location),
            }}
            zIndexOffset={isSelected ? 1000 : 0}
          >
            <Popup>
              <div className="custom-popup-container">
                <PopupContent location={location} category={category} />
              </div>
            </Popup>
          </Marker>
        );
      })}
    </>
  );
}
