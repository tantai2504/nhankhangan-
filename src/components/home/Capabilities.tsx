import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';
import * as Icons from 'lucide-react';
import { CAPABILITIES } from '../../constants';
import imgWarehouse from '../../assets/images/anh-khohang-cuonbangkeolon.jpg';
import imgLogistics from '../../assets/images/anh-xevanchuyenlohang.jpg';

const CountUp = ({ end, suffix = '', duration = 2 }: { end: number; suffix?: string; duration?: number }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const increment = end / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [isInView, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const Capabilities = () => {
  return (
    <section id="capabilities" className="bg-brand-dark text-white overflow-hidden relative">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
      </div>
      {/* Floating glow orbs */}
      <div className="absolute top-10 right-0 md:top-20 md:right-20 w-40 md:w-64 h-40 md:h-64 bg-brand-light/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-0 md:bottom-20 md:left-20 w-32 md:w-48 h-32 md:h-48 bg-brand-red/10 rounded-full blur-3xl"></div>

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-brand-light text-sm font-bold uppercase tracking-widest mb-3"
            >
              Năng lực & Lợi thế
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl mb-8 leading-tight"
            >
              Tại sao các tập đoàn lớn <br />
              <span className="text-brand-light">tin tưởng Nhân Khang An?</span>
            </motion.h3>

            <div className="grid sm:grid-cols-2 gap-8">
              {CAPABILITIES.map((cap, idx) => {
                const IconComponent = (Icons as any)[cap.icon];
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.12 }}
                    whileHover={{ x: 6 }}
                    className="group cursor-default"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, boxShadow: '0 0 20px rgba(103,190,217,0.3)' }}
                      className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center text-brand-light mb-4 transition-all duration-300 group-hover:bg-white/20"
                    >
                      {IconComponent && <IconComponent size={24} />}
                    </motion.div>
                    <h4 className="text-lg font-bold mb-2">{cap.title}</h4>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      {cap.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-12 p-6 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm"
            >
              <p className="text-sm text-slate-300 mb-2">
                <span className="text-white font-bold text-2xl"><CountUp end={500} suffix="+" /></span> doanh nghiệp đã hợp tác
              </p>
              <p className="text-brand-light italic text-sm font-medium">
                "Chúng tôi không chỉ bán sản phẩm - Chúng tôi đồng hành cùng sự thịnh vượng của bạn."
              </p>
            </motion.div>
          </div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative z-10 grid grid-cols-2 gap-4"
            >
              <div className="space-y-4 pt-12">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="rounded-2xl overflow-hidden shadow-2xl"
                >
                  <img src={imgWarehouse} alt="Kho bãi Nhân Khang An" className="w-full h-64 object-cover" />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-brand-red p-6 rounded-2xl text-center"
                >
                  <p className="text-4xl font-bold mb-1"><CountUp end={10} suffix="+" /></p>
                  <p className="text-xs uppercase tracking-widest font-bold">Năm kinh nghiệm</p>
                </motion.div>
              </div>
              <div className="space-y-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-brand-light p-6 rounded-2xl text-brand-dark text-center"
                >
                  <p className="text-4xl font-bold mb-1">24h</p>
                  <p className="text-xs uppercase tracking-widest font-bold">Hỗ trợ kỹ thuật</p>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="rounded-2xl overflow-hidden shadow-2xl"
                >
                  <img src={imgLogistics} alt="Vận chuyển Nhân Khang An" className="w-full h-64 object-cover" />
                </motion.div>
              </div>
            </motion.div>

            {/* Decorative circles */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-white/5 rounded-full pointer-events-none"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] border border-white/5 rounded-full pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
