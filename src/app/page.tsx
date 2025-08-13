'use client'

import { useState, useEffect } from 'react'
import { Star, MapPin, Users, Wifi, Car, Coffee, Utensils, Waves, Mountain } from 'lucide-react'
import Link from 'next/link'

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LodgingBusiness',
  name: 'Penginapan Arizky',
  description:
    'Penginapan Arizky di Legon Pari Sawarna: pilihan villa sawarna dan penginapan tepi pantai untuk keluarga. Fasilitas lengkap, lokasi strategis, harga terbaik.',
  url: 'https://penginapanarizky.com',
  telephone: '+6283877080088',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Jl. Raya Wisata No. 123',
    addressLocality: 'Sawarna',
          addressRegion: 'Banten',
          postalCode: '42393',
    addressCountry: 'ID',
  },
  sameAs: [
    'https://www.instagram.com/penginapanarizky',
    'https://www.facebook.com/penginapanarizky',
  ],
}

const webSiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Penginapan Arizky',
  url: 'https://penginapanarizky.com',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://penginapanarizky.com/artikel?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Beranda',
      item: 'https://penginapanarizky.com/',
    },
  ],
}

const articleItemListJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      url: 'https://penginapanarizky.com/artikel/pantai-legon-pari-sawarna',
      name: 'Pantai Legon Pari Sawarna: Surga Tersembunyi di Selatan Banten',
    },
    {
      '@type': 'ListItem',
      position: 2,
      url: 'https://penginapanarizky.com/artikel/panduan-liburan-legon-pari',
      name: 'Panduan Lengkap Liburan ke Pantai Legon Pari Sawarna',
    },
    {
      '@type': 'ListItem',
      position: 3,
      url: 'https://penginapanarizky.com/artikel/daya-tarik-legon-pari',
      name: 'Daya Tarik dan Pesona Alam Pantai Legon Pari Sawarna',
    },
  ],
}

interface HeroSlide {
  id: number
  title: string
  subtitle: string
  cta: string
  link: string
  image: string
  fallbackImage: string
}

