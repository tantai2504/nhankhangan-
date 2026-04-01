import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=2000" 
          alt="Industrial Warehouse" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/90 via-brand-dark/70 to-transparent"></div>
      </div>

      <div className="section-container relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          <div className="inline-flex items-center space-x-2 bg-brand-light/20 backdrop-blur-sm border border-brand-light/30 px-3 py-1 rounded-full mb-6 mx-auto lg:mx-0">
            <span className="w-2 h-2 bg-brand-red rounded-full animate-pulse"></span>
            <span className="text-brand-light text-[10px] md:text-xs font-bold uppercase tracking-wider">Đối tác vật tư tin cậy</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-white mb-6 leading-[1.1] font-display">
            NHÂN KHANG AN <br />
            <span className="text-brand-light italic">Giải Pháp Vật Tư Toàn Diện</span>
          </h1>
          
          <div className="space-y-4 mb-8 max-w-lg mx-auto lg:mx-0">
            <p className="text-lg md:text-xl text-slate-200 font-medium">Có phải doanh nghiệp của bạn đang...</p>
            <ul className="space-y-3 text-left">
              {[
                'Tốn chi phí vật tư đóng gói nhưng hiệu quả chưa tối ưu?',
                'Lo lắng về chất lượng vật liệu ảnh hưởng đến sản phẩm?',
                'Mong muốn một đối tác cung ứng ổn định – bền vững?'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start space-x-3 text-slate-300 text-sm md:text-base">
                  <CheckCircle2 className="text-brand-light mt-1 flex-shrink-0" size={18} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a href="#contact" className="btn-accent text-base md:text-lg px-8 py-4 group">
              Tư vấn giải pháp
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </a>
            <a href="#products" className="btn-secondary bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm text-base md:text-lg px-8 py-4">
              Xem danh mục sản phẩm
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="hidden lg:block relative"
        >
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800" 
              alt="Industrial Solutions" 
              className="w-full h-auto"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Decorative elements */}
          <div className="absolute -top-6 -right-6 w-32 h-32 bg-brand-red/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-brand-light/20 rounded-full blur-3xl"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
