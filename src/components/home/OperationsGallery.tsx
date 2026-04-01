import React from 'react';
import { motion } from 'motion/react';
import { Camera, Truck, Factory, Warehouse, ShieldCheck } from 'lucide-react';

const OperationsGallery = () => {
  const images = [
    { url: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800', title: 'Kho bãi hiện đại', category: 'Warehouse' },
    { url: 'https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&q=80&w=800', title: 'Vận chuyển chuyên nghiệp', category: 'Logistics' },
    { url: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800', title: 'Quy trình đóng gói', category: 'Production' },
    { url: 'https://images.unsplash.com/photo-1565891741441-64926e441838?auto=format&fit=crop&q=80&w=800', title: 'Kiểm định chất lượng', category: 'Quality' },
  ];

  return (
    <section className="bg-white py-24">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-end mb-16">
          <div>
            <h2 className="text-brand-dark text-sm font-bold uppercase tracking-widest mb-3">Hình ảnh vận hành</h2>
            <h3 className="text-3xl md:text-4xl text-slate-900 mb-6 leading-tight">
              Quy mô & Năng lực <br />
              <span className="text-brand-dark">thực tế tại Nhân Khang An</span>
            </h3>
          </div>
          <p className="text-slate-600 max-w-md">
            Chúng tôi minh bạch mọi quy trình từ nhập kho, kiểm định đến vận chuyển tận tay doanh nghiệp, đảm bảo sự an tâm tuyệt đối.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative h-80 rounded-2xl overflow-hidden shadow-lg"
            >
              <img 
                src={img.url} 
                alt={img.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity"></div>
              
              <div className="absolute bottom-0 left-0 w-full p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform">
                <div className="flex items-center space-x-2 text-brand-light text-[10px] font-bold uppercase tracking-widest mb-2">
                  <Camera size={14} />
                  <span>{img.category}</span>
                </div>
                <h4 className="text-lg font-bold">{img.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="flex items-center space-x-4 p-6 bg-slate-50 rounded-xl">
            <Warehouse className="text-brand-dark" size={32} />
            <div>
              <p className="font-bold text-slate-900">5,000m²</p>
              <p className="text-xs text-slate-500">Diện tích kho bãi</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 p-6 bg-slate-50 rounded-xl">
            <Truck className="text-brand-dark" size={32} />
            <div>
              <p className="font-bold text-slate-900">24h</p>
              <p className="text-xs text-slate-500">Thời gian giao hàng nội vùng</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 p-6 bg-slate-50 rounded-xl">
            <ShieldCheck className="text-brand-dark" size={32} />
            <div>
              <p className="font-bold text-slate-900">100%</p>
              <p className="text-xs text-slate-500">Sản phẩm được kiểm định</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OperationsGallery;
