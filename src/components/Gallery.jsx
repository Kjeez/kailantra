import React from 'react';
import { Instagram } from 'lucide-react';

const Gallery = () => {
    const [lightboxOpen, setLightboxOpen] = React.useState(false);
    const [currentIndex, setCurrentIndex] = React.useState(0);

    const galleryItems = [
        { type: 'video', src: '/img/gallery/vid.MP4' },
        { type: 'image', src: '/img/gallery/1.jpg' },
        { type: 'image', src: '/img/gallery/2.jpg' },
        { type: 'image', src: '/img/gallery/3.jpg' },
        { type: 'image', src: '/img/gallery/4.jpg' },
        { type: 'image', src: '/img/gallery/5.jpg' },
        { type: 'image', src: '/img/gallery/6.jpg' },
        { type: 'image', src: '/img/gallery/7.jpg' },
        { type: 'image', src: '/img/gallery/8.jpg' },
        { type: 'image', src: '/img/gallery/9.jpg' },
        { type: 'video', src: '/img/gallery/vid2.MP4' },
        { type: 'image', src: '/img/gallery/10.jpg' },
        { type: 'image', src: '/img/gallery/11.jpg' },
        { type: 'image', src: '/img/gallery/12.jpg' },
        { type: 'image', src: '/img/gallery/13.jpg' },
        { type: 'image', src: '/img/gallery/14.jpg' },
        { type: 'image', src: '/img/gallery/15.jpg' },
        { type: 'image', src: '/img/gallery/16.jpg' },
        { type: 'image', src: '/img/gallery/17.jpg' },
        { type: 'image', src: '/img/gallery/18.jpg' },
    ];

    const openLightbox = (index) => {
        setCurrentIndex(index);
        setLightboxOpen(true);
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
    };

    const goToNext = () => {
        setCurrentIndex((prev) => (prev + 1) % galleryItems.length);
    };

    const goToPrev = () => {
        setCurrentIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
    };

    React.useEffect(() => {
        const handleKeyDown = (e) => {
            if (!lightboxOpen) return;
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowRight') goToNext();
            if (e.key === 'ArrowLeft') goToPrev();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [lightboxOpen]);

    return (
        <section id="gallery" className="py-24 px-4 md:px-6 bg-[#0a0a0a] relative">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-4">🏕️ Life at <span className="text-[#FF9966]">Kailantra</span> ⛺</h2>
                    <p className="text-white/60">Captured moments from our camping, trekking & night camp adventures.</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {galleryItems.map((item, idx) => (
                        <div
                            key={idx}
                            onClick={() => openLightbox(idx)}
                            className={`relative rounded-2xl overflow-hidden group cursor-pointer ${idx === 0 ? 'md:col-span-2 md:row-span-2' : ''
                                }`}
                            style={{ minHeight: idx === 0 ? '400px' : '200px' }}
                        >
                            {item.type === 'video' ? (
                                <video
                                    src={item.src}
                                    className="w-full h-full object-cover"
                                    muted
                                    loop
                                    playsInline
                                    preload="metadata"
                                    onMouseEnter={(e) => e.target.play()}
                                    onMouseLeave={(e) => e.target.pause()}
                                />
                            ) : (
                                <img
                                    src={item.src}
                                    alt={`Gallery ${idx + 1}`}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            )}

                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors pointer-events-none" />

                            <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity scale-75 group-hover:scale-100 duration-300 pointer-events-none">
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

            {/* Lightbox Modal */}
            {lightboxOpen && (
                <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4" onClick={closeLightbox}>
                    <button
                        onClick={closeLightbox}
                        className="absolute top-4 right-4 text-white/80 hover:text-white text-4xl font-light w-12 h-12 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors z-10"
                    >
                        ×
                    </button>

                    <button
                        onClick={(e) => { e.stopPropagation(); goToPrev(); }}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white text-4xl font-light w-12 h-12 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors z-10"
                    >
                        ‹
                    </button>

                    <button
                        onClick={(e) => { e.stopPropagation(); goToNext(); }}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white text-4xl font-light w-12 h-12 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors z-10"
                    >
                        ›
                    </button>

                    <div className="max-w-6xl max-h-[90vh] w-full h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
                        {galleryItems[currentIndex].type === 'video' ? (
                            <video
                                src={galleryItems[currentIndex].src}
                                className="max-w-full max-h-full object-contain rounded-lg"
                                controls
                                autoPlay
                                loop
                            />
                        ) : (
                            <img
                                src={galleryItems[currentIndex].src}
                                alt={`Gallery ${currentIndex + 1}`}
                                className="max-w-full max-h-full object-contain rounded-lg"
                            />
                        )}
                    </div>

                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/60 text-sm">
                        {currentIndex + 1} / {galleryItems.length}
                    </div>
                </div>
            )}
        </section>
    );
};

export default Gallery;
