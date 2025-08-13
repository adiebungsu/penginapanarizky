'use client'

import { useState } from 'react'
import { Calendar, Clock, User, ArrowLeft, Heart, Bookmark, Share2, MapPin, Camera, Waves, Sun, Mountain, Star, Tree, Fish } from 'lucide-react'
import Link from 'next/link'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Daya Tarik dan Pesona Alam Pantai Legon Pari Sawarna',
  description: 'Ulasan keunikan, ekosistem, spot foto, dan aktivitas di Pantai Legon Pari Sawarna.',
  image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&h=630&fit=crop',
  author: { '@type': 'Organization', name: 'Penginapan Arizky' },
  publisher: { '@type': 'Organization', name: 'Penginapan Arizky' },
  datePublished: '2024-01-27',
  dateModified: '2024-01-27',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://penginapanarizky.com/artikel/daya-tarik-legon-pari'
  },
  keywords: [
    'penginapan pantai sawarna', 'villa sawarna', 'pantai legon pari', 'daya tarik sawarna',
  ],
}

export default function DayaTarikLegonPariArticle() {
  const [isLiked, setIsLiked] = useState(false)
  const [isBookmarked, setIsBookmarked] = useState(false)

  const handleLike = () => setIsLiked(!isLiked)
  const handleBookmark = () => setIsBookmarked(!isBookmarked)
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Daya Tarik dan Pesona Alam Pantai Legon Pari Sawarna',
        url: window.location.href
      })
    } else {
      navigator.clipboard.writeText(window.location.href)
      alert('Link artikel telah disalin!')
    }
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {/* Hero Section */}
      <div className="relative h-96 md:h-[500px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&h=800&fit=crop"
          alt="Daya Tarik Pantai Legon Pari"
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
              Daya Tarik dan Pesona Alam Pantai Legon Pari Sawarna
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm">
              <div className="flex items-center space-x-1">
                <User className="w-4 h-4" />
                <span>Tim Arizky</span>
              </div>
              <div className="flex items-center space-x-1">
                <Calendar className="w-4 h-4" />
                <span>27 Januari 2024</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>9 menit baca</span>
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
              Pantai Legon Pari Sawarna memiliki daya tarik yang luar biasa yang membuat wisatawan dari berbagai 
              penjuru Indonesia tertarik untuk mengunjunginya. Artikel ini akan mengulas secara mendalam tentang 
              pesona alam, keunikan, dan hal-hal menarik yang bisa ditemukan di pantai yang masih asri ini.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <Star className="w-6 h-6 mr-2 text-blue-600" />
              Keunikan Pantai Legon Pari Sawarna
            </h2>
            
            <p className="mb-6">
              Pantai Legon Pari Sawarna memiliki beberapa keunikan yang membedakannya dari pantai-pantai lain 
              di Indonesia. Keunikan ini yang membuat pantai ini menjadi destinasi wisata yang istimewa dan 
              layak untuk dikunjungi.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-blue-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">🏖️ Pasir Putih yang Halus</h3>
                <p className="text-blue-800">
                  Pantai ini memiliki pasir putih yang sangat halus dan bersih, berbeda dengan pantai lain 
                  yang biasanya memiliki pasir yang lebih kasar atau berwarna kecoklatan.
                </p>
              </div>
              <div className="bg-green-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-green-900 mb-3">🌊 Ombak yang Konsisten</h3>
                <p className="text-green-800">
                  Ombak di Pantai Legon Pari Sawarna sangat konsisten dan cocok untuk aktivitas surfing, 
                  terutama untuk pemula hingga level menengah.
                </p>
              </div>
              <div className="bg-yellow-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-yellow-900 mb-3">🌅 Sunset yang Spektakuler</h3>
                <p className="text-yellow-800">
                  Sunset di pantai ini sangat memukau dengan gradasi warna yang indah, menjadi favorit 
                  para fotografer dan wisatawan.
                </p>
              </div>
              <div className="bg-purple-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-purple-900 mb-3">🏔️ Pemandangan Pegunungan</h3>
                <p className="text-purple-800">
                  Kombinasi pantai dengan pemandangan pegunungan yang hijau memberikan nuansa yang unik 
                  dan tidak biasa ditemukan di pantai lain.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <Tree className="w-6 h-6 mr-2 text-blue-600" />
              Ekosistem dan Keanekaragaman Hayati
            </h2>

            <p className="mb-6">
              Pantai Legon Pari Sawarna tidak hanya menawarkan keindahan alam yang memukau, tetapi juga 
              memiliki ekosistem yang kaya dan keanekaragaman hayati yang menarik untuk dipelajari.
            </p>

            <div className="bg-green-50 p-6 rounded-xl mb-8">
              <h3 className="text-lg font-semibold text-green-900 mb-3">🌿 Flora yang Beragam:</h3>
              <ul className="space-y-2 text-green-800">
                <li>• Pohon kelapa yang tumbuh subur di sepanjang pantai</li>
                <li>• Tanaman bakau yang membantu mencegah abrasi pantai</li>
                <li>• Berbagai jenis rumput pantai yang tumbuh alami</li>
                <li>• Pohon-pohon hutan yang memberikan keteduhan</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-6 rounded-xl mb-8">
              <h3 className="text-lg font-semibold text-blue-900 mb-3">🐠 Fauna Laut yang Menarik:</h3>
              <ul className="space-y-2 text-blue-800">
                <li>• Ikan-ikan kecil yang berenang di sekitar karang</li>
                <li>• Kepiting pantai yang berjalan-jalan di pasir</li>
                <li>• Burung-burung pantai yang mencari makan</li>
                <li>• Kehidupan laut yang masih terjaga keasriannya</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <Camera className="w-6 h-6 mr-2 text-blue-600" />
              Spot Foto Terbaik
            </h2>

            <p className="mb-6">
              Pantai Legon Pari Sawarna memiliki berbagai spot foto yang instagramable dan cocok untuk 
              berbagai jenis fotografi. Berikut adalah beberapa spot foto terbaik yang wajib dikunjungi:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="border border-gray-200 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">📸 Sunset Point</h3>
                <p className="text-gray-700 mb-3">
                  Lokasi terbaik untuk mengabadikan momen sunset yang spektakuler dengan pemandangan 
                  laut yang luas.
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Waktu Terbaik:</strong> 17:00 - 18:00 WIB<br/>
                  <strong>Equipment:</strong> Tripod, wide lens
                </p>
              </div>
              <div className="border border-gray-200 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">🏖️ Pasir Putih</h3>
                <p className="text-gray-700 mb-3">
                  Area pasir putih yang luas dan bersih, cocok untuk foto portrait dan landscape 
                  yang minimalis.
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Waktu Terbaik:</strong> Pagi atau sore hari<br/>
                  <strong>Equipment:</strong> Portrait lens, reflector
                </p>
              </div>
              <div className="border border-gray-200 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">🏔️ Bukit Panorama</h3>
                <p className="text-gray-700 mb-3">
                  Bukit kecil yang memberikan pemandangan panorama pantai dari ketinggian, 
                  cocok untuk foto landscape.
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Waktu Terbaik:</strong> Pagi hari<br/>
                  <strong>Equipment:</strong> Wide lens, drone
                </p>
              </div>
              <div className="border border-gray-200 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">🌊 Area Karang</h3>
                <p className="text-gray-700 mb-3">
                  Area karang yang menarik dengan ombak yang memecah, cocok untuk foto action 
                  dan landscape laut.
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Waktu Terbaik:</strong> Siang hari<br/>
                  <strong>Equipment:</strong> Tele lens, filter ND
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <Fish className="w-6 h-6 mr-2 text-blue-600" />
              Aktivitas Air yang Menarik
            </h2>

            <p className="mb-6">
              Selain menikmati keindahan alam, Pantai Legon Pari Sawarna juga menawarkan berbagai 
              aktivitas air yang menarik dan seru untuk dilakukan:
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-6 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-xl">
                <div className="text-4xl mb-3">🏄‍♂️</div>
                <h3 className="text-lg font-semibold mb-2">Surfing</h3>
                <p className="text-sm text-blue-100">
                  Ombak yang konsisten cocok untuk surfing pemula hingga menengah
                </p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-green-500 to-green-600 text-white rounded-xl">
                <div className="text-4xl mb-3">🏊‍♂️</div>
                <h3 className="text-lg font-semibold mb-2">Berenang</h3>
                <p className="text-sm text-green-100">
                  Air yang jernih dan ombak yang tidak terlalu besar
                </p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-xl">
                <div className="text-4xl mb-3">🐟</div>
                <h3 className="text-lg font-semibold mb-2">Memancing</h3>
                <p className="text-sm text-purple-100">
                  Area karang yang cocok untuk memancing ikan
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Musim Terbaik untuk Berkunjung</h2>

            <p className="mb-6">
              Untuk mendapatkan pengalaman terbaik saat mengunjungi Pantai Legon Pari Sawarna, penting 
              untuk mengetahui musim dan waktu yang tepat:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-yellow-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-yellow-900 mb-3">☀️ Musim Kemarau (April-Oktober)</h3>
                <ul className="space-y-2 text-yellow-800">
                  <li>• Cuaca cerah dan tidak hujan</li>
                  <li>• Ombak tidak terlalu besar</li>
                  <li>• Pemandangan yang lebih jelas</li>
                  <li>• Cocok untuk berbagai aktivitas</li>
                </ul>
              </div>
              <div className="bg-blue-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">🌧️ Musim Hujan (November-Maret)</h3>
                <ul className="space-y-2 text-blue-800">
                  <li>• Cuaca tidak menentu</li>
                  <li>• Ombak bisa lebih besar</li>
                  <li>• Akses jalan bisa terganggu</li>
                  <li>• Lebih cocok untuk fotografi</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Keunikan Budaya Lokal</h2>

            <p className="mb-6">
              Selain keindahan alam, Pantai Legon Pari Sawarna juga memiliki keunikan budaya lokal 
              yang menarik untuk dipelajari:
            </p>

            <ul className="list-disc list-inside space-y-2 mb-8 text-gray-700">
              <li><strong>Masyarakat Nelayan:</strong> Masyarakat lokal yang masih mempertahankan tradisi nelayan tradisional</li>
              <li><strong>Kuliner Khas:</strong> Berbagai makanan laut segar yang diolah dengan cara tradisional</li>
              <li><strong>Kerajinan Tangan:</strong> Kerajinan dari bahan alam yang dibuat oleh masyarakat lokal</li>
              <li><strong>Festival Pantai:</strong> Acara tahunan yang menampilkan budaya dan tradisi lokal</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Konservasi dan Pelestarian</h2>

            <p className="mb-6">
              Pantai Legon Pari Sawarna memiliki program konservasi dan pelestarian yang bertujuan 
              untuk menjaga keasrian dan keindahan alam pantai ini:
            </p>

            <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded-r-xl mb-8">
              <h3 className="text-lg font-semibold text-green-900 mb-3">🌱 Program Konservasi:</h3>
              <ul className="space-y-2 text-green-800">
                <li>• Penanaman pohon bakau untuk mencegah abrasi</li>
                <li>• Program pembersihan pantai secara berkala</li>
                <li>• Edukasi wisatawan tentang pentingnya menjaga lingkungan</li>
                <li>• Pembatasan jumlah wisatawan untuk mengurangi dampak lingkungan</li>
                <li>• Penggunaan energi ramah lingkungan di area pantai</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-6 rounded-xl mb-8">
              <h3 className="text-lg font-semibold text-blue-900 mb-3">🌊 Kesimpulan</h3>
              <p className="text-blue-800">
                Pantai Legon Pari Sawarna adalah destinasi wisata yang memiliki daya tarik luar biasa 
                dengan kombinasi keindahan alam, keunikan budaya, dan berbagai aktivitas menarik. 
                Keasrian dan pesona alamnya yang masih terjaga membuat pantai ini layak menjadi 
                bucket list wisata pantai Anda.
              </p>
            </div>
          </article>

          {/* Tags */}
          <div className="border-t pt-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Tag:</h3>
            <div className="flex flex-wrap gap-2">
              {['Daya Tarik', 'Pesona Alam', 'Pantai Legon Pari', 'Sawarna', 'Fotografi', 'Surfing', 'Banten'].map((tag) => (
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
            <Link href="/artikel/panduan-liburan-legon-pari" className="group">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img
                  src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=250&fit=crop"
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
          </div>
        </div>
      </div>
    </main>
  )
}
