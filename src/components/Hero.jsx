import React from 'react';
import { MapPin, MessageCircle } from 'lucide-react';

const Hero = () => {
    const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
    const desktopImages = ['/img/gallery/16.jpg', '/img/gallery/2.jpg', '/img/gallery/14.jpg'];

    React.useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % desktopImages.length);
        }, 5000); // Change image every 5 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
            {/* Background Carousel for Desktop */}
            <div className="hidden md:block absolute top-0 left-0 w-full h-full">
                {desktopImages.map((src, idx) => (
                    <img
                        key={src}
                        src={src}
                        alt="Camping Background"
                        className={`absolute top-0 left-0 w-full h-full object-cover opacity-75 animate-[kenBurns_25s_ease-in-out_infinite_alternate] transition-opacity duration-1000 ${idx === currentImageIndex ? 'opacity-75' : 'opacity-0'
                            }`}
                    />
                ))}
            </div>
            {/* Mobile Background */}
            <img
                src="/img/mob_hero.jpg"
                alt="Camping Background"
                className="block md:hidden absolute top-0 left-0 w-full h-full object-cover opacity-75 animate-[kenBurns_25s_ease-in-out_infinite_alternate]"
            />
            {/* Overlays */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.7)_100%)] z-10"></div>
            <div className="absolute bottom-0 left-0 right-0 h-[40%] bg-gradient-to-t from-black/90 to-transparent z-10"></div>

            <div className="relative z-20 text-center max-w-[1100px] px-4 md:px-8 pt-20 md:pt-0">
                <div className="inline-block bg-[#4CAF50]/15 border border-[#4CAF50]/40 text-[#4CAF50] px-6 py-2 rounded-full text-sm font-semibold tracking-wider mb-4 backdrop-blur-md animate-[fadeInDown_0.8s_ease-out]">
                    By Majestic Explorers Garhwal
                </div>

                <h1 className="text-4xl md:text-[82px] font-black leading-[1.1] mb-4 md:mb-6 text-white tracking-tighter drop-shadow-2xl animate-[fadeInUp_1s_ease-out_0.2s_both]">
                    Escape to the <span className="bg-gradient-to-br from-white to-[#4CAF50] bg-clip-text text-transparent">Mountains</span>
                </h1>

                <p className="text-base md:text-[22px] font-normal text-white/85 mb-3 md:mb-4 leading-relaxed max-w-[700px] mx-auto animate-[fadeInUp_1s_ease-out_0.4s_both]">
                    Experience the best adventure camp and night stay in Tehri, Uttarakhand. Where luxury meets pristine wilderness.
                </p>

                <div className="flex items-center justify-center gap-2 text-white/70 mb-4 md:mb-8 animate-[fadeInUp_1s_ease-out_0.6s_both]">
                    <MapPin size={18} />
                    <span className="text-sm md:text-base">Ratoli, Near Tehri Lake, Uttarakhand</span>
                </div>

                <div className="inline-flex flex-col md:flex-row items-center gap-3 bg-[#E86A33]/15 border border-[#E86A33]/40 px-7 py-3 rounded-2xl text-white mb-4 md:mb-8 backdrop-blur-md animate-[fadeInUp_1s_ease-out_0.7s_both]">
                    <span className="text-sm opacity-90">Perfect Stay at</span>
                    <span className="text-2xl font-black text-[#FF9966]">₹5,999</span>
                    <span className="text-sm opacity-80">Per person • 3D/2N</span>
                </div>

                <div className="flex flex-wrap justify-center gap-3 md:gap-4 animate-[fadeInUp_1s_ease-out_1.1s_both] mb-6 md:mb-12">
                    {['⛺ Luxury Camps', '🥾 Guided Treks', '🔥 Bonfire Nights', '🎵 Live Music', '❄️ Winter Snow'].map((feature) => (
                        <div key={feature} className="bg-white/10 backdrop-blur-md border border-white/15 px-6 py-3 rounded-full text-sm font-medium text-white flex items-center gap-2 hover:bg-white/20 transition-all hover:-translate-y-1">
                            {feature}
                        </div>
                    ))}
                </div>

                <div className="flex flex-col md:flex-row items-center justify-center gap-5 animate-[fadeInUp_1s_ease-out_0.9s_both]">
                    <a
                        href="https://wa.me/919205018170?text=Hi!%20I%20want%20to%20book%20a%20stay%20at%20Kailantra"
                        target="_blank"
                        rel="noreferrer"
                        className="px-10 py-4 text-base font-semibold bg-gradient-to-br from-[#4CAF50] to-[#2D5016] text-white rounded-xl shadow-[0_10px_35px_rgba(76,175,80,0.35)] hover:-translate-y-1 hover:shadow-[0_15px_45px_rgba(76,175,80,0.5)] transition-all flex items-center gap-2 no-underline"
                    >
                        <MessageCircle size={20} />
                        Book on WhatsApp
                    </a>
                    <a
                        href="#packages"
                        className="px-10 py-4 text-base font-semibold bg-white/10 text-white border-2 border-white/30 rounded-xl backdrop-blur-md hover:bg-white/20 hover:border-white/50 hover:-translate-y-1 transition-all no-underline"
                    >
                        Explore Packages
                    </a>
                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-white/60 text-[13px] flex flex-col items-center gap-2 animate-[fadeIn_1.5s_ease-out_1.5s_both]">
                <div className="w-[24px] h-[36px] border-2 border-white/50 rounded-xl relative before:content-[''] before:absolute before:top-2 before:left-1/2 before:-translate-x-1/2 before:w-1 before:h-2 before:bg-white/60 before:rounded-sm before:animate-[scrollDown_2s_ease-in-out_infinite]"></div>
                <span>Scroll to explore</span>
            </div>
        </div>
    );
};

export default Hero;
