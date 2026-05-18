import { motion } from 'framer-motion';

const CTASection = ({ onNavigate }) => {
    return (
        <section className="py-24 bg-stone-50 border-t border-stone-200/60 text-center">
            <div className="max-w-xl mx-auto px-6 bg-white border border-stone-200/80 rounded-[32px] p-10 md:p-16 space-y-6 flex flex-col items-center shadow-sm">
                <div className="w-10 h-10 bg-stone-100 rounded-full flex items-center justify-center text-sm text-stone-600">
                    ✦
                </div>
                <h2 className="text-2xl md:text-3xl font-normal tracking-tight text-stone-900">
                    Pronto a fare il prossimo passo?
                </h2>
                <p className="text-stone-500 font-light text-sm max-w-sm leading-relaxed">
                    Accedi alla configurazione guidata a schermo intero per inviarci le tue esperienze passate e i tuoi obiettivi futuri.
                </p>
                <motion.button
                    whileHover={{ y: -2, bg: "#1c1917" }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => onNavigate('onboarding')}
                    className="w-full sm:w-auto px-8 py-3.5 bg-stone-950 text-stone-50 text-sm font-medium rounded-full shadow-sm transition-colors"
                >
                    Apri Modulo di Contatto
                </motion.button>
            </div>
        </section>
    );
};

export default CTASection;