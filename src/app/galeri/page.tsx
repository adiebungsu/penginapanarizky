'use client'

import { useState } from 'react'
import { Camera, MapPin, Star, Heart, Share2, Download } from 'lucide-react'

interface GalleryImage {
  id: number
  title: string
  description: string
  image: string
  category: string
  location: string
  rating: number
  likes: number
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Galeri Foto Penginapan Arizky',
  description: 'Koleksi foto villa, kamar, fasilitas, dan pemandangan alam Penginapan Arizky di Sawarna.',
}

export default function Galeri() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)

  const categories = [
    { id: 'all', name: 'Semua' },
    { id: 'villa', name: 'Villa' },
    { id: 'kamar', name: 'Kamar' },
    { id: 'fasilitas', name: 'Fasilitas' },
    { id: 'alam', name: 'Pemandangan Alam' }
  ]

  const galleryImages = [
    {
      id: 1,
      category: 'villa',
      title: 'Villa Premium Deluxe',
      description: 'Villa mewah dengan pemandangan gunung yang memukau',
      image: 'https://i.imgur.com/XQKMbFZ.jpeg',
      location: 'Area Villa Premium',
      rating: 4.9,
      likes: 156
    },
    {
      id: 2,
      category: 'villa',
      title: 'Villa Premium Standard',
      description: 'Villa nyaman dengan teras pribadi dan suasana yang tenang',
      image: 'https://i.imgur.com/0NEMnoK.jpeg',
      location: 'Area Villa Premium',
      rating: 4.8,
      likes: 134
    },
    {
      id: 3,
      category: 'kamar',
      title: 'Kamar Deluxe Double',
      description: 'Kamar nyaman dengan tempat tidur double dan fasilitas modern',
      image: 'https://i.imgur.com/mokoWMJ.jpeg',
      location: 'Lantai 2',
      rating: 4.7,
      likes: 98
    },
    {
      id: 4,
      category: 'kamar',
      title: 'Kamar Standard Twin',
      description: 'Kamar dengan dua tempat tidur single untuk kenyamanan maksimal',
      image: 'https://i.imgur.com/XjtxSUv.jpeg',
      location: 'Lantai 1',
      rating: 4.6,
      likes: 87
    },
    {
      id: 5,
      category: 'fasilitas',
      title: 'Area Bersantai',
      description: 'Area bersantai dengan suasana alam dan kenyamanan untuk keluarga',
      image: 'https://i.imgur.com/kJQHIep.jpeg',
      location: 'Lantai Dasar',
      rating: 4.8,
      likes: 112
    },
    {
      id: 6,
      category: 'fasilitas',
      title: 'Lobby Elegan',
      description: 'Lobby yang nyaman dengan desain modern dan keramahan staff',
      image: 'https://i.imgur.com/foOva3S.jpeg',
      location: 'Lantai Dasar',
      rating: 4.9,
      likes: 145
    },
    {
      id: 7,
      category: 'alam',
      title: 'Pemandangan Gunung',
      description: 'Pemandangan gunung yang indah dari area penginapan',
      image: 'https://i.imgur.com/wBoC7ZA.jpeg',
      location: 'Area Teras',
      rating: 5.0,
      likes: 203
    },
    {
      id: 8,
      category: 'alam',
      title: 'Suasana Alam',
      description: 'Suasana alam yang menenangkan dan asri',
      image: 'https://i.imgur.com/acr10CW.jpeg',
      location: 'Area Taman',
      rating: 4.9,
      likes: 178
    },
    {
      id: 9,
      category: 'alam',
      title: 'Keindahan Alam',
      description: 'Keindahan alam yang memukau di sekitar penginapan',
      image: 'https://i.imgur.com/kgKwgF5.jpeg',
      location: 'Area Belakang',
      rating: 4.8,
      likes: 167
    }
  ]

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory)

  const openImageModal = (image: GalleryImage) => {
    setSelectedImage(image)
  }

  const closeImageModal = () => {
    setSelectedImage(null)
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Galeri Foto</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Jelajahi keindahan Penginapan Arizky melalui koleksi foto kami
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

      {/* Gallery Grid */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredImages.map((image) => (
              <div 
                key={image.id} 
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group"
                onClick={() => openImageModal(image)}
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={image.image}
                    alt={image.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                      <div className="bg-white/90 backdrop-blur-sm rounded-full p-3">
                        <Camera className="w-6 h-6 text-blue-600" />
                      </div>
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-blue-600 text-white text-sm rounded-full font-medium">
                      {categories.find(cat => cat.id === image.category)?.name}
                    </span>
                  </div>

                  {/* Rating */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium text-gray-900">{image.rating}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{image.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{image.description}</p>
                  
                  {/* Location & Likes */}
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4 text-blue-600" />
                      <span>{image.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Heart className="w-4 h-4 text-red-500" />
                      <span>{image.likes}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={closeImageModal}
        >
            <div className="relative max-w-6xl max-h-[90svh] bg-white rounded-2xl overflow-hidden">
            {/* Close Button */}
            <button
              onClick={closeImageModal}
              className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors duration-200"
              aria-label="Tutup modal"
            >
              <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Image */}
            <div className="relative">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[85svh] object-contain bg-black"
              />
            </div>

            {/* Image Info */}
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{selectedImage.title}</h3>
                  <p className="text-gray-600 mb-3">{selectedImage.description}</p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4 text-blue-600" />
                      <span>{selectedImage.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span>{selectedImage.rating} ({selectedImage.likes} suka)</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center space-x-3">
                <button className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-200">
                  <Heart className="w-4 h-4" />
                  <span>Sukai</span>
                </button>
                <button className="flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg transition-colors duration-200">
                  <Share2 className="w-4 h-4" />
                  <span>Bagikan</span>
                </button>
                <button className="flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg transition-colors duration-200">
                  <Download className="w-4 h-4" />
                  <span>Download</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-12 text-white text-center">
            <h2 className="text-4xl font-bold mb-4">
              Ingin Melihat Lebih Banyak?
            </h2>
            <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Kunjungi Penginapan Arizky secara langsung untuk merasakan pengalaman yang tak terlupakan
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                          <a href="/detailroom" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-colors duration-200">
              Pesan Sekarang
            </a>
              <a href="/kontak" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-4 px-8 rounded-lg transition-colors duration-200">
                Hubungi Kami
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
