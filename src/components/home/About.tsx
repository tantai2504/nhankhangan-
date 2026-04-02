import React from 'react';
import { motion } from 'motion/react';
import { Factory, Truck, Palette, MapPin } from 'lucide-react';
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
        <div className="grid lg:grid-cols-5 gap-10 items-center mb-10">
          {/* Image — 2 cols */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img src={aboutImg} alt="Đội ngũ Nhân Khang An" className="w-full h-auto" />
            </div>
          </motion.div>

          {/* Text — 3 cols */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <h2 className="text-brand-dark text-sm font-bold uppercase tracking-widest mb-2">Về chúng tôi</h2>
            <h3 className="text-2xl md:text-3xl text-slate-900 mb-4 leading-tight">
              Chuyên sản xuất & cung cấp <span className="text-brand-dark">băng keo và màng PE chất lượng cao</span>
            </h3>
            <p className="text-slate-600 leading-relaxed">
              Công ty TNHH Nhân Khang An chuyên sản xuất trực tiếp các loại băng keo và màng PE, phục vụ đóng gói, bảo vệ hàng hóa trong sản xuất công nghiệp, thương mại và đời sống. Với dây chuyền hiện đại, nguồn nguyên liệu chất lượng cao và thân thiện môi trường — cam kết: giá cạnh tranh, giao hàng nhanh chóng.
            </p>
          </motion.div>
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              whileHover={{ y: -3 }}
              className="flex items-center space-x-3 p-3 bg-white rounded-xl border border-slate-100 hover:border-brand-dark/20 hover:shadow-md transition-all duration-300"
            >
              <div className="w-9 h-9 bg-brand-dark/10 rounded-lg flex items-center justify-center text-brand-dark shrink-0">
                <stat.icon size={18} />
              </div>
              <div className="min-w-0">
                <p className="font-bold text-slate-900 text-xs leading-tight">{stat.value}</p>
                <p className="text-slate-500 text-[10px]">{stat.sub}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
