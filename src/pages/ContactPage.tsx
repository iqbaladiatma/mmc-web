import { motion } from 'framer-motion';
import { Building2, Phone, Mail, Clock, MapPin } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <motion.h1 
          className="text-4xl font-bold text-[#3E144C] mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Hubungi Kami
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-2xl font-semibold text-[#3E144C] mb-6">Informasi Kontak</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Building2 className="text-[#3E144C] mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold">Alamat</h3>
                    <p className="text-gray-600">Jl. Kesehatan No. 123, Jakarta Selatan</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="text-[#3E144C] mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold">Telepon</h3>
                    <p className="text-gray-600">+62 21 1234 5678</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="text-[#3E144C] mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-gray-600">info@kliniksehat.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="text-[#3E144C] mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold">Jam Operasional</h3>
                    <p className="text-gray-600">Senin - Jumat: 08.00 - 20.00</p>
                    <p className="text-gray-600">Sabtu: 09.00 - 17.00</p>
                    <p className="text-gray-600">Minggu: 09.00 - 15.00</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-[#3E144C] mb-6">Lokasi</h2>
              <div className="bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <MapPin className="text-[#3E144C] mr-2" />
                  <span className="font-semibold">Klinik Sehat</span>
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?auto=format&fit=crop&q=80&w=800" 
                  alt="Lokasi Klinik" 
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-2xl font-semibold text-[#3E144C] mb-6">Kirim Pesan</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="name">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#3E144C]"
                  placeholder="Masukkan nama lengkap"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#3E144C]"
                  placeholder="Masukkan email"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="phone">
                  Nomor Telepon
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#3E144C]"
                  placeholder="Masukkan nomor telepon"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="message">
                  Pesan
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#3E144C]"
                  placeholder="Tulis pesan Anda"
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-[#3E144C] text-white py-3 rounded-lg hover:bg-[#4e1a5f] transition-colors"
              >
                Kirim Pesan
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}