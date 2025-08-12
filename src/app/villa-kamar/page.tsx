'use client'

import { useState } from 'react'
import { Star, MapPin, Users, Wifi, Car, Coffee, Utensils, Waves, Mountain, Camera, Bed, Droplets, Tv, Airplay } from 'lucide-react'
import Link from 'next/link'

export default function VillaKamar() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'Semua' },
    { id: 'villa', name: 'Villa Premium' },
    { id: 'kamar', name: 'Kamar Standard' },
    { id: 'cottage', name: 'Cottage Alam' }
  ]

  const accommodations = [
    {
      id: 1,
      category: 'villa',
      name: 'Villa Premium Deluxe',
      description: 'Villa mewah dengan kolam renang pribadi, pemandangan gunung, dan fasilitas lengkap untuk keluarga besar.',
      price: 'Rp 2.500.000',
      pricePerNight: 'per malam',
      capacity: '6-8 orang',
      size: '150 m²',
      amenities: ['Kolam Renang Pribadi', 'Teras Luas', 'Dapur Lengkap', 'WiFi', 'AC', 'TV LED', 'Kamar Mandi Dalam'],
      images: [
        'https://i.imgur.com/XQKMbFZ.jpeg',
        'https://i.imgur.com/wBoC7ZA.jpeg',
        'https://i.imgur.com/acr10CW.jpeg'
      ],
      rating: 4.9,
      reviewCount: 127,
      available: true
    },
    {
      id: 2,
      category: 'villa',
      name: 'Villa Premium Standard',
      description: 'Villa nyaman dengan pemandangan alam yang memukau, cocok untuk keluarga kecil.',
      price: 'Rp 2.000.000',
      pricePerNight: 'per malam',
      capacity: '4-6 orang',
      size: '120 m²',
      amenities: ['Teras Pribadi', 'Dapur Mini', 'WiFi', 'AC', 'TV LED', 'Kamar Mandi Dalam'],
      images: [
        'https://i.imgur.com/0NEMnoK.jpeg',
        'https://i.imgur.com/kgKwgF5.jpeg'
      ],
      rating: 4.8,
      reviewCount: 89,
      available: true
    },
    {
      id: 3,
      category: 'kamar',
      name: 'Kamar Deluxe Double',
      description: 'Kamar nyaman dengan tempat tidur double dan fasilitas modern untuk pasangan.',
      price: 'Rp 800.000',
      pricePerNight: 'per malam',
      capacity: '2 orang',
      size: '35 m²',
      amenities: ['Tempat Tidur Double', 'WiFi', 'AC', 'TV LED', 'Kamar Mandi Dalam', 'Balkon'],
      images: [
        'https://i.imgur.com/mokoWMJ.jpeg',
        'https://i.imgur.com/XjtxSUv.jpeg'
      ],
      rating: 4.7,
      reviewCount: 156,
      available: true
    },
    {
      id: 4,
      category: 'kamar',
      name: 'Kamar Standard Twin',
      description: 'Kamar dengan dua tempat tidur single, ideal untuk teman atau keluarga kecil.',
      price: 'Rp 600.000',
      pricePerNight: 'per malam',
      capacity: '2 orang',
      size: '30 m²',
      amenities: ['2 Tempat Tidur Single', 'WiFi', 'AC', 'TV LED', 'Kamar Mandi Dalam'],
      images: [
        'https://i.imgur.com/kJQHIep.jpeg',
        'https://i.imgur.com/foOva3S.jpeg'
      ],
      rating: 4.6,
      reviewCount: 98,
      available: true
    },
    {
      id: 5,
      category: 'cottage',
      name: 'Cottage Alam Premium',
      description: 'Cottage unik dengan nuansa alam yang menenangkan dan pemandangan gunung yang memukau.',
      price: 'Rp 1.200.000',
      pricePerNight: 'per malam',
      capacity: '4-6 orang',
      size: '80 m²',
      amenities: ['Teras Alam', 'Dapur Mini', 'WiFi', 'AC', 'TV LED', 'Kamar Mandi Dalam', 'Area BBQ'],
      images: [
        'https://i.imgur.com/wBoC7ZA.jpeg',
        'https://i.imgur.com/acr10CW.jpeg',
        'https://i.imgur.com/kgKwgF5.jpeg'
      ],
      rating: 4.9,
      reviewCount: 73,
      available: true
    },
    {
      id: 6,
      category: 'cottage',
      name: 'Cottage Alam Standard',
      description: 'Cottage sederhana dengan suasana alam yang asri dan nyaman untuk beristirahat.',
      price: 'Rp 800.000',
      pricePerNight: 'per malam',
      capacity: '2-4 orang',
      size: '50 m²',
      amenities: ['Teras Kecil', 'WiFi', 'AC', 'TV LED', 'Kamar Mandi Dalam'],
      images: [
        'https://i.imgur.com/XQKMbFZ.jpeg',
        'https://i.imgur.com/0NEMnoK.jpeg'
      ],
      rating: 4.5,
      reviewCount: 45,
      available: true
    }
  ]

  const filteredAccommodations = selectedCategory === 'all' 
    ? accommodations 
    : accommodations.filter(acc => acc.category === selectedCategory)

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Villa & Kamar</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Temukan akomodasi yang sempurna untuk liburan Anda di Penginapan Arizky
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Accommodations Grid */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredAccommodations.map((accommodation) => (
              <div key={accommodation.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                {/* Image Gallery */}
                <div className="relative h-64 overflow-hidden">
                  <div 
                    className="w-full h-full bg-cover bg-center bg-no-repeat transition-transform duration-300 hover:scale-110"
                    style={{ backgroundImage: `url(${accommodation.images[0]})` }}
                  ></div>
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      accommodation.available 
                        ? 'bg-green-500 text-white' 
                        : 'bg-red-500 text-white'
                    }`}>
                      {accommodation.available ? 'Tersedia' : 'Tidak Tersedia'}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium text-gray-900">{accommodation.rating}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-semibold text-gray-900">{accommodation.name}</h3>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-blue-600">{accommodation.price}</div>
                      <div className="text-sm text-gray-500">{accommodation.pricePerNight}</div>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4 line-clamp-2">{accommodation.description}</p>

                  {/* Info Icons */}
                  <div className="flex items-center space-x-4 mb-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4 text-blue-600" />
                      <span>{accommodation.capacity}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4 text-blue-600" />
                      <span>{accommodation.size}</span>
                    </div>
                  </div>

                  {/* Amenities */}
                  <div className="mb-6">
                    <h4 className="font-medium text-gray-900 mb-2">Fasilitas:</h4>
                    <div className="flex flex-wrap gap-2">
                      {accommodation.amenities.slice(0, 4).map((amenity, index) => (
                        <span key={index} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                          {amenity}
                        </span>
                      ))}
                      {accommodation.amenities.length > 4 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                          +{accommodation.amenities.length - 4} lagi
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Rating & Reviews */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`w-4 h-4 ${i < Math.floor(accommodation.rating) ? 'fill-current' : ''}`} 
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">
                        {accommodation.rating} ({accommodation.reviewCount} ulasan)
                      </span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="flex space-x-3">
                    <Link
                      href={`/${accommodation.category}/${accommodation.category === 'villa' ? 'villa-premium' : accommodation.category === 'kamar' ? 'kamar-deluxe' : 'cottage-alam'}`}
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center py-3 px-4 rounded-lg font-medium transition-colors duration-300"
                    >
                      Pesan Sekarang
                    </Link>
                    <Link
                      href={`/${accommodation.category}/${accommodation.category === 'villa' ? 'villa-premium' : accommodation.category === 'kamar' ? 'kamar-deluxe' : 'cottage-alam'}`}
                      className="px-4 py-3 border border-blue-600 text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition-colors duration-300"
                    >
                      Detail
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-12 text-white text-center">
            <h2 className="text-4xl font-bold mb-4">
              Butuh Bantuan Memilih?
            </h2>
            <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Tim kami siap membantu Anda memilih akomodasi yang paling sesuai dengan kebutuhan dan budget Anda
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/kontak" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-colors duration-200">
                Hubungi Kami
              </Link>
              <Link href="/fasilitas" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-4 px-8 rounded-lg transition-colors duration-200">
                Lihat Fasilitas
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
