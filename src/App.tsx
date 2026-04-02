import React from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/home/Hero';
import TrustBar from './components/home/TrustBar';
import ProductCategories from './components/home/ProductCategories';
import About from './components/home/About';
import Capabilities from './components/home/Capabilities';
import CEOVision from './components/home/CEOVision';
import AwardsCarousel from './components/home/AwardsCarousel';
import OperationsGallery from './components/home/OperationsGallery';
import Contact from './components/home/Contact';
import AIChatbot from './components/chat/AIChatbot';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="grow">
        <Hero />
        <TrustBar />
        <ProductCategories />
        <About />
        <Capabilities />
        <CEOVision />
        <AwardsCarousel />
        <OperationsGallery />
        <Contact />
      </main>
      <Footer />
      <AIChatbot />
    </div>
  );
}
