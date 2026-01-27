import React from 'react';
import {
    CheckCircle2, Backpack, Tent, Utensils, Coffee, Flame,
    Shield, Shirt, Wind, Flashlight, Camera, Pill,
    AlertCircle, Clock, Info
} from 'lucide-react';

const Inclusions = () => {
    const included = [
        { icon: <Tent size={18} />, text: "Luxury Tent Accommodation" },
        { icon: <Utensils size={18} />, text: "All Vegetarian Meals (B/L/D)" },
        { icon: <Coffee size={18} />, text: "Evening Tea & Snacks" },
        { icon: <Flame size={18} />, text: "Nightly Bonfire & Music" },
        { icon: <Shield size={18} />, text: "Sanitized Washrooms" },
        { icon: <Info size={18} />, text: "First Aid & Safety Gear" }
    ];

    const toBring = [
        { icon: <Shirt size={18} />, text: "Warm Woolen Clothes" },
        { icon: <Wind size={18} />, text: "Windcheater / Jacket" },
        { icon: <div className="i-shoe" />, text: "Sturdy Walking Shoes" }, // Using generic div if specific icon missing, but Lucide has Footprints usually
        { icon: <Flashlight size={18} />, text: "Personal Flashlight" },
        { icon: <Camera size={18} />, text: "Camera & Powerbank" },
        { icon: <Pill size={18} />, text: "Personal Medicines" }
    ];

    return (
        <section className="py-24 px-6 bg-[#0a0a0a] relative overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>

            <div className="container mx-auto">
                <div className="text-center mb-16 relative z-10">
                    <span className="text-[#4CAF50] font-bold tracking-widest uppercase text-sm mb-4 block">Preparation</span>
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Unpack the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4CAF50] to-[#2D5016]">Details</span></h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 mb-12">
                    {/* Included Card */}
                    <div className="bg-[#121212] rounded-3xl p-1 border border-[#4CAF50]/20 relative group overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#4CAF50]/5 rounded-full blur-[80px] group-hover:bg-[#4CAF50]/10 transition-colors"></div>

                        <div className="bg-[#181818] rounded-[1.4rem] p-8 h-full relative z-10">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-14 h-14 rounded-2xl bg-[#4CAF50]/10 flex items-center justify-center text-[#4CAF50] border border-[#4CAF50]/20 group-hover:scale-110 transition-transform duration-300">
                                    <CheckCircle2 size={28} />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-white">What's Included</h3>
                                    <p className="text-white/40 text-sm">We take care of the essentials</p>
                                </div>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-y-6 gap-x-4">
                                {included.map((item, i) => (
                                    <div key={i} className="flex items-center gap-3 text-white/80 group/item">
                                        <div className="w-8 h-8 rounded-full bg-[#4CAF50]/5 flex items-center justify-center text-[#4CAF50] shrink-0 group-hover/item:bg-[#4CAF50] group-hover/item:text-white transition-colors">
                                            {item.icon}
                                        </div>
                                        <span className="font-medium text-sm">{item.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* To Bring Card */}
                    <div className="bg-[#121212] rounded-3xl p-1 border border-[#FF9966]/20 relative group overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF9966]/5 rounded-full blur-[80px] group-hover:bg-[#FF9966]/10 transition-colors"></div>

                        <div className="bg-[#181818] rounded-[1.4rem] p-8 h-full relative z-10">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-14 h-14 rounded-2xl bg-[#FF9966]/10 flex items-center justify-center text-[#FF9966] border border-[#FF9966]/20 group-hover:scale-110 transition-transform duration-300">
                                    <Backpack size={28} />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-white">Packing List</h3>
                                    <p className="text-white/40 text-sm">Essentials for a comfortable stay</p>
                                </div>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-y-6 gap-x-4">
                                {toBring.map((item, i) => (
                                    <div key={i} className="flex items-center gap-3 text-white/80 group/item">
                                        <div className="w-8 h-8 rounded-full bg-[#FF9966]/5 flex items-center justify-center text-[#FF9966] shrink-0 group-hover/item:bg-[#FF9966] group-hover/item:text-white transition-colors">
                                            {item.icon}
                                        </div>
                                        <span className="font-medium text-sm">{item.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Important Guidelines Section */}
                <div className="bg-[#121212] rounded-2xl border border-white/5 p-8 relative overflow-hidden">
                    <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-[#4CAF50] to-[#FF9966]"></div>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="flex gap-4">
                            <Clock className="text-blue-400 shrink-0" />
                            <div>
                                <h4 className="text-white font-bold mb-1">Check-in / Check-out</h4>
                                <p className="text-white/60 text-sm">Check-in: 11:00 AM</p>
                                <p className="text-white/60 text-sm">Check-out: 10:00 AM</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <AlertCircle className="text-yellow-400 shrink-0" />
                            <div>
                                <h4 className="text-white font-bold mb-1">House Rules</h4>
                                <p className="text-white/60 text-sm">Quiet hours after 11 PM.</p>
                                <p className="text-white/60 text-sm">Eco-friendly zone - No plastic litter.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <Info className="text-[#4CAF50] shrink-0" />
                            <div>
                                <h4 className="text-white font-bold mb-1">Note</h4>
                                <p className="text-white/60 text-sm">Carry valid ID proof.</p>
                                <p className="text-white/60 text-sm">Network: Jio/Airtel work best.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Inclusions;
