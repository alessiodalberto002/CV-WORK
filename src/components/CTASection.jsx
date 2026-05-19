import { motion } from 'framer-motion';

const CTASection = ({ onNavigate }) => {
    return (
        <section className="min-h-screen flex justify-center items-center bg-stone-50 border-t border-stone-200/60 overflow-hidden relative">
            {/* Elemento grafico di sfondo per dare profondità */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-stone-200/30 rounded-full blur-[120px] pointer-events-none" />

            <div className="relative max-w-2xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-white border border-stone-200/60 rounded-[48px] p-12 md:p-20 text-center flex flex-col items-center shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)]"
                >
                    <div className="mb-8 w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center text-white text-xl">
                        ✦
                    </div>

                    <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-stone-900 mb-6">
                        Inizia la tua trasformazione
                    </h2>

                    <p className="text-stone-500 font-light text-lg max-w-sm leading-relaxed mb-10">
                        Il tuo prossimo capitolo professionale merita una narrazione d'eccellenza. Inizia ora la configurazione.
                    </p>

                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => onNavigate('onboarding')}
                        className="group relative px-10 py-5 bg-stone-950 text-white font-medium rounded-full text-sm tracking-widest uppercase transition-all hover:bg-indigo-600 shadow-xl"
                    >
                        Avvia Onboarding
                        <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">→</span>
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
};

export default CTASection;