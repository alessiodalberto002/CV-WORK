import { motion } from 'framer-motion';

const Service = () => {
    // Animazione di ingresso fluida e sequenziale (stagger) al caricamento/scroll
    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.12, delayChildren: 0.1 }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
    };

    return (
        <section id="servizi" className="py-24 sm:py-32 bg-stone-50 border-t border-stone-200/60">
            <div className="max-w-4xl mx-auto px-6 sm:px-8">

                {/* Intestazione in stile Editoriale */}
                <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
                    <span className="text-xs font-medium tracking-widest text-stone-400 uppercase">
                        I Nostri Pacchetti
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-normal tracking-tight text-stone-900 leading-tight">
                        Soluzioni su misura per la tua candidatura
                    </h2>
                    <p className="text-base sm:text-lg text-stone-500 font-light">
                        Scegli il livello di impatto che desideri dare alla tua prossima sfida professionale.
                    </p>
                </div>

                {/* Grid delle Card */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch"
                >
                    {/* Card 1: The Digital Classic */}
                    <motion.div
                        variants={cardVariants}
                        whileHover={{ y: -4, transition: { duration: 0.2 } }}
                        className="bg-white border border-stone-200/80 rounded-3xl p-8 flex flex-col justify-between shadow-sm"
                    >
                        <div className="space-y-6">
                            <span className="inline-block px-3 py-1 text-[11px] font-medium tracking-wide text-stone-600 bg-stone-100 rounded-full">
                                Digitale & ATS
                            </span>
                            <div className="space-y-2">
                                <h3 className="text-xl font-normal text-stone-900">The Digital Classic</h3>
                                <p className="text-sm text-stone-500 font-light leading-relaxed">
                                    Ottimizzato per superare i filtri dei software di selezione aziendali (ATS).
                                </p>
                            </div>
                            <p className="text-2xl font-light text-stone-900 pt-2">
                                <span className="text-sm text-stone-400 font-light">da</span> 120€
                            </p>
                        </div>
                        <motion.button
                            whileTap={{ scale: 0.98 }}
                            onClick={() => navigateTo('onboarding')}
                            className="mt-8 block text-center py-3.5 bg-stone-50 border border-stone-200 hover:bg-stone-100 hover:text-stone-900 text-stone-600 text-sm font-medium rounded-2xl transition-colors"
                        >
                            Seleziona
                        </motion.button>
                    </motion.div>

                    {/* Card 2: The Ready-to-Print (IL PIÙ RICHIESTO - Inversione di Contrasto Elegante) */}
                    <motion.div
                        variants={cardVariants}
                        whileHover={{ y: -4, transition: { duration: 0.2 } }}
                        className="bg-stone-950 border border-stone-900 rounded-3xl p-8 flex flex-col justify-between shadow-md relative overflow-hidden"
                    >
                        {/* Micro-badge discreto incorporato in alto */}
                        <div className="absolute top-0 right-0 px-4 py-1.5 bg-stone-800 text-[10px] font-medium tracking-wider text-stone-300 rounded-bl-xl uppercase">
                            Popolare
                        </div>

                        <div className="space-y-6">
                            <span className="inline-block px-3 py-1 text-[11px] font-medium tracking-wide text-stone-400 bg-stone-900 rounded-full">
                                Fisico + Digitale
                            </span>
                            <div className="space-y-2">
                                <h3 className="text-xl font-normal text-stone-50">The Ready-to-Print</h3>
                                <p className="text-sm text-stone-400 font-light leading-relaxed">
                                    Perfetto sia online che per colloqui di persona ed eventi di networking.
                                </p>
                            </div>
                            <p className="text-2xl font-light text-stone-50 pt-2">
                                <span className="text-sm text-stone-500 font-light">da</span> 170€
                            </p>
                        </div>
                        <motion.button
                            whileTap={{ scale: 0.98 }}
                            onClick={() => navigateTo('onboarding')}
                            className="mt-8 block text-center py-3.5 bg-stone-50 hover:bg-stone-200 text-stone-950 text-sm font-medium rounded-2xl transition-colors shadow-sm"
                        >
                            Seleziona e Inizia
                        </motion.button>
                    </motion.div>

                    {/* Card 3: The Full Identity */}
                    <motion.div
                        variants={cardVariants}
                        whileHover={{ y: -4, transition: { duration: 0.2 } }}
                        className="bg-white border border-stone-200/80 rounded-3xl p-8 flex flex-col justify-between shadow-sm"
                    >
                        <div className="space-y-6">
                            <span className="inline-block px-3 py-1 text-[11px] font-medium tracking-wide text-stone-600 bg-stone-100 rounded-full">
                                Identità Completa
                            </span>
                            <div className="space-y-2">
                                <h3 className="text-xl font-normal text-stone-900">The Full Identity</h3>
                                <p className="text-sm text-stone-500 font-light leading-relaxed">
                                    La massima espressione professionale: trasforma il tuo CV in un sito web vetrina.
                                </p>
                            </div>
                            <p className="text-2xl font-light text-stone-900 pt-2">
                                <span className="text-sm text-stone-400 font-light">da</span> 450€
                            </p>
                        </div>
                        <motion.button
                            whileTap={{ scale: 0.98 }}
                            onClick={() => navigateTo('onboarding')}
                            className="mt-8 block text-center py-3.5 bg-stone-50 border border-stone-200 hover:bg-stone-100 hover:text-stone-900 text-stone-600 text-sm font-medium rounded-2xl transition-colors"
                        >
                            Seleziona
                        </motion.button>
                    </motion.div>
                </motion.div>

            </div>
        </section>
    );
};

export default Service;