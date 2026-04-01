import React from 'react';
import { motion } from 'motion/react';
import * as Icons from 'lucide-react';
import { CAPABILITIES } from '../../constants';

const Capabilities = () => {
  return (
    <section id="capabilities" className="bg-brand-dark text-white overflow-hidden relative">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
      </div>

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-brand-light text-sm font-bold uppercase tracking-widest mb-3">Năng lực & Lợi thế</h2>
            <h3 className="text-3xl md:text-4xl mb-8 leading-tight">
              Tại sao các tập đoàn lớn <br />
              <span className="text-brand-light">tin tưởng Nhân Khang An?</span>
            </h3>
            
            <div className="grid sm:grid-cols-2 gap-8">
              {CAPABILITIES.map((cap, idx) => {
                const IconComponent = (Icons as any)[cap.icon];
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center text-brand-light mb-4">
                      {IconComponent && <IconComponent size={24} />}
                    </div>
                    <h4 className="text-lg font-bold mb-2">{cap.title}</h4>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      {cap.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            <div className="mt-12 p-6 bg-white/5 border border-white/10 rounded-xl">
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <img 
                      key={i}
                      src={`https://i.pravatar.cc/100?img=${i + 10}`} 
                      alt="User" 
                      className="w-10 h-10 rounded-full border-2 border-brand-dark"
                    />
                  ))}
                </div>
                <p className="text-sm text-slate-300">
                  <span className="text-white font-bold">500+</span> doanh nghiệp đã hợp tác
                </p>
              </div>
              <p className="text-brand-light italic text-sm font-medium">
                "Chúng tôi không chỉ bán sản phẩm - Chúng tôi đồng hành cùng sự thịnh vượng của bạn."
              </p>
            </div>
          </div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative z-10 grid grid-cols-2 gap-4"
            >
              <div className="space-y-4 pt-12">
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <img src="https://images.unsplash.com/photo-1587293855941-91f1fa937d6d?auto=format&fit=crop&q=80&w=400" alt="Warehouse" className="w-full h-64 object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="bg-brand-red p-6 rounded-2xl text-center">
                  <p className="text-4xl font-bold mb-1">10+</p>
                  <p className="text-xs uppercase tracking-widest font-bold">Năm kinh nghiệm</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-brand-light p-6 rounded-2xl text-brand-dark text-center">
                  <p className="text-4xl font-bold mb-1">24h</p>
                  <p className="text-xs uppercase tracking-widest font-bold">Hỗ trợ kỹ thuật</p>
                </div>
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <img src="https://images.unsplash.com/photo-1565891741441-64926e441838?auto=format&fit=crop&q=80&w=400" alt="Logistics" className="w-full h-64 object-cover" referrerPolicy="no-referrer" />
                </div>
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
