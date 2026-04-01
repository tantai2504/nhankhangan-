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
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-brand-dark text-sm font-bold uppercase tracking-widest mb-3"
            >
              Về chúng tôi
            </motion.h2>
            <h3 className="text-3xl md:text-4xl text-slate-900 mb-6 leading-tight">
              Chuyên sản xuất & cung cấp <br />
              <span className="text-brand-dark">băng keo và màng PE chất lượng cao</span>
            </h3>
            <p className="text-slate-600 text-lg mb-6 leading-relaxed">
              Công ty TNHH Nhân Khang An là đơn vị chuyên sản xuất và cung cấp các loại băng keo và màng PE chất lượng cao, phục vụ cho nhu cầu đóng gói, bảo vệ hàng hóa trong sản xuất công nghiệp, thương mại và đời sống hằng ngày.
            </p>
            <p className="text-slate-600 mb-8">
              Với nhiều năm kinh nghiệm trong ngành và dây chuyền sản xuất hiện đại, Nhân Khang An luôn cam kết mang đến cho khách hàng sản phẩm chất lượng — giá cả cạnh tranh — giao hàng nhanh chóng. Nguồn nguyên liệu chất lượng cao, thân thiện môi trường.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              <motion.div
                whileHover={{ y: -4, boxShadow: '0 10px 30px rgba(23,107,191,0.1)' }}
                className="p-6 bg-slate-50 rounded-xl border-l-4 border-brand-dark transition-all duration-300"
              >
                <Target className="text-brand-dark mb-3" size={28} />
                <h4 className="font-bold text-slate-900 mb-2">Tầm nhìn</h4>
                <p className="text-sm text-slate-600">Trở thành nhà sản xuất băng keo và màng PE hàng đầu khu vực phía Nam.</p>
              </motion.div>
              <motion.div
                whileHover={{ y: -4, boxShadow: '0 10px 30px rgba(250,46,39,0.1)' }}
                className="p-6 bg-slate-50 rounded-xl border-l-4 border-brand-red transition-all duration-300"
              >
                <Heart className="text-brand-red mb-3" size={28} />
                <h4 className="font-bold text-slate-900 mb-2">Sứ mệnh</h4>
                <p className="text-sm text-slate-600">Cung cấp sản phẩm chất lượng — giá gốc tại xưởng — phục vụ tận tâm.</p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
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
            </div>
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, type: 'spring', stiffness: 100 }}
              className="absolute -bottom-10 -right-10 bg-white p-8 rounded-2xl shadow-xl hidden md:block max-w-xs border border-slate-100 animate-float-slow"
            >
              <TrendingUp className="text-brand-dark mb-4" size={40} />
              <p className="text-slate-900 font-bold text-lg mb-2">Sản xuất trực tiếp</p>
              <p className="text-slate-500 text-sm">Dây chuyền hiện đại, không qua trung gian — giá gốc tại xưởng.</p>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats bar - thay cho "Ưu điểm" */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -4 }}
              className="flex items-center space-x-3 p-4 bg-slate-50 rounded-xl border border-slate-100 hover:border-brand-dark/20 hover:shadow-md transition-all duration-300"
            >
              <div className="w-10 h-10 bg-brand-dark/10 rounded-lg flex items-center justify-center text-brand-dark shrink-0">
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
