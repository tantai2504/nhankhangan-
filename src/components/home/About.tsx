import React from 'react';
import { motion } from 'motion/react';
import { Target, Heart, Shield, Users, TrendingUp, Award } from 'lucide-react';

const About = () => {
  const values = [
    { title: 'Uy tín', desc: 'Cam kết đúng tiến độ, đúng chất lượng, đúng thỏa thuận.', icon: Shield },
    { title: 'Chất lượng', desc: 'Sản phẩm đạt chuẩn quốc tế, kiểm định khắt khe.', icon: Award },
    { title: 'Đồng hành', desc: 'Chúng tôi không chỉ bán hàng, chúng tôi cùng bạn phát triển.', icon: Users },
  ];

  return (
    <section id="about" className="bg-white">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-brand-dark text-sm font-bold uppercase tracking-widest mb-3">Về chúng tôi</h2>
            <h3 className="text-3xl md:text-4xl text-slate-900 mb-6 leading-tight">
              Hơn cả một nhà cung cấp, <br />
              <span className="text-brand-dark">Chúng tôi là đối tác chiến lược.</span>
            </h3>
            <p className="text-slate-600 text-lg mb-6 leading-relaxed">
              Nhân Khang An được thành lập với khát vọng nâng tầm tiêu chuẩn vật tư công nghiệp tại Việt Nam. Chúng tôi hiểu rằng mỗi sản phẩm của bạn đều xứng đáng được bảo vệ bởi những vật liệu tốt nhất.
            </p>
            <p className="text-slate-600 mb-8">
              Thay vì chỉ tập trung vào việc bán lẻ, chúng tôi xây dựng hệ sinh thái giải pháp vật tư trọn gói, giúp doanh nghiệp tối ưu hóa chi phí logistics và nâng cao hiệu quả sản xuất.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="p-6 bg-slate-50 rounded-xl border-l-4 border-brand-dark">
                <Target className="text-brand-dark mb-3" size={28} />
                <h4 className="font-bold text-slate-900 mb-2">Tầm nhìn</h4>
                <p className="text-sm text-slate-600">Trở thành nhà cung cấp giải pháp vật tư công nghiệp hàng đầu khu vực.</p>
              </div>
              <div className="p-6 bg-slate-50 rounded-xl border-l-4 border-brand-red">
                <Heart className="text-brand-red mb-3" size={28} />
                <h4 className="font-bold text-slate-900 mb-2">Sứ mệnh</h4>
                <p className="text-sm text-slate-600">Giúp doanh nghiệp thịnh vượng thông qua việc tối ưu chi phí và bảo vệ sản phẩm.</p>
              </div>
            </div>
          </motion.div>

          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=800" 
                alt="Our Team" 
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-2xl shadow-xl hidden md:block max-w-xs border border-slate-100">
              <TrendingUp className="text-brand-dark mb-4" size={40} />
              <p className="text-slate-900 font-bold text-lg mb-2">Tăng trưởng bền vững</p>
              <p className="text-slate-500 text-sm">Hỗ trợ doanh nghiệp giảm thiểu rủi ro vật tư và lãng phí trong vận hành.</p>
            </div>
          </div>
        </div>

        <div className="text-center mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Giá trị cốt lõi</h3>
          <p className="text-slate-500 max-w-2xl mx-auto">Nền tảng giúp chúng tôi xây dựng niềm tin vững chắc với khách hàng trong suốt thập kỷ qua.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((val, idx) => (
            <motion.div
              key={val.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-slate-50 p-8 rounded-2xl text-center hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-slate-100"
            >
              <div className="w-16 h-16 bg-white rounded-full shadow-sm flex items-center justify-center text-brand-dark mx-auto mb-6">
                <val.icon size={32} />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-4">{val.title}</h4>
              <p className="text-slate-600">{val.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
