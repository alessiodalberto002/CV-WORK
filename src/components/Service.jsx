import { motion } from 'framer-motion';

const Service = ({ navigateTo }) => { // Assicurati di passare la prop
    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
    };

    return (
        <section id="servizi" className="min-h-screen flex justify-center items-center bg-white">
            <div className="max-w-6xl mx-auto px-6">

                <div className="text-center max-w-xl mx-auto mb-24 space-y-4">
                    <h2 className="text-4xl md:text-5xl font-medium text-indigo-600 tracking-tight">Investi nel tuo futuro</h2>
                    <p className="text-stone-500 font-light text-lg">Seleziona il percorso ideale per sbloccare la tua prossima opportunità professionale.</p>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center"
                >
                    {/* Card Standard */}
                    <motion.div variants={cardVariants} className="bg-stone-50 rounded-[32px] p-8 border border-stone-200/60 h-full flex flex-col justify-between hover:border-stone-300 transition-colors">
                        <div className="space-y-6">
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400">Entry Level</span>
                            <h3 className="text-2xl text-stone-900">Digital Classic</h3>
                            <p className="text-stone-500 text-sm leading-relaxed">Ottimizzazione mirata per superare i filtri ATS e posizionarti nei database HR.</p>
                            <p className="text-3xl font-normal">120€</p>
                        </div>
                        <button onClick={() => navigateTo('onboarding')} className="mt-10 w-full py-4 border border-stone-900 rounded-2xl hover:bg-stone-900 hover:text-white transition-all">Seleziona</button>
                    </motion.div>

                    {/* Card "Hero" (Ready-to-Print) */}
                    <motion.div
                        variants={cardVariants}
                        className="relative bg-indigo-600 rounded-[32px] p-8 md:p-10 flex flex-col justify-between shadow-[0_20px_50px_-12px_rgba(0,0,0,0.3)] text-white transform md:scale-105 z-10"
                    >
                        <div className="absolute top-6 right-6 px-3 py-1 bg-white text-indigo-600 text-[10px] font-bold uppercase tracking-widest rounded-full">Best Seller</div>
                        <div className="space-y-6">
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white">Professional</span>
                            <h3 className="text-3xl font-normal">Ready-to-Print</h3>
                            <p className="text-stone-300 text-sm leading-relaxed">Il mix perfetto: design fisico impeccabile e architettura digitale ottimizzata per il networking.</p>
                            <p className="text-4xl font-normal">170€</p>
                        </div>
                        <button onClick={() => navigateTo('onboarding')} className="mt-10 w-full py-4 bg-white text-stone-950 rounded-2xl font-medium hover:bg-stone-200 transition-all">Inizia ora</button>
                    </motion.div>

                    {/* Card Full Identity */}
                    <motion.div variants={cardVariants} className="bg-stone-50 rounded-[32px] p-8 border border-stone-200/60 h-full flex flex-col justify-between hover:border-stone-300 transition-colors">
                        <div className="space-y-6">
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400">Executive</span>
                            <h3 className="text-2xl text-stone-900">Full Identity</h3>
                            <p className="text-stone-500 text-sm leading-relaxed">La soluzione definitiva: CV, Portfolio digitale, cover letter e setup LinkedIn personalizzato.</p>
                            <p className="text-3xl font-normal">450€</p>
                        </div>
                        <button onClick={() => navigateTo('onboarding')} className="mt-10 w-full py-4 border border-stone-900 rounded-2xl hover:bg-stone-900 hover:text-white transition-all">Seleziona</button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Service;