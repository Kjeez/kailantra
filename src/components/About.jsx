import React from 'react';
import { Mountain, Tent, Flame } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a] py-32 px-4 md:px-6 relative overflow-hidden">
            {/* Camping Themed Decorative Elements */}
            <div className="absolute top-10 right-10 opacity-5">
                <Mountain size={200} className="text-[#4CAF50]" />
            </div>
            <div className="absolute bottom-20 left-10 opacity-5">
                <Tent size={150} className="text-[#4CAF50]" />
            </div>
            <div className="absolute top-1/2 right-1/4 opacity-5">
                <Flame size={120} className="text-[#E86A33]" />
            </div>

            <div className="container mx-auto grid md:grid-cols-2 gap-20 items-center relative z-10">
                <div className="text-white">
                    <span className="inline-block bg-[#4CAF50]/15 border border-[#4CAF50]/30 text-[#4CAF50] px-5 py-2 rounded-full text-[13px] font-bold tracking-widest uppercase mb-6">
                        About Kailantra
                    </span>
                    <h2 className="text-4xl md:text-[52px] font-black leading-[1.2] mb-8 tracking-tight">
                        Your Gateway to <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#4CAF50] to-[#2D5016]">Himalayan Adventure</span>
                    </h2>
                    <p className="text-lg leading-relaxed text-white/75 mb-6">
                        Nestled in the serene mountains of Ratoli, near the majestic Tehri Lake, Kailantra offers an unforgettable escape from the chaos of city life. We blend the thrill of adventure with the comfort of luxury camping.
                    </p>
                    <p className="text-lg leading-relaxed text-white/75 mb-6">
                        Whether you're seeking soul-stirring treks through pine forests, cozy nights around crackling bonfires, or simply a peaceful retreat under star-studded skies, Kailantra is your home in the mountains.
                    </p>
                    <p className="text-lg leading-relaxed text-white/75 mb-8">
                        Founded by adventure enthusiasts for adventure lovers, we pride ourselves on creating authentic experiences that reconnect you with nature while ensuring your comfort and safety.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                        {[
                            { icon: '⛺', number: '500+', label: 'Happy Campers' },
                            { icon: '⭐', number: '4.9★', label: 'Google Rating' },
                            { icon: '🏔️', number: '3hrs', label: 'From Rishikesh' }
                        ].map((stat) => (
                            <div key={stat.label} className="text-center p-6 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors relative overflow-hidden">
                                <div className="text-4xl mb-2">{stat.icon}</div>
                                <div className="text-3xl font-black text-[#4CAF50] mb-2">{stat.number}</div>
                                <div className="text-xs text-white/70 uppercase tracking-widest">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="relative h-[600px] hidden md:block">
                    <div className="absolute top-0 right-0 w-[70%] h-[75%] rounded-3xl overflow-hidden shadow-2xl">
                        <img
                            src="/img/gallery/16.jpg"
                            alt="Kailantra Camp"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="absolute bottom-0 left-0 w-[60%] h-[55%] rounded-3xl overflow-hidden shadow-2xl border-4 border-[#1a1a1a]">
                        <img
                            src="/img/gallery/15.jpg"
                            alt="Bonfire at Kailantra"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-[#4CAF50] to-[#2D5016] text-white p-8 rounded-2xl text-center shadow-2xl z-10 w-48">
                        <div className="text-5xl font-black mb-2">2026</div> {/* Adjusted to act as 'Established' or 'Season' */}
                        <div className="text-xs font-bold uppercase tracking-widest">Adventure Season</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
