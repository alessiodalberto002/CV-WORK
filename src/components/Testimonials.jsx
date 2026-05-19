import { motion } from 'framer-motion';

const Testimonials = () => {
    const reviews = [
        {
            text: "Il salto di qualità dal mio vecchio CV a questa strategia è stato immediato. Ho ricevuto 3 offerte dopo una settimana.",
            author: "Giulia R.",
            role: "Marketing Manager"
        },
        {
            text: "L'approccio ATS di CVForge ha finalmente fatto arrivare il mio profilo sulla scrivania delle aziende giuste.",
            author: "Marco V.",
            role: "Software Engineer"
        }
    ];

    return (
        <section id='testimonials' className="min-h-screen flex justify-center items-center bg-white overflow-hidden">
            <div className="max-w-5xl mx-auto px-6">

                <div className="mb-20 text-center">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400">Success Stories</span>
                    <h2 className="text-4xl md:text-5xl font-medium text-indigo-600 mt-4 tracking-tight">Oltre il CV</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {reviews.map((review, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.2 }}
                            className="bg-stone-50 p-10 rounded-[32px] border border-stone-100 relative group hover:border-stone-200 transition-colors"
                        >
                            {/* Virgolette decorative */}
                            <span className="text-8xl text-indigo-600 absolute top-4 left-6 select-none font-serif">"</span>

                            <div className="relative z-10 flex flex-col justify-between h-full">
                                <p className="text-lg md:text-xl font-light text-stone-700 leading-relaxed mb-8 mt-6">
                                    {review.text}
                                </p>
                                <div>
                                    <p className="text-sm font-bold text-stone-900">{review.author}</p>
                                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400 mt-1">{review.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;