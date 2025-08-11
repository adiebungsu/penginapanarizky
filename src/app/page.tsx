'use client'

import { useState, useEffect } from 'react'
import { Star, MapPin, Users, Wifi, Car, Coffee, Utensils, Waves, Mountain } from 'lucide-react'
import Link from 'next/link'

interface HeroSlide {
  id: number
  title: string
  subtitle: string
  cta: string
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
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&h=1080&fit=crop&crop=center',
    fallbackImage: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1920&h=1080&fit=crop&crop=center' // fallback: pemandangan alam
  },
  {
    id: 2,
    title: 'Villa Premium dengan Pemandangan Indah',
    subtitle: 'Nikmati liburan mewah dengan fasilitas lengkap',
    cta: 'Lihat Villa',
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1920&h=1080&fit=crop&crop=center',
    fallbackImage: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?w=1920&h=1080&fit=crop&crop=center' // fallback: villa
  },
  {
    id: 3,
    title: 'Kamar Nyaman untuk Keluarga',
    subtitle: 'Beristirahat dengan tenang di kamar yang bersih dan nyaman',
    cta: 'Lihat Kamar',
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1920&h=1080&fit=crop&crop=center',
    fallbackImage: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=1920&h=1080&fit=crop&crop=center' // fallback: kamar hotel
  },
  {
    id: 4,
    title: 'Restoran dengan Cita Rasa Terbaik',
    subtitle: 'Nikmati hidangan lezat dengan pemandangan alam yang memukau',
    cta: 'Lihat Menu',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&h=1080&fit=crop&crop=center',
    fallbackImage: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1920&h=1080&fit=crop&crop=center' // fallback: restoran
  },
  {
    id: 5,
    title: 'Lobby yang Elegan dan Nyaman',
    subtitle: 'Rasakan keramahan dan pelayanan terbaik kami',
    cta: 'Lihat Fasilitas',
    image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=1920&h=1080&fit=crop&crop=center',
    fallbackImage: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=1920&h=1080&fit=crop&crop=center' // fallback: lobby hotel
  }
]

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [imageErrors, setImageErrors] = useState<{[key: number]: boolean}>({})
  const [imageLoading, setImageLoading] = useState<{[key: number]: boolean}>({})
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const roomCategories = [
    {
      id: 'villa',
      name: 'Villa Premium',
      description: 'Villa mewah dengan kolam renang pribadi dan pemandangan alam',
      count: 12,
      price: 'Mulai Rp 2.500.000',
      image: 'https://i.imgur.com/XQKMbFZ.jpeg'
    },
    {
      id: 'kamar',
      name: 'Kamar Standard',
      description: 'Kamar nyaman dengan fasilitas lengkap untuk keluarga',
      count: 24,
      price: 'Mulai Rp 500.000',
      image: 'https://i.imgur.com/0NEMnoK.jpeg'
    },
    {
      id: 'cottage',
      name: 'Cottage Alam',
      description: 'Cottage unik dengan nuansa alam yang menenangkan',
      count: 8,
      price: 'Mulai Rp 800.000',
      image: 'https://i.imgur.com/mokoWMJ.jpeg'
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
      name: 'Parkir Luas',
      description: 'Area parkir aman dan luas untuk kendaraan',
      icon: Car
    },
    {
      id: 3,
      name: 'Restoran',
      description: 'Restoran dengan menu lokal dan internasional',
      icon: Utensils
    },
    {
      id: 4,
      name: 'Kolam Renang',
      description: 'Kolam renang dengan pemandangan alam',
      icon: Waves
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
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [heroSlides.length])

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

  if (!mounted) {
    return (
      <main>
        <div className="flex items-center justify-center min-h-screen">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
        </div>
      </main>
    )
  }

  return (
    <main>
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
                <div className="absolute inset-0 bg-gray-900 flex items-center justify-center z-30">
                  <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-white"></div>
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
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg text-base md:text-lg font-semibold transition-colors duration-300 w-full sm:w-auto">
                      {slide.cta}
                    </button>
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
              <div key={category.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative">
                  <div 
                    className="h-64 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${category.image})` }}
                  ></div>
                  <div className="absolute top-4 right-4 bg-blue-600 text-white text-sm px-3 py-1 rounded-full">
                    {category.count} tersedia
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{category.name}</h3>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-blue-600">{category.price}</span>
                    <Link href={`/${category.id}`} className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-300">
                      Lihat Detail
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

      {/* Testimonials */}
      <section className="py-20 px-4 bg-gray-50">
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
              <Link href="/detailroom" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-colors duration-200">
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
