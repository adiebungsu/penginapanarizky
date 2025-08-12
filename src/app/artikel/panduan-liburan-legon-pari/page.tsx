'use client'

import { useState } from 'react'
import { Calendar, Clock, User, ArrowLeft, Heart, Bookmark, Share2, MapPin, Camera, Waves, Sun, Mountain, Car, Hotel, Utensils } from 'lucide-react'
import Link from 'next/link'

export default function PanduanLiburanLegonPariArticle() {
  const [isLiked, setIsLiked] = useState(false)
  const [isBookmarked, setIsBookmarked] = useState(false)

  const handleLike = () => setIsLiked(!isLiked)
  const handleBookmark = () => setIsBookmarked(!isBookmarked)
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Panduan Lengkap Liburan ke Pantai Legon Pari Sawarna',
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
          src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1920&h=800&fit=crop"
          alt="Panduan Liburan Pantai Legon Pari"
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
              Panduan Lengkap Liburan ke Pantai Legon Pari Sawarna
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm">
              <div className="flex items-center space-x-1">
                <User className="w-4 h-4" />
                <span>Tim Arizky</span>
              </div>
              <div className="flex items-center space-x-1">
                <Calendar className="w-4 h-4" />
                <span>26 Januari 2024</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>12 menit baca</span>
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
              Kategori: <span className="text-blue-600 font-medium">Travel Guide</span>
            </div>
          </div>

          {/* Article Body */}
          <article className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Pantai Legon Pari Sawarna adalah destinasi wisata yang sempurna untuk liburan yang tak terlupakan. 
              Artikel ini akan memberikan panduan lengkap mulai dari persiapan perjalanan, akomodasi, aktivitas, 
              hingga tips-tips penting untuk memastikan liburan Anda berjalan lancar dan menyenangkan.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <Car className="w-6 h-6 mr-2 text-blue-600" />
              Persiapan Perjalanan
            </h2>
            
            <p className="mb-6">
              Sebelum memulai perjalanan ke Pantai Legon Pari Sawarna, ada beberapa hal yang perlu dipersiapkan 
              dengan matang. Pastikan Anda membawa semua perlengkapan yang diperlukan dan memeriksa kondisi 
              cuaca serta akses jalan.
            </p>

            <div className="bg-blue-50 p-6 rounded-xl mb-8">
              <h3 className="text-lg font-semibold text-blue-900 mb-3">📋 Checklist Persiapan:</h3>
              <ul className="space-y-2 text-blue-800">
                <li>• Pakaian renang dan pakaian ganti</li>
                <li>• Tabir surya dengan SPF tinggi</li>
                <li>• Topi dan kacamata hitam</li>
                <li>• Handuk dan perlengkapan mandi</li>
                <li>• Kamera atau smartphone untuk foto</li>
                <li>• Uang tunai dan kartu ATM</li>
                <li>• Obat-obatan pribadi</li>
                <li>• Power bank dan charger</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <Hotel className="w-6 h-6 mr-2 text-blue-600" />
              Pilihan Akomodasi
            </h2>

            <p className="mb-6">
              Di sekitar Pantai Legon Pari Sawarna tersedia berbagai pilihan akomodasi yang bisa disesuaikan 
              dengan budget dan preferensi Anda. Berikut adalah beberapa rekomendasi akomodasi terbaik:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-green-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-green-900 mb-3">🏠 Homestay Sawarna</h3>
                <p className="text-green-800">
                  Homestay dengan harga terjangkau, lokasi strategis dekat pantai, dan suasana yang nyaman 
                  untuk keluarga.
                </p>
                <p className="text-sm text-green-700 mt-2">Harga: Rp 200.000 - 400.000/malam</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">🏖️ Resort Sawarna</h3>
                <p className="text-blue-800">
                  Resort mewah dengan fasilitas lengkap, kolam renang, dan pemandangan pantai yang langsung 
                  terlihat dari kamar.
                </p>
                <p className="text-sm text-blue-700 mt-2">Harga: Rp 800.000 - 1.500.000/malam</p>
              </div>
              <div className="bg-yellow-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-yellow-900 mb-3">🏕️ Camping Ground</h3>
                <p className="text-yellow-800">
                  Area camping yang luas dengan pemandangan pantai yang indah, cocok untuk pengalaman 
                  liburan yang lebih adventure.
                </p>
                <p className="text-sm text-yellow-700 mt-2">Harga: Rp 50.000 - 100.000/orang</p>
              </div>
              <div className="bg-purple-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-purple-900 mb-3">🏨 Villa Pribadi</h3>
                <p className="text-purple-800">
                  Villa pribadi dengan fasilitas lengkap, cocok untuk liburan keluarga besar atau rombongan 
                  teman.
                </p>
                <p className="text-sm text-purple-700 mt-2">Harga: Rp 1.000.000 - 2.500.000/malam</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <Utensils className="w-6 h-6 mr-2 text-blue-600" />
              Kuliner dan Makanan
            </h2>

            <p className="mb-6">
              Saat liburan di Pantai Legon Pari Sawarna, jangan lewatkan untuk mencoba berbagai kuliner 
              khas yang tersedia. Berikut adalah beberapa rekomendasi makanan yang wajib dicoba:
            </p>

            <ul className="list-disc list-inside space-y-2 mb-8 text-gray-700">
              <li><strong>Seafood Segar:</strong> Ikan bakar, udang bakar, dan kerang hijau</li>
              <li><strong>Makanan Tradisional:</strong> Nasi goreng khas Sawarna dan mie goreng</li>
              <li><strong>Minuman:</strong> Es kelapa muda dan es jeruk peras</li>
              <li><strong>Snack:</strong> Keripik singkong dan kacang atom</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <Camera className="w-6 h-6 mr-2 text-blue-600" />
              Aktivitas dan Hiburan
            </h2>

            <p className="mb-6">
              Pantai Legon Pari Sawarna menawarkan berbagai aktivitas menarik yang bisa dilakukan sepanjang hari. 
              Berikut adalah jadwal aktivitas yang direkomendasikan:
            </p>

            <div className="bg-gray-50 p-6 rounded-xl mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">⏰ Jadwal Aktivitas Harian:</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <span className="font-semibold text-blue-600">06:00 - 09:00</span>
                  <span>Surfing pagi dan menikmati sunrise</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="font-semibold text-green-600">09:00 - 12:00</span>
                  <span>Berjemur dan berenang di pantai</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="font-semibold text-yellow-600">12:00 - 15:00</span>
                  <span>Makan siang dan istirahat</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="font-semibold text-orange-600">15:00 - 18:00</span>
                  <span>Fotografi dan menikmati sunset</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="font-semibold text-purple-600">18:00 - 21:00</span>
                  <span>Makan malam dan camping</span>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Rute dan Transportasi</h2>

            <p className="mb-6">
              Untuk menuju Pantai Legon Pari Sawarna, Anda memiliki beberapa pilihan transportasi yang bisa 
              disesuaikan dengan budget dan preferensi:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="border border-gray-200 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">🚗 Kendaraan Pribadi</h3>
                <p className="text-gray-700 mb-3">
                  Rute: Jakarta → Serang → Pandeglang → Bayah → Sawarna
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Waktu:</strong> 4-5 jam<br/>
                  <strong>Biaya:</strong> Bensin + tol<br/>
                  <strong>Keuntungan:</strong> Fleksibel dan nyaman
                </p>
              </div>
              <div className="border border-gray-200 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">🚌 Transportasi Umum</h3>
                <p className="text-gray-700 mb-3">
                  Bus dari Jakarta → Serang → Bayah, dilanjutkan ojek ke Sawarna
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Waktu:</strong> 6-7 jam<br/>
                  <strong>Biaya:</strong> Rp 100.000 - 150.000<br/>
                  <strong>Keuntungan:</strong> Lebih murah
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Tips Budget dan Hemat</h2>

            <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded-r-xl mb-8">
              <h3 className="text-lg font-semibold text-green-900 mb-3">💰 Tips Hemat Liburan:</h3>
              <ul className="space-y-2 text-green-800">
                <li>• Pilih homestay atau camping untuk menghemat biaya akomodasi</li>
                <li>• Bawa makanan dan minuman dari rumah untuk menghemat biaya makan</li>
                <li>• Gunakan transportasi umum untuk menghemat biaya perjalanan</li>
                <li>• Kunjungi pada hari kerja untuk mendapatkan harga yang lebih murah</li>
                <li>• Sewa peralatan surfing secara berkelompok untuk mendapatkan diskon</li>
                <li>• Manfaatkan promo dan paket liburan yang tersedia</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Keamanan dan Keselamatan</h2>

            <p className="mb-6">
              Keselamatan adalah hal yang paling penting saat liburan. Berikut adalah beberapa tips keamanan 
              yang perlu diperhatikan:
            </p>

            <ul className="list-disc list-inside space-y-2 mb-8 text-gray-700">
              <li>Selalu periksa kondisi ombak sebelum berenang atau surfing</li>
              <li>Gunakan pelampung jika tidak bisa berenang</li>
              <li>Jangan berenang sendirian, terutama di malam hari</li>
              <li>Simpan barang berharga di tempat yang aman</li>
              <li>Perhatikan tanda-tanda bahaya di pantai</li>
              <li>Bawa nomor darurat dan pastikan sinyal telepon tersedia</li>
            </ul>

            <div className="bg-blue-50 p-6 rounded-xl mb-8">
              <h3 className="text-lg font-semibold text-blue-900 mb-3">🌊 Kesimpulan</h3>
              <p className="text-blue-800">
                Pantai Legon Pari Sawarna adalah destinasi liburan yang sempurna dengan berbagai aktivitas menarik 
                dan pemandangan yang memukau. Dengan persiapan yang matang dan mengikuti panduan ini, liburan 
                Anda akan menjadi pengalaman yang tak terlupakan.
              </p>
            </div>
          </article>

          {/* Tags */}
          <div className="border-t pt-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Tag:</h3>
            <div className="flex flex-wrap gap-2">
              {['Panduan Liburan', 'Pantai Legon Pari', 'Sawarna', 'Travel Guide', 'Tips Liburan', 'Banten'].map((tag) => (
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
            <Link href="/artikel/pantai-legon-pari-sawarna" className="group">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img
                  src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop"
                  alt="Pantai Legon Pari"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    Pantai Legon Pari Sawarna: Surga Tersembunyi di Selatan Banten
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Temukan keindahan Pantai Legon Pari Sawarna yang masih asri...
                  </p>
                  <div className="flex items-center text-xs text-gray-500">
                    <Calendar className="w-3 h-3 mr-1" />
                    <span>25 Januari 2024</span>
                    <Clock className="w-3 h-3 ml-3 mr-1" />
                    <span>10 menit</span>
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
