// Data Lokasi Desa Dlingo, Kec. Mojosongo, Kab. Boyolali
// Koordinat berdasarkan area geografis desa (approx. -7.455°, 110.832°)

export const VILLAGE_CENTER = [-7.455, 110.832];

export const VILLAGE_BOUNDARY = [
  [-7.4480, 110.8270],
  [-7.4480, 110.8380],
  [-7.4590, 110.8390],
  [-7.4620, 110.8340],
  [-7.4600, 110.8270],
  [-7.4530, 110.8250],
  [-7.4480, 110.8270],
];

export const CATEGORIES = {
  masjid: {
    id: "masjid",
    label: "Masjid / Musholla",
    color: "#2d6a4f",
    bgColor: "#d8f3dc",
    icon: "🕌",
    description: "Tempat ibadah umat Islam",
  },
  sekolah: {
    id: "sekolah",
    label: "Sekolah",
    color: "#1565c0",
    bgColor: "#e3f2fd",
    icon: "🏫",
    description: "Sarana pendidikan",
  },
  sungai: {
    id: "sungai",
    label: "Sungai",
    color: "#0077b6",
    bgColor: "#caf0f8",
    icon: "🌊",
    description: "Aliran sungai / saluran air",
  },
  lapangan: {
    id: "lapangan",
    label: "Lapangan",
    color: "#4caf50",
    bgColor: "#e8f5e9",
    icon: "🏟️",
    description: "Lapangan olahraga dan kegiatan",
  },
  jalan: {
    id: "jalan",
    label: "Jalan Raya",
    color: "#5c5c5c",
    bgColor: "#eeeeee",
    icon: "🛣️",
    description: "Akses jalan utama",
  },
  kesehatan: {
    id: "kesehatan",
    label: "Fasilitas Kesehatan",
    color: "#c0392b",
    bgColor: "#fde8e8",
    icon: "🏥",
    description: "Puskesmas, Posyandu, dll",
  },
  pemerintahan: {
    id: "pemerintahan",
    label: "Kantor Pemerintahan",
    color: "#e67e22",
    bgColor: "#fef3cd",
    icon: "🏛️",
    description: "Kantor desa & balai dusun",
  },
  ekonomi: {
    id: "ekonomi",
    label: "Fasilitas Ekonomi",
    color: "#8e44ad",
    bgColor: "#f3e5f5",
    icon: "🏪",
    description: "Pasar, warung, toko",
  },
};

