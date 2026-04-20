"use client";

import { useState } from "react";
import styles from "./Header.module.css";

export default function Header({ sidebarOpen, onToggleSidebar, searchQuery, onSearchChange }) {
  const [searchFocused, setSearchFocused] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <button
          id="toggle-sidebar-btn"
          className={styles.menuBtn}
          onClick={onToggleSidebar}
          title={sidebarOpen ? "Tutup panel" : "Buka panel"}
        >
          <span className={`${styles.menuLine} ${sidebarOpen ? styles.open : ""}`}></span>
          <span className={`${styles.menuLine} ${sidebarOpen ? styles.open : ""}`}></span>
          <span className={`${styles.menuLine} ${sidebarOpen ? styles.open : ""}`}></span>
        </button>

        <div className={styles.brand}>
          <div className={styles.brandIcon}>🗺️</div>
          <div className={styles.brandText}>
            <h1 className={styles.brandTitle}>Peta Desa Dlingo</h1>
            <p className={styles.brandSubtitle}>Kec. Mojosongo · Kab. Boyolali · Jawa Tengah</p>
          </div>
        </div>
      </div>

      <div className={styles.center}>
        <div className={`${styles.searchWrapper} ${searchFocused ? styles.focused : ""}`}>
          <svg className={styles.searchIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
          <input
            id="search-location-input"
            type="text"
            placeholder="Cari lokasi, masjid, sekolah..."
            className={styles.searchInput}
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            onFocus={() => setSearchFocused(true)}
            onBlur={() => setSearchFocused(false)}
          />
          {searchQuery && (
            <button className={styles.clearBtn} onClick={() => onSearchChange("")}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          )}
        </div>
      </div>

      <div className={styles.right}>
        <div className={styles.villageInfo}>
          <div className={styles.villageInfoItem}>
            <span className={styles.infoLabel}>Kecamatan</span>
            <span className={styles.infoValue}>Mojosongo</span>
          </div>
          <div className={styles.divider}></div>
          <div className={styles.villageInfoItem}>
            <span className={styles.infoLabel}>Kabupaten</span>
            <span className={styles.infoValue}>Boyolali</span>
          </div>
          <div className={styles.divider}></div>
          <div className={styles.villageInfoItem}>
            <span className={styles.infoLabel}>Provinsi</span>
            <span className={styles.infoValue}>Jawa Tengah</span>
          </div>
        </div>
        <div className={styles.badge}>
          <span className={styles.badgeDot}></span>
          Live
        </div>
      </div>
    </header>
  );
}
