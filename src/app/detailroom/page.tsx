'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { MapPin, Users, Star } from 'lucide-react'

const TABS = [
  { key: 'galeri', label: 'Galeri' },
  { key: 'informasi', label: 'Informasi' },
  { key: 'fasilitas', label: 'Fasilitas' },
  { key: 'ulasan', label: 'Ulasan' },
] as const

type TabKey = typeof TABS[number]['key']

function BookingForm() {
  return (
    <div className="mt-6">
      <h3 className="text-lg font-semibold mb-3">Booking Kamar Ini</h3>
      <form className="space-y-4 bg-blue-50 p-4 rounded-xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Nama</label>
            <input type="text" className="w-full border rounded px-3 py-2" placeholder="Nama Anda" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">No. HP</label>
            <input type="text" className="w-full border rounded px-3 py-2" placeholder="083877080088" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Check-in</label>
            <input type="date" className="w-full border rounded px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Check-out</label>
            <input type="date" className="w-full border rounded px-3 py-2" />
          </div>
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded font-semibold hover:bg-blue-700 transition">
          Pesan Sekarang
        </button>
      </form>
    </div>
  )
}

export default function DetailRoomPage() {
  const [activeTab, setActiveTab] = useState<TabKey>('galeri')
  const [previewIdx, setPreviewIdx] = useState(0)
  const [isScrolled, setIsScrolled] = useState(false)

  const room = {
    name: 'Kamar Deluxe Double',
    description:
      'Kamar nyaman dengan tempat tidur double, pencahayaan hangat, dan fasilitas modern untuk pengalaman menginap yang menyenangkan.',
    price: 'Rp 800.000',
    pricePerNight: 'per malam',
    capacity: '2 orang',
    size: '35 m²',
    rating: 4.7,
    reviewCount: 156,
    available: true,
    amenities: [
      'Tempat Tidur Double',
      'WiFi',
      'AC',
      'TV LED',
      'Kamar Mandi Dalam',
      'Balkon',
    ],
    images: [
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1280&h=720&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=1280&h=720&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=1280&h=720&fit=crop&crop=center',
    ],
  }

  const handleNavClick = (key: TabKey) => {
    setActiveTab(key)
    const el = document.getElementById(key)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  // Scrollspy effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const headerHeight = 120 // Reduced height to position tabs below navbar
      
      // Check if scrolled past header
      setIsScrolled(scrollY > headerHeight)

      // Find which section is currently in view
      const sections = TABS.map(tab => ({
        key: tab.key,
        element: document.getElementById(tab.key)
      })).filter(section => section.element)

      if (sections.length > 0) {
        const currentSection = sections.find(section => {
          if (!section.element) return false
          const rect = section.element.getBoundingClientRect()
          return rect.top <= 80 && rect.bottom >= 80 // Adjusted offset for better positioning
        })

        if (currentSection && currentSection.key !== activeTab) {
          setActiveTab(currentSection.key)
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [activeTab])

  return (
    <main className="min-h-screen bg-white">
      {/* Header mini */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-3 sm:px-4 py-6">
          <div className="text-sm opacity-90 mb-2">
            <Link href="/villa-kamar" className="hover:underline">Villa & Kamar</Link>
            <span className="mx-2">/</span>
            <span>{room.name}</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold">{room.name}</h1>
          <p className="text-white/80 mt-1 text-sm sm:text-base line-clamp-2">{room.description}</p>
          <div className="flex items-center gap-4 mt-3 text-sm">
            <div className="flex items-center gap-1"><Users className="w-4 h-4" />{room.capacity}</div>
            <div className="flex items-center gap-1"><MapPin className="w-4 h-4" />{room.size}</div>
            <div className="flex items-center gap-1 text-yellow-300">
              <Star className="w-4 h-4 fill-current" />
              {room.rating} ({room.reviewCount})
            </div>
          </div>
        </div>
      </section>

      {/* Quick Navigation (scroll to sections) - Floating when scrolled */}
      <div className={`z-50 transition-all duration-300 ${
        isScrolled 
          ? 'fixed top-20 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-lg border-b' 
          : 'sticky top-0 bg-white border-b'
      }`}>
        <div className="max-w-4xl mx-auto grid grid-cols-4 text-[11px] sm:text-xs font-semibold text-center">
          {TABS.map((t) => (
            <button
              key={t.key}
              onClick={() => handleNavClick(t.key)}
              className={`px-2 py-3 border-b-2 whitespace-nowrap transition-colors ${
                activeTab === t.key
                  ? 'border-blue-600 text-blue-600 bg-blue-50'
                  : 'border-transparent text-gray-600 hover:text-blue-600'
              }`}
              style={{ minWidth: 0, overflow: 'hidden', textOverflow: 'ellipsis' }}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {/* Add padding when tabs are floating to prevent content jump */}
      {isScrolled && <div className="h-12"></div>}

      <section className="max-w-4xl mx-auto px-3 sm:px-4 py-6 space-y-12">
        {/* Galeri */}
        <div id="galeri">
          <h2 className="text-xl font-bold mb-3">Galeri</h2>
          <div className="w-full aspect-video bg-gray-100 rounded-xl overflow-hidden mb-3">
            <img
              src={room.images[previewIdx]}
              alt="Preview gambar kamar"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto no-scrollbar">
            {room.images.map((src, idx) => (
              <button
                key={src}
                onClick={() => setPreviewIdx(idx)}
                className={`rounded border-2 shrink-0 ${
                  previewIdx === idx ? 'border-blue-600' : 'border-transparent'
                }`}
                aria-label={`Tampilkan gambar ${idx + 1}`}
              >
                <img src={src} alt="thumb" className="w-20 h-14 object-cover rounded" />
              </button>
            ))}
          </div>
        </div>

        {/* Informasi */}
        <div id="informasi">
          <h2 className="text-xl font-bold mb-3">Informasi</h2>
          <div className="space-y-4">
            <div className="flex items-start justify-between">
              <div>
                <div className="text-2xl font-bold text-blue-600">{room.price}</div>
                <div className="text-sm text-gray-500">{room.pricePerNight}</div>
              </div>
              <Link
                href="#"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById('booking-form')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg font-semibold"
              >
                Pesan Sekarang
              </Link>
            </div>
            <p className="text-gray-700 leading-relaxed">{room.description}</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm">
              <div className="bg-gray-50 rounded-lg p-3">
                <div className="text-gray-500">Kapasitas</div>
                <div className="font-semibold">{room.capacity}</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-3">
                <div className="text-gray-500">Luas</div>
                <div className="font-semibold">{room.size}</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-3">
                <div className="text-gray-500">Rating</div>
                <div className="font-semibold">{room.rating} ({room.reviewCount})</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-3">
                <div className="text-gray-500">Status</div>
                <div className="font-semibold">{room.available ? 'Tersedia' : 'Tidak tersedia'}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Fasilitas */}
        <div id="fasilitas">
          <h2 className="text-xl font-bold mb-3">Fasilitas</h2>
          <div className="flex flex-wrap gap-2">
            {room.amenities.map((a) => (
              <span key={a} className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                {a}
              </span>
            ))}
          </div>
        </div>

        {/* Ulasan */}
        <div id="ulasan">
          <h2 className="text-xl font-bold mb-3">Ulasan</h2>
          <div className="space-y-4">
            {[1, 2].map((i) => (
              <div key={i} className="bg-gray-50 p-4 rounded-xl">
                <div className="flex items-center justify-between">
                  <div className="font-semibold">Tamu {i}</div>
                  <div className="text-yellow-400">★★★★★</div>
                </div>
                <p className="text-sm text-gray-600 mt-1">
                  Pengalaman menginap yang menyenangkan. Kamar bersih dan fasilitas lengkap.
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Single Booking Form at the bottom */}
        <div id="booking-form" className="border-t pt-8">
          <BookingForm />
        </div>
      </section>
    </main>
  )
}
