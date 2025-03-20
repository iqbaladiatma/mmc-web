import { motion } from "framer-motion";
import { Calendar, User } from "lucide-react";

export default function NewsPage() {
  const newsItems = [
    {
      title: "Jadwal Vaksinasi COVID-19 Bulan Maret",
      date: "1 Maret 2024",
      author: "Admin MMC",
      category: "Pengumuman",
      image: "src/img/news1.jpg",
    },
    {
      title: "Layanan Baru: Konsultasi Online",
      date: "28 Februari 2024",
      author: "Admin MMC",
      category: "Layanan Baru",
      image: "src/img/news2.jpg",
    },
    {
      title: "Program Pemeriksaan Kesehatan Gratis",
      date: "25 Februari 2024",
      author: "Admin MMC",
      category: "Program",
      image: "src/img/news3.jpg",
    },
    {
      title: "Dokter Spesialis Baru Bergabung",
      date: "22 Februari 2024",
      author: "Admin MMC",
      category: "Pengumuman",
      image: "src/img/news4.jpg",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen pt-16">
      <div className="container mx-auto px-4 py-16">
        <motion.h1 className="text-[#3E144C] text-4xl font-bold mb-8" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          Berita & Pengumuman
        </motion.h1>

        <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2">
          {newsItems.map((item, index) => (
            <motion.article key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} className="flex flex-col bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="aspect-video relative">
                <img src={item.image} alt={item.title} className="h-full w-full absolute inset-0 object-cover" />
              </div>
              <div className="flex-1 p-6">
                <h2 className="text-xl font-semibold mb-3">{item.title}</h2>
                <div className="flex justify-between text-gray-500 text-sm items-center mb-4">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {item.date}
                  </div>
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    {item.author}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
