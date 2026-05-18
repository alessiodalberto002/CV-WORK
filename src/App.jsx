import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Service from './components/Service';
import CTASection from './components/CTASection';
import Onboarding from './components/Onboarding';
import Method from './components/Method';

export default function App() {
    const [currentPage, setCurrentPage] = useState('home'); // 'home' | 'onboarding'
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        nome: '', citta: '', telefono: '', linkedin: '', portfolio: '',
        ruolo: '', settore: '', annunci: '', progettoFiero: '', metriche: '',
        differenziatore: '', tool: '', lingue: '', certificazioni: '',
        note: '', infoNascoste: ''
    });

    const navigateTo = (page) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: 'instant' });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Dati Ricevuti:", formData);
        setFormSubmitted(true);
    };

    const handleResetAndHome = () => {
        setFormSubmitted(false);
        setFormData({
            nome: '', citta: '', telefono: '', linkedin: '', portfolio: '',
            ruolo: '', settore: '', annunci: '', progettoFiero: '', metriche: '',
            differenziatore: '', tool: '', lingue: '', certificazioni: '',
            note: '', infoNascoste: ''
        });
        navigateTo('home');
    };

    const pageVariants = {
        initial: { opacity: 0, y: 10 },
        animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
        exit: { opacity: 0, y: -10, transition: { duration: 0.25, ease: "easeIn" } }
    };

    return (
        <div className="min-h-screen font-sans bg-stone-50 text-stone-800 antialiased selection:bg-stone-200/60 overflow-x-hidden">
            <AnimatePresence mode="wait">
                
                {/* VISTA 1: HOME PAGE */}
                {currentPage === 'home' && (
                    <motion.div
                        key="home-page"
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        variants={pageVariants}
                    >
                        <Navbar onNavigate={navigateTo} />
                        <Hero onNavigate={navigateTo} />
                        <Service onNavigate={navigateTo} />
                        <Method onNavigate={navigateTo} />
                        <CTASection onNavigate={navigateTo} />
                        
                        {/* FOOTER EDITORIALE */}
                        <footer className="bg-white text-stone-500 py-12 border-t border-stone-200/60 text-xs font-light">
                            <div className="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
                                <p>© {new Date().getFullYear()} CVForge. Tutti i diritti riservati.</p>
                                <div className="flex space-x-6 text-stone-400">
                                    <a href="#" className="hover:text-stone-900 transition-colors">Privacy</a>
                                    <a href="#" className="hover:text-stone-900 transition-colors">Termini</a>
                                </div>
                            </div>
                        </footer>
                    </motion.div>
                )}

                {/* VISTA 2: PAGINA DI ONBOARDING */}
                {currentPage === 'onboarding' && (
                    <motion.div
                        key="onboarding-page"
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        variants={pageVariants}
                    >
                        <Onboarding 
                            formData={formData}
                            formSubmitted={formSubmitted}
                            handleInputChange={handleInputChange}
                            handleSubmit={handleSubmit}
                            handleResetAndHome={handleResetAndHome}
                            onNavigate={navigateTo}
                        />
                    </motion.div>
                )}
                
            </AnimatePresence>
        </div>
    );
}