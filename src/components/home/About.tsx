import React from 'react';
import { motion } from 'motion/react';
import { Target, Heart, TrendingUp, Factory, Truck, Palette, MapPin } from 'lucide-react';
import aboutImg from '../../assets/images/nhanvien-vanchuyenlohang-bangkeo.jpg';

const stats = [
  { icon: Factory, value: 'Sản xuất trực tiếp', sub: 'Không qua trung gian' },
  { icon: Palette, value: 'Gia công theo yêu cầu', sub: 'In logo, kích thước tuỳ chọn' },
  { icon: Truck, value: 'Giao hàng toàn quốc', sub: 'Đơn nhỏ đến số lượng lớn' },
  { icon: MapPin, value: 'Xưởng tại Bình Phước', sub: 'Dây chuyền hiện đại' },
];

const About = () => {
  return (
    <section id="about" className="bg-white">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-brand-dark text-sm font-bold uppercase tracking-widest mb-3"
            >
              Về chúng tôi
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="text-3xl md:text-4xl text-slate-900 mb-6 leading-tight"
            >
              Chuyên sản xuất & cung cấp <br />
              <motion.span
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-brand-dark inline-block"
              >
                băng keo và màng PE chất lượng cao
              </motion.span>
            </motion.h3>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 }}
              className="text-slate-600 text-lg mb-6 leading-relaxed"
            >
              Công ty TNHH Nhân Khang An là đơn vị chuyên sản xuất và cung cấp các loại băng keo và màng PE chất lượng cao, phục vụ cho nhu cầu đóng gói, bảo vệ hàng hóa trong sản xuất công nghiệp, thương mại và đời sống hằng ngày.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-slate-600 mb-8"
            >
              Với nhiều năm kinh nghiệm trong ngành và dây chuyền sản xuất hiện đại, Nhân Khang An luôn cam kết mang đến cho khách hàng sản phẩm chất lượng — giá cả cạnh tranh — giao hàng nhanh chóng. Nguồn nguyên liệu chất lượng cao, thân thiện môi trường.
            </motion.p>

            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { icon: Target, color: 'brand-dark', title: 'Tầm nhìn', desc: 'Trở thành nhà sản xuất băng keo và màng PE hàng đầu khu vực phía Nam.', delay: 0.35 },
                { icon: Heart, color: 'brand-red', title: 'Sứ mệnh', desc: 'Cung cấp sản phẩm chất lượng — giá gốc tại xưởng — phục vụ tận tâm.', delay: 0.4 },
              ].map((card) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: card.delay }}
                  whileHover={{ y: -4 }}
                  className={`p-6 bg-slate-50 rounded-xl border-l-4 border-${card.color} hover:shadow-lg transition-all duration-300`}
                >
                  <card.icon className={`text-${card.color} mb-3`} size={28} />
                  <h4 className="font-bold text-slate-900 mb-2">{card.title}</h4>
                  <p className="text-sm text-slate-600">{card.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl group">
              <img
                src={aboutImg}
                alt="Đội ngũ Nhân Khang An"
                className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
              />
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, type: 'spring', stiffness: 120 }}
              className="absolute -bottom-8 -right-4 md:-right-8 bg-white p-6 rounded-2xl shadow-xl hidden md:block max-w-[220px] border border-slate-100"
            >
              <TrendingUp className="text-brand-dark mb-3" size={32} />
              <p className="text-slate-900 font-bold text-base mb-1">Sản xuất trực tiếp</p>
              <p className="text-slate-500 text-xs">Dây chuyền hiện đại, giá gốc tại xưởng.</p>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              whileHover={{ y: -3, scale: 1.02 }}
              className="flex items-center space-x-3 p-4 bg-slate-50 rounded-xl border border-slate-100 hover:border-brand-dark/20 hover:shadow-md transition-all duration-300 group"
            >
              <div className="w-10 h-10 bg-brand-dark/10 rounded-lg flex items-center justify-center text-brand-dark shrink-0 group-hover:bg-brand-dark group-hover:text-white transition-colors duration-300">
                <stat.icon size={20} />
              </div>
              <div className="min-w-0">
                <p className="font-bold text-slate-900 text-sm leading-tight">{stat.value}</p>
                <p className="text-slate-500 text-[11px]">{stat.sub}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
