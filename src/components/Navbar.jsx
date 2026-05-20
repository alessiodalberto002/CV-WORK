import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = ({ onNavigate }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* NAVBAR PRINCIPALE */}
            <header className="fixed w-full top-0 z-50 bg-stone-50/70 backdrop-blur-md  transition-all duration-300">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
                    {/* Logo minimale in linea con lo stile Stone */}
                    <a href="#" className="text-lg font-medium tracking-tight text-stone-900 transition-opacity hover:opacity-80">
                        CV<span className="font-light text-stone-500">Forge</span>
                    </a>

                    {/* Navigazione Desktop & Mobile Action */}
                    <nav className="flex items-center gap-6 text-sm font-medium">
                        {/* Link Desktop con micro-animazione sottile */}
                        <a href="#portfolio" className="hidden md:inline text-stone-500 hover:text-indigo-600 transition-colors relative py-1 group">
                            Portfolio
                            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-indigo-600 transition-all group-hover:w-full" />
                        </a>
                        <a href="#servizi" className="hidden md:inline text-stone-500 hover:text-indigo-600 transition-colors relative py-1 group">
                            Servizi
                            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-indigo-600 transition-all group-hover:w-full" />
                        </a>
                        <a href="#testimonials" className="hidden md:inline text-stone-500 hover:text-indigo-600 transition-colors relative py-1 group">
                            Testimonianze
                            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-indigo-600 transition-all group-hover:w-full" />
                        </a>
                        <a href="#metodo" className="hidden md:inline text-stone-500 hover:text-indigo-600 transition-colors relative py-1 group">
                            Metodo
                            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-indigo-600 transition-all group-hover:w-full" />
                        </a>

                        {/* Pulsante Principale (Riprende il bottone scuro dell'Hero) */}
                        <motion.button
                            whileHover={{ y: -1, bg: "#1c1917" }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => onNavigate('onboarding')}
                            className="bg-indigo-600 text-stone-50 px-4 py-2 text-xs sm:text-sm font-medium rounded-full shadow-sm transition-colors"
                        >
                            Crea il tuo CV
                        </motion.button>

                        {/* Trigger Menu Mobile (Solo su schermi piccoli) */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="flex md:hidden flex-col gap-1.5 p-2 justify-center items-center w-8 h-8 rounded-full hover:bg-stone-200/50 transition-colors"
                            aria-label="Toggle menu"
                        >
                            <span className={`h-[1px] w-5 bg-stone-900 transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-1' : ''}`} />
                            <span className={`h-[1px] w-5 bg-stone-900 transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-1' : ''}`} />
                        </button>
                    </nav>
                </div>
            </header>

            {/* SORPRESA: Floating Mobile Menu (AnimatePresence gestisce lo smontaggio fluido) */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Overlay di sfondo soft */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 z-40 bg-stone-950/20 backdrop-blur-sm md:hidden"
                        />

                        {/* Il Menu Sospeso */}
                        <motion.div
                            initial={{ opacity: 0, y: 20, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 20, scale: 0.95 }}
                            transition={{ type: "spring", duration: 0.4 }}
                            className="fixed bottom-6 inset-x-4 z-50 p-4 bg-white/95 border border-stone-200 shadow-xl rounded-3xl md:hidden flex flex-col gap-3 backdrop-blur-lg"
                        >
                            <a
                                href="#portfolio"
                                onClick={() => setIsOpen(false)}
                                className="w-full text-center py-3 text-stone-600 hover:text-stone-900 hover:bg-stone-50 rounded-xl transition-colors font-medium"
                            >
                                Portfolio
                            </a>
                            <a
                                href="#servizi"
                                onClick={() => setIsOpen(false)}
                                className="w-full text-center py-3 text-stone-600 hover:text-stone-900 hover:bg-stone-50 rounded-xl transition-colors font-medium"
                            >
                                Servizi
                            </a>
                            <a
                                href="#testimonials"
                                onClick={() => setIsOpen(false)}
                                className="w-full text-center py-3 text-stone-600 hover:text-stone-900 hover:bg-stone-50 rounded-xl transition-colors font-medium"
                            >
                                Testimonianze
                            </a>
                            <a
                                href="#metodo"
                                onClick={() => setIsOpen(false)}
                                className="w-full text-center py-3 text-stone-600 hover:text-stone-900 hover:bg-stone-50 rounded-xl transition-colors font-medium"
                            >
                                Metodo
                            </a>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;