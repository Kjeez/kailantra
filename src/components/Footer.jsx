import React from 'react';
import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
    return (
        <footer id="contact" className="bg-[#050505] pt-24 pb-12 px-6 border-t border-white/5">
            <div className="container mx-auto">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-20">
                    {/* Brand Info */}
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <img src="/img/logo.png" alt="Kailantra" className="h-10 w-auto" />
                            <span className="text-xl font-black text-white uppercase tracking-widest">Kailantra</span>
                        </div>
                        <p className="text-white/50 mb-6 leading-relaxed">
                            Best adventure camp and night stay in Tehri. Experience luxury, adventure, and peace in the Himalayas.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:bg-[#4CAF50] hover:text-white transition-all">
                                <Instagram size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:bg-[#1877F2] hover:text-white transition-all">
                                <Facebook size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Booking */}
                    <div>
                        <h4 className="text-white font-bold text-lg mb-6">Booking</h4>
                        <ul className="space-y-4">
                            <li>
                                <a href="https://wa.me/919205018170" className="flex items-center gap-3 text-white/70 hover:text-[#4CAF50] transition-colors">
                                    <Phone size={18} />
                                    <span>+91-9205018170</span>
                                </a>
                            </li>
                            <li>
                                <a href="mailto:kailantra@gmail.com" className="flex items-center gap-3 text-white/70 hover:text-[#4CAF50] transition-colors">
                                    <Mail size={18} />
                                    <span>kailantra@gmail.com</span>
                                </a>
                            </li>
                            <li className="pt-2 text-white/50 text-sm">
                                💳 50% advance | 50% on arrival
                            </li>
                        </ul>
                    </div>

                    {/* Location */}
                    <div>
                        <h4 className="text-white font-bold text-lg mb-6">Location</h4>
                        <div className="flex items-start gap-3 text-white/70 mb-4">
                            <MapPin size={18} className="mt-1 shrink-0" />
                            <span>Ratoli, Tehri Garhwal,<br />Uttarakhand</span>
                        </div>
                        <div className="space-y-2 text-white/50 text-sm">
                            <p>🚗 3 hours from Rishikesh</p>
                            <p>🚗 5 hours from Dehradun</p>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-white/40 text-sm">
                        © 2026 Kailantra Camps. All rights reserved.
                    </p>
                    <div className="flex items-center gap-2 text-[#FF9966]">
                        <span className="text-sm font-medium">Rated 4.9/5 on Google</span>
                        <div className="flex text-[#FF9966]">
                            {[1, 2, 3, 4, 5].map(star => <Star key={star} size={14} fill="currentColor" />)}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

// Simple Star component for the footer reviews to avoid import issues if I reused the lucide one differently
const Star = ({ size, fill, className }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill={fill}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
    </svg>
);

export default Footer;
