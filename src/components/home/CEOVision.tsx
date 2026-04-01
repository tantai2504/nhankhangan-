import React from 'react';
import { motion } from 'motion/react';
import { Quote, PlayCircle } from 'lucide-react';

const CEOVision = () => {
  return (
    <section className="bg-white py-24">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl relative group">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800" 
                alt="CEO Nhân Khang An" 
                className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-brand-dark/20 group-hover:bg-transparent transition-colors"></div>
              
              {/* Video Play Button Overlay */}
              <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-brand-red text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform group">
                <PlayCircle size={40} className="fill-current" />
              </button>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-brand-light/20 rounded-full blur-3xl"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-brand-dark text-sm font-bold uppercase tracking-widest mb-3">CEO & Tầm nhìn</h2>
            <h3 className="text-3xl md:text-4xl text-slate-900 mb-8 leading-tight">
              Dẫn dắt bằng <span className="text-brand-dark">Uy tín & Trách nhiệm</span>
            </h3>
            
            <div className="relative mb-8">
              <Quote className="absolute -top-6 -left-6 text-slate-100" size={80} />
              <p className="text-xl text-slate-700 italic leading-relaxed relative z-10">
                "Tại Nhân Khang An, chúng tôi không định nghĩa thành công bằng doanh số, mà bằng sự thịnh vượng của khách hàng. Mỗi mét dây đai, mỗi kg keo đều mang theo cam kết về sự an toàn và hiệu quả cho sản phẩm của bạn."
              </p>
            </div>

            <div className="mb-10">
              <h4 className="text-2xl font-bold text-slate-900">Mr. Nguyễn Khang An</h4>
              <p className="text-brand-dark font-medium">Founder & CEO - Nhân Khang An Group</p>
            </div>

            <div className="space-y-6 text-slate-600">
              <p>
                Với hơn 15 năm kinh nghiệm trong ngành vật tư công nghiệp, CEO Nguyễn Khang An đã dẫn dắt công ty từ một đơn vị nhỏ trở thành đối tác chiến lược của hàng trăm nhà máy lớn tại Việt Nam.
              </p>
              <p>
                Tầm nhìn của ông là xây dựng một hệ sinh thái cung ứng thông minh, nơi AI và công nghệ giúp doanh nghiệp dự báo nhu cầu vật tư, giảm thiểu lãng phí và tối ưu hóa chi phí vận hành đến mức tối đa.
              </p>
            </div>

            <div className="mt-12 flex items-center space-x-6">
              <div className="text-center">
                <p className="text-3xl font-bold text-brand-dark">15+</p>
                <p className="text-xs text-slate-500 uppercase font-bold">Năm kinh nghiệm</p>
              </div>
              <div className="w-px h-10 bg-slate-200"></div>
              <div className="text-center">
                <p className="text-3xl font-bold text-brand-dark">500+</p>
                <p className="text-xs text-slate-500 uppercase font-bold">Dự án thành công</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CEOVision;
