import React from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/home/Hero';
import About from './components/home/About';
import ProductCategories from './components/home/ProductCategories';
import Capabilities from './components/home/Capabilities';
import Partners from './components/home/Partners';
import Contact from './components/home/Contact';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <ProductCategories />
        <Capabilities />
        <Partners />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
