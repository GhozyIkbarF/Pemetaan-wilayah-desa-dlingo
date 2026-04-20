import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Peta Wilayah Desa Dlingo | Kec. Mojosongo, Kab. Boyolali",
  description:
    "Website pemetaan wilayah interaktif Desa Dlingo, Kecamatan Mojosongo, Kabupaten Boyolali. Menampilkan berbagai fasilitas desa seperti masjid, sekolah, sungai, lapangan, jalan raya, dan fasilitas umum lainnya.",
  keywords: "Desa Dlingo, Mojosongo, Boyolali, peta wilayah, WebGIS, fasilitas desa",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