export const LOCATIONS = [
  // ===== MASJID =====
  {
    id: 1,
    category: "masjid",
    name: "Masjid Nurul Huda Dlingo",
    description: "Masjid utama Desa Dlingo, digunakan untuk sholat berjamaah dan kegiatan keagamaan masyarakat.",
    address: "Dusun Dlingo, Desa Dlingo",
    coordinates: [-7.4540, 110.8310],
    year: 1985,
  },
  {
    id: 2,
    category: "masjid",
    name: "Masjid Al-Ikhlas",
    description: "Masjid di wilayah dusun sebelah utara desa.",
    address: "Dusun Lor, Desa Dlingo",
    coordinates: [-7.4500, 110.8330],
    year: 1992,
  },
  {
    id: 3,
    category: "masjid",
    name: "Musholla Baiturrohman",
    description: "Musholla warga untuk kegiatan sholat dan pengajian rutin.",
    address: "RT 03, Desa Dlingo",
    coordinates: [-7.4570, 110.8355],
    year: 2001,
  },
  {
    id: 4,
    category: "masjid",
    name: "Masjid Al-Hidayah",
    description: "Masjid di bagian selatan desa dengan kapasitas 200 jamaah.",
    address: "Dusun Kidul, Desa Dlingo",
    coordinates: [-7.4600, 110.8320],
    year: 1978,
  },

  // ===== SEKOLAH =====
  {
    id: 5,
    category: "sekolah",
    name: "SD Negeri Dlingo 1",
    description: "Sekolah dasar negeri utama di Desa Dlingo dengan 6 kelas.",
    address: "Jl. Dlingo No. 12, Desa Dlingo",
    coordinates: [-7.4530, 110.8305],
    level: "SD",
    year: 1965,
  },
  {
    id: 6,
    category: "sekolah",
    name: "SD Negeri Dlingo 2",
    description: "Sekolah dasar negeri cabang di wilayah timur desa.",
    address: "Dusun Wetan, Desa Dlingo",
    coordinates: [-7.4555, 110.8370],
    level: "SD",
    year: 1975,
  },
  {
    id: 7,
    category: "sekolah",
    name: "TK Dharma Wanita Dlingo",
    description: "Taman kanak-kanak yang dikelola PKK Desa Dlingo.",
    address: "Dekat Kantor Desa Dlingo",
    coordinates: [-7.4518, 110.8320],
    level: "TK",
    year: 1990,
  },
  {
    id: 8,
    category: "sekolah",
    name: "MI Nurul Islam Dlingo",
    description: "Madrasah Ibtidaiyah berbasis pesantren untuk pendidikan agama Islam.",
    address: "Dusun Tengah, Desa Dlingo",
    coordinates: [-7.4575, 110.8295],
    level: "MI",
    year: 1982,
  },

  // ===== SUNGAI =====
  {
    id: 9,
    category: "sungai",
    name: "Sungai Serang",
    description: "Sungai utama yang mengalir di sisi barat desa, digunakan untuk irigasi pertanian.",
    address: "Batas Barat Desa Dlingo",
    coordinates: [-7.4545, 110.8275],
    type: "Sungai Utama",
  },
  {
    id: 10,
    category: "sungai",
    name: "Saluran Irigasi Dlingo",
    description: "Saluran irigasi pertanian yang mengairi sawah-sawah di Desa Dlingo.",
    address: "Area Persawahan Dlingo",
    coordinates: [-7.4610, 110.8300],
    type: "Saluran Irigasi",
  },
  {
    id: 11,
    category: "sungai",
    name: "Kali Mati",
    description: "Aliran sungai kecil di sisi timur yang aktif saat musim hujan.",
    address: "Dusun Wetan, Desa Dlingo",
    coordinates: [-7.4490, 110.8365],
    type: "Anak Sungai",
  },

  // ===== LAPANGAN =====
  {
    id: 12,
    category: "lapangan",
    name: "Lapangan Sepak Bola Dlingo",
    description: "Lapangan sepak bola utama desa, digunakan untuk pertandingan antar dusun dan HUT RI.",
    address: "Tengah Desa Dlingo",
    coordinates: [-7.4550, 110.8335],
    type: "Sepak Bola",
  },
  {
    id: 13,
    category: "lapangan",
    name: "Lapangan Voli Rukun Warga",
    description: "Lapangan bola voli untuk kegiatan olahraga warga RW 02.",
    address: "RW 02, Desa Dlingo",
    coordinates: [-7.4510, 110.8345],
    type: "Bola Voli",
  },
  {
    id: 14,
    category: "lapangan",
    name: "Lapangan Badminton Pemuda",
    description: "Lapangan badminton yang dikelola Karang Taruna Desa Dlingo.",
    address: "Dusun Lor, Desa Dlingo",
    coordinates: [-7.4495, 110.8310],
    type: "Badminton",
  },

  // ===== JALAN =====
  {
    id: 15,
    category: "jalan",
    name: "Jalan Raya Mojosongo-Dlingo",
    description: "Jalan utama penghubung pusat kecamatan Mojosongo dengan Desa Dlingo.",
    address: "Jalur Utama Desa Dlingo",
    coordinates: [-7.4520, 110.8290],
    type: "Jalan Kabupaten",
    condition: "Baik",
  },
  {
    id: 16,
    category: "jalan",
    name: "Jalan Poros Desa Dlingo",
    description: "Jalan utama yang menghubungkan antar dusun di Desa Dlingo.",
    address: "Pusat Desa Dlingo",
    coordinates: [-7.4555, 110.8320],
    type: "Jalan Desa",
    condition: "Baik",
  },
  {
    id: 17,
    category: "jalan",
    name: "Jalan Usaha Tani Dlingo",
    description: "Jalan tanah/makadam menuju area pertanian dan ladang warga.",
    address: "Area Pertanian Dlingo",
    coordinates: [-7.4595, 110.8355],
    type: "Jalan Usaha Tani",
    condition: "Perlu Perbaikan",
  },

  // ===== KESEHATAN =====
  {
    id: 18,
    category: "kesehatan",
    name: "Puskesmas Pembantu Dlingo",
    description: "Pustu yang melayani warga Desa Dlingo untuk pelayanan kesehatan dasar.",
    address: "Jl. Dlingo, Desa Dlingo",
    coordinates: [-7.4535, 110.8325],
    type: "Puskesmas Pembantu",
  },
  {
    id: 19,
    category: "kesehatan",
    name: "Posyandu Mawar",
    description: "Pos pelayanan terpadu untuk balita dan ibu hamil di RW 01.",
    address: "RW 01, Desa Dlingo",
    coordinates: [-7.4505, 110.8340],
    type: "Posyandu",
  },
  {
    id: 20,
    category: "kesehatan",
    name: "Posyandu Melati",
    description: "Pos pelayanan terpadu untuk wilayah selatan desa.",
    address: "Dusun Kidul, Desa Dlingo",
    coordinates: [-7.4590, 110.8315],
    type: "Posyandu",
  },

  // ===== PEMERINTAHAN =====
  {
    id: 21,
    category: "pemerintahan",
    name: "Kantor Kepala Desa Dlingo",
    description: "Balai desa sebagai pusat pelayanan administrasi dan pemerintahan Desa Dlingo.",
    address: "Jl. Raya Dlingo No. 1",
    coordinates: [-7.4525, 110.8330],
    type: "Balai Desa",
    phone: "-",
  },
  {
    id: 22,
    category: "pemerintahan",
    name: "Balai Dusun Lor",
    description: "Tempat pertemuan warga dan kegiatan dusun wilayah utara.",
    address: "Dusun Lor, Desa Dlingo",
    coordinates: [-7.4490, 110.8320],
    type: "Balai Dusun",
  },
  {
    id: 23,
    category: "pemerintahan",
    name: "Balai Dusun Kidul",
    description: "Tempat pertemuan warga dan kegiatan dusun wilayah selatan.",
    address: "Dusun Kidul, Desa Dlingo",
    coordinates: [-7.4600, 110.8340],
    type: "Balai Dusun",
  },

  // ===== EKONOMI =====
  {
    id: 24,
    category: "ekonomi",
    name: "Pasar Desa Dlingo",
    description: "Pasar tradisional yang buka setiap Pon dan Kliwon, menjual kebutuhan sehari-hari.",
    address: "Pusat Desa Dlingo",
    coordinates: [-7.4545, 110.8315],
    type: "Pasar Tradisional",
    schedule: "Hari Pon & Kliwon",
  },
  {
    id: 25,
    category: "ekonomi",
    name: "Koperasi Unit Desa (KUD) Dlingo",
    description: "Koperasi yang melayani simpan pinjam dan kebutuhan pertanian warga.",
    address: "Jl. Dlingo, Desa Dlingo",
    coordinates: [-7.4515, 110.8310],
    type: "Koperasi",
  },
  {
    id: 26,
    category: "ekonomi",
    name: "Warung Serba Ada Pak Harto",
    description: "Salah satu warung kelontong terbesar di desa yang menjual berbagai kebutuhan pokok.",
    address: "RT 02, Desa Dlingo",
    coordinates: [-7.4560, 110.8345],
    type: "Warung / Toko",
  },
];

export const getLocationsByCategory = (category) =>
  LOCATIONS.filter((loc) => loc.category === category);

export const getCategoryStats = () => {
  return Object.keys(CATEGORIES).map((key) => ({
    ...CATEGORIES[key],
    count: LOCATIONS.filter((loc) => loc.category === key).length,
  }));
};
