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
  metadataBase: new URL("https://penginapanarizky.com"),
  applicationName: "Penginapan Arizky",
  title: {
    default: "Penginapan Arizky - Villa & Penginapan Terbaik di Legon Pari Sawarna",
    template: "%s | Penginapan Arizky"
  },
  description:
    "Penginapan Arizky di Legon Pari Sawarna: pilihan villa sawarna dan penginapan tepi pantai untuk keluarga. Fasilitas lengkap, lokasi strategis, harga terbaik.",
  keywords: [
    // brand
    "penginapan arizky",
    "penginapan arizky legon pari",
    "penginapan arizky sawarna",
    // lokasi & kategori
    "penginapan pantai sawarna",
    "villa sawarna",
    "villa di pantai sawarna",
    "penginapan legon pari",
    // short-tail
    "penginapan sawarna",
    "villa sawarna banten",
    "akomodasi sawarna",
    // long-tail
    "penginapan sawarna murah dekat pantai",
    "villa keluarga di sawarna dekat legon pari",
    "penginapan tepi pantai sawarna cocok untuk keluarga",
    "villa private pool di sawarna",
    "booking penginapan sawarna legon pari",
  ],
  authors: [{ name: "Penginapan Arizky" }],
  creator: "Penginapan Arizky",
  publisher: "Penginapan Arizky",
  category: "travel",
  alternates: {
    canonical: "/",
    languages: {
      "id-ID": "/",
    },
  },
  openGraph: {
    title: "Penginapan Arizky - Villa & Penginapan Terbaik di Legon Pari Sawarna",
    description:
      "Villa mewah dan penginapan nyaman di Legon Pari Sawarna. Fasilitas lengkap, dekat pantai, cocok untuk keluarga dan rombongan.",
    type: "website",
    locale: "id_ID",
    url: "https://penginapanarizky.com/",
    siteName: "Penginapan Arizky",
    images: [
      {
        url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&h=630&fit=crop&crop=center",
        width: 1200,
        height: 630,
        alt: "Penginapan Arizky - Villa & Penginapan di Sawarna",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Penginapan Arizky - Villa & Penginapan di Legon Pari Sawarna",
    description:
      "Villa mewah dan penginapan nyaman di Legon Pari Sawarna. Fasilitas lengkap, dekat pantai, cocok untuk keluarga dan rombongan.",
    images: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&h=630&fit=crop&crop=center",
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      maxVideoPreview: -1,
      maxImagePreview: "large",
      maxSnippet: -1,
    },
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
