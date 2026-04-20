// Data Lokasi Desa Dlingo, Kec. Mojosongo, Kab. Boyolali
// Koordinat berdasarkan area geografis desa: -7.468337, 110.589480
// Referensi: https://maps.app.goo.gl/jSWKPcH4FFakDbGr8

export const VILLAGE_CENTER = [-7.4683, 110.5895];

export const VILLAGE_BOUNDARY = [
  [-7.4630, 110.5840],
  [-7.4630, 110.5960],
  [-7.4700, 110.5975],
  [-7.4750, 110.5940],
  [-7.4740, 110.5840],
  [-7.4690, 110.5820],
  [-7.4630, 110.5840],
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
    coordinates: [-7.4670, 110.5900],
    year: 1985,
  },
  {
    id: 2,
    category: "masjid",
    name: "Masjid Al-Ikhlas",
    description: "Masjid di wilayah dusun sebelah utara desa.",
    address: "Dusun Lor, Desa Dlingo",
    coordinates: [-7.4655, 110.5920],
    year: 1992,
  },
  {
    id: 3,
    category: "masjid",
    name: "Musholla Baiturrohman",
    description: "Musholla warga untuk kegiatan sholat dan pengajian rutin.",
    address: "RT 03, Desa Dlingo",
    coordinates: [-7.4700, 110.5875],
    year: 2001,
  },
  {
    id: 4,
    category: "masjid",
    name: "Masjid Al-Hidayah",
    description: "Masjid di bagian selatan desa dengan kapasitas 200 jamaah.",
    address: "Dusun Kidul, Desa Dlingo",
    coordinates: [-7.4720, 110.5905],
    year: 1978,
  },

  // ===== SEKOLAH =====
  {
    id: 5,
    category: "sekolah",
    name: "SD Negeri Dlingo 1",
    description: "Sekolah dasar negeri utama di Desa Dlingo dengan 6 kelas.",
    address: "Jl. Dlingo No. 12, Desa Dlingo",
    coordinates: [-7.4678, 110.5888],
    level: "SD",
    year: 1965,
  },
  {
    id: 6,
    category: "sekolah",
    name: "SD Negeri Dlingo 2",
    description: "Sekolah dasar negeri cabang di wilayah timur desa.",
    address: "Dusun Wetan, Desa Dlingo",
    coordinates: [-7.4695, 110.5935],
    level: "SD",
    year: 1975,
  },
  {
    id: 7,
    category: "sekolah",
    name: "TK Dharma Wanita Dlingo",
    description: "Taman kanak-kanak yang dikelola PKK Desa Dlingo.",
    address: "Dekat Kantor Desa Dlingo",
    coordinates: [-7.4665, 110.5910],
    level: "TK",
    year: 1990,
  },
  {
    id: 8,
    category: "sekolah",
    name: "MI Nurul Islam Dlingo",
    description: "Madrasah Ibtidaiyah berbasis pesantren untuk pendidikan agama Islam.",
    address: "Dusun Tengah, Desa Dlingo",
    coordinates: [-7.4688, 110.5865],
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
    coordinates: [-7.4683, 110.5855],
    type: "Sungai Utama",
  },
  {
    id: 10,
    category: "sungai",
    name: "Saluran Irigasi Dlingo",
    description: "Saluran irigasi pertanian yang mengairi sawah-sawah di Desa Dlingo.",
    address: "Area Persawahan Dlingo",
    coordinates: [-7.4730, 110.5880],
    type: "Saluran Irigasi",
  },
  {
    id: 11,
    category: "sungai",
    name: "Kali Mati",
    description: "Aliran sungai kecil di sisi timur yang aktif saat musim hujan.",
    address: "Dusun Wetan, Desa Dlingo",
    coordinates: [-7.4648, 110.5950],
    type: "Anak Sungai",
  },

  // ===== LAPANGAN =====
  {
    id: 12,
    category: "lapangan",
    name: "Lapangan Sepak Bola Dlingo",
    description: "Lapangan sepak bola utama desa, digunakan untuk pertandingan antar dusun dan HUT RI.",
    address: "Tengah Desa Dlingo",
    coordinates: [-7.4683, 110.5895],
    type: "Sepak Bola",
  },
  {
    id: 13,
    category: "lapangan",
    name: "Lapangan Voli Rukun Warga",
    description: "Lapangan bola voli untuk kegiatan olahraga warga RW 02.",
    address: "RW 02, Desa Dlingo",
    coordinates: [-7.4660, 110.5905],
    type: "Bola Voli",
  },
  {
    id: 14,
    category: "lapangan",
    name: "Lapangan Badminton Pemuda",
    description: "Lapangan badminton yang dikelola Karang Taruna Desa Dlingo.",
    address: "Dusun Lor, Desa Dlingo",
    coordinates: [-7.4650, 110.5880],
    type: "Badminton",
  },

  // ===== JALAN =====
  {
    id: 15,
    category: "jalan",
    name: "Jalan Raya Mojosongo-Dlingo",
    description: "Jalan utama penghubung pusat kecamatan Mojosongo dengan Desa Dlingo.",
    address: "Jalur Utama Desa Dlingo",
    coordinates: [-7.4663, 110.5870],
    type: "Jalan Kabupaten",
    condition: "Baik",
  },
  {
    id: 16,
    category: "jalan",
    name: "Jalan Poros Desa Dlingo",
    description: "Jalan utama yang menghubungkan antar dusun di Desa Dlingo.",
    address: "Pusat Desa Dlingo",
    coordinates: [-7.4693, 110.5898],
    type: "Jalan Desa",
    condition: "Baik",
  },
  {
    id: 17,
    category: "jalan",
    name: "Jalan Usaha Tani Dlingo",
    description: "Jalan tanah/makadam menuju area pertanian dan ladang warga.",
    address: "Area Pertanian Dlingo",
    coordinates: [-7.4715, 110.5920],
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
    coordinates: [-7.4675, 110.5908],
    type: "Puskesmas Pembantu",
  },
  {
    id: 19,
    category: "kesehatan",
    name: "Posyandu Mawar",
    description: "Pos pelayanan terpadu untuk balita dan ibu hamil di RW 01.",
    address: "RW 01, Desa Dlingo",
    coordinates: [-7.4658, 110.5892],
    type: "Posyandu",
  },
  {
    id: 20,
    category: "kesehatan",
    name: "Posyandu Melati",
    description: "Pos pelayanan terpadu untuk wilayah selatan desa.",
    address: "Dusun Kidul, Desa Dlingo",
    coordinates: [-7.4710, 110.5885],
    type: "Posyandu",
  },

  // ===== PEMERINTAHAN =====
  {
    id: 21,
    category: "pemerintahan",
    name: "Kantor Kepala Desa Dlingo",
    description: "Balai desa sebagai pusat pelayanan administrasi dan pemerintahan Desa Dlingo.",
    address: "Jl. Raya Dlingo No. 1",
    coordinates: [-7.4683, 110.5895],
    type: "Balai Desa",
    phone: "-",
  },
  {
    id: 22,
    category: "pemerintahan",
    name: "Balai Dusun Lor",
    description: "Tempat pertemuan warga dan kegiatan dusun wilayah utara.",
    address: "Dusun Lor, Desa Dlingo",
    coordinates: [-7.4648, 110.5900],
    type: "Balai Dusun",
  },
  {
    id: 23,
    category: "pemerintahan",
    name: "Balai Dusun Kidul",
    description: "Tempat pertemuan warga dan kegiatan dusun wilayah selatan.",
    address: "Dusun Kidul, Desa Dlingo",
    coordinates: [-7.4718, 110.5900],
    type: "Balai Dusun",
  },

  // ===== EKONOMI =====
  {
    id: 24,
    category: "ekonomi",
    name: "Pasar Desa Dlingo",
    description: "Pasar tradisional yang buka setiap Pon dan Kliwon, menjual kebutuhan sehari-hari.",
    address: "Pusat Desa Dlingo",
    coordinates: [-7.4680, 110.5918],
    type: "Pasar Tradisional",
    schedule: "Hari Pon & Kliwon",
  },
  {
    id: 25,
    category: "ekonomi",
    name: "Koperasi Unit Desa (KUD) Dlingo",
    description: "Koperasi yang melayani simpan pinjam dan kebutuhan pertanian warga.",
    address: "Jl. Dlingo, Desa Dlingo",
    coordinates: [-7.4662, 110.5888],
    type: "Koperasi",
  },
  {
    id: 26,
    category: "ekonomi",
    name: "Warung Serba Ada Pak Harto",
    description: "Salah satu warung kelontong terbesar di desa yang menjual berbagai kebutuhan pokok.",
    address: "RT 02, Desa Dlingo",
    coordinates: [-7.4700, 110.5910],
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
