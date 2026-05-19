import { motion } from 'framer-motion';

const Hero = ({ onNavigate }) => {
    // Varianti per far apparire i testi in sequenza fluida
    const fadeInUp = {
        hidden: { opacity: 0, y: 15 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center bg-stone-50 px-4 sm:px-6 py-16 sm:py-24">
            {/* Sfondo minimal: un singolo accenno di luce soffusa */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none overflow-hidden">
                <div className="absolute -top-[30%] left-1/3 w-[600px] h-[600px] rounded-full bg-violet-500/5 blur-[120px]" />
            </div>

            <motion.div
                initial="hidden"
                animate="visible"
                variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
                className="w-full max-w-4xl mx-auto text-center space-y-8 sm:space-y-10 relative z-10"
            >

                {/* Titolo Principale con Gradiente Soft */}
                <motion.h1
                    variants={fadeInUp}
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight text-stone-900 leading-[1.15]"
                >
                    Il tuo CV non è un foglio. <br />
                    È il tuo <span className="font-medium bg-clip-text text-transparent bg-gradient-to-r from-violet-600 via-indigo-600 to-violet-600 bg-[length:200%_auto] animate-pulse">brand personale</span>.
                </motion.h1>

                {/* Descrizione Leggera */}
                <motion.p
                    variants={fadeInUp}
                    className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-stone-500 font-light leading-relaxed px-2"
                >
                    Trasformiamo il tuo profilo in una strategia vincente: un CV ottimizzato per i filtri <span className="text-stone-800 font-normal">ATS</span>, un layout pronto per la stampa e un <span className="text-stone-800 font-normal">sito web vetrina</span> interattivo.
                </motion.p>

                {/* Pulsanti Responsive Minimali */}
                <motion.div
                    variants={fadeInUp}
                    className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4 w-full max-w-md mx-auto sm:max-w-none"
                >
                    <motion.button
                        whileHover={{ y: -2, bg: "#4c1d95" }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => onNavigate('onboarding')}
                        className="w-full sm:w-auto px-8 py-4 bg-indigo-600 text-stone-50 text-sm font-medium rounded-full shadow-sm hover:shadow transition-all duration-200 text-center"
                    >
                        Inizia l'Onboarding
                    </motion.button>

                    <motion.a
                        href="#servizi"
                        whileHover={{ y: -2, borderColor: "#d6d3d1" }}
                        className="w-full sm:w-auto px-8 py-4 bg-white text-stone-600 border border-stone-200 text-sm font-medium rounded-full hover:text-stone-900 transition-all duration-200 text-center"
                    >
                        Scopri i Pacchetti
                    </motion.a>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;