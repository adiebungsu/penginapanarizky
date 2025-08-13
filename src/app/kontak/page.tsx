'use client'

import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, CheckCircle } from 'lucide-react'

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Bagaimana cara melakukan pemesanan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Anda dapat melakukan pemesanan melalui website kami, WhatsApp, atau telepon langsung. Pembayaran dapat dilakukan melalui transfer bank atau pembayaran di tempat.',
      },
    },
    {
      '@type': 'Question',
      name: 'Apakah ada fasilitas untuk anak-anak?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Ya, kami menyediakan berbagai fasilitas ramah anak seperti taman bermain dan menu makanan khusus anak-anak.',
      },
    },
    {
      '@type': 'Question',
      name: 'Bisakah saya membawa hewan peliharaan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Untuk saat ini kami belum menyediakan fasilitas untuk hewan peliharaan. Mohon maaf atas ketidaknyamanannya.',
      },
    },
    {
      '@type': 'Question',
      name: 'Apakah ada layanan antar jemput dari bandara?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Ya, kami menyediakan layanan antar jemput dari Bandara Soekarno-Hatta Jakarta dengan biaya tambahan. Silakan hubungi kami untuk informasi lebih lanjut.',
      },
    },
  ],
}

export default function Kontak() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      })
    }, 3000)
  }

  const contactInfo = [
    {
      icon: Phone,
      title: 'Telepon',
      value: '083877080088',
      description: 'Layanan pelanggan 24/7'
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'info@penginapanarizky.com',
      description: 'Respon dalam 2 jam'
    },
    {
      icon: MapPin,
      title: 'Alamat',
      value: 'Jl. Raya Sawarna - Bayah, Lebak, Banten',
              description: 'Banten, Indonesia'
    },
    {
      icon: Clock,
      title: 'Jam Operasional',
      value: '24/7',
      description: 'Check-in: 14:00, Check-out: 12:00'
    }
  ]

  const socialMedia = [
    {
      name: 'WhatsApp',
      value: '083877080088',
      description: 'Chat langsung dengan kami'
    },
    {
      name: 'Instagram',
      value: '@penginapanarizky',
      description: 'Update terbaru dan foto'
    },
    {
      name: 'Facebook',
      value: 'Penginapan Arizky',
      description: 'Komunitas dan review'
    }
  ]

  return (
    <main className="min-h-screen bg-gray-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Hubungi Kami</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Kami siap membantu dan melayani kebutuhan liburan Anda
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Informasi Kontak
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Jangan ragu untuk menghubungi kami. Tim kami siap membantu Anda dengan pertanyaan atau kebutuhan khusus.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <info.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{info.title}</h3>
                <p className="text-blue-600 font-medium mb-2">{info.value}</p>
                <p className="text-sm text-gray-600">{info.description}</p>
              </div>
            ))}
          </div>

          {/* Social Media */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Media Sosial</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {socialMedia.map((social, index) => (
                <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{social.name}</h4>
                  <p className="text-blue-600 font-medium mb-2">{social.value}</p>
                  <p className="text-sm text-gray-600">{social.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Kirim Pesan</h2>
              <p className="text-gray-600 mb-8">
                Isi form di bawah ini dan kami akan segera menghubungi Anda.
              </p>

              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-green-800 mb-2">Pesan Terkirim!</h3>
                  <p className="text-green-700">
                    Terima kasih telah menghubungi kami. Kami akan segera merespon pesan Anda.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Nama Lengkap *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                        placeholder="Masukkan nama lengkap"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                        placeholder="contoh@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Nomor Telepon
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                        placeholder="083877080088"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Subjek *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                      >
                        <option value="">Pilih subjek</option>
                        <option value="booking">Pemesanan & Reservasi</option>
                        <option value="information">Informasi Umum</option>
                        <option value="complaint">Keluhan & Saran</option>
                        <option value="partnership">Kerjasama & Partnership</option>
                        <option value="other">Lainnya</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Pesan *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                      placeholder="Tulis pesan Anda di sini..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Mengirim...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Kirim Pesan</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Map & Location */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Lokasi Kami</h2>
              <p className="text-gray-600 mb-8">
                Penginapan Arizky berlokasi strategis di Sawarna, Bayah, Lebak, Banten dengan akses mudah dan pemandangan alam yang memukau.
              </p>

              {/* Map Placeholder */}
              <div className="bg-gray-200 rounded-lg h-80 mb-6 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <MapPin className="w-16 h-16 mx-auto mb-4" />
                  <p className="text-lg font-medium">Peta Lokasi</p>
                  <p className="text-sm">Integrasi Google Maps</p>
                </div>
              </div>

              {/* Location Details */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Detail Lokasi</h3>
                <div className="space-y-3 text-sm text-gray-600">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">Alamat Lengkap:</p>
                      <p>Jl. Raya Sawarna, Desa Sawarna, Kecamatan Bayah, Lebak, Banten 42393</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">Jarak dari Pusat Kota:</p>
                      <p>15 km dari Pantai Legon Pari (30 menit)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <MessageCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">Transportasi:</p>
                      <p>Grab/Gojek tersedia, Terminal Arjosari 8 km</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Pertanyaan yang Sering Diajukan
            </h2>
            <p className="text-lg text-gray-600">
              Temukan jawaban untuk pertanyaan umum seputar Penginapan Arizky
            </p>
          </div>
          
          <div className="space-y-6">
            {[
              {
                question: 'Bagaimana cara melakukan pemesanan?',
                answer: 'Anda dapat melakukan pemesanan melalui website kami, WhatsApp, atau telepon langsung. Pembayaran dapat dilakukan melalui transfer bank atau pembayaran di tempat.'
              },
              {
                question: 'Apakah ada fasilitas untuk anak-anak?',
                answer: 'Ya, kami menyediakan berbagai fasilitas ramah anak seperti taman bermain dan menu makanan khusus anak-anak.'
              },
              {
                question: 'Bisakah saya membawa hewan peliharaan?',
                answer: 'Untuk saat ini kami belum menyediakan fasilitas untuk hewan peliharaan. Mohon maaf atas ketidaknyamanannya.'
              },
              {
                question: 'Apakah ada layanan antar jemput dari bandara?',
                answer: 'Ya, kami menyediakan layanan antar jemput dari Bandara Soekarno-Hatta Jakarta dengan biaya tambahan. Silakan hubungi kami untuk informasi lebih lanjut.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
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
              Hubungi kami sekarang untuk informasi lebih lanjut atau langsung pesan akomodasi Anda
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                          <a href="/detailroom" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-colors duration-200">
              Pesan Sekarang
            </a>
              <a href="tel:083877080088" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-4 px-8 rounded-lg transition-colors duration-200">
                Telepon Langsung
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
