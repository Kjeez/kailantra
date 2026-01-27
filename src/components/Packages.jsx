import React from 'react';
import { Check, Star, Users, Clock, Zap, Heart } from 'lucide-react';

const Packages = () => {
    const packages = [
        {
            title: "Weekend Escape",
            price: "₹4,999",
            duration: "2 Days, 1 Night",
            features: ["3 meals + snacks", "Bonfire evening", "Short jungle walk", "Perfect for quick getaway"],
            popular: false,
            icon: <Clock className="w-6 h-6 text-blue-400" />,
            accent: "from-blue-500/20 to-blue-600/5",
            border: "group-hover:border-blue-500/50"
        },
        {
            title: "Full Adventure",
            price: "₹5,999",
            duration: "3 Days, 2 Nights",
            features: ["All meals included", "Guided jungle trek", "2 bonfire nights", "Music evening"],
            popular: true,
            icon: <Zap className="w-6 h-6 text-[#FF9966]" />,
            accent: "from-[#FF9966]/20 to-[#FF9966]/5",
            border: "group-hover:border-[#FF9966]/50"
        },
        {
            title: "Extended Stay",
            price: "₹9,999",
            duration: "4 Days, 3 Nights",
            features: ["Multiple treks", "Yoga/meditation", "Photography session", "Ultimate relaxation"],
            popular: false,
            icon: <Star className="w-6 h-6 text-purple-400" />,
            accent: "from-purple-500/20 to-purple-600/5",
            border: "group-hover:border-purple-500/50"
        },
        {
            title: "Couples Retreat",
            price: "₹14,999",
            per: "/couple",
            duration: "3D2N Romantic",
            features: ["Private tent upgrades", "Candlelight dinner", "Couple photography", "Romantic escape"],
            popular: false,
            special: true,
            icon: <Heart className="w-6 h-6 text-pink-400" />,
            accent: "from-pink-500/20 to-pink-600/5",
            border: "group-hover:border-pink-500/50"
        }
    ];

    return (
        <section id="packages" className="relative py-32 px-6 overflow-hidden bg-[#0a0a0a]">
            {/* Ambient Background Glow */}
            <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-[#4CAF50]/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#FF9966]/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto relative z-10">
                <div className="text-center mb-24">
                    <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-[#4CAF50] font-bold tracking-[0.2em] uppercase text-xs mb-6 backdrop-blur-sm">
                        Choose Your Adventure
                    </span>
                    <h2 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tight">
                        Kailantra <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">Packages</span>
                    </h2>
                    <p className="text-white/60 max-w-2xl mx-auto text-lg leading-relaxed">
                        Curated experiences for every traveler. Choose the perfect plan for your mountain getaway.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {packages.map((pkg, idx) => (
                        <div
                            key={idx}
                            className={`group relative bg-[#121212] rounded-[2rem] p-1 border transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${pkg.popular
                                    ? 'border-[#4CAF50] shadow-[0_0_40px_rgba(76,175,80,0.2)]'
                                    : 'border-white/5 hover:border-white/20'
                                }`}
                        >
                            {/* Inner Card Content */}
                            <div className="relative h-full bg-[#181818] rounded-[1.8rem] p-7 flex flex-col overflow-hidden">
                                {/* Gradient Overlay on Hover */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${pkg.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                                {pkg.popular && (
                                    <div className="absolute top-0 right-0 bg-[#4CAF50] text-black text-xs font-bold px-4 py-2 rounded-bl-2xl uppercase tracking-wider flex items-center gap-1">
                                        <Star size={12} fill="black" /> Popular
                                    </div>
                                )}

                                <div className="relative z-10 mb-6 mt-2">
                                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 shadow-inner group-hover:scale-110 transition-transform duration-500 text-white">
                                        {pkg.icon}
                                    </div>
                                    <h3 className="text-lg font-bold text-white mb-2 tracking-wide text-white/90">{pkg.title}</h3>
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-3xl font-black text-white tracking-tight">{pkg.price}</span>
                                        <span className="text-sm font-medium text-white/40">{pkg.per || '/person'}</span>
                                    </div>
                                    <div className="text-xs font-medium text-[#4CAF50] mt-2 bg-[#4CAF50]/10 inline-block px-3 py-1 rounded-full border border-[#4CAF50]/20">
                                        {pkg.duration}
                                    </div>
                                </div>

                                <div className="space-y-4 mb-8 flex-grow relative z-10">
                                    <div className="h-px w-full bg-white/5 mb-6"></div>
                                    {pkg.features.map((feat, i) => (
                                        <div key={i} className="flex items-start gap-3 text-sm text-white/70 group-hover:text-white/90 transition-colors">
                                            <div className="mt-0.5 min-w-[16px]">
                                                <Check size={14} className="text-[#4CAF50]" strokeWidth={3} />
                                            </div>
                                            <span className="leading-snug">{feat}</span>
                                        </div>
                                    ))}
                                </div>

                                <a
                                    href="https://wa.me/919205018170?text=Hi!%20I%20am%20interested%20in%20a%20package"
                                    className={`relative z-10 w-full py-4 rounded-xl font-bold text-sm uppercase tracking-wider text-center transition-all duration-300 flex items-center justify-center gap-2 ${pkg.popular
                                            ? 'bg-[#4CAF50] text-black hover:bg-[#3d8c40] hover:shadow-[0_10px_20px_rgba(76,175,80,0.3)]'
                                            : 'bg-white/5 text-white border border-white/10 hover:bg-white/10 hover:border-white/30'
                                        }`}
                                >
                                    Book Now
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-20 group relative rounded-[2.5rem] p-[1px] bg-gradient-to-r from-transparent via-[#FF9966]/50 to-transparent">
                    <div className="relative bg-[#121212] rounded-[2.5rem] p-10 md:p-14 overflow-hidden">
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
                        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#FF9966]/10 blur-[100px] rounded-full pointer-events-none"></div>

                        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
                            <div className="flex items-start gap-6">
                                <div className="w-20 h-20 rounded-3xl bg-[#FF9966]/10 flex items-center justify-center text-[#FF9966] shrink-0 border border-[#FF9966]/20">
                                    <Users size={32} />
                                </div>
                                <div>
                                    <h3 className="text-3xl font-black text-white mb-3">Group Adventures</h3>
                                    <p className="text-white/60 max-w-md leading-relaxed">
                                        Planning a retreat or college trip? Get our exclusive group package for 10+ people with customized meals, DJ nights, and more.
                                    </p>
                                    <div className="flex flex-wrap gap-2 mt-4">
                                        <span className="text-xs font-bold text-white/40 bg-white/5 px-3 py-1 rounded-md border border-white/5">🎵 DJ Night</span>
                                        <span className="text-xs font-bold text-white/40 bg-white/5 px-3 py-1 rounded-md border border-white/5">🍛 Custom Menu</span>
                                        <span className="text-xs font-bold text-white/40 bg-white/5 px-3 py-1 rounded-md border border-white/5">🔥 Private Bonfire</span>
                                    </div>
                                </div>
                            </div>

                            <div className="text-center md:text-right shrink-0 bg-white/5 p-6 rounded-2xl border border-white/5 backdrop-blur-sm">
                                <div className="text-sm font-bold text-white/50 uppercase tracking-wider mb-1">Full Camp Booking</div>
                                <div className="text-4xl font-black text-[#FF9966] mb-4">₹70,000</div>
                                <a
                                    href="https://wa.me/919205018170"
                                    className="inline-flex items-center justify-center gap-2 bg-white text-black px-8 py-4 rounded-xl font-bold hover:bg-gray-200 transition-colors w-full md:w-auto"
                                >
                                    Enquire Groups
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Packages;
