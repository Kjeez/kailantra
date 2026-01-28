import React from 'react';
import { Camera, Sunrise, Flame, Music, Mountain, Compass } from 'lucide-react';

const Experience = () => {
    const experiences = [
        {
            title: "Trekking & Hiking",
            desc: "Explore hidden trails, pine forests, and breathtaking viewpoints with our expert guides.",
            icon: <Compass size={32} className="text-[#4CAF50]" />,
            image: "https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=2070&auto=format&fit=crop"
        },
        {
            title: "Bonfire Nights",
            desc: "Gather around the warmth of the fire, share stories, and enjoy the magical mountain evenings.",
            icon: <Flame size={32} className="text-[#FF9966]" />,
            image: "https://images.unsplash.com/photo-1525902095378-b1ad9b6263b6?q=80&w=2069&auto=format&fit=crop"
        },
        {
            title: "Stargazing",
            desc: "Witness the Milky Way with your naked eye in the pollution-free skies of Ratoli.",
            icon: <Sunrise size={32} className="text-purple-400" />,
            image: "https://images.unsplash.com/photo-1534234828563-0259772da343?q=80&w=1974&auto=format&fit=crop"
        },
        {
            title: "Live Music Sessions",
            desc: "Soulful acoustic sessions that perfectly complement the sound of the wind and rustling leaves.",
            icon: <Music size={32} className="text-yellow-400" />,
            image: "https://images.unsplash.com/photo-1516280440614-6697288d5d38?q=80&w=2070&auto=format&fit=crop"
        }
    ];

    return (
        <section className="py-24 px-4 md:px-6 bg-[#121212] relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#4CAF50]/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
                    <div>
                        <span className="text-[#4CAF50] font-bold tracking-widest uppercase text-sm mb-2 block">Discover</span>
                        <h2 className="text-4xl md:text-5xl font-black text-white">The Kailantra <span className="text-[#4CAF50]">Experience</span></h2>
                    </div>
                    <p className="text-white/60 max-w-md text-lg text-right md:text-left">
                        More than just camping. It's about reconnecting with nature, yourself, and the simple joys of life.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {experiences.map((exp, idx) => (
                        <div
                            key={idx}
                            className="group relative h-[400px] rounded-3xl overflow-hidden cursor-pointer"
                        >
                            <img
                                src={exp.image}
                                alt={exp.title}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                            <div className="absolute bottom-0 left-0 p-8 w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                <div className="mb-4 bg-white/10 w-14 h-14 rounded-2xl backdrop-blur-md flex items-center justify-center border border-white/20">
                                    {exp.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                                <p className="text-white/70 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                    {exp.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
