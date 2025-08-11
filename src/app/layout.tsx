import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Penginapan Arizky - Tempat Liburan Terbaik di Malang",
  description: "Penginapan Arizky adalah destinasi liburan premium yang menggabungkan kenyamanan modern dengan keindahan alam yang memukau. Villa mewah, kamar nyaman, dan fasilitas lengkap untuk liburan tak terlupakan.",
  keywords: "penginapan, villa, malang, wisata, liburan, akomodasi, hotel, resort",
  authors: [{ name: "Penginapan Arizky" }],
  openGraph: {
    title: "Penginapan Arizky - Tempat Liburan Terbaik di Malang",
    description: "Villa mewah dengan pemandangan alam indah, fasilitas lengkap untuk liburan keluarga yang nyaman dan mewah.",
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${inter.variable} antialiased`} suppressHydrationWarning>
        <div suppressHydrationWarning>
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
