'use client'

import { Star, Users, Wifi, Car, Coffee, Utensils, Waves, Mountain, Camera, Droplets, Phone, Clock } from 'lucide-react'

export default function Fasilitas() {
  const facilities = [
    {
      id: 1,
      name: 'WiFi Gratis',
      description: 'Koneksi internet cepat dan stabil di seluruh area penginapan untuk kenyamanan tamu.',
      icon: Wifi,
      image: 'https://i.imgur.com/foOva3S.jpeg',
      features: ['Kecepatan 100 Mbps', 'Coverage Seluruh Area', '24/7 Available', 'Password Aman'],
      rating: 4.8,
      reviewCount: 89
    },
    {
      id: 2,
      name: 'Parkir Luas',
      description: 'Area parkir yang aman dan luas untuk kendaraan roda dua dan roda empat.',
      icon: Car,
      image: 'https://i.imgur.com/XQKMbFZ.jpeg',
      features: ['Area Parkir 1000 m²', 'Security 24 Jam', 'Gratis untuk Tamu', 'Covered Parking'],
      rating: 4.9,
      reviewCount: 156
    },
    {
      id: 3,
      name: 'Restoran Premium',
      description: 'Restoran dengan menu lokal dan internasional serta pemandangan alam yang memukau.',
      icon: Utensils,
      image: 'https://i.imgur.com/kJQHIep.jpeg',
      features: ['Menu Lokal & Internasional', 'Chef Profesional', 'Pemandangan Alam', 'Room Service'],
      rating: 4.8,
      reviewCount: 234
    },
    {
      id: 4,
      name: 'Kolam Renang',
      description: 'Kolam renang infinity dengan pemandangan alam yang menenangkan.',
      icon: Waves,
      image: 'https://i.imgur.com/wBoC7ZA.jpeg',
      features: ['Infinity Pool', 'Pemandangan Gunung', 'Pool Towel', 'Pool Bar'],
      rating: 4.9,
      reviewCount: 178
    },
    {
      id: 5,
      name: 'Cafe & Lounge',
      description: 'Cafe nyaman untuk bersantai, bekerja, atau menikmati kopi premium.',
      icon: Coffee,
      image: 'https://i.imgur.com/acr10CW.jpeg',
      features: ['Kopi Premium', 'Wifi Zone', 'Power Outlet', 'Suasana Nyaman'],
      rating: 4.7,
      reviewCount: 145
    },
    {
      id: 6,
      name: 'Area Camping',
      description: 'Area camping dengan pemandangan gunung dan fasilitas lengkap.',
      icon: Mountain,
      image: 'https://i.imgur.com/kgKwgF5.jpeg',
      features: ['Tenda Tersedia', 'BBQ Area', 'Campfire', 'Pemandangan Malam'],
      rating: 4.6,
      reviewCount: 67
    }
  ]

  const additionalFacilities = [
    {
      id: 7,
      name: 'Lobby & Resepsionis',
      description: 'Lobby yang elegan dengan staff yang ramah dan siap melayani 24/7.',
      icon: Users,
      image: 'https://i.imgur.com/foOva3S.jpeg',
      features: ['Staff 24/7', 'Concierge Service', 'Tour Guide', 'Transport Service']
    },
    {
      id: 8,
      name: 'Kamar Mandi Umum',
      description: 'Kamar mandi umum yang bersih dan nyaman untuk tamu.',
      icon: Droplets,
      image: 'https://i.imgur.com/mokoWMJ.jpeg',
      features: ['Bersih & Nyaman', 'Hot Water', 'Toiletries', 'Hand Dryer']
    },
    {
      id: 9,
      name: 'Area Taman',
      description: 'Taman yang asri dengan berbagai jenis tanaman dan bunga.',
      icon: Camera,
      image: 'https://i.imgur.com/XjtxSUv.jpeg',
      features: ['Taman Asri', 'Gazebo', 'Jalan Setapak', 'Spot Foto']
    }
  ]

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Fasilitas</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Nikmati berbagai fasilitas modern yang membuat liburan Anda semakin nyaman
            </p>
          </div>
        </div>
      </section>

      {/* Main Facilities */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Fasilitas Unggulan
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Fasilitas-fasilitas utama yang membuat Penginapan Arizky menjadi pilihan terbaik untuk liburan Anda
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {facilities.map((facility) => (
              <div key={facility.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <div 
                    className="w-full h-full bg-cover bg-center bg-no-repeat transition-transform duration-300 hover:scale-110"
                    style={{ backgroundImage: `url(${facility.image})` }}
                  ></div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium text-gray-900">{facility.rating}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                      <facility.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-gray-900">{facility.name}</h3>
                      <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <span>{facility.rating} ({facility.reviewCount} ulasan)</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6 text-lg">{facility.description}</p>
                  
                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-medium text-gray-900 mb-3">Fitur Utama:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {facility.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2 text-sm text-gray-600">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Facilities */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Fasilitas Tambahan
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Fasilitas pendukung yang melengkapi pengalaman menginap Anda
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalFacilities.map((facility) => (
              <div key={facility.id} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <facility.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{facility.name}</h3>
                </div>
                
                <p className="text-gray-600 mb-4">{facility.description}</p>
                
                <div className="space-y-2">
                  {facility.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Hours */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-12 text-white">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Jam Operasional</h2>
              <p className="text-xl text-blue-100">
                Kami siap melayani Anda dengan jam operasional yang fleksibel
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Check-in</h3>
                <p className="text-blue-100">14:00 WIB</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Check-out</h3>
                <p className="text-blue-100">12:00 WIB</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Customer Service</h3>
                <p className="text-blue-100">24/7</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Utensils className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Restoran</h3>
                <p className="text-blue-100">06:00 - 22:00</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-12 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Siap untuk Mengalami Fasilitas Kami?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Pesan akomodasi Anda sekarang dan nikmati semua fasilitas premium yang kami sediakan
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="/booking" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-200">
                Pesan Sekarang
              </a>
              <a href="/kontak" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-200">
                Hubungi Kami
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
