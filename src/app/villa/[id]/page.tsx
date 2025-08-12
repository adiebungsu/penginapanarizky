'use client'

import { useState, useEffect, use } from 'react'
import { Star, MapPin, Users, Wifi, Car, Coffee, Utensils, Waves, Mountain, Calendar, Clock, Phone, Pool, TreePine } from 'lucide-react'
import Link from 'next/link'

interface VillaDetail {
  id: string
  name: string
  description: string
  price: number
  capacity: number
  size: string
  bedrooms: number
  bathrooms: number
  amenities: string[]
  images: string[]
  rating: number
  reviews: number
}

// Data villa yang tersedia
const villaData: { [key: string]: VillaDetail } = {
  'villa-premium': {
    id: 'villa-premium',
    name: 'Villa Premium',
    description: 'Villa mewah dengan kolam renang pribadi dan pemandangan alam yang memukau. Dilengkapi dengan fasilitas lengkap untuk liburan keluarga yang nyaman.',
    price: 2500000,
    capacity: 6,
    size: '150m²',
    bedrooms: 3,
    bathrooms: 2,
    amenities: ['Kolam Renang Pribadi', 'AC di Semua Ruangan', 'TV LED 55"', 'WiFi Gratis', 'Dapur Lengkap', 'Balkon Luas', 'Parkir Mobil', 'Garden View'],
    images: [
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1464983953574-0892a716854b?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop'
    ],
    rating: 4.9,
    reviews: 89
  },
  'villa-deluxe': {
    id: 'villa-deluxe',
    name: 'Villa Deluxe',
    description: 'Villa deluxe dengan desain modern dan nyaman, cocok untuk keluarga besar dengan fasilitas premium.',
    price: 1800000,
    capacity: 8,
    size: '120m²',
    bedrooms: 4,
    bathrooms: 3,
    amenities: ['Kolam Renang', 'AC di Semua Ruangan', 'TV LED 50"', 'WiFi Gratis', 'Dapur Modern', 'Teras Luas', 'Parkir 2 Mobil', 'Mountain View'],
    images: [
      'https://images.unsplash.com/photo-1464983953574-0892a716854b?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop'
    ],
    rating: 4.7,
    reviews: 67
  },
  'villa-standard': {
    id: 'villa-standard',
    name: 'Villa Standard',
    description: 'Villa standard yang nyaman dengan harga terjangkau, cocok untuk liburan keluarga kecil.',
    price: 1200000,
    capacity: 4,
    size: '80m²',
    bedrooms: 2,
    bathrooms: 1,
    amenities: ['AC di Semua Ruangan', 'TV LED 42"', 'WiFi Gratis', 'Dapur Sederhana', 'Teras', 'Parkir Mobil', 'Garden View'],
    images: [
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1464983953574-0892a716854b?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop'
    ],
    rating: 4.5,
    reviews: 45
  }
}

export default function VillaDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const [currentImage, setCurrentImage] = useState(0)
  const [activeTab, setActiveTab] = useState('gallery')
  const [isScrolled, setIsScrolled] = useState(false)

  const resolvedParams = use(params)
  const villa = villaData[resolvedParams.id]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!villa) {
    return (
      <main className="min-h-screen bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Villa Tidak Ditemukan</h1>
          <p className="text-lg text-gray-600 mb-8">Villa yang Anda cari tidak tersedia.</p>
          <Link href="/villa-kamar" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300">
            Kembali ke Daftar Villa
          </Link>
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
      <section className="relative h-96 bg-gradient-to-r from-green-600 to-green-800">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{villa.name}</h1>
            <p className="text-xl text-green-100 max-w-2xl mx-auto px-4">{villa.description}</p>
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
            {['gallery', 'information', 'amenities', 'reviews'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`whitespace-nowrap px-4 py-2 rounded-lg font-medium transition-colors duration-300 ${
                  activeTab === tab
                    ? 'bg-green-600 text-white'
                    : 'text-gray-600 hover:text-green-600 hover:bg-green-50'
                }`}
              >
                {tab === 'gallery' && 'Galeri'}
                {tab === 'information' && 'Informasi'}
                {tab === 'amenities' && 'Fasilitas'}
                {tab === 'reviews' && 'Ulasan'}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Gallery Tab */}
            {activeTab === 'gallery' && (
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Galeri Villa</h2>
                <div className="space-y-4">
                  <div className="relative h-96 rounded-xl overflow-hidden">
                    <img
                      src={villa.images[currentImage]}
                      alt={`${villa.name} - Image ${currentImage + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex space-x-2 overflow-x-auto">
                    {villa.images.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImage(index)}
                        className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                          currentImage === index ? 'border-green-600' : 'border-gray-200'
                        }`}
                      >
                        <img
                          src={image}
                          alt={`${villa.name} thumbnail ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Information Tab */}
            {activeTab === 'information' && (
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Informasi Villa</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Deskripsi</h3>
                    <p className="text-gray-600 leading-relaxed">{villa.description}</p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-center space-x-3">
                      <Users className="w-5 h-5 text-green-600" />
                      <span className="text-gray-600">Kapasitas: {villa.capacity} orang</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5 text-green-600" />
                      <span className="text-gray-600">Ukuran: {villa.size}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <TreePine className="w-5 h-5 text-green-600" />
                      <span className="text-gray-600">Kamar Tidur: {villa.bedrooms}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Waves className="w-5 h-5 text-green-600" />
                      <span className="text-gray-600">Kamar Mandi: {villa.bathrooms}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Amenities Tab */}
            {activeTab === 'amenities' && (
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Fasilitas Villa</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {villa.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      <span className="text-gray-700">{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Reviews Tab */}
            {activeTab === 'reviews' && (
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Ulasan Tamu</h2>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-6 h-6 ${i < Math.floor(villa.rating) ? 'fill-current' : ''}`} />
                    ))}
                  </div>
                  <div>
                    <span className="text-2xl font-bold text-gray-900">{villa.rating}</span>
                    <span className="text-gray-600">/5</span>
                    <p className="text-sm text-gray-500">{villa.reviews} ulasan</p>
                  </div>
                </div>
                <p className="text-gray-600">Belum ada ulasan untuk villa ini. Jadilah yang pertama memberikan ulasan!</p>
              </div>
            )}
          </div>

          {/* Sidebar - Booking Form */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-32">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Pesan Villa Ini</h3>
              <div className="space-y-4">
                <div className="text-center">
                  <span className="text-3xl font-bold text-green-600">{formatPrice(villa.price)}</span>
                  <p className="text-gray-600">per malam</p>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Check-in:</span>
                    <span className="font-medium">15:00</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Check-out:</span>
                    <span className="font-medium">11:00</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Kapasitas:</span>
                    <span className="font-medium">{villa.capacity} orang</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Kamar Tidur:</span>
                    <span className="font-medium">{villa.bedrooms}</span>
                  </div>
                </div>

                <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg font-medium transition-colors duration-300">
                  Pesan Sekarang
                </button>

                <div className="text-center">
                  <p className="text-sm text-gray-500">Butuh bantuan?</p>
                  <div className="flex items-center justify-center space-x-2 text-green-600">
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
