import React from 'react';
import { motion } from 'motion/react';
import { CATEGORIES } from '../../constants';
import { ArrowRight, Star, ShieldCheck } from 'lucide-react';

const FeaturedProducts = () => {
  const featuredProducts = CATEGORIES.flatMap(cat => cat.products).filter(p => p.isFeatured);

  return (
    <section className="bg-white py-24">
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-brand-dark text-sm font-bold uppercase tracking-widest mb-3">Sản phẩm nổi bật</h2>
            <h3 className="text-3xl md:text-4xl text-slate-900 leading-tight">
              Giải pháp được <span className="text-brand-dark">doanh nghiệp tin dùng</span>
            </h3>
          </div>
          <a href="#products" className="text-brand-dark font-bold flex items-center hover:text-brand-red transition-colors">
            Xem tất cả catalog
            <ArrowRight size={20} className="ml-2" />
          </a>
        </div>

        <div className="flex overflow-x-auto lg:grid lg:grid-cols-3 gap-6 md:gap-8 pb-8 lg:pb-0 no-scrollbar snap-x snap-mandatory">
          {featuredProducts.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="min-w-[280px] sm:min-w-[320px] lg:min-w-0 snap-center group relative bg-slate-50 rounded-2xl overflow-hidden border border-slate-100 hover:shadow-2xl transition-all duration-500"
            >
              {/* Industry Tag */}
              <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
                <span className="bg-brand-dark text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-lg">
                  {product.industryTag}
                </span>
                <span className="bg-brand-red text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-lg flex items-center">
                  <Star size={10} className="mr-1 fill-current" />
                  Giải pháp tối ưu
                </span>
              </div>

              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h4 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-brand-dark transition-colors">{product.name}</h4>
                <p className="text-slate-600 text-sm mb-6 line-clamp-2">{product.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {product.features.map((f, i) => (
                    <span key={i} className="text-[10px] font-medium bg-white border border-slate-200 px-2 py-1 rounded text-slate-500">
                      {f}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-slate-200">
                  <div className="flex items-center text-brand-dark text-xs font-bold">
                    <ShieldCheck size={16} className="mr-1" />
                    Đã kiểm định
                  </div>
                  <a href="#contact" className="text-brand-dark font-bold text-sm flex items-center group/btn">
                    Xem giải pháp
                    <ArrowRight size={16} className="ml-1 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
