import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';
import { Camera, Truck, Warehouse, ShieldCheck } from 'lucide-react';
import imgWarehouse from '../../assets/images/hinhanhlohang-bangkeo.jpg';
import imgLogistics from '../../assets/images/anh-xe-vanchuyen-lohang.jpg';
import imgProduction from '../../assets/images/anh-nhanvien-dang-sanxuat.jpg';
import imgQuality from '../../assets/images/anh-nhavien-sanxuat-bangkeo.jpg';

const CountUp = ({ end, suffix = '' }: { end: number | string; suffix?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [display, setDisplay] = useState('0');

  useEffect(() => {
    if (!isInView) return;
    if (typeof end === 'string') { setDisplay(end); return; }
    let start = 0;
    const increment = end / 120;
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setDisplay(end.toLocaleString());
        clearInterval(timer);
      } else {
        setDisplay(Math.floor(start).toLocaleString());
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [isInView, end]);

  return <span ref={ref}>{display}{suffix}</span>;
};

const OperationsGallery = () => {
  const images = [
    { url: imgWarehouse, title: 'Kho bãi hiện đại', category: 'Kho bãi' },
    { url: imgLogistics, title: 'Vận chuyển chuyên nghiệp', category: 'Vận chuyển' },
    { url: imgProduction, title: 'Quy trình sản xuất', category: 'Sản xuất' },
    { url: imgQuality, title: 'Kiểm định chất lượng', category: 'Chất lượng' },
  ];

  const stats = [
    { icon: Warehouse, value: 5000, suffix: 'm²', label: 'Diện tích kho bãi' },
    { icon: Truck, value: '24h' as const, suffix: '', label: 'Thời gian giao hàng nội vùng' },
    { icon: ShieldCheck, value: 100, suffix: '%', label: 'Sản phẩm được kiểm định' },
  ];

  return (
    <section className="bg-white py-16">
      <div className="section-container">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 items-end mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-brand-dark text-sm font-bold uppercase tracking-widest mb-3"
            >
              Hình ảnh vận hành
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="text-3xl md:text-4xl text-slate-900 leading-tight"
            >
              Quy mô & Năng lực <br />
              <motion.span
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-brand-dark inline-block"
              >
                thực tế tại Nhân Khang An
              </motion.span>
            </motion.h3>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 max-w-md"
          >
            Chúng tôi minh bạch mọi quy trình từ nhập kho, kiểm định đến vận chuyển tận tay doanh nghiệp, đảm bảo sự an tâm tuyệt đối.
          </motion.p>
        </div>

        {/* Image grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="group relative h-80 rounded-2xl overflow-hidden shadow-lg cursor-pointer"
            >
              <img
                src={img.url}
                alt={img.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500"></div>

              {/* Text slides up on hover */}
              <div className="absolute bottom-0 left-0 w-full p-6 text-white translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex items-center space-x-2 text-brand-light text-[10px] font-bold uppercase tracking-widest mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <Camera size={14} />
                  <span>{img.category}</span>
                </div>
                <h4 className="text-lg font-bold">{img.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + idx * 0.08 }}
              whileHover={{ y: -3 }}
              className="flex items-center space-x-4 p-6 bg-slate-50 rounded-xl hover:shadow-md transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-brand-dark/10 rounded-xl flex items-center justify-center text-brand-dark shrink-0 group-hover:bg-brand-dark group-hover:text-white transition-colors duration-300">
                <stat.icon size={24} />
              </div>
              <div>
                <p className="font-bold text-slate-900 text-lg">
                  {typeof stat.value === 'number' ? (
                    <CountUp end={stat.value} suffix={stat.suffix} />
                  ) : (
                    stat.value
                  )}
                </p>
                <p className="text-xs text-slate-500">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OperationsGallery;
