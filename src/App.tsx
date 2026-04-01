import React from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/home/Hero';
import About from './components/home/About';
import ProductCategories from './components/home/ProductCategories';
import FeaturedProducts from './components/home/FeaturedProducts';
import Capabilities from './components/home/Capabilities';
import ProcessTimeline from './components/home/ProcessTimeline';
import AwardsCarousel from './components/home/AwardsCarousel';
import CEOVision from './components/home/CEOVision';
import OperationsGallery from './components/home/OperationsGallery';
import Partners from './components/home/Partners';
import Contact from './components/home/Contact';
import AIChatbot from './components/chat/AIChatbot';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <FeaturedProducts />
        <ProductCategories />
        <Capabilities />
        <ProcessTimeline />
        <AwardsCarousel />
        <CEOVision />
        <OperationsGallery />
        <Partners />
        <Contact />
      </main>
      <Footer />
      <AIChatbot />
    </div>
  );
}