// Pindahkan heroSlides ke luar komponen agar tidak selalu baru di setiap render
const heroSlides: HeroSlide[] = [
  {
    id: 1,
    title: 'Selamat Datang di Penginapan Arizky',
    subtitle: 'Temukan kenyamanan dan keindahan alam dalam satu tempat',
    cta: 'Pesan Sekarang',
    link: '/villa-kamar',
    image: 'https://i.imgur.com/pAI45l7.jpeg',
    fallbackImage: 'https://i.imgur.com/pAI45l7.jpeg'
  },
  {
    id: 2,
    title: 'Villa Premium dengan Pemandangan Indah',
    subtitle: 'Nikmati liburan mewah dengan fasilitas lengkap',
    cta: 'Lihat Villa',
    link: '/villa/villa-premium',
    image: 'https://i.imgur.com/iyECWL0.jpeg',
    fallbackImage: 'https://i.imgur.com/iyECWL0.jpeg'
  },
  {
    id: 3,
    title: 'Kamar Nyaman untuk Keluarga',
    subtitle: 'Beristirahat dengan tenang di kamar yang bersih dan nyaman',
    cta: 'Lihat Kamar',
    link: '/kamar/kamar-deluxe',
    image: 'https://i.imgur.com/e2Xgc1N.jpeg',
    fallbackImage: 'https://i.imgur.com/e2Xgc1N.jpeg'
  },
  {
    id: 4,
    title: 'Suasana Alam yang Menenangkan',
    subtitle: 'Nikmati momen berkualitas bersama keluarga di area bersantai yang nyaman',
    cta: 'Lihat Fasilitas',
    link: '/fasilitas',
    image: 'https://i.imgur.com/D836vK9.jpeg',
    fallbackImage: 'https://i.imgur.com/D836vK9.jpeg'
  },
  {
    id: 5,
    title: 'Lobby yang Elegan dan Nyaman',
    subtitle: 'Rasakan keramahan dan pelayanan terbaik kami',
    cta: 'Lihat Fasilitas',
    link: '/fasilitas',
    image: 'https://i.imgur.com/HbtDJKb.jpeg',
    fallbackImage: 'https://i.imgur.com/HbtDJKb.jpeg'
  }
]

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [imageErrors, setImageErrors] = useState<{[key: number]: boolean}>({})
  const [imageLoading, setImageLoading] = useState<{[key: number]: boolean}>({})
  const [mounted, setMounted] = useState(false)

  // Debug: Log current slide changes
  useEffect(() => {
    console.log(`Current slide changed to: ${currentSlide}`)
  }, [currentSlide])

  useEffect(() => {
    setMounted(true)
  }, [])

  const roomCategories = [
    {
      id: 'villa',
      name: 'Villa Premium',
      description: 'Villa mewah dengan pemandangan alam yang memukau, dilengkapi fasilitas lengkap untuk liburan keluarga yang nyaman',
      count: 12,
      price: 'Mulai Rp 2.500.000',
      originalPrice: 'Rp 3.200.000',
      discount: '22%',
      image: 'https://i.imgur.com/XQKMbFZ.jpeg',
      features: ['AC di Semua Ruangan', 'TV LED 55"', 'WiFi Gratis', 'Dapur Lengkap', 'Balkon Luas', 'Garden View'],
      rating: 4.9,
      reviewCount: 89,
      badge: 'Terpopuler',
      badgeColor: 'bg-gradient-to-r from-yellow-400 to-orange-500'
    },
    {
      id: 'kamar',
      name: 'Kamar Deluxe',
      description: 'Kamar nyaman dengan fasilitas lengkap untuk keluarga, desain modern dan bersih',
      count: 24,
      price: 'Mulai Rp 500.000',
      originalPrice: 'Rp 650.000',
      discount: '23%',
      image: 'https://i.imgur.com/0NEMnoK.jpeg',
      features: ['AC', 'TV LED 42"', 'WiFi Gratis', 'Kamar Mandi Dalam', 'Teras', 'Mountain View'],
      rating: 4.7,
      reviewCount: 156,
      badge: 'Terjangkau',
      badgeColor: 'bg-gradient-to-r from-green-400 to-blue-500'
    },
    {
      id: 'cottage',
      name: 'Cottage Alam',
      description: 'Cottage unik dengan nuansa alam yang menenangkan, cocok untuk liburan yang tenang',
      count: 8,
      price: 'Mulai Rp 800.000',
      originalPrice: 'Rp 1.100.000',
      discount: '27%',
      image: 'https://i.imgur.com/mokoWMJ.jpeg',
      features: ['Teras Alam', 'Dapur Mini', 'WiFi Gratis', 'AC', 'TV LED', 'Area BBQ'],
      rating: 4.6,
      reviewCount: 78,
      badge: 'Eksklusif',
      badgeColor: 'bg-gradient-to-r from-purple-400 to-pink-500'
    }
  ]

  const facilities = [
    {
      id: 1,
      name: 'WiFi Gratis',
      description: 'Koneksi internet cepat di seluruh area',
      icon: Wifi
    },
    {
      id: 2,
      name: 'Area Bersantai',
      description: 'Spot nyaman untuk berkumpul dan menikmati suasana alam',
      icon: Coffee
    },
    {
      id: 5,
      name: 'Cafe',
      description: 'Cafe nyaman untuk bersantai dan bekerja',
      icon: Coffee
    },
    {
      id: 6,
      name: 'Area Camping',
      description: 'Area camping dengan pemandangan gunung',
      icon: Mountain
    }
  ]

  const testimonials = [
    {
      id: 1,
      name: 'Budi Santoso',
      location: 'Jakarta',
      rating: 5,
      comment: 'Penginapan yang sangat nyaman dan bersih. Pemandangan alamnya indah sekali!'
    },
    {
      id: 2,
      name: 'Sari Indah',
      location: 'Bandung',
      rating: 5,
      comment: 'Pelayanan ramah dan fasilitas lengkap. Cocok untuk liburan keluarga.'
    },
    {
      id: 3,
      name: 'Ahmad Rizki',
      location: 'Surabaya',
      rating: 4,
      comment: 'Lokasi strategis, mudah dijangkau. Suasana tenang dan nyaman.'
    }
  ]

  useEffect(() => {
    console.log('Setting up auto-slide timer...')
    const timer = setInterval(() => {
      console.log('Auto-sliding to next slide...')
      setCurrentSlide((prev) => {
        const next = (prev + 1) % heroSlides.length
        console.log(`Slide changed from ${prev} to ${next}`)
        return next
      })
    }, 5000)
    return () => {
      console.log('Clearing auto-slide timer...')
      clearInterval(timer)
    }
  }, [])

  // Preload images to prevent loading issues
  useEffect(() => {
    heroSlides.forEach(slide => {
      setImageLoading(prev => ({ ...prev, [slide.id]: true }))
      const img = new Image()
      img.onload = () => {
        console.log(`Image loaded: ${slide.title}`)
        setImageLoading(prev => ({ ...prev, [slide.id]: false }))
      }
      img.onerror = () => {
        console.error(`Failed to load image: ${slide.title}`)
        setImageLoading(prev => ({ ...prev, [slide.id]: false }))
        handleImageError(slide.id)
      }
      img.src = slide.image
    })
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
  }

  const handleImageError = (slideId: number) => {
    setImageErrors(prev => ({ ...prev, [slideId]: true }))
  }

  const getImageUrl = (slide: HeroSlide) => {
    if (imageErrors[slide.id]) {
      return slide.fallbackImage
    }
    return slide.image
  }

  // Hapus loading state yang bermasalah
  // if (!mounted) {
  //   return (
  //     <main>
  //       <div className="flex items-center justify-center min-h-screen">
  //         <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
  //       </div>
  //     </main>
  //   )
  // }

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([organizationJsonLd, webSiteJsonLd, breadcrumbJsonLd, articleItemListJsonLd]),
        }}
      />
      {/* Hero Section with Slider */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0 bg-black/20 z-10"></div>
        
        {/* Slider */}
        <div className="relative h-full overflow-hidden">
          {heroSlides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {/* Loading State */}
              {imageLoading[slide.id] && (
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center z-30">
                  <div className="text-center">
                    <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-white mx-auto mb-4"></div>
                    <p className="text-white text-sm">Memuat gambar...</p>
                  </div>
                </div>
              )}
              
              <div 
                className="w-full h-full bg-cover bg-center bg-no-repeat flex items-start md:items-center justify-center min-h-screen"
                style={{ 
                  backgroundImage: `url(${getImageUrl(slide)})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  minHeight: '100vh'
                }}
                onLoad={() => setImageLoading(prev => ({ ...prev, [slide.id]: false }))}
                onError={() => {
                  setImageLoading(prev => ({ ...prev, [slide.id]: false }))
                  handleImageError(slide.id)
                }}
              >
                {/* Ubah overlay di dalam slider */}
                <div className="absolute inset-0 bg-black/15"></div>
                <div className="text-center text-white z-20 relative w-full flex items-center justify-center min-h-screen px-4">
                  <div className="bg-black/25 backdrop-blur-[1px] rounded-2xl p-4 md:p-8 mx-auto shadow-2xl max-w-xl w-full">
                    <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-2 leading-tight">
                      {slide.title}
                    </h1>
                    <p className="text-sm sm:text-lg md:text-xl mb-4 max-w-3xl mx-auto leading-relaxed">
                      {slide.subtitle}
                    </p>
                    <Link href={slide.link} className="group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl text-base md:text-lg font-semibold transition-all duration-300 w-full sm:w-auto shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-block">
                      <span className="flex items-center justify-center space-x-2">
                        <span>{slide.cta}</span>
                        <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Slider Navigation - Hidden */}
        {/* <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors duration-300"
          aria-label="Slide sebelumnya"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors duration-300"
          aria-label="Slide selanjutnya"
        >
          <ChevronRight className="w-6 h-6" />
        </button> */}

        {/* Slider Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
              aria-label={`Pergi ke slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img src="/images/arizky 1.png" alt="Logo Arizky" className="w-40 h-40 mx-auto mb-6 object-contain" />
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Tentang Penginapan Arizky
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Penginapan Arizky adalah destinasi liburan premium yang menggabungkan kenyamanan modern dengan keindahan alam yang memukau. 
                Terletak di lokasi strategis dengan pemandangan gunung dan danau yang menakjubkan.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Kami menyediakan berbagai pilihan akomodasi mulai dari villa mewah hingga kamar nyaman, 
                dilengkapi dengan fasilitas lengkap untuk memastikan pengalaman liburan yang tak terlupakan.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2 text-gray-600">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  <span>Lokasi Strategis</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <Users className="w-5 h-5 text-blue-600" />
                  <span>Kapasitas Besar</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <Star className="w-5 h-5 text-blue-600" />
                  <span>Rating 4.8/5</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div 
                className="h-96 rounded-2xl bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${heroSlides[0].image})` }}
              ></div>
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <span className="text-gray-900 font-semibold">4.8/5</span>
                </div>
                <p className="text-sm text-gray-600">Dari 500+ ulasan</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Room Categories */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Pilihan Akomodasi
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Temukan akomodasi yang sesuai dengan kebutuhan dan budget Anda
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {roomCategories.map((category) => (
              <div key={category.id} className="group bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                {/* Badge */}
                <div className="relative">
                  <div className={`absolute top-4 left-4 ${category.badgeColor} text-white text-xs font-bold px-3 py-1 rounded-full z-10 shadow-lg`}>
                    {category.badge}
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-gray-800 text-xs font-semibold px-3 py-1 rounded-full">
                    {category.count} tersedia
                  </div>
                  
                  {/* Image Container */}
                  <div className="relative overflow-hidden">
                    <div 
                      className="h-72 bg-cover bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-110"
                      style={{ backgroundImage: `url(${category.image})` }}
                    ></div>
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                    
                    {/* Rating */}
                    <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2">
                      <div className="flex items-center space-x-2">
                        <div className="flex text-yellow-400">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className={`w-4 h-4 ${i < Math.floor(category.rating) ? 'fill-current' : ''}`} />
                          ))}
                        </div>
                        <div className="text-sm">
                          <span className="font-bold text-gray-900">{category.rating}</span>
                          <span className="text-gray-600">/5</span>
                          <p className="text-xs text-gray-500">{category.reviewCount} ulasan</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {category.name}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{category.description}</p>
                  
                  {/* Features */}
                  <div className="mb-6">
                    <div className="grid grid-cols-2 gap-2">
                      {category.features.slice(0, 4).map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2 text-sm text-gray-600">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span className="truncate">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Price and Action */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <span className="text-3xl font-bold text-blue-600">{category.price}</span>
                      <span className="text-lg text-gray-400 line-through">{category.originalPrice}</span>
                      <span className="bg-red-100 text-red-600 text-sm font-bold px-2 py-1 rounded-full">
                        {category.discount} OFF
                      </span>
                    </div>
                    
                    <Link 
                      href={`/${category.id === 'villa' ? 'villa/villa-premium' : category.id === 'kamar' ? 'kamar/kamar-deluxe' : 'cottage/cottage-alam'}`} 
                      className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                    >
                      <span>Lihat Detail</span>
                      <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Fasilitas Unggulan
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Nikmati berbagai fasilitas modern yang membuat liburan Anda semakin nyaman
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility) => (
              <div key={facility.id} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <facility.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{facility.name}</h3>
                <p className="text-gray-600">{facility.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Artikel & Tips Liburan
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Temukan informasi menarik dan tips liburan terbaru untuk pengalaman yang lebih baik
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Article 1 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className="relative h-48 overflow-hidden">
                <div 
                  className="w-full h-full bg-cover bg-center bg-no-repeat transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundImage: `url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop)` }}
                ></div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-blue-600 text-white text-sm font-medium rounded-full">
                    Destinasi Wisata
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                  <div className="flex items-center space-x-1">
                    <span>Tim Arizky</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <span>25 Jan 2024</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <span>10 menit</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
                  Pantai Legon Pari Sawarna: Surga Tersembunyi di Selatan Banten
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  Temukan keindahan Pantai Legon Pari Sawarna yang masih asri dengan pasir putih, ombak yang cocok untuk surfing, dan pemandangan sunset yang memukau.
                </p>
                <Link 
                  href="/artikel/pantai-legon-pari-sawarna"
                  className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium transition-colors duration-300 group"
                >
                  <span>Baca Selengkapnya</span>
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Article 2 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className="relative h-48 overflow-hidden">
                <div 
                  className="w-full h-full bg-cover bg-center bg-no-repeat transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundImage: `url(https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop)` }}
                ></div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-green-600 text-white text-sm font-medium rounded-full">
                    Travel Guide
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                  <div className="flex items-center space-x-1">
                    <span>Tim Arizky</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <span>26 Jan 2024</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <span>12 menit</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
                  Panduan Lengkap Liburan ke Pantai Legon Pari Sawarna
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  Panduan lengkap untuk liburan yang tak terlupakan di Pantai Legon Pari Sawarna, dari persiapan hingga tips aktivitas.
                </p>
                <Link 
                  href="/artikel/panduan-liburan-legon-pari"
                  className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium transition-colors duration-300 group"
                >
                  <span>Baca Selengkapnya</span>
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Article 3 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className="relative h-48 overflow-hidden">
                <div 
                  className="w-full h-full bg-cover bg-center bg-no-repeat transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundImage: `url(https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop)` }}
                ></div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-purple-600 text-white text-sm font-medium rounded-full">
                    Destinasi Wisata
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                  <div className="flex items-center space-x-1">
                    <span>Tim Arizky</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <span>27 Jan 2024</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <span>9 menit</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
                  Daya Tarik dan Pesona Alam Pantai Legon Pari Sawarna
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  Temukan keindahan dan pesona alam yang memukau di Pantai Legon Pari Sawarna dengan ekosistem yang kaya.
                </p>
                <Link 
                  href="/artikel/daya-tarik-legon-pari"
                  className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium transition-colors duration-300 group"
                >
                  <span>Baca Selengkapnya</span>
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* View All Articles Button */}
          <div className="text-center mt-12">
            <Link 
              href="/artikel"
              className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-300 group"
            >
              <span>Lihat Semua Artikel</span>
              <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Apa Kata Tamu Kami
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Dengarkan pengalaman langsung dari tamu yang telah menginap di Penginapan Arizky
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-4 italic">&ldquo;{testimonial.comment}&rdquo;</p>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
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
              Siap untuk Liburan?
            </h2>
            <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Pesan akomodasi Anda sekarang dan nikmati pengalaman liburan yang tak terlupakan di Penginapan Arizky
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/villa-kamar" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-colors duration-200">
                Pesan Sekarang
              </Link>
              <Link href="/villa-kamar" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-4 px-8 rounded-lg transition-colors duration-200">
                Lihat Akomodasi
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
