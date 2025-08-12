'use client'

import { useState } from 'react'
import { Calendar, Clock, User, ArrowRight, Search, Filter } from 'lucide-react'
import Link from 'next/link'

interface Article {
  id: string
  title: string
  excerpt: string
  content: string
  author: string
  publishDate: string
  readTime: string
  category: string
  image: string
  tags: string[]
}

const articles: Article[] = [
  {
    id: 'pantai-legon-pari-sawarna',
    title: 'Pantai Legon Pari Sawarna: Surga Tersembunyi di Selatan Banten',
    excerpt: 'Temukan keindahan Pantai Legon Pari Sawarna yang masih asri dengan pasir putih, ombak yang cocok untuk surfing, dan pemandangan sunset yang memukau.',
    content: 'Pantai Legon Pari Sawarna adalah salah satu destinasi wisata pantai terindah di Banten yang masih terjaga keasriannya...',
    author: 'Tim Arizky',
    publishDate: '2024-01-25',
    readTime: '10 menit',
    category: 'Destinasi Wisata',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
    tags: ['Pantai Legon Pari', 'Sawarna', 'Banten', 'Surfing', 'Sunset', 'Wisata Pantai']
  },
  {
    id: 'panduan-liburan-legon-pari',
    title: 'Panduan Lengkap Liburan ke Pantai Legon Pari Sawarna',
    excerpt: 'Panduan lengkap untuk liburan yang tak terlupakan di Pantai Legon Pari Sawarna, dari persiapan hingga tips aktivitas.',
    content: 'Pantai Legon Pari Sawarna adalah destinasi wisata yang sempurna untuk liburan yang tak terlupakan...',
    author: 'Tim Arizky',
    publishDate: '2024-01-26',
    readTime: '12 menit',
    category: 'Travel Guide',
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop',
    tags: ['Panduan Liburan', 'Pantai Legon Pari', 'Sawarna', 'Travel Guide', 'Tips Liburan', 'Banten']
  },
  {
    id: 'daya-tarik-legon-pari',
    title: 'Daya Tarik dan Pesona Alam Pantai Legon Pari Sawarna',
    excerpt: 'Temukan keindahan dan pesona alam yang memukau di Pantai Legon Pari Sawarna dengan ekosistem yang kaya.',
    content: 'Pantai Legon Pari Sawarna memiliki daya tarik yang luar biasa yang membuat wisatawan dari berbagai penjuru Indonesia tertarik...',
    author: 'Tim Arizky',
    publishDate: '2024-01-27',
    readTime: '9 menit',
    category: 'Destinasi Wisata',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop',
    tags: ['Daya Tarik', 'Pesona Alam', 'Pantai Legon Pari', 'Sawarna', 'Fotografi', 'Surfing', 'Banten']
  }
]

const categories = ['Semua', 'Travel Tips', 'Akomodasi', 'Kuliner', 'Destinasi']

export default function ArtikelPage() {
  const [selectedCategory, setSelectedCategory] = useState('Semua')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredArticles = articles.filter(article => {
    const matchesCategory = selectedCategory === 'Semua' || article.category === selectedCategory
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('id-ID', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Artikel & Tips</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Temukan informasi menarik, tips liburan, dan panduan lengkap untuk pengalaman liburan terbaik
            </p>
          </div>
        </div>
      </section>

      {/* Search & Filter Section */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Search */}
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Cari artikel..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
              
              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-blue-600 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          {filteredArticles.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">📝</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Artikel Tidak Ditemukan</h3>
              <p className="text-gray-600">Coba ubah kata kunci pencarian atau pilih kategori yang berbeda.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article) => (
                <article key={article.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
                  {/* Article Image */}
                  <div className="relative h-48 overflow-hidden">
                    <div 
                      className="w-full h-full bg-cover bg-center bg-no-repeat transition-transform duration-300 group-hover:scale-110"
                      style={{ backgroundImage: `url(${article.image})` }}
                    ></div>
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-blue-600 text-white text-sm font-medium rounded-full">
                        {article.category}
                      </span>
                    </div>
                  </div>

                  {/* Article Content */}
                  <div className="p-6">
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                      <div className="flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span>{article.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(article.publishDate)}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
                      {article.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {article.tags.slice(0, 3).map((tag, index) => (
                        <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Read More Button */}
                    <Link 
                      href={`/artikel/${article.id}`}
                      className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium transition-colors duration-300 group"
                    >
                      <span>Baca Selengkapnya</span>
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-12 text-white text-center">
            <h2 className="text-4xl font-bold mb-4">
              Dapatkan Tips Liburan Terbaru
            </h2>
            <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
              Berlangganan newsletter kami untuk mendapatkan artikel terbaru, tips liburan, dan penawaran khusus
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Masukkan email Anda"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-white focus:outline-none"
              />
              <button className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
                Berlangganan
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
