import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Packages from './components/Packages';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Inclusions from './components/Inclusions';
import ContactLocation from './components/ContactLocation';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-inter">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Packages />
      <Gallery />
      <Testimonials />
      <Inclusions />
      <FAQ />
      <ContactLocation />
      <Footer />
    </div>
  );
}

export default App;
