import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Factory, Scissors, Truck } from 'lucide-react';
import heroBg from '../../assets/images/background.jpg';
import heroSide from '../../assets/images/anh-gioi-thieu-sanpham.jpg';

const features = [
  { icon: Factory, title: 'Sản xuất trực tiếp', sub: 'Giá gốc tại xưởng' },
  { icon: Scissors, title: 'Gia công theo yêu cầu', sub: 'In logo, kích thước tuỳ chọn' },
  { icon: Truck, title: 'Giao hàng toàn quốc', sub: 'Linh hoạt mọi số lượng' },
];

const Hero = () => {
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

      {/* Floating particles */}
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

      <div className="section-container relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center lg:text-left"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center space-x-2 bg-brand-red/20 backdrop-blur-sm border border-brand-red/30 px-4 py-1.5 rounded-full mb-6 mx-auto lg:mx-0"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-red opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-red"></span>
            </span>
            <span className="text-white text-[10px] md:text-xs font-bold uppercase tracking-wider">Sản xuất & Thương mại — Giá gốc tại xưởng</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-4 leading-[1.1] font-display"
          >
            NHÂN KHANG AN
          </motion.h1>

          {/* Slogan */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-sm sm:text-base text-white/70 italic tracking-wide mb-3"
          >
            "Bạn thịnh vượng — Chúng tôi hạnh phúc"
          </motion.p>

          {/* Product line */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-xl sm:text-2xl md:text-3xl text-brand-light font-display font-bold mb-4"
          >
            Băng keo — Màng PE — Vật tư đóng gói
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="text-sm md:text-base text-slate-300 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed"
          >
            Công ty sản xuất thương mại dịch vụ uy tín — Sản phẩm chất lượng — Giao hàng nhanh — Giá thành tốt
          </motion.p>

          {/* 3 Feature mini cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="grid grid-cols-3 gap-3 mb-8 max-w-lg mx-auto lg:mx-0"
          >
            {features.map((f, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + idx * 0.1 }}
                className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-3 text-center hover:bg-white/15 transition-colors"
              >
                <f.icon className="text-brand-light mx-auto mb-1.5" size={22} />
                <p className="text-white text-[11px] font-bold leading-tight">{f.title}</p>
                <p className="text-white/50 text-[9px] mt-0.5">{f.sub}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(250,46,39,0.4)' }}
              whileTap={{ scale: 0.95 }}
              className="btn-accent text-base md:text-lg px-8 py-4 group"
            >
              Liên hệ báo giá sỉ
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </motion.a>
            <motion.a
              href="#products"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm text-base md:text-lg px-8 py-4"
            >
              Xem sản phẩm
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right side image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotateY: 10 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1.2, delay: 0.4, type: 'spring', stiffness: 80 }}
          className="hidden lg:block relative"
        >
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 group">
            <img
              src={heroSide}
              alt="Sản phẩm Nhân Khang An"
              className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer pointer-events-none"></div>
          </div>
          <div className="absolute -top-6 -right-6 w-24 lg:w-32 h-24 lg:h-32 bg-brand-red/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute -bottom-6 -left-6 w-32 lg:w-48 h-32 lg:h-48 bg-brand-light/20 rounded-full blur-3xl animate-float-delay"></div>
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
