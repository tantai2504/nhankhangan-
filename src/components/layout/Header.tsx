import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Trang chủ', href: '#home' },
    { name: 'Giới thiệu', href: '#about' },
    { name: 'Sản phẩm', href: '#products' },
    { name: 'Năng lực', href: '#capabilities' },
    { name: 'Đối tác', href: '#partners' },
    { name: 'Liên hệ', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-brand-dark rounded-lg flex items-center justify-center text-white font-bold text-lg md:text-xl">
                NKA
              </div>
              <div className="flex flex-col">
                <span className={`font-display font-bold text-lg md:text-xl leading-none ${isScrolled ? 'text-brand-dark' : 'text-white'}`}>
                  NHÂN KHANG AN
                </span>
                <span className={`text-[8px] md:text-[10px] font-medium tracking-widest ${isScrolled ? 'text-slate-500' : 'text-slate-200'}`}>
                  BẠN THỊNH VƯỢNG - CHÚNG TÔI HẠNH PHÚC
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-bold transition-colors ${
                  isScrolled ? 'text-slate-700 hover:text-brand-dark' : 'text-white hover:text-brand-light'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact" 
              className="btn-accent px-5 py-2.5 text-sm"
            >
              Tư vấn ngay
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg ${isScrolled ? 'text-slate-700' : 'text-white'} hover:bg-white/10 focus:outline-none transition-colors`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] lg:hidden bg-white flex flex-col"
          >
            <div className="p-4 flex justify-between items-center border-b border-slate-100">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-brand-dark rounded-lg flex items-center justify-center text-white font-bold">NKA</div>
                <span className="font-display font-bold text-brand-dark">NHÂN KHANG AN</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="p-2 text-slate-500 hover:bg-slate-100 rounded-lg">
                <X size={24} />
              </button>
            </div>
            <div className="flex-grow overflow-y-auto py-8 px-6 space-y-6">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  onClick={() => setIsOpen(false)}
                  className="block text-2xl font-bold text-slate-800 hover:text-brand-dark transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
            <div className="p-6 border-t border-slate-100">
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="w-full btn-accent flex justify-center py-4 text-lg"
              >
                Liên hệ hợp tác
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
