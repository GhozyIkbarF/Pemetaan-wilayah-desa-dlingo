"use client";

import { Polygon, Tooltip } from "react-leaflet";

export default function BoundaryLayer({ boundary }) {
  return (
    <Polygon
      positions={boundary}
      pathOptions={{
        color: "#7ecfff",
        weight: 2.5,
        opacity: 0.8,
        fillColor: "#7ecfff",
        fillOpacity: 0.06,
        dashArray: "8 4",
      }}
    >
      <Tooltip
        sticky={false}
        permanent={false}
        direction="center"
        className="boundary-tooltip"
      >
        <div style={{
          background: "rgba(15,25,35,0.9)",
          color: "#7ecfff",
          padding: "4px 10px",
          borderRadius: "6px",
          fontSize: "12px",
          fontWeight: "700",
          border: "1px solid rgba(126,207,255,0.3)",
          whiteSpace: "nowrap",
        }}>
          🏘️ Desa Dlingo
        </div>
      </Tooltip>
    </Polygon>
  );
}
