import React from 'react';
import { motion } from 'motion/react';
import * as Icons from 'lucide-react';
import { CATEGORIES } from '../../constants';

const ProductCategories = () => {
  return (
    <section id="products" className="bg-slate-50">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-dark text-sm font-bold uppercase tracking-widest mb-3">Danh mục sản phẩm</h2>
          <h3 className="text-3xl md:text-4xl text-slate-900 mb-6">Giải pháp vật tư theo ngành nghề</h3>
          <p className="text-slate-600 text-lg">
            Chúng tôi không chỉ bán sản phẩm, chúng tôi cung cấp giải pháp tối ưu hóa quy trình đóng gói và bảo vệ hàng hóa cho doanh nghiệp.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CATEGORIES.map((category, idx) => {
            const IconComponent = (Icons as any)[category.icon];
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col h-full"
              >
                <div className="w-14 h-14 bg-brand-dark/5 rounded-lg flex items-center justify-center text-brand-dark mb-6 group-hover:bg-brand-dark group-hover:text-white transition-colors duration-300">
                  {IconComponent && <IconComponent size={32} />}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-4">{category.name}</h4>
                <p className="text-slate-600 mb-6 flex-grow">{category.description}</p>
                <ul className="space-y-2 mb-8">
                  {category.products.slice(0, 3).map((p) => (
                    <li key={p.id} className="flex items-center text-sm text-slate-500">
                      <Icons.ChevronRight size={16} className="text-brand-light mr-2" />
                      {p.name}
                    </li>
                  ))}
                </ul>
                <a 
                  href={`#contact`} 
                  className="inline-flex items-center text-brand-dark font-bold hover:text-brand-red transition-colors"
                >
                  Tư vấn giải pháp
                  <Icons.ArrowRight size={18} className="ml-2" />
                </a>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block p-1 rounded-xl bg-slate-200">
            <div className="bg-white px-8 py-6 rounded-lg shadow-inner">
              <p className="text-slate-700 font-medium mb-4">Bạn chưa tìm thấy sản phẩm phù hợp?</p>
              <a href="#contact" className="btn-primary">
                Yêu cầu báo giá & tư vấn theo ngành
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
