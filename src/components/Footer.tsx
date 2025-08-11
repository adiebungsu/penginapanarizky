import Link from 'next/link'
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Youtube } from 'lucide-react'

export default function Footer() {
  // Use static year to avoid hydration mismatch
  const currentYear = 2025

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Penginapan Arizky</h3>
                <p className="text-gray-400 text-sm">Tempat Liburan Terbaik</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Penginapan Arizky adalah destinasi liburan premium yang menggabungkan kenyamanan modern 
              dengan keindahan alam yang memukau. Nikmati pengalaman liburan yang tak terlupakan.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300" aria-label="YouTube">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Tautan Cepat</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="/villa-kamar" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Villa & Kamar
                </Link>
              </li>
              <li>
                <Link href="/fasilitas" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Fasilitas
                </Link>
              </li>
              <li>
                <Link href="/galeri" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Galeri
                </Link>
              </li>
              <li>
                <Link href="/booking" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Booking
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Kontak</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-blue-400" />
                <span className="text-gray-300">+62 812-3456-7890</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-blue-400" />
                <span className="text-gray-300">info@penginapanarizky.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-blue-400 mt-1" />
                <span className="text-gray-300">
                  Jl. Raya Wisata No. 123<br />
                  Malang, Jawa Timur 65151
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Penginapan Arizky. Semua hak dilindungi.
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <Link href="/privacy" className="hover:text-white transition-colors duration-300">
                Kebijakan Privasi
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors duration-300">
                Syarat & Ketentuan
              </Link>
              <Link href="/sitemap" className="hover:text-white transition-colors duration-300">
                Peta Situs
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
