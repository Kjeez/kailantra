import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
    const reviews = [
        {
            name: "Rahul Sharma",
            role: "Adventure Enthusiast",
            text: "One of the best camping experiences near Rishikesh! The food was amazing, and the staff made sure we were comfortable. The night trek was the highlight.",
            rating: 5,
            image: "/img/testimonials/testimonial_rahul.png"
        },
        {
            name: "Priya Singh",
            role: "Weekend Traveler",
            text: "Searching for peace? This is the place. Waking up to the mountain view was magical. The tents are clean and cozy. Highly recommended!",
            rating: 5,
            image: "/img/testimonials/testimonial_priya.png"
        },
        {
            name: "Amit & Neha",
            role: "Couple",
            text: "Perfect romantic getaway. The candlelight dinner arrangement was beautiful. It's quiet, safe, and incredibly scenic. Will visit again!",
            rating: 5,
            image: "/img/testimonials/testimonial_amit_neha.png"
        }
    ];

    return (
        <section className="py-24 px-4 md:px-6 bg-[#121212] relative">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <span className="text-[#4CAF50] font-bold tracking-widest uppercase text-sm mb-2 block">Testimonials</span>
                    <h2 className="text-4xl md:text-5xl font-black text-white">Guest <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4CAF50] to-[#2D5016]">Stories</span></h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {reviews.map((review, idx) => (
                        <div key={idx} className="bg-[#1a1a1a] p-8 rounded-3xl border border-white/5 relative group hover:-translate-y-2 transition-transform duration-300">
                            <Quote size={40} className="text-white/10 absolute top-6 right-6" />

                            <div className="flex gap-1 mb-6 text-[#FF9966]">
                                {[...Array(review.rating)].map((_, i) => (
                                    <Star key={i} size={16} fill="currentColor" />
                                ))}
                            </div>

                            <p className="text-white/70 leading-relaxed mb-8 italic">"{review.text}"</p>

                            <div className="flex items-center gap-4">
                                <img src={review.image} alt={review.name} className="w-12 h-12 rounded-full border-2 border-[#4CAF50]/30" />
                                <div>
                                    <h4 className="text-white font-bold">{review.name}</h4>
                                    <p className="text-white/40 text-xs uppercase tracking-wider">{review.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
