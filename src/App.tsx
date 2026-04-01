import React from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/home/Hero';
import TrustBar from './components/home/TrustBar';
import About from './components/home/About';
import OperationsGallery from './components/home/OperationsGallery';
import ProductCategories from './components/home/ProductCategories';
import Capabilities from './components/home/Capabilities';
import CtaBanner from './components/home/CtaBanner';
import CEOVision from './components/home/CEOVision';
import AwardsCarousel from './components/home/AwardsCarousel';
import ProcessTimeline from './components/home/ProcessTimeline';
import Contact from './components/home/Contact';
import AIChatbot from './components/chat/AIChatbot';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="grow">
        {/* 1. THU HÚT — Ấn tượng đầu tiên */}
        <Hero />
        <TrustBar />

        {/* 2. TIN TƯỞNG — Chứng minh ta là ai */}
        <About />
        <OperationsGallery />

        {/* 3. QUAN TÂM — Show sản phẩm + lý do chọn ta */}
        <ProductCategories />
        <Capabilities />

        {/* 4. CTA NÓNG — Chốt khách đang hứng thú */}
        <CtaBanner />

        {/* 5. NIỀM TIN SÂU — Người đứng sau + bằng chứng */}
        <CEOVision />
        <AwardsCarousel />

        {/* 6. HÀNH ĐỘNG — Quy trình rõ ràng → Liên hệ */}
        <ProcessTimeline />
        <Contact />
      </main>
      <Footer />
      <AIChatbot />
    </div>
  );
}
