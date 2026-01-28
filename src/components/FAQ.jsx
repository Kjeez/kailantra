import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const faqs = [
        {
            question: "Is it safe for solo female travelers?",
            answer: "Absolutely! Kailantra is a safe and secure campsite with 24/7 staff availability. We prioritize the safety of all our guests, and our campsite is well-guarded."
        },
        {
            question: "What about washroom facilities?",
            answer: "We have clean, hygienic, and well-maintained western-style common washrooms separated for men and women with running water."
        },
        {
            question: "Is there mobile network connectivity?",
            answer: "Yes, major networks like Jio and Airtel work well here. We also encourage a digital detox to truly enjoy the nature!"
        },
        {
            question: "Do you provide Jain food?",
            answer: "Yes, we can customize meals including Jain and Vegan options upon prior request. All our standard meals are delicious vegetarian preparations."
        },
        {
            question: "Can we park our cars?",
            answer: "Yes, we have safe off-road parking available near the campsite. The campsite is a short 5-minute easy walk from the parking area."
        }
    ];

    return (
        <section className="py-24 px-4 md:px-6 bg-[#0a0a0a] relative">
            <div className="container mx-auto max-w-4xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Frequently Asked Questions</h2>
                    <p className="text-white/60">Everything you need to know before you arrive.</p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, idx) => (
                        <div
                            key={idx}
                            className={`bg-[#121212] rounded-2xl border transition-all duration-300 ${openIndex === idx ? 'border-[#4CAF50]/50 bg-[#161616]' : 'border-white/5 hover:border-white/10'
                                }`}
                        >
                            <button
                                onClick={() => setOpenIndex(idx === openIndex ? -1 : idx)}
                                className="flex items-center justify-between w-full p-6 text-left"
                            >
                                <span className={`font-semibold text-lg transition-colors ${openIndex === idx ? 'text-[#4CAF50]' : 'text-white'
                                    }`}>
                                    {faq.question}
                                </span>
                                <div className={`p-2 rounded-full transition-colors ${openIndex === idx ? 'bg-[#4CAF50]/20 text-[#4CAF50]' : 'bg-white/5 text-white/50'
                                    }`}>
                                    {openIndex === idx ? <Minus size={20} /> : <Plus size={20} />}
                                </div>
                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === idx ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                                    }`}
                            >
                                <p className="px-6 pb-6 text-white/70 leading-relaxed">
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
