import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import heroBg from '../../assets/images/background.jpg';
import heroSide from '../../assets/images/anh-gioi-thieu-sanpham.jpg';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background with Overlay */}
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
        {/* Animated gradient overlay */}
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center space-x-2 bg-brand-light/20 backdrop-blur-sm border border-brand-light/30 px-3 py-1 rounded-full mb-6 mx-auto lg:mx-0"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-red opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-red"></span>
            </span>
            <span className="text-white text-[10px] md:text-xs font-bold uppercase tracking-wider">Nhà sản xuất trực tiếp</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-white mb-6 leading-[1.1] font-display"
          >
            NHÂN KHANG AN <br />
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="text-brand-light italic"
            >
              Chất lượng tạo niềm tin
            </motion.span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="space-y-4 mb-8 max-w-lg mx-auto lg:mx-0"
          >
            <p className="text-lg md:text-xl text-white font-medium">Tại sao chọn Nhân Khang An?</p>
            <ul className="space-y-3 text-left">
              {[
                'Sản xuất trực tiếp — giá gốc tại xưởng, không qua trung gian',
                'Gia công theo yêu cầu: kích thước, độ dày, in logo thương hiệu',
                'Giao hàng toàn quốc — linh hoạt từ đơn nhỏ đến số lượng lớn'
              ].map((item, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.1 + idx * 0.15, duration: 0.5 }}
                  className="flex items-start space-x-3 text-slate-300 text-sm md:text-base"
                >
                  <CheckCircle2 className="text-brand-light mt-1 shrink-0" size={18} />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

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
              Tư vấn giải pháp
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </motion.a>
            <motion.a
              href="#products"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm text-base md:text-lg px-8 py-4"
            >
              Xem danh mục sản phẩm
            </motion.a>
          </motion.div>
        </motion.div>

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
            {/* Shimmer overlay on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer pointer-events-none"></div>
          </div>
          {/* Floating decorative elements */}
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
