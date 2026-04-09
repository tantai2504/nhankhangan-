import React from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ProductCategories from './components/home/ProductCategories';
import AIChatbot from './components/chat/AIChatbot';
import ZaloButton from './components/chat/ZaloButton';

// Các section khác tạm ẩn — chỉ hiển thị danh sách sản phẩm
// import Hero from './components/home/Hero';
// import TrustBar from './components/home/TrustBar';
// import About from './components/home/About';
// import Capabilities from './components/home/Capabilities';
// import CEOVision from './components/home/CEOVision';
// import AwardsCarousel from './components/home/AwardsCarousel';
// import OperationsGallery from './components/home/OperationsGallery';
// import Contact from './components/home/Contact';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="grow pt-16">
        <ProductCategories />
      </main>
      <Footer />
      <ZaloButton />
      <AIChatbot />
    </div>
  );
}
