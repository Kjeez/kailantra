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
    <div className="min-h-screen bg-[#0a0a0a] text-white font-inter relative overflow-x-hidden">
      {/* Global Atmospheric Elements */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#4CAF50]/5 rounded-full blur-[150px] opacity-40"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#FF9966]/5 rounded-full blur-[150px] opacity-40"></div>
        <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] bg-blue-500/5 rounded-full blur-[150px] opacity-30"></div>
      </div>
      <div className="relative z-10">
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
    </div>
  );
}

export default App;
