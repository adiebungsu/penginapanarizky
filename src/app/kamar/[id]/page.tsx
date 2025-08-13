'use client'

import { useState, useEffect, use } from 'react'
import { Star, MapPin, Users, Wifi, Car, Coffee, Utensils, Waves, Mountain, Calendar, Clock, Phone } from 'lucide-react'
import Link from 'next/link'

interface RoomDetail {
  id: string
  name: string
  description: string
  price: number
  capacity: number
  size: string
  amenities: string[]
  images: string[]
  rating: number
  reviews: number
}

// Data kamar yang tersedia
const roomData: { [key: string]: RoomDetail } = {
  'kamar-deluxe': {
    id: 'kamar-deluxe',
    name: 'Kamar Deluxe',
    description: 'Kamar nyaman dengan pemandangan alam yang indah, dilengkapi dengan fasilitas modern untuk kenyamanan maksimal.',
    price: 800000,
    capacity: 2,
    size: '32m²',
    amenities: ['AC', 'TV LED 32"', 'WiFi Gratis', 'Kamar Mandi Dalam', 'Air Panas', 'Mini Bar', 'Coffee Maker'],
    images: [
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&h=600&fit=crop'
    ],
    rating: 4.8,
    reviews: 156
  },
  'kamar-superior': {
    id: 'kamar-superior',
    name: 'Kamar Superior',
    description: 'Kamar superior dengan desain modern dan nyaman, cocok untuk keluarga kecil.',
    price: 650000,
    capacity: 3,
    size: '28m²',
    amenities: ['AC', 'TV LED 28"', 'WiFi Gratis', 'Kamar Mandi Dalam', 'Air Panas', 'Balkon'],
    images: [
      'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&h=600&fit=crop'
    ],
    rating: 4.6,
    reviews: 89
  },
  'kamar-standard': {
    id: 'kamar-standard',
    name: 'Kamar Standard',
    description: 'Kamar standard yang bersih dan nyaman dengan harga terjangkau.',
    price: 500000,
    capacity: 2,
    size: '24m²',
    amenities: ['AC', 'TV LED 24"', 'WiFi Gratis', 'Kamar Mandi Dalam', 'Air Panas'],
    images: [
      'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=600&fit=crop'
    ],
    rating: 4.4,
    reviews: 203
  }
}

export default function RoomDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const [currentImage, setCurrentImage] = useState(0)
  const [activeSection, setActiveSection] = useState('gallery')
  const [isScrolled, setIsScrolled] = useState(false)

  const resolvedParams = use(params)
  const room = roomData[resolvedParams.id]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Scroll spy untuk quick navigation
  useEffect(() => {
    const ids = ['gallery', 'information', 'amenities', 'reviews']
    const observers: IntersectionObserver[] = []
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id)
        },
        { rootMargin: '-40% 0px -50% 0px', threshold: 0.1 }
      )
      observer.observe(el)
      observers.push(observer)
    })
    return () => observers.forEach((o) => o.disconnect())
  }, [])

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  if (!room) {
    return (
      <main className="min-h-screen bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="text-6xl mb-4">🏨</div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Kamar Tidak Ditemukan</h1>
            <p className="text-lg text-gray-600 mb-8">Kamar dengan ID "{resolvedParams.id}" tidak tersedia dalam sistem kami.</p>
            <div className="space-y-4">
              <Link href="/villa-kamar" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300">
                Kembali ke Daftar Kamar
              </Link>
              <div className="text-sm text-gray-500">
                <p>Kamar yang tersedia:</p>
                <ul className="mt-2 space-y-1">
                  <li>• Kamar Deluxe</li>
                  <li>• Kamar Superior</li>
                  <li>• Kamar Standard</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    )
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(price)
  }

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{room.name}</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto px-4">{room.description}</p>
          </div>
        </div>
      </section>

      {/* Quick Navigation Tabs */}
      <div className={`z-50 transition-all duration-300 ${
        isScrolled 
          ? 'fixed top-20 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-lg border-b' 
          : 'sticky top-0 bg-white border-b'
      }`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex overflow-x-auto space-x-8 py-4">
            {[
              { id: 'gallery', label: 'Galeri' },
              { id: 'information', label: 'Informasi' },
              { id: 'amenities', label: 'Fasilitas' },
              { id: 'reviews', label: 'Ulasan' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`whitespace-nowrap px-4 py-2 rounded-lg font-medium transition-colors duration-300 ${
                  activeSection === item.id
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Galeri */}
            <div id="gallery" className="bg-white rounded-2xl shadow-lg p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Galeri Kamar</h2>
                <div className="space-y-4">
                  <div className="relative h-96 rounded-xl overflow-hidden">
                    <img
                      src={room.images[currentImage]}
                      alt={`${room.name} - Image ${currentImage + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex space-x-2 overflow-x-auto">
                    {room.images.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImage(index)}
                        className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                          currentImage === index ? 'border-blue-600' : 'border-gray-200'
                        }`}
                      >
                        <img
                          src={image}
                          alt={`${room.name} thumbnail ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </div>

            {/* Informasi */}
            <div id="information" className="bg-white rounded-2xl shadow-lg p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Informasi Kamar</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Deskripsi</h3>
                    <p className="text-gray-600 leading-relaxed">{room.description}</p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-center space-x-3">
                      <Users className="w-5 h-5 text-blue-600" />
                      <span className="text-gray-600">Kapasitas: {room.capacity} orang</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5 text-blue-600" />
                      <span className="text-gray-600">Ukuran: {room.size}</span>
                    </div>
                  </div>
                </div>
              </div>

            {/* Fasilitas */}
            <div id="amenities" className="bg-white rounded-2xl shadow-lg p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Fasilitas Kamar</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {room.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-gray-700">{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>

            {/* Ulasan */}
            <div id="reviews" className="bg-white rounded-2xl shadow-lg p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Ulasan Tamu</h2>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-6 h-6 ${i < Math.floor(room.rating) ? 'fill-current' : ''}`} />
                    ))}
                  </div>
                  <div>
                    <span className="text-2xl font-bold text-gray-900">{room.rating}</span>
                    <span className="text-gray-600">/5</span>
                    <p className="text-sm text-gray-500">{room.reviews} ulasan</p>
                  </div>
                </div>
                <p className="text-gray-600">Belum ada ulasan untuk kamar ini. Jadilah yang pertama memberikan ulasan!</p>
              </div>
          </div>

          {/* Sidebar - Booking Form */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-32">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Pesan Kamar Ini</h3>
              <div className="space-y-4">
                <div className="text-center">
                  <span className="text-3xl font-bold text-blue-600">{formatPrice(room.price)}</span>
                  <p className="text-gray-600">per malam</p>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Check-in:</span>
                    <span className="font-medium">14:00</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Check-out:</span>
                    <span className="font-medium">12:00</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Kapasitas:</span>
                    <span className="font-medium">{room.capacity} orang</span>
                  </div>
                </div>

                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-medium transition-colors duration-300">
                  Pesan Sekarang
                </button>

                <div className="text-center">
                  <p className="text-sm text-gray-500">Butuh bantuan?</p>
                  <div className="flex items-center justify-center space-x-2 text-blue-600">
                    <Phone className="w-4 h-4" />
                    <span className="text-sm">083877080088</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
