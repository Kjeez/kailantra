import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Packages', href: '#packages' },
        { name: 'About', href: '#about' },
        { name: 'Gallery', href: '#gallery' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md py-4' : 'bg-gradient-to-b from-black/40 to-transparent py-6'
                }`}
        >
            <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
                <div className="flex items-center gap-4">
                    <img src="/img/logo.png" alt="Kailantra Logo" className="h-12 w-auto drop-shadow-lg" />
                    <span className="text-2xl font-black tracking-widest text-white uppercase">Kailantra</span>
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-10 list-none">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <a
                                href={link.href}
                                className="text-white/90 hover:text-white font-medium text-sm tracking-wide transition-colors relative group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#4CAF50] transition-all duration-300 group-hover:w-full"></span>
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden">
                    <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-white">
                        {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="absolute top-0 left-0 right-0 h-screen bg-[#0a0a0a]/95 backdrop-blur-2xl flex flex-col items-center justify-center gap-8 z-40 animate-[fadeIn_0.3s_ease-out]">
                    <button
                        onClick={() => setMobileMenuOpen(false)}
                        className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
                    >
                        <X size={32} />
                    </button>

                    {navLinks.map((link, idx) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-white text-3xl font-black tracking-tight hover:text-[#4CAF50] transition-colors animate-[fadeInUp_0.5s_ease-out_both]"
                            style={{ animationDelay: `${idx * 0.1}s` }}
                        >
                            {link.name}
                        </a>
                    ))}

                    <div className="mt-8 flex gap-6 animate-[fadeInUp_0.5s_ease-out_0.4s_both]">
                        {/* Social placeholders or contact button */}
                        <a href="tel:+919205018170" className="px-6 py-3 rounded-full bg-[#4CAF50]/10 text-[#4CAF50] font-bold border border-[#4CAF50]/20">
                            Call Us
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
