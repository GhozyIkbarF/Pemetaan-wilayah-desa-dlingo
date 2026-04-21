"use client";

import { useEffect, useState, useCallback } from "react";
import dynamic from "next/dynamic";
import { CATEGORIES, LOCATIONS, VILLAGE_CENTER, VILLAGE_BOUNDARY, VILLAGE_BOUNDS, getCategoryStats } from "@/data/locations";
import Header from "@/components/Header/Header";
import Sidebar from "@/components/Sidebar/Sidebar";
import styles from "./page.module.css";

//Dynamic import untuk menghindari SSR issue dengan Leaflet
const MapComponent = dynamic(() => import("@/components/Map/MapComponent"), {
  ssr: false,
  loading: () => (
    <div className={styles.mapLoading}>
      <div className={styles.loadingSpinner}></div>
      <p>Memuat Peta...</p>
    </div>
  ),
});

// Google Maps – komponen baru berbasis @react-google-maps/api
const GoogleMapComponent = dynamic(
  () => import("@/components/Map/GoogleMap/GoogleMapComponent"),
  {
    ssr: false,
    loading: () => (
      <div className={styles.mapLoading}>
        <div className={styles.loadingSpinner}></div>
        <p>Memuat Google Maps...</p>
      </div>
    ),
  }
);

export default function Home() {
  const [activeCategories, setActiveCategories] = useState(
    Object.keys(CATEGORIES).reduce((acc, key) => ({ ...acc, [key]: true }), {})
  );
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleCategory = useCallback((categoryId) => {
    setActiveCategories((prev) => ({
      ...prev,
      [categoryId]: !prev[categoryId],
    }));
  }, []);

  const filteredLocations = LOCATIONS.filter((loc) => {
    const isActive = activeCategories[loc.category];
    const matchesSearch =
      searchQuery === "" ||
      loc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      loc.category.toLowerCase().includes(searchQuery.toLowerCase());
    return isActive && matchesSearch;
  });

  const categoryStats = getCategoryStats();

  return (
    <main className={styles.main}>
      <Header
        sidebarOpen={sidebarOpen}
        onToggleSidebar={() => setSidebarOpen(!sidebarOpen)}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />
      <div className={styles.content}>
        <Sidebar
          open={sidebarOpen}
          categories={CATEGORIES}
          activeCategories={activeCategories}
          onToggleCategory={toggleCategory}
          categoryStats={categoryStats}
          selectedLocation={selectedLocation}
          onClearSelection={() => setSelectedLocation(null)}
          locations={filteredLocations}
          onSelectLocation={setSelectedLocation}
          searchQuery={searchQuery}
        />
        <div className={styles.mapWrapper}>
          {/* <MapComponent
            center={VILLAGE_CENTER}
            locations={filteredLocations}
            boundary={VILLAGE_BOUNDARY}
            categories={CATEGORIES}
            selectedLocation={selectedLocation}
            onSelectLocation={setSelectedLocation}
          /> */}

          <GoogleMapComponent
            center={VILLAGE_CENTER}
            locations={filteredLocations}
            boundary={VILLAGE_BOUNDARY}
            bounds={VILLAGE_BOUNDS}
            categories={CATEGORIES}
            selectedLocation={selectedLocation}
            onSelectLocation={setSelectedLocation}
          />

          {/* Statistik overlay di pojok kanan bawah */}
          <div className={styles.statsOverlay}>
            <div className={styles.statsTitle}>📊 Statistik Desa</div>
            <div className={styles.statsGrid}>
              {categoryStats.map((stat) => (
                <div key={stat.id} className={styles.statItem} style={{ "--cat-color": stat.color }}>
                  <span className={styles.statIcon}>{stat.icon}</span>
                  <span className={styles.statCount}>{stat.count}</span>
                </div>
              ))}
            </div>
            <div className={styles.statsTotal}>
              Total: <strong>{LOCATIONS.length}</strong> titik lokasi
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
