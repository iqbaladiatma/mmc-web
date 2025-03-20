import { motion } from 'framer-motion';
import { Stethoscope, Brain, Microscope, Heart, Activity, ChevronFirst as FirstAid, Plus } from 'lucide-react';
import { useState } from 'react';

export default function FacilitiesPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

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

  // Add images for each facility
  const facilityImages = [
    "https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1579154341098-e4e158cc7f55?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1628595351029-c2bf17511435?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1612776569-forteKrLh6e?auto=format&fit=crop&q=80&w=600",
  ];

  const toggleActiveIndex = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-50 min-h-screen pt-16">
      <div className="container mx-auto px-4 py-16">
        <motion.h1 
          className="text-[#3E144C] text-4xl font-bold mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Fasilitas Kami
        </motion.h1>

        <p className="text-gray-600 max-w-3xl mb-12">
          Kami dilengkapi dengan fasilitas medis terkini dan tim ahli untuk menyediakan perawatan terbaik untuk pasien kami. 
          Setiap departemen kami dirancang dengan standar tertinggi untuk kenyamanan dan pemulihan Anda.
        </p>

        <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2">
          {facilities.map((facility, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={facilityImages[index]} 
                  alt={facility.title} 
                  className="h-full w-full duration-500 hover:scale-110 object-cover transition-transform"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-center text-[#3E144C] mb-4">
                  {facility.icon}
                </div>
                <h2 className="text-center text-xl font-semibold mb-3">{facility.title}</h2>
                <p className="text-center text-gray-600 mb-4">{facility.description}</p>
                
                <div className={`overflow-hidden transition-all duration-300 ${activeIndex === index ? 'max-h-96' : 'max-h-0'}`}>
                  <ul className="mb-4 space-y-2">
                    {facility.details.map((detail, idx) => (
                      <li key={idx} className="flex text-gray-700 items-center">
                        <span className="bg-[#3E144C] h-2 rounded-full w-2 mr-2"></span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <button 
                  onClick={() => toggleActiveIndex(index)}
                  className="flex justify-center text-[#3E144C] w-full font-medium items-center mt-2"
                >
                  {activeIndex === index ? "Tutup Detail" : "Lihat Detail"}
                  <Plus 
                    className={`ml-1 transition-transform duration-300 ${activeIndex === index ? 'rotate-45' : 'rotate-0'}`} 
                    size={16} 
                  />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}