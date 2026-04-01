import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';
import { Factory, Users, Package, Clock } from 'lucide-react';

const CountUp = ({ end, suffix = '' }: { end: number; suffix?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const inc = end / 90;
    const timer = setInterval(() => {
      start += inc;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [isInView, end]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
};

const items = [
  { icon: Factory, value: 10, suffix: '+', label: 'Năm sản xuất', sub: 'kinh nghiệm trong ngành' },
  { icon: Users, value: 200, suffix: '+', label: 'Khách hàng', sub: 'doanh nghiệp tin tưởng' },
  { icon: Package, value: 50, suffix: '+', label: 'Sản phẩm', sub: 'đa dạng chủng loại' },
  { icon: Clock, value: 24, suffix: 'h', label: 'Giao hàng', sub: 'nhanh chóng toàn quốc' },
];

const TrustBar = () => {
  return (
    <section className="relative bg-brand-dark overflow-hidden">
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex items-center space-x-4 group"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 bg-white/10 rounded-xl flex items-center justify-center text-brand-light shrink-0 group-hover:bg-white/20 transition-colors">
                <item.icon size={20} className="md:w-6 md:h-6" />
              </div>
              <div>
                <p className="text-white text-xl md:text-2xl lg:text-3xl font-bold leading-none">
                  <CountUp end={item.value} suffix={item.suffix} />
                </p>
                <p className="text-brand-light text-xs font-bold uppercase tracking-wider">{item.label}</p>
                <p className="text-white/50 text-[10px]">{item.sub}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
