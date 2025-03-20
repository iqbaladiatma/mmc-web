import { motion } from 'framer-motion';
import { Calendar, User, ChevronRight } from 'lucide-react';

export default function BlogPage() {
  const blogPosts = [
    {
      title: "Tips Menjaga Kesehatan Jantung",
      excerpt: "Pola hidup sehat dan tips praktis untuk menjaga kesehatan jantung Anda sehari-hari.",
      date: "1 Maret 2024",
      author: "Dr. Sarah Johnson",
      category: "Kesehatan Jantung",
      image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=400"
    },
    {
      title: "Pentingnya Vaksinasi untuk Anak",
      excerpt: "Informasi lengkap tentang jadwal dan manfaat vaksinasi untuk tumbuh kembang anak.",
      date: "28 Februari 2024",
      author: "Dr. Amanda Williams",
      category: "Pediatri",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=400"
    },
    {
      title: "Cara Menjaga Kesehatan Mental",
      excerpt: "Panduan praktis untuk menjaga kesehatan mental di tengah rutinitas sehari-hari.",
      date: "25 Februari 2024",
      author: "Dr. Michael Chen",
      category: "Kesehatan Mental",
      image: "https://images.unsplash.com/photo-1493836512294-502baa1986e2?auto=format&fit=crop&q=80&w=400"
    },
    {
      title: "Nutrisi Penting untuk Lansia",
      excerpt: "Panduan nutrisi dan pola makan yang tepat untuk menjaga kesehatan di usia lanjut.",
      date: "22 Februari 2024",
      author: "Dr. David Kim",
      category: "Nutrisi",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=400"
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
          Blog Kesehatan
        </motion.h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg"
            >
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="bg-[#3E144C] text-white text-sm px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
                <h2 className="text-xl font-semibold mb-3">{post.title}</h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {post.date}
                  </div>
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-1" />
                    {post.author}
                  </div>
                </div>

                <button className="text-[#3E144C] font-semibold flex items-center hover:text-[#4e1a5f] transition-colors">
                  Baca Selengkapnya
                  <ChevronRight className="ml-1 w-4 h-4" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}