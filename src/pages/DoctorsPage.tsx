import { motion } from "framer-motion";
import { Star, Calendar, Phone } from "lucide-react";

export default function DoctorsPage() {
  const doctors = [
    {
      name: "Dr. Sarah Johnson",
      specialty: "Kardiologi",
      experience: "15 tahun",
      schedule: "Senin - Jumat",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=300&h=300",
      expertise: ["Penyakit Jantung Koroner", "Hipertensi", "Aritmia", "Gagal Jantung"],
    },
    {
      name: "Dr. Michael Chen",
      specialty: "Neurologi",
      experience: "12 tahun",
      schedule: "Selasa - Sabtu",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      expertise: ["Stroke", "Epilepsi", "Sakit Kepala", "Alzheimer"],
    },
    {
      name: "Dr. Amanda Williams",
      specialty: "Pediatri",
      experience: "10 tahun",
      schedule: "Senin - Kamis",
      image: "https://plus.unsplash.com/premium_photo-1658506671316-0b293df7c72b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      expertise: ["Tumbuh Kembang Anak", "Vaksinasi", "Alergi Anak", "Asma"],
    },
    {
      name: "Dr. David Kim",
      specialty: "Dermatologi",
      experience: "8 tahun",
      schedule: "Rabu - Minggu",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=300&h=300",
      expertise: ["Perawatan Kulit", "Alergi Kulit", "Bedah Kulit", "Kosmetik"],
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen pt-16">
      <div className="container mx-auto px-4 py-16">
        <motion.h1 className="text-[#3E144C] text-4xl font-bold mb-8" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          Tim Dokter Kami
        </motion.h1>

        <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2">
          {doctors.map((doctor, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img src={doctor.image} alt={doctor.name} className="h-64 w-full object-cover" />
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">{doctor.name}</h2>
                <p className="text-[#3E144C] font-medium mb-4">{doctor.specialty}</p>

                <div className="space-y-3">
                  <div className="flex items-center">
                    <Star className="h-5 text-[#3E144C] w-5 mr-2" />
                    <span className="text-gray-600">{doctor.experience} pengalaman</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-5 text-[#3E144C] w-5 mr-2" />
                    <span className="text-gray-600">{doctor.schedule}</span>
                  </div>
                </div>

                <div className="mt-4">
                  <h3 className="font-semibold mb-2">Keahlian:</h3>
                  <ul className="grid grid-cols-2 gap-2">
                    {doctor.expertise.map((item, idx) => (
                      <li key={idx} className="flex text-gray-600 text-sm items-center">
                        <span className="bg-[#3E144C] h-2 rounded-full w-2 mr-2"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="flex bg-[#3E144C] justify-center rounded-lg text-white w-full hover:bg-[#4e1a5f] items-center mt-6 py-2 transition-colors">
                  <Phone className="h-4 w-4 mr-2" />
                  Buat Janji
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
