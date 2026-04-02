import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Phone, Factory, Scissors, Truck } from 'lucide-react';
import heroBg from '../../assets/images/background.jpg';
import heroSide from '../../assets/images/anh-gioi-thieu-sanpham.jpg';
import { COMPANY_INFO } from '../../constants';

const Hero = () => {
  const highlights = [
    { icon: Factory, text: 'Sản xuất trực tiếp — giá gốc xưởng' },
    { icon: Scissors, text: 'Gia công theo yêu cầu — in logo riêng' },
    { icon: Truck, text: 'Giao hàng toàn quốc — nhanh trong 24h' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 8, ease: 'easeOut' }}
          src={heroBg}
          alt="Nhà máy Nhân Khang An"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/40"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/40 via-transparent to-brand-red/10 animate-gradient-x"></div>
      </div>

      {/* Particles */}
      <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-brand-light/20 rounded-full animate-float"
            style={{
              left: `${15 + i * 18}%`,
              top: `${20 + (i % 3) * 25}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${3 + i * 0.5}s`,
            }}
          />
        ))}
      </div>

      <div className="section-container relative z-10 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Left - Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center lg:text-left"
        >
          {/* Badge - nói ngay là gì */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-1.5 rounded-full mb-6 mx-auto lg:mx-0"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
            </span>
            <span className="text-white text-xs font-bold">Nhà sản xuất băng keo & màng PE</span>
          </motion.div>

          {/* Headline - nói RÕ bán gì, cho ai */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-4 leading-[1.1] font-display"
          >
            Băng keo & Màng PE <br />
            <span className="text-brand-light">giá xưởng, giao toàn quốc</span>
          </motion.h1>

          {/* Sub-headline - đánh vào nhu cầu */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-slate-300 text-base md:text-lg mb-8 max-w-xl mx-auto lg:mx-0"
          >
            Cung cấp vật tư đóng gói cho <span className="text-white font-semibold">nhà máy, xưởng sản xuất, logistics và xây dựng</span>.
            Sản xuất trực tiếp — không qua trung gian.
          </motion.p>

          {/* 3 điểm mạnh - icon rõ ràng */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8 max-w-xl mx-auto lg:mx-0"
          >
            {highlights.map((h, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + idx * 0.1 }}
                className="flex items-center space-x-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg px-3 py-2.5"
              >
                <h.icon size={16} className="text-brand-light shrink-0" />
                <span className="text-white/90 text-xs font-medium leading-tight">{h.text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTAs - rõ hành động */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3 }}
            className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
          >
            <motion.a
              href={COMPANY_INFO.phoneHref}
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(250,46,39,0.4)' }}
              whileTap={{ scale: 0.95 }}
              className="btn-accent text-base px-6 py-3.5 group"
            >
              <Phone size={18} className="mr-2" />
              Gọi ngay {COMPANY_INFO.phone}
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm text-base px-6 py-3.5"
            >
              Nhận báo giá miễn phí
              <ArrowRight size={18} className="ml-2" />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right - Product image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4, type: 'spring', stiffness: 80 }}
          className="hidden lg:block relative"
        >
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 group">
            <img
              src={heroSide}
              alt="Sản phẩm băng keo và màng PE Nhân Khang An"
              className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer pointer-events-none"></div>
          </div>

          {/* Floating badge */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.5 }}
            className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-xl p-3 flex items-center space-x-2 z-20"
          >
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
              <Factory size={20} className="text-green-600" />
            </div>
            <div>
              <p className="text-slate-900 text-xs font-bold">Sản xuất trực tiếp</p>
              <p className="text-slate-500 text-[10px]">Giá gốc tại xưởng</p>
            </div>
          </motion.div>

          <div className="absolute -top-6 -right-6 w-24 lg:w-32 h-24 lg:h-32 bg-brand-red/20 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-6 -left-6 w-32 lg:w-48 h-32 lg:h-48 bg-brand-light/20 rounded-full blur-2xl"></div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center"
      >
        <span className="text-white/50 text-[10px] uppercase tracking-widest mb-2">Cuộn xuống</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-5 h-8 border-2 border-white/30 rounded-full flex justify-center pt-1"
        >
          <div className="w-1 h-2 bg-white/60 rounded-full"></div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
