import React from 'react';
import { Instagram } from 'lucide-react';

const Gallery = () => {
    // Using placeholder nature/camping images from Unsplash
    const images = [
        "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?q=80&w=2068&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1492648272180-61e45a8d98a7?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1510312305653-8ed496efae75?q=80&w=1974&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1533587851505-d119e13fa0d7?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=2070&auto=format&fit=crop"
    ];

    return (
        <section id="gallery" className="py-24 px-6 bg-[#0a0a0a]">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Life at <span className="text-[#FF9966]">Kailantra</span></h2>
                    <p className="text-white/60">Captured moments from our happy campers.</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {images.map((src, idx) => (
                        <div
                            key={idx}
                            className={`relative rounded-2xl overflow-hidden group cursor-pointer ${idx === 0 ? 'md:col-span-2 md:row-span-2' : ''
                                } ${idx === 3 ? 'md:row-span-2' : ''}`}
                        >
                            <img
                                src={src}
                                alt={`Gallery ${idx + 1}`}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />

                            <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity scale-75 group-hover:scale-100 duration-300">
                                <Instagram className="text-white w-5 h-5" />
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-white/50 hover:text-[#FF9966] transition-colors text-sm font-medium tracking-widest uppercase"
                    >
                        <Instagram size={16} />
                        Follow us on Instagram
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Gallery;
