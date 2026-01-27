import React from 'react';
import { Phone, Mail, MapPin, Instagram, Facebook, Navigation } from 'lucide-react';

const ContactLocation = () => {
    return (
        <section className="py-24 px-6 bg-[#050505] relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute left-0 bottom-0 w-full h-[500px] bg-gradient-to-t from-[#1a1a1a] to-transparent pointer-events-none" />

            <div className="container mx-auto relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Column: Contact Info */}
                    <div>
                        <span className="text-[#4CAF50] font-bold tracking-widest uppercase text-sm mb-4 block">Get In Touch</span>
                        <h2 className="text-4xl md:text-5xl font-black text-white mb-8">Plan Your <span className="text-[#4CAF50]">Escape</span></h2>
                        <p className="text-white/60 text-lg mb-12 max-w-md leading-relaxed">
                            Have questions or ready to book? Reach out to us directly. We're here to help you plan the perfect mountain adventure.
                        </p>

                        <div className="space-y-8">
                            {/* Phone */}
                            <a href="https://wa.me/919205018170" className="flex items-center gap-6 group">
                                <div className="w-14 h-14 rounded-2xl bg-[#1a1a1a] border border-white/10 flex items-center justify-center text-[#4CAF50] group-hover:bg-[#4CAF50] group-hover:text-white transition-all duration-300">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <p className="text-white/50 text-sm font-medium uppercase tracking-wider mb-1">Call / WhatsApp</p>
                                    <p className="text-xl md:text-2xl font-bold text-white group-hover:text-[#4CAF50] transition-colors">+91 9205018170</p>
                                </div>
                            </a>

                            {/* Email */}
                            <a href="mailto:contact@kailantra.com" className="flex items-center gap-6 group">
                                <div className="w-14 h-14 rounded-2xl bg-[#1a1a1a] border border-white/10 flex items-center justify-center text-[#FF9966] group-hover:bg-[#FF9966] group-hover:text-white transition-all duration-300">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <p className="text-white/50 text-sm font-medium uppercase tracking-wider mb-1">Email Us</p>
                                    <p className="text-xl md:text-2xl font-bold text-white group-hover:text-[#FF9966] transition-colors">contact@kailantra.com</p>
                                </div>
                            </a>

                            {/* Address */}
                            <div className="flex items-center gap-6">
                                <div className="w-14 h-14 rounded-2xl bg-[#1a1a1a] border border-white/10 flex items-center justify-center text-blue-400">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <p className="text-white/50 text-sm font-medium uppercase tracking-wider mb-1">Visit Us</p>
                                    <p className="text-xl font-bold text-white">Ratoli, Tehri Garhwal, Uttarakhand</p>
                                </div>
                            </div>
                        </div>

                        {/* Social Icons */}
                        <div className="mt-16 pt-10 border-t border-white/10">
                            <h4 className="text-white font-bold mb-6">Follow Our Journey</h4>
                            <div className="flex gap-4">
                                <a href="https://instagram.com" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/70 hover:bg-gradient-to-tr hover:from-purple-500 hover:to-orange-500 hover:text-white hover:border-transparent transition-all duration-300">
                                    <Instagram size={20} />
                                </a>
                                <a href="https://facebook.com" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/70 hover:bg-[#1877F2] hover:text-white hover:border-transparent transition-all duration-300">
                                    <Facebook size={20} />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Map */}
                    <div className="relative h-full min-h-[500px] bg-[#1a1a1a] rounded-[2.5rem] overflow-hidden border border-white/10 group">
                        {/* Map Iframe */}
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113426.68536838321!2d78.3686377!3d30.3857579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3908de64d509893d%3A0xe52668582ba95b11!2sTehri%20Garhwal%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1706371234567!5m2!1sen!2sin"
                            // Note: Using a generic Tehri Garhwal map embed for demo as specific place ID needs API key or exact search
                            width="100%"
                            height="100%"
                            style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(83%)' }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="absolute inset-0 w-full h-full opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                        ></iframe>

                        {/* Overlay Controls */}
                        <div className="absolute bottom-6 left-6 right-6 bg-[#0a0a0a]/90 backdrop-blur-md p-6 rounded-3xl border border-white/10 flex items-center justify-between gap-4">
                            <div>
                                <h4 className="text-white font-bold text-lg">Kailantra Adventure Camp</h4>
                                <p className="text-white/50 text-sm">Uttarakhand, India</p>
                            </div>
                            <a
                                href="https://www.google.com/maps/dir//Ratoli,+Tehri+Garhwal,+Uttarakhand"
                                target="_blank"
                                rel="noreferrer"
                                className="bg-[#4CAF50] hover:bg-[#3d8c40] text-white px-6 py-3 rounded-xl font-bold text-sm flex items-center gap-2 transition-colors"
                            >
                                <Navigation size={16} fill="currentColor" />
                                Get Directions
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ContactLocation;
