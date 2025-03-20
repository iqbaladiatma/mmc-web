import { motion } from 'framer-motion';
import { Stethoscope, Brain, Microscope, Heart, Activity, ChevronFirst as FirstAid } from 'lucide-react';

export default function FacilitiesPage() {
  const facilities = [
    {
      icon: <Stethoscope size={40} />,
      title: "Pemeriksaan Umum",
      description: "Layanan pemeriksaan kesehatan umum dengan dokter berpengalaman.",
      details: [
        "Konsultasi dokter umum",
        "Pemeriksaan fisik lengkap",
        "Skrining kesehatan dasar",
        "Pemeriksaan tanda vital"
      ]
    },
    {
      icon: <Brain size={40} />,
      title: "Neurologi",
      description: "Penanganan gangguan sistem saraf dengan peralatan modern.",
      details: [
        "CT Scan otak",
        "EEG (Electroencephalogram)",
        "EMG (Electromyography)",
        "Konsultasi neurolog spesialis"
      ]
    },
    {
      icon: <Microscope size={40} />,
      title: "Laboratorium",
      description: "Fasilitas lab lengkap untuk berbagai jenis pemeriksaan.",
      details: [
        "Tes darah lengkap",
        "Tes fungsi hati & ginjal",
        "Tes hormon",
        "Tes alergi"
      ]
    },
    {
      icon: <Heart size={40} />,
      title: "Kardiologi",
      description: "Pemeriksaan jantung komprehensif dengan teknologi terkini.",
      details: [
        "EKG (Elektrokardiogram)",
        "Ekokardiografi",
        "Stress test",
        "Holter monitoring"
      ]
    },
    {
      icon: <Activity size={40} />,
      title: "Radiologi",
      description: "Pencitraan medis dengan peralatan canggih.",
      details: [
        "X-Ray digital",
        "USG 4D",
        "MRI",
        "CT Scan"
      ]
    },
    {
      icon: <FirstAid size={40} />,
      title: "Unit Gawat Darurat",
      description: "Pelayanan 24 jam untuk penanganan darurat.",
      details: [
        "Penanganan trauma",
        "Resusitasi",
        "Ambulans siaga",
        "Tim medis terlatih"
      ]
    }
  ];

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <motion.h1 
          className="text-4xl font-bold text-[#3E144C] mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Fasilitas Kami
        </motion.h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg"
            >
              <div className="p-6">
                <div className="text-[#3E144C] mb-4 flex justify-center">
                  {facility.icon}
                </div>
                <h2 className="text-xl font-semibold mb-3 text-center">{facility.title}</h2>
                <p className="text-gray-600 mb-4 text-center">{facility.description}</p>
                <ul className="space-y-2">
                  {facility.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-[#3E144C] rounded-full mr-2"></span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}