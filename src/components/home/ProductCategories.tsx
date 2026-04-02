import React from 'react';
import { motion } from 'motion/react';
import * as Icons from 'lucide-react';
import { CATEGORIES } from '../../constants';

const ProductCategories = () => {
  const allProducts = CATEGORIES.flatMap(cat => cat.products);
  const row1Products = allProducts.filter(p => p.isFeatured);
  const row2Products = allProducts.filter(p => !p.isFeatured);
  // Duplicate for seamless loop
  const marqueeRow1 = [...row1Products, ...row1Products];
  const marqueeRow2 = [...row2Products, ...row2Products];

  return (
    <section id="products" className="bg-slate-50 overflow-hidden">
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-10"
        >
          <h2 className="text-brand-dark text-sm font-bold uppercase tracking-widest mb-3">Sản phẩm của chúng tôi</h2>
          <h3 className="text-3xl md:text-4xl text-slate-900 mb-4">Giải pháp vật tư theo ngành nghề</h3>
          <p className="text-slate-600">
            Đa dạng sản phẩm chất lượng cao, phục vụ mọi nhu cầu đóng gói, xây dựng và sản xuất công nghiệp.
          </p>
        </motion.div>
      </div>

      {/* Auto-scroll featured products - full width */}
      <div className="relative mb-12">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none"></div>

        {/* Row 1 - featured products, scroll left */}
        <div className="flex animate-marquee hover:[animation-play-state:paused] mb-4">
          {marqueeRow1.map((product, idx) => (
            <div
              key={`r1-${idx}`}
              className="shrink-0 w-[260px] mx-2 group bg-white rounded-xl overflow-hidden border border-slate-100 hover:border-brand-dark/20 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex h-24">
                <div className="w-24 shrink-0 overflow-hidden bg-slate-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-3 flex flex-col justify-center min-w-0">
                  {product.industryTag && (
                    <span className="text-[8px] font-bold text-brand-dark uppercase tracking-wider mb-1">{product.industryTag}</span>
                  )}
                  <h5 className="font-bold text-slate-900 text-sm leading-tight mb-1 truncate group-hover:text-brand-dark transition-colors">{product.name}</h5>
                  <div className="flex flex-wrap gap-1">
                    {product.features.slice(0, 2).map((f, i) => (
                      <span key={i} className="text-[8px] bg-slate-50 border border-slate-200 px-1 py-0.5 rounded text-slate-400">{f}</span>
                    ))}
                    {product.features.length > 2 && (
                      <span className="text-[8px] text-brand-dark font-medium">+{product.features.length - 2}</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Row 2 - other products, scroll right */}
        <div className="flex animate-marquee-reverse hover:[animation-play-state:paused]">
          {marqueeRow2.map((product, idx) => (
            <div
              key={`r2-${idx}`}
              className="shrink-0 w-[260px] mx-2 group bg-white rounded-xl overflow-hidden border border-slate-100 hover:border-brand-dark/20 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex h-24">
                <div className="w-24 shrink-0 overflow-hidden bg-slate-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-3 flex flex-col justify-center min-w-0">
                  {product.industryTag && (
                    <span className="text-[8px] font-bold text-brand-dark uppercase tracking-wider mb-1">{product.industryTag}</span>
                  )}
                  <h5 className="font-bold text-slate-900 text-sm leading-tight mb-1 truncate group-hover:text-brand-dark transition-colors">{product.name}</h5>
                  <div className="flex flex-wrap gap-1">
                    {product.features.slice(0, 2).map((f, i) => (
                      <span key={i} className="text-[8px] bg-slate-50 border border-slate-200 px-1 py-0.5 rounded text-slate-400">{f}</span>
                    ))}
                    {product.features.length > 2 && (
                      <span className="text-[8px] text-brand-dark font-medium">+{product.features.length - 2}</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Category pills + stats */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 md:pb-16">
        {/* Category pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {CATEGORIES.map((cat, idx) => {
            const IconComponent = (Icons as any)[cat.icon];
            return (
              <motion.a
                key={cat.id}
                href="#contact"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 bg-white border border-slate-200 hover:border-brand-dark/30 px-4 py-2.5 rounded-full shadow-sm hover:shadow-md transition-all duration-300 group"
              >
                <div className="w-7 h-7 bg-brand-dark/5 rounded-full flex items-center justify-center text-brand-dark group-hover:bg-brand-dark group-hover:text-white transition-colors duration-300">
                  {IconComponent && <IconComponent size={14} />}
                </div>
                <span className="text-sm font-bold text-slate-700 group-hover:text-brand-dark transition-colors whitespace-nowrap">{cat.name}</span>
                <span className="text-[10px] bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded-full font-medium group-hover:bg-brand-dark/10 group-hover:text-brand-dark transition-colors">{cat.products.length}</span>
              </motion.a>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-slate-500 mb-4">Cần tư vấn sản phẩm phù hợp với doanh nghiệp?</p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-accent px-8 py-3"
          >
            <Icons.MessageSquare size={18} className="mr-2" />
            Liên hệ tư vấn ngay
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductCategories;
