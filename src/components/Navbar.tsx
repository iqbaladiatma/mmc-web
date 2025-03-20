import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { path: '/', label: 'Beranda' },
    { path: '/about', label: 'Tentang Kami' },
    { path: '/facilities', label: 'Fasilitas' },
    { path: '/doctors', label: 'Dokter' },
    { path: '/blog', label: 'Blog' },
    { path: '/contact', label: 'Kontak' },
  ];

  return (
    <nav className="fixed w-full bg-[#3E144C] text-white z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <NavLink to="/" className="text-xl font-bold">
            Klinik Sehat
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `hover:text-gray-300 transition-colors ${
                    isActive ? 'text-white font-semibold' : 'text-gray-300'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden py-4"
          >
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `block py-2 px-4 hover:bg-[#4e1a5f] transition-colors ${
                    isActive ? 'bg-[#4e1a5f]' : ''
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
          </motion.div>
        )}
      </div>
    </nav>
  );
}