import { motion } from 'framer-motion';

const MiniPortfolio = () => {
    return (
        <section id='portfolio' className="min-h-screen flex flex-col justify-center items-center py-24 bg-stone-50/50">
            <div className="max-w-5xl mx-auto px-6 sm:px-8 space-y-16">

                {/* Header più deciso */}
                <div className="space-y-2">
                    <h2 className="text-4xl md:text-5xl font-medium text-indigo-600 tracking-tight">Vetrine Digitali</h2>
                    <p className="text-stone-500 font-light text-lg">Ecosistemi che trasformano candidature in opportunità.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Item 1: Wide - Design "Focus" */}
                    <motion.div
                        whileHover={{ scale: 1.01 }}
                        className="md:col-span-2 bg-white rounded-3xl p-10 flex items-center justify-between border border-stone-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] group cursor-pointer"
                    >
                        <div className="space-y-2">
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-indigo-500">Premium Case Study</span>
                            <h3 className="text-3xl font-normal text-stone-900">Senior Product Manager</h3>
                            <p className="text-stone-500">Dashboard interattiva con integrazione ATS e analytics in tempo reale.</p>
                        </div>
                        <div className="w-16 h-16 bg-stone-950 rounded-full flex items-center justify-center text-white transform group-hover:rotate-45 transition-transform duration-500">
                            ↗
                        </div>
                    </motion.div>

                    {/* Item 2 & 3: Square - Design "Sleek" */}
                    {[1, 2].map((i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -5 }}
                            className="relative bg-white rounded-3xl p-8 border border-stone-200 h-80 flex flex-col justify-end shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400">Creative Technologist</span>
                            <h3 className="text-2xl font-normal text-stone-900 mt-2">
                                {i === 1 ? 'Portfolio Interattivo' : 'Ecosistema Minimal'}
                            </h3>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MiniPortfolio;