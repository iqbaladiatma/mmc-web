import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, Calendar } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { path: "/", label: "Beranda" },
    { path: "/about", label: "Tentang Kami" },
    { path: "/facilities", label: "Fasilitas" },
    { path: "/doctors", label: "Dokter" },
    { path: "/blog", label: "Blog" },
    { path: "/contact", label: "Kontak" },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-[#3E144C] shadow-lg" : "bg-[#3E144C]/95"}`}>
      <div className="container mx-auto px-4">
        <div className="flex h-20 justify-between items-center">
          <NavLink to="/" className="flex text-white text-xl font-bold items-center">
            <span className="text-2xl mr-2">🏥</span>
            <span>Klinik Sehat</span>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden items-center md:flex space-x-8">
            {navItems.map((item) => (
              <NavLink key={item.path} to={item.path} className={({ isActive }) => `hover:text-white transition-colors relative ${isActive ? "text-white font-semibold" : "text-gray-300"}`}>
                {({ isActive }) => (
                  <>
                    {item.label}
                    {isActive && <motion.div className="bg-white h-0.5 -bottom-2 absolute left-0 right-0" layoutId="navbar-indicator" />}
                  </>
                )}
              </NavLink>
            ))}
            <motion.button className="flex bg-white rounded-full text-[#3E144C] text-sm font-semibold hover:bg-opacity-90 items-center ml-4 px-5 py-2 transition-all" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Calendar className="h-4 w-4 mr-1" />
              Buat Janji
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button className="text-white md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.3 }} className="md:hidden overflow-hidden py-4">
              {navItems.map((item) => (
                <NavLink key={item.path} to={item.path} className={({ isActive }) => `block py-3 px-4 hover:bg-[#4e1a5f] transition-colors ${isActive ? "bg-[#4e1a5f]" : ""}`} onClick={() => setIsOpen(false)}>
                  {item.label}
                </NavLink>
              ))}
              <motion.button className="flex bg-white justify-center rounded-md text-[#3E144C] w-full font-semibold hover:bg-opacity-90 items-center mt-2 px-4 py-3 transition-all" whileTap={{ scale: 0.98 }} onClick={() => setIsOpen(false)}>
                <Calendar className="h-4 w-4 mr-2" />
                Buat Janji
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
