import { motion } from 'framer-motion';
import { ChevronRight, Heart, Stethoscope, Building2, Phone, Users, Calendar, Activity } from 'lucide-react';

export default function HomePage() {
  const doctors = [
    {
      name: "Dr. Sarah Johnson",
      specialty: "Kardiologi",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=300&h=300"
    },
    {
      name: "Dr. Michael Chen",
      specialty: "Neurologi",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=300&h=300"
    },
    {
      name: "Dr. Amanda Williams",
      specialty: "Pediatri",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=300&h=300"
    }
  ];

  const blogPosts = [
    {
      title: "Tips Menjaga Kesehatan Jantung",
      date: "1 Maret 2024",
      image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=400"
    },
    {
      title: "Pentingnya Vaksinasi untuk Anak",
      date: "28 Februari 2024",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=400"
    },
    {
      title: "Cara Menjaga Kesehatan Mental",
      date: "25 Februari 2024",
      image: "https://images.unsplash.com/photo-1493836512294-502baa1986e2?auto=format&fit=crop&q=80&w=400"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-[#3E144C] text-white min-h-screen flex items-center">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <motion.h1 
                className="text-4xl md:text-6xl font-bold mb-6"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                Kesehatan Anda Prioritas Kami
              </motion.h1>
              <motion.p 
                className="text-lg mb-8 text-gray-200"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Memberikan pelayanan kesehatan terbaik dengan teknologi modern dan tim dokter berpengalaman.
              </motion.p>
              <motion.button 
                className="bg-white text-[#3E144C] px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Buat Janji <ChevronRight className="ml-2" />
              </motion.button>
            </div>
            <div className="md:w-1/2">
              <motion.img 
                src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&q=80&w=600"
                alt="Medical Team"
                className="rounded-2xl shadow-2xl"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid md:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div>
              <motion.img 
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=600"
                alt="Clinic Building"
                className="rounded-lg shadow-lg"
                whileHover={{ scale: 1.02 }}
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-[#3E144C] mb-6">Tentang Kami</h2>
              <p className="text-gray-600 mb-6">
                Sejak 2010, kami telah berkomitmen untuk memberikan pelayanan kesehatan berkualitas tinggi kepada masyarakat. 
                Dengan tim medis profesional dan fasilitas modern, kami siap melayani kebutuhan kesehatan Anda.
              </p>
              <div className="grid grid-cols-2 gap-4">
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
            </div>
          </motion.div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#3E144C] mb-12">Fasilitas Kami</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Stethoscope size={40} />, title: "Pemeriksaan Umum" },
              { icon: <Heart size={40} />, title: "Kardiologi" },
              { icon: <Activity size={40} />, title: "Laboratorium" },
            ].map((facility, index) => (
              <motion.div
                key={index}
                className="p-6 bg-gray-50 rounded-xl text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="text-[#3E144C] mb-4 flex justify-center">{facility.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{facility.title}</h3>
                <p className="text-gray-600">Dilengkapi dengan peralatan modern dan tim ahli yang berpengalaman.</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Doctors Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#3E144C] mb-12">Dokter Kami</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {doctors.map((doctor, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
              >
                <img src={doctor.image} alt={doctor.name} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{doctor.name}</h3>
                  <p className="text-[#3E144C]">{doctor.specialty}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#3E144C] mb-12">Blog Kesehatan</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 rounded-xl overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                  <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                  <button className="text-[#3E144C] font-semibold flex items-center">
                    Baca Selengkapnya <ChevronRight className="ml-1" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-[#3E144C] text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Hubungi Kami</h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Building2 className="mr-3" />
                  <p>Jl. Kesehatan No. 123, Jakarta</p>
                </div>
                <div className="flex items-center">
                  <Phone className="mr-3" />
                  <p>+62 21 1234 5678</p>
                </div>
              </div>
            </div>
            <div>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Nama Lengkap"
                  className="w-full p-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:border-white"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:border-white"
                />
                <textarea
                  placeholder="Pesan"
                  rows={4}
                  className="w-full p-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:border-white"
                ></textarea>
                <motion.button
                  className="bg-white text-[#3E144C] px-8 py-3 rounded-full font-semibold w-full"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Kirim Pesan
                </motion.button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}