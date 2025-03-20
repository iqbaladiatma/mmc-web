import { motion } from 'framer-motion';
import { Users, Calendar, Activity, Heart } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <motion.h1 
          className="text-4xl font-bold text-[#3E144C] mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Tentang Klinik Sehat
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=600"
              alt="Clinic Building"
              className="rounded-lg shadow-lg mb-6"
            />
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center">
                <Users className="text-[#3E144C] mr-2" />
                <span>50+ Dokter</span>
              </div>
              <div className="flex items-center">
                <Calendar className="text-[#3E144C] mr-2" />
                <span>24/7 Layanan</span>
              </div>
              <div className="flex items-center">
                <Activity className="text-[#3E144C] mr-2" />
                <span>Modern Equipment</span>
              </div>
              <div className="flex items-center">
                <Heart className="text-[#3E144C] mr-2" />
                <span>Pasien Puas</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-2xl font-semibold text-[#3E144C] mb-4">Sejarah Kami</h2>
              <p className="text-gray-600">
                Didirikan pada tahun 2010, Klinik Sehat telah menjadi pionir dalam pelayanan kesehatan modern di Jakarta. 
                Bermula dari sebuah klinik kecil, kami telah berkembang menjadi pusat kesehatan terpadu yang melayani 
                ribuan pasien setiap tahunnya.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-[#3E144C] mb-4">Visi & Misi</h2>
              <p className="text-gray-600 mb-4">
                <strong>Visi:</strong> Menjadi pusat layanan kesehatan terpercaya yang mengutamakan kualitas dan 
                kepuasan pasien.
              </p>
              <p className="text-gray-600">
                <strong>Misi:</strong>
              </p>
              <ul className="list-disc list-inside text-gray-600 ml-4">
                <li>Memberikan pelayanan kesehatan berkualitas tinggi</li>
                <li>Mengembangkan teknologi dan fasilitas modern</li>
                <li>Meningkatkan kompetensi tim medis secara berkelanjutan</li>
                <li>Menjaga kepuasan dan kenyamanan pasien</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-[#3E144C] mb-4">Nilai-Nilai Kami</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow">
                  <h3 className="font-semibold mb-2">Profesionalisme</h3>
                  <p className="text-sm text-gray-600">Layanan medis berkualitas tinggi dengan standar profesional</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <h3 className="font-semibold mb-2">Integritas</h3>
                  <p className="text-sm text-gray-600">Kejujuran dan etika dalam setiap tindakan medis</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <h3 className="font-semibold mb-2">Inovasi</h3>
                  <p className="text-sm text-gray-600">Pengembangan teknologi dan metode pengobatan terkini</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <h3 className="font-semibold mb-2">Empati</h3>
                  <p className="text-sm text-gray-600">Kepedulian terhadap kesejahteraan setiap pasien</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}