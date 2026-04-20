"use client";

import styles from "./Sidebar.module.css";

export default function Sidebar({
  open,
  categories,
  activeCategories,
  onToggleCategory,
  categoryStats,
  selectedLocation,
  onClearSelection,
  locations,
  onSelectLocation,
  searchQuery,
}) {
  const activeCount = Object.values(activeCategories).filter(Boolean).length;
  const totalCategories = Object.keys(categories).length;

  return (
    <aside className={`${styles.sidebar} ${open ? styles.open : styles.closed}`}>
      <div className={styles.inner}>
        {/* Info Desa */}
        <div className={styles.villageCard}>
          <div className={styles.villageCardHeader}>
            <span className={styles.villageCardIcon}>📍</span>
            <div>
              <div className={styles.villageName}>Desa Dlingo</div>
              <div className={styles.villageDetail}>Kec. Mojosongo · Kab. Boyolali</div>
            </div>
          </div>
          <div className={styles.villageStats}>
            <div className={styles.villageStat}>
              <span className={styles.villageStatNum}>{locations.length}</span>
              <span className={styles.villageStatLabel}>Ditampilkan</span>
            </div>
            <div className={styles.villageStatDivider}></div>
            <div className={styles.villageStat}>
              <span className={styles.villageStatNum}>{activeCount}/{totalCategories}</span>
              <span className={styles.villageStatLabel}>Kategori Aktif</span>
            </div>
            <div className={styles.villageStatDivider}></div>
            <div className={styles.villageStat}>
              <span className={styles.villageStatNum}>26</span>
              <span className={styles.villageStatLabel}>Total Data</span>
            </div>
          </div>
        </div>

        {/* Layer Control */}
        <div className={styles.section}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionTitle}>🗂️ Kategori Lokasi</span>
            <button
              className={styles.toggleAllBtn}
              onClick={() => {
                const allActive = Object.values(activeCategories).every(Boolean);
                Object.keys(categories).forEach((key) => {
                  if (allActive !== activeCategories[key]) onToggleCategory(key);
                });
                if (allActive) {
                  Object.keys(categories).forEach((key) => {
                    if (activeCategories[key]) onToggleCategory(key);
                  });
                } else {
                  Object.keys(categories).forEach((key) => {
                    if (!activeCategories[key]) onToggleCategory(key);
                  });
                }
              }}
            >
              {Object.values(activeCategories).every(Boolean) ? "Sembunyikan Semua" : "Tampilkan Semua"}
            </button>
          </div>
          <div className={styles.categoryList}>
            {categoryStats.map((cat) => (
              <div
                key={cat.id}
                id={`layer-toggle-${cat.id}`}
                className={`${styles.categoryItem} ${activeCategories[cat.id] ? styles.active : styles.inactive}`}
                onClick={() => onToggleCategory(cat.id)}
                style={{ "--cat-color": cat.color, "--cat-bg": cat.bgColor }}
              >
                <div className={styles.catLeft}>
                  <div className={`${styles.catToggle} ${activeCategories[cat.id] ? styles.toggled : ""}`}>
                    <span className={styles.catToggleThumb}></span>
                  </div>
                  <span className={styles.catIcon}>{cat.icon}</span>
                  <div className={styles.catInfo}>
                    <span className={styles.catLabel}>{cat.label}</span>
                    <span className={styles.catDesc}>{cat.description}</span>
                  </div>
                </div>
                <span className={styles.catCount}>{cat.count}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Detail Lokasi Terpilih */}
        {selectedLocation && (
          <div className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionTitle}>📌 Detail Lokasi</span>
              <button className={styles.clearBtn} onClick={onClearSelection}>✕</button>
            </div>
            <div className={styles.locationDetail}>
              <div
                className={styles.detailBadge}
                style={{
                  background: categories[selectedLocation.category]?.bgColor + "33",
                  color: categories[selectedLocation.category]?.color,
                  borderColor: categories[selectedLocation.category]?.color + "44",
                }}
              >
                {categories[selectedLocation.category]?.icon} {categories[selectedLocation.category]?.label}
              </div>
              <h3 className={styles.detailName}>{selectedLocation.name}</h3>
              <p className={styles.detailDesc}>{selectedLocation.description}</p>
              <div className={styles.detailMeta}>
                <div className={styles.detailMetaItem}>
                  <span className={styles.metaIcon}>📍</span>
                  <span>{selectedLocation.address}</span>
                </div>
                <div className={styles.detailMetaItem}>
                  <span className={styles.metaIcon}>🌐</span>
                  <span className={styles.coordText}>
                    {selectedLocation.coordinates[0].toFixed(5)}°, {selectedLocation.coordinates[1].toFixed(5)}°
                  </span>
                </div>
                {selectedLocation.type && (
                  <div className={styles.detailMetaItem}>
                    <span className={styles.metaIcon}>🏷️</span>
                    <span>{selectedLocation.type}</span>
                  </div>
                )}
                {selectedLocation.year && (
                  <div className={styles.detailMetaItem}>
                    <span className={styles.metaIcon}>📅</span>
                    <span>Tahun {selectedLocation.year}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Daftar Lokasi */}
        {searchQuery && (
          <div className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionTitle}>🔍 Hasil Pencarian ({locations.length})</span>
            </div>
            <div className={styles.locationList}>
              {locations.length === 0 ? (
                <div className={styles.emptyState}>
                  <span>😕</span>
                  <p>Tidak ada lokasi ditemukan</p>
                </div>
              ) : (
                locations.map((loc) => (
                  <div
                    key={loc.id}
                    id={`location-item-${loc.id}`}
                    className={`${styles.locationItem} ${selectedLocation?.id === loc.id ? styles.selectedItem : ""}`}
                    onClick={() => onSelectLocation(loc)}
                    style={{ "--cat-color": categories[loc.category]?.color }}
                  >
                    <span className={styles.locIcon}>{categories[loc.category]?.icon}</span>
                    <div className={styles.locInfo}>
                      <span className={styles.locName}>{loc.name}</span>
                      <span className={styles.locCat}>{categories[loc.category]?.label}</span>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        )}

        {/* Legend */}
        <div className={styles.section}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionTitle}>🗺️ Legenda Peta</span>
          </div>
          <div className={styles.legend}>
            {Object.values(categories).map((cat) => (
              <div key={cat.id} className={styles.legendItem}>
                <div className={styles.legendDot} style={{ background: cat.color }}></div>
                <span className={styles.legendIcon}>{cat.icon}</span>
                <span className={styles.legendLabel}>{cat.label}</span>
              </div>
            ))}
            <div className={styles.legendItem}>
              <div className={styles.legendLine} style={{ background: "rgba(126,207,255,0.6)" }}></div>
              <span className={styles.legendIcon}>🔷</span>
              <span className={styles.legendLabel}>Batas Wilayah Desa</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className={styles.sidebarFooter}>
          <p>Data Pemetaan Desa Dlingo</p>
          <p>Kec. Mojosongo · Kab. Boyolali · 2025</p>
          <p>Sumber peta: OpenStreetMap</p>
        </div>
      </div>
    </aside>
  );
}
