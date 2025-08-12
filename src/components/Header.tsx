'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { Menu, X, Phone, MapPin, Mail } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [showInfoBar, setShowInfoBar] = useState(true)
  const lastScrollY = useRef(0)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      if (window.scrollY < 10) {
        setShowInfoBar(true)
        lastScrollY.current = window.scrollY
        return
      }
      if (window.scrollY < lastScrollY.current) {
        setShowInfoBar(true)
      } else if (window.scrollY > lastScrollY.current) {
        setShowInfoBar(false)
      }
      lastScrollY.current = window.scrollY
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigation = [
    { name: 'Beranda', href: '/' },
    { name: 'Villa & Kamar', href: '/villa-kamar' },
    { name: 'Fasilitas', href: '/fasilitas' },
    { name: 'Galeri', href: '/galeri' },
    { name: 'Artikel', href: '/artikel' },
    { name: 'Kontak', href: '/kontak' }
  ]

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top Bar */}
      <div className={`${showInfoBar ? '' : 'hidden'} bg-blue-900 text-white py-2 transition-all duration-300`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>083877080088</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>info@penginapanarizky.com</span>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-2">
              <MapPin className="w-4 h-4" />
              <span>Jl. Raya Wisata No. 123, Malang</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <img src="/images/arizky 1.png" alt="Logo Arizky" className="w-12 h-12 rounded-lg object-cover" />
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Penginapan Arizky</h1>
              <p className="text-sm text-gray-600">Tempat Liburan Terbaik</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="/villa-kamar"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-300"
            >
              Pesan Sekarang
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/villa-kamar"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-300 text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Pesan Sekarang
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
