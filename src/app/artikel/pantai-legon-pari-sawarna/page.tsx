'use client'

import { useState } from 'react'
import { Calendar, Clock, User, ArrowLeft, Heart, Bookmark, Share2, MapPin, Camera, Waves, Sun, Mountain } from 'lucide-react'
import Link from 'next/link'

export default function PantaiLegonPariSawarnaArticle() {
  const [isLiked, setIsLiked] = useState(false)
  const [isBookmarked, setIsBookmarked] = useState(false)

  const handleLike = () => setIsLiked(!isLiked)
  const handleBookmark = () => setIsBookmarked(!isBookmarked)
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Pantai Legon Pari Sawarna: Surga Tersembunyi di Selatan Banten',
        url: window.location.href
      })
    } else {
      navigator.clipboard.writeText(window.location.href)
      alert('Link artikel telah disalin!')
    }
  }

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-96 md:h-[500px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=800&fit=crop"
          alt="Pantai Legon Pari Sawarna"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-4xl mx-auto px-4 text-white">
            <div className="flex items-center space-x-2 text-sm mb-4">
              <Link href="/artikel" className="flex items-center space-x-1 hover:text-blue-300 transition-colors">
                <ArrowLeft className="w-4 h-4" />
                <span>Kembali ke Artikel</span>
              </Link>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Pantai Legon Pari Sawarna: Surga Tersembunyi di Selatan Banten
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm">
              <div className="flex items-center space-x-1">
                <User className="w-4 h-4" />
                <span>Tim Arizky</span>
              </div>
              <div className="flex items-center space-x-1">
                <Calendar className="w-4 h-4" />
                <span>25 Januari 2024</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>10 menit baca</span>
              </div>
              <div className="flex items-center space-x-1">
                <MapPin className="w-4 h-4" />
                <span>Banten Selatan, Indonesia</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          {/* Action Buttons */}
          <div className="flex items-center justify-between mb-8 pb-6 border-b">
            <div className="flex items-center space-x-4">
              <button
                onClick={handleLike}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                  isLiked ? 'bg-red-100 text-red-600' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
                <span>{isLiked ? 'Disukai' : 'Suka'}</span>
              </button>
              <button
                onClick={handleBookmark}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                  isBookmarked ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <Bookmark className={`w-5 h-5 ${isBookmarked ? 'fill-current' : ''}`} />
                <span>{isBookmarked ? 'Tersimpan' : 'Simpan'}</span>
              </button>
              <button
                onClick={handleShare}
                className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
              >
                <Share2 className="w-5 h-5" />
                <span>Bagikan</span>
              </button>
            </div>
            <div className="text-sm text-gray-500">
              Kategori: <span className="text-blue-600 font-medium">Destinasi Wisata</span>
            </div>
          </div>

          {/* Article Body */}
          <article className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Pantai Legon Pari Sawarna adalah salah satu destinasi wisata pantai yang masih tersembunyi di selatan Banten. 
              Terletak di Kecamatan Bayah, Kabupaten Lebak, pantai ini menawarkan keindahan alam yang memukau dengan 
              kombinasi pasir putih, ombak yang cocok untuk surfing, dan pemandangan pegunungan yang hijau.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <Mountain className="w-6 h-6 mr-2 text-blue-600" />
              Lokasi dan Akses
            </h2>
            
            <p className="mb-6">
              Pantai Legon Pari Sawarna terletak di Desa Sawarna, Kecamatan Bayah, Kabupaten Lebak, Banten. 
              Pantai ini berjarak sekitar 200 kilometer dari Jakarta dan dapat ditempuh dalam waktu 4-5 jam perjalanan.
            </p>

            <p className="mb-6">
              Untuk menuju pantai ini, Anda bisa menggunakan kendaraan pribadi dengan rute: Jakarta → Serang → 
              Pandeglang → Bayah → Sawarna. Jalan menuju pantai sudah beraspal dengan kondisi yang cukup baik, 
              meskipun ada beberapa bagian yang berkelok-kelok di area pegunungan.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <Waves className="w-6 h-6 mr-2 text-blue-600" />
              Keindahan Alam yang Memukau
            </h2>

            <p className="mb-6">
              Pantai Legon Pari Sawarna memiliki karakteristik yang unik dengan kombinasi pasir putih yang halus 
              dan ombak yang cukup besar untuk aktivitas surfing. Panjang pantai mencapai sekitar 3 kilometer 
              dengan lebar sekitar 50 meter, memberikan ruang yang luas untuk berbagai aktivitas pantai.
            </p>

            <p className="mb-6">
              Yang membuat pantai ini istimewa adalah pemandangan sunset yang spektakuler. Saat matahari terbenam, 
              langit akan berubah menjadi gradasi warna oranye, merah, dan ungu yang memukau. Momen ini menjadi 
              favorit para fotografer dan wisatawan untuk mengabadikan keindahan alam.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <Camera className="w-6 h-6 mr-2 text-blue-600" />
              Aktivitas yang Bisa Dilakukan
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-blue-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">🏄‍♂️ Surfing</h3>
                <p className="text-blue-800">
                  Ombak di Pantai Legon Pari Sawarna sangat cocok untuk surfing, terutama untuk pemula hingga 
                  level menengah. Waktu terbaik untuk surfing adalah pagi hari saat ombak masih konsisten.
                </p>
              </div>
              <div className="bg-green-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-green-900 mb-3">📸 Fotografi</h3>
                <p className="text-green-800">
                  Pantai ini adalah surga bagi fotografer dengan pemandangan alam yang indah, sunset yang memukau, 
                  dan spot-spot foto yang instagramable.
                </p>
              </div>
              <div className="bg-yellow-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-yellow-900 mb-3">🏕️ Camping</h3>
                <p className="text-yellow-800">
                  Banyak wisatawan memilih untuk camping di pantai untuk menikmati pemandangan bintang di malam 
                  hari dan sunrise di pagi hari.
                </p>
              </div>
              <div className="bg-purple-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-purple-900 mb-3">🐟 Memancing</h3>
                <p className="text-purple-800">
                  Aktivitas memancing juga populer di pantai ini, terutama di area karang dan batu-batu besar 
                  di tepi pantai.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <Sun className="w-6 h-6 mr-2 text-blue-600" />
              Waktu Terbaik untuk Berkunjung
            </h2>

            <p className="mb-6">
              Waktu terbaik untuk mengunjungi Pantai Legon Pari Sawarna adalah pada musim kemarau (April-Oktober) 
              saat cuaca cerah dan ombak tidak terlalu besar. Untuk menikmati sunset terbaik, datanglah sekitar 
              pukul 17.00-18.00 WIB.
            </p>

            <p className="mb-6">
              Jika Anda ingin menikmati suasana yang lebih sepi, kunjungilah pada hari kerja atau di luar musim liburan. 
              Pantai akan terasa lebih eksklusif dan Anda bisa menikmati keindahan alam dengan lebih tenang.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Akomodasi dan Fasilitas</h2>

            <p className="mb-6">
              Di sekitar Pantai Legon Pari Sawarna tersedia berbagai pilihan akomodasi mulai dari homestay sederhana 
              hingga resort yang lebih mewah. Beberapa fasilitas yang tersedia meliputi:
            </p>

            <ul className="list-disc list-inside space-y-2 mb-8 text-gray-700">
              <li>Penginapan dan homestay dengan harga terjangkau</li>
              <li>Warung makan dan restoran yang menyajikan seafood segar</li>
              <li>Rental peralatan surfing dan snorkeling</li>
              <li>Area parkir yang luas</li>
              <li>Toilet dan kamar mandi umum</li>
              <li>Warung-warung kecil untuk kebutuhan sehari-hari</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Tips Berkunjung</h2>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-xl mb-8">
              <h3 className="text-lg font-semibold text-yellow-900 mb-3">💡 Tips Penting:</h3>
              <ul className="space-y-2 text-yellow-800">
                <li>• Bawa persediaan air minum yang cukup karena fasilitas terbatas</li>
                <li>• Gunakan tabir surya untuk melindungi kulit dari sinar matahari</li>
                <li>• Bawa makanan ringan karena warung makan terbatas</li>
                <li>• Perhatikan kondisi ombak sebelum berenang atau surfing</li>
                <li>• Jaga kebersihan pantai dengan membawa sampah kembali</li>
                <li>• Bawa uang tunai karena sinyal internet terbatas</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-6 rounded-xl mb-8">
              <h3 className="text-lg font-semibold text-blue-900 mb-3">🌊 Kesimpulan</h3>
              <p className="text-blue-800">
                Pantai Legon Pari Sawarna adalah destinasi wisata yang sempurna untuk mereka yang mencari ketenangan 
                dan keindahan alam yang masih asri. Dengan kombinasi pasir putih, ombak yang cocok untuk surfing, 
                dan sunset yang memukau, pantai ini layak menjadi bucket list wisata pantai Anda.
              </p>
            </div>
          </article>

          {/* Tags */}
          <div className="border-t pt-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Tag:</h3>
            <div className="flex flex-wrap gap-2">
              {['Pantai Legon Pari', 'Sawarna', 'Banten', 'Surfing', 'Sunset', 'Wisata Pantai'].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors cursor-pointer"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Related Articles */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Artikel Terkait</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/artikel/panduan-liburan-legon-pari" className="group">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img
                  src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop"
                  alt="Panduan Liburan"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    Panduan Lengkap Liburan ke Pantai Legon Pari Sawarna
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Panduan lengkap untuk liburan yang tak terlupakan di Pantai Legon Pari Sawarna...
                  </p>
                  <div className="flex items-center text-xs text-gray-500">
                    <Calendar className="w-3 h-3 mr-1" />
                    <span>26 Januari 2024</span>
                    <Clock className="w-3 h-3 ml-3 mr-1" />
                    <span>12 menit</span>
                  </div>
                </div>
              </div>
            </Link>
            <Link href="/artikel/daya-tarik-legon-pari" className="group">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img
                  src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=250&fit=crop"
                  alt="Daya Tarik"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    Daya Tarik dan Pesona Alam Pantai Legon Pari Sawarna
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Temukan keindahan dan pesona alam yang memukau di Pantai Legon Pari Sawarna...
                  </p>
                  <div className="flex items-center text-xs text-gray-500">
                    <Calendar className="w-3 h-3 mr-1" />
                    <span>27 Januari 2024</span>
                    <Clock className="w-3 h-3 ml-3 mr-1" />
                    <span>9 menit</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
