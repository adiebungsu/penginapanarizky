'use client'

import { useState, useEffect, use } from 'react'
import { Star, MapPin, Users, Wifi, Car, Coffee, Utensils, Waves, Mountain, Calendar, Clock, Phone, TreePine, Campfire } from 'lucide-react'
import Link from 'next/link'

interface CottageDetail {
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

// Data cottage yang tersedia
const cottageData: { [key: string]: CottageDetail } = {
  'cottage-alam': {
    id: 'cottage-alam',
    name: 'Cottage Alam Premium',
    description: 'Cottage unik dengan nuansa alam yang menenangkan dan pemandangan gunung yang memukau. Cocok untuk liburan yang tenang dan nyaman.',
    price: 1200000,
    capacity: 4,
    size: '80m²',
    bedrooms: 2,
    bathrooms: 1,
    amenities: ['Teras Alam', 'Dapur Mini', 'WiFi Gratis', 'AC', 'TV LED', 'Kamar Mandi Dalam', 'Area BBQ', 'Garden View', 'Parkir Mobil'],
    images: [
      'https://images.unsplash.com/photo-1464983953574-0892a716854b?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop'
    ],
    rating: 4.6,
    reviews: 78
  },
  'cottage-forest': {
    id: 'cottage-forest',
    name: 'Cottage Forest View',
    description: 'Cottage dengan pemandangan hutan yang asri dan suasana yang sangat tenang untuk relaksasi maksimal.',
    price: 900000,
    capacity: 3,
    size: '65m²',
    bedrooms: 1,
    bathrooms: 1,
    amenities: ['Teras Hutan', 'Dapur Mini', 'WiFi Gratis', 'AC', 'TV LED', 'Kamar Mandi Dalam', 'Area Camping', 'Forest View'],
    images: [
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1464983953574-0892a716854b?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop'
    ],
    rating: 4.5,
    reviews: 56
  },
  'cottage-riverside': {
    id: 'cottage-riverside',
    name: 'Cottage Riverside',
    description: 'Cottage dengan pemandangan sungai yang menenangkan dan suara air yang mengalir untuk pengalaman liburan yang unik.',
    price: 1100000,
    capacity: 5,
    size: '75m²',
    bedrooms: 2,
    bathrooms: 1,
    amenities: ['Teras Sungai', 'Dapur Lengkap', 'WiFi Gratis', 'AC', 'TV LED', 'Kamar Mandi Dalam', 'Area Memancing', 'River View', 'Parkir Mobil'],
    images: [
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1464983953574-0892a716854b?w=800&h=600&fit=crop'
    ],
    rating: 4.7,
    reviews: 92
  }
}

export default function CottageDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const [currentImage, setCurrentImage] = useState(0)
  const [activeTab, setActiveTab] = useState('gallery')
  const [isScrolled, setIsScrolled] = useState(false)

  const resolvedParams = use(params)
  const cottage = cottageData[resolvedParams.id]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!cottage) {
    return (
      <main className="min-h-screen bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Cottage Tidak Ditemukan</h1>
          <p className="text-lg text-gray-600 mb-8">Cottage yang Anda cari tidak tersedia.</p>
          <Link href="/villa-kamar" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300">
            Kembali ke Daftar Cottage
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
      <section className="relative h-96 bg-gradient-to-r from-orange-600 to-orange-800">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{cottage.name}</h1>
            <p className="text-xl text-orange-100 max-w-2xl mx-auto px-4">{cottage.description}</p>
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
                    ? 'bg-orange-600 text-white'
                    : 'text-gray-600 hover:text-orange-600 hover:bg-orange-50'
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
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Galeri Cottage</h2>
                <div className="space-y-4">
                  <div className="relative h-96 rounded-xl overflow-hidden">
                    <img
                      src={cottage.images[currentImage]}
                      alt={`${cottage.name} - Image ${currentImage + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex space-x-2 overflow-x-auto">
                    {cottage.images.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImage(index)}
                        className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                          currentImage === index ? 'border-orange-600' : 'border-gray-200'
                        }`}
                      >
                        <img
                          src={image}
                          alt={`${cottage.name} thumbnail ${index + 1}`}
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
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Informasi Cottage</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Deskripsi</h3>
                    <p className="text-gray-600 leading-relaxed">{cottage.description}</p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-center space-x-3">
                      <Users className="w-5 h-5 text-orange-600" />
                      <span className="text-gray-600">Kapasitas: {cottage.capacity} orang</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5 text-orange-600" />
                      <span className="text-gray-600">Ukuran: {cottage.size}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <TreePine className="w-5 h-5 text-orange-600" />
                      <span className="text-gray-600">Kamar Tidur: {cottage.bedrooms}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Waves className="w-5 h-5 text-orange-600" />
                      <span className="text-gray-600">Kamar Mandi: {cottage.bathrooms}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Amenities Tab */}
            {activeTab === 'amenities' && (
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Fasilitas Cottage</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {cottage.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                      <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
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
                      <Star key={i} className={`w-6 h-6 ${i < Math.floor(cottage.rating) ? 'fill-current' : ''}`} />
                    ))}
                  </div>
                  <div>
                    <span className="text-2xl font-bold text-gray-900">{cottage.rating}</span>
                    <span className="text-gray-600">/5</span>
                    <p className="text-sm text-gray-500">{cottage.reviews} ulasan</p>
                  </div>
                </div>
                <p className="text-gray-600">Belum ada ulasan untuk cottage ini. Jadilah yang pertama memberikan ulasan!</p>
              </div>
            )}
          </div>

          {/* Sidebar - Booking Form */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-32">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Pesan Cottage Ini</h3>
              <div className="space-y-4">
                <div className="text-center">
                  <span className="text-3xl font-bold text-orange-600">{formatPrice(cottage.price)}</span>
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
                    <span className="font-medium">{cottage.capacity} orang</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Kamar Tidur:</span>
                    <span className="font-medium">{cottage.bedrooms}</span>
                  </div>
                </div>

                <button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 px-6 rounded-lg font-medium transition-colors duration-300">
                  Pesan Sekarang
                </button>

                <div className="text-center">
                  <p className="text-sm text-gray-500">Butuh bantuan?</p>
                  <div className="flex items-center justify-center space-x-2 text-orange-600">
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
