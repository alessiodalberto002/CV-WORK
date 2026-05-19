import { motion, AnimatePresence } from 'framer-motion';

const Onboarding = ({
    formData,
    formSubmitted,
    handleInputChange,
    handleSubmit,
    handleResetAndHome,
    onNavigate
}) => {
    return (
        <div className="bg-stone-50 min-h-screen flex flex-col justify-between selection:bg-stone-200">
            {/* BARRA SUPERIORE MINIMALE */}
            <div className="w-full bg-white/80 backdrop-blur-md border-b border-stone-200/40 px-6 py-4 flex items-center justify-between z-50">
                <motion.button
                    whileHover={{ x: -2 }}
                    onClick={() => onNavigate('home')}
                    className=" inline-flex items-center space-x-2 text-xs font-medium text-stone-500 hover:text-stone-900 bg-stone-50 border border-stone-200 px-4 py-2 rounded-full shadow-sm transition-colors"
                >
                    <span>←</span> <span>Torna alla Home</span>
                </motion.button>
            </div>

            {/* CONTENUTO PRINCIPALE */}
            <div className="w-full flex-1 max-w-6xl mx-auto p-4 md:p-8">
                <AnimatePresence mode="wait">
                    {formSubmitted ? (
                        /* STATO SUCCESSO */
                        <motion.div
                            key="success-card"
                            initial={{ scale: 0.98, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="bg-white border border-stone-200 text-center p-8 md:py-20 rounded-[32px] space-y-6 shadow-sm max-w-xl mx-auto mt-12"
                        >
                            <span className="text-4xl block">🚀</span>
                            <div className="space-y-2">
                                <h3 className="text-2xl font-normal text-stone-900">Onboarding completato</h3>
                                <p className="text-sm text-stone-500 max-w-sm mx-auto leading-relaxed font-light">
                                    Abbiamo ricevuto tutti i tuoi dati. Il nostro team si è messo al lavoro sul tuo brand personale. Riceverai la prima bozza direttamente via email entro i prossimi 5 giorni lavorativi.
                                </p>
                            </div>
                            <motion.button
                                whileHover={{ y: -1 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={handleResetAndHome}
                                className="px-6 py-3 bg-stone-950 text-stone-50 text-xs font-medium rounded-full tracking-wider uppercase transition-colors"
                            >
                                Ritorna alla Home Principale
                            </motion.button>
                        </motion.div>
                    ) : (
                        /* IL FORM COMPLETO A DUE COLONNE */
                        <motion.div
                            key="form-layout"
                            className="bg-white border border-stone-200/80 shadow-sm rounded-[32px] overflow-hidden grid grid-cols-1 lg:grid-cols-12 min-h-[calc(100vh-12rem)]"
                        >
                            {/* COLONNA SINISTRA: Info ed estetica editoriale */}
                            <div className="lg:col-span-4 bg-stone-50/50 p-8 md:p-10 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-stone-200/60">
                                <div className="space-y-6">
                                    <div className="space-y-2">
                                        <span className="text-[10px] font-medium uppercase tracking-widest text-stone-400">Step Guidato</span>
                                        <h2 className="text-2xl font-normal tracking-tight text-stone-900 leading-tight">Configura il tuo nuovo profilo</h2>
                                    </div>
                                    <p className="text-sm text-stone-500 font-light leading-relaxed">
                                        Le risposte che inserirai in questo modulo verranno elaborate direttamente dal nostro team per strutturare testi, parole chiave ATS e grafica su misura.
                                    </p>

                                    <div className="space-y-3 pt-4 text-xs font-light text-stone-600">
                                        <div className="flex items-center gap-2">
                                            <span className="text-stone-400">✦</span> Ottimizzazione mirata per filtri ATS.
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="text-stone-400">✦</span> Bilanciamento layout pronto stampa.
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="text-stone-400">✦</span> Mappatura skill su annunci reali.
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-8 border-t border-stone-200/60 text-[11px] text-stone-400 font-light leading-relaxed">
                                    Tempo stimato di compilazione: ~10 minuti. I tuoi dati sono protetti e trattati solo per la creazione del documento.
                                </div>
                            </div>

                            {/* COLONNA DESTRA: Modulo di Input con tutti i campi */}
                            <div className="lg:col-span-8 p-8 md:p-10 bg-white">
                                <form onSubmit={handleSubmit} className="space-y-12 text-sm max-w-2xl mx-auto">

                                    {/* SEZIONE 1: ANAGRAFICA */}
                                    <div className="space-y-4">
                                        <h3 className="text-xs font-medium text-stone-400 uppercase tracking-widest pb-1 border-b border-stone-100">1. Identità e Reperibilità</h3>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <div className="space-y-1">
                                                <label htmlFor="nome" className="text-xs font-medium text-stone-600">Nome e Cognome *</label>
                                                <input type="text" id="nome" name="nome" required value={formData.nome} onChange={handleInputChange} className="w-full border border-stone-200 rounded-xl px-4 py-2.5 text-stone-800 focus:border-stone-900 outline-none transition-colors font-light text-sm" />
                                            </div>
                                            <div className="space-y-1">
                                                <label htmlFor="citta" className="text-xs font-medium text-stone-600">Città di Residenza *</label>
                                                <input type="text" id="citta" name="citta" placeholder="Es. Roma" required value={formData.citta} onChange={handleInputChange} className="w-full border border-stone-200 rounded-xl px-4 py-2.5 text-stone-800 focus:border-stone-900 outline-none transition-colors font-light text-sm" />
                                            </div>
                                            <div className="sm:col-span-2 space-y-1">
                                                <label htmlFor="telefono" className="text-xs font-medium text-stone-600">Recapito Telefonico *</label>
                                                <input type="tel" id="telefono" name="telefono" required value={formData.telefono} onChange={handleInputChange} className="w-full border border-stone-200 rounded-xl px-4 py-2.5 text-stone-800 focus:border-stone-900 outline-none transition-colors font-light text-sm" />
                                            </div>
                                            <div className="space-y-1">
                                                <label htmlFor="linkedin" className="text-xs font-medium text-stone-600">Profilo LinkedIn (URL)</label>
                                                <input type="url" id="linkedin" name="linkedin" placeholder="https://linkedin.com/in/..." value={formData.linkedin} onChange={handleInputChange} className="w-full border border-stone-200 rounded-xl px-4 py-2.5 text-stone-800 focus:border-stone-900 outline-none transition-colors font-light text-sm" />
                                            </div>
                                            <div className="space-y-1">
                                                <label htmlFor="portfolio" className="text-xs font-medium text-stone-600">Sito Web / Portfolio (URL)</label>
                                                <input type="url" id="portfolio" name="portfolio" placeholder="https://..." value={formData.portfolio} onChange={handleInputChange} className="w-full border border-stone-200 rounded-xl px-4 py-2.5 text-stone-800 focus:border-stone-900 outline-none transition-colors font-light text-sm" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* SEZIONE 2: OBIETTIVO */}
                                    <div className="space-y-4">
                                        <h3 className="text-xs font-medium text-stone-400 uppercase tracking-widest pb-1 border-b border-stone-100">2. Obiettivo e Keyword Target</h3>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <div className="space-y-1">
                                                <label htmlFor="ruolo" className="text-xs font-medium text-stone-600">Qualifica Esatta Desiderata *</label>
                                                <input type="text" id="ruolo" name="ruolo" placeholder="Es. Senior UX Designer" required value={formData.ruolo} onChange={handleInputChange} className="w-full border border-stone-200 rounded-xl px-4 py-2.5 text-stone-800 focus:border-stone-900 outline-none transition-colors font-light text-sm" />
                                            </div>
                                            <div className="space-y-1">
                                                <label htmlFor="settore" className="text-xs font-medium text-stone-600">Settore Industriale Target *</label>
                                                <input type="text" id="settore" name="settore" placeholder="Es. FinTech, E-commerce" required value={formData.settore} onChange={handleInputChange} className="w-full border border-stone-200 rounded-xl px-4 py-2.5 text-stone-800 focus:border-stone-900 outline-none transition-colors font-light text-sm" />
                                            </div>
                                        </div>
                                        <div className="space-y-1">
                                            <label htmlFor="annunci" className="text-xs font-medium text-stone-600">Incolla qui 2 o 3 link (o testi) di annunci di lavoro d'interesse *</label>
                                            <textarea id="annunci" name="annunci" rows="3" required value={formData.annunci} onChange={handleInputChange} placeholder="Ci servono per estrarre chirurgicamente le keyword richieste dai selezionatori." className="w-full border border-stone-200 rounded-xl px-4 py-2.5 text-stone-800 focus:border-stone-900 outline-none transition-colors font-light text-sm resize-none" />
                                        </div>
                                    </div>

                                    {/* SEZIONE 3: VALORE E IMPATTO */}
                                    <div className="space-y-4">
                                        <h3 className="text-xs font-medium text-stone-400 uppercase tracking-widest pb-1 border-b border-stone-100">3. Esperienze Rilevanti & Impatto</h3>
                                        <div className="space-y-4">
                                            <div className="space-y-1">
                                                <label htmlFor="progettoFiero" className="text-xs font-medium text-stone-600">Descrivi un traguardo o un progetto lavorativo di cui vai fiero/a *</label>
                                                <textarea id="progettoFiero" name="progettoFiero" rows="3" required value={formData.progettoFiero} onChange={handleInputChange} placeholder="Cosa hai fatto, come lo hai fatto e qual è stato il tuo ruolo..." className="w-full border border-stone-200 rounded-xl px-4 py-2.5 text-stone-800 focus:border-stone-900 outline-none transition-colors font-light text-sm resize-none" />
                                            </div>
                                            <div className="space-y-1">
                                                <label htmlFor="metriche" className="text-xs font-medium text-stone-600">Riesci ad aggiungere dati numerici o metriche di successo passate?</label>
                                                <textarea id="metriche" name="metriche" rows="2" value={formData.metriche} onChange={handleInputChange} placeholder="Es. Incremento vendite del 20%, gestione budget di 50k, coordinamento di 4 persone." className="w-full border border-stone-200 rounded-xl px-4 py-2.5 text-stone-800 focus:border-stone-900 outline-none transition-colors font-light text-sm resize-none" />
                                            </div>
                                            <div className="space-y-1">
                                                <label htmlFor="differenziatore" className="text-xs font-medium text-stone-600">Qual è il tuo differenziatore unico? Perché un'azienda dovrebbe scegliere te?</label>
                                                <textarea id="differenziatore" name="differenziatore" rows="2" value={formData.differenziatore} onChange={handleInputChange} placeholder="La tua combinazione unica di skill, approccio metodologico o background." className="w-full border border-stone-200 rounded-xl px-4 py-2.5 text-stone-800 focus:border-stone-900 outline-none transition-colors font-light text-sm resize-none" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* SEZIONE 4: SKILL E COMPETENZE */}
                                    <div className="space-y-4">
                                        <h3 className="text-xs font-medium text-stone-400 uppercase tracking-widest pb-1 border-b border-stone-100">4. Competenze, Lingue & Certificazioni</h3>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <div className="space-y-1">
                                                <label htmlFor="tool" className="text-xs font-medium text-stone-600">Software o tool che usi quotidianamente *</label>
                                                <input type="text" id="tool" name="tool" placeholder="Es. Excel, Figma, Jira" required value={formData.tool} onChange={handleInputChange} className="w-full border border-stone-200 rounded-xl px-4 py-2.5 text-stone-800 focus:border-stone-900 outline-none transition-colors font-light text-sm" />
                                            </div>
                                            <div className="space-y-1">
                                                <label htmlFor="lingue" className="text-xs font-medium text-stone-600">Lingue conosciute e livello *</label>
                                                <input type="text" id="lingue" name="lingue" placeholder="Es. Inglese (C1), Spagnolo (B2)" required value={formData.lingue} onChange={handleInputChange} className="w-full border border-stone-200 rounded-xl px-4 py-2.5 text-stone-800 focus:border-stone-900 outline-none transition-colors font-light text-sm" />
                                            </div>
                                            <div className="sm:col-span-2 space-y-1">
                                                <label htmlFor="certificazioni" className="text-xs font-medium text-stone-600">Certificazioni professionali rilevanti</label>
                                                <input type="text" id="certificazioni" name="certificazioni" placeholder="Es. Scrum Master, AWS Certified, Google Analytics" value={formData.certificazioni} onChange={handleInputChange} className="w-full border border-stone-200 rounded-xl px-4 py-2.5 text-stone-800 focus:border-stone-900 outline-none transition-colors font-light text-sm" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* SEZIONE 5: NOTE ED ESCLUSIONI */}
                                    <div className="space-y-4">
                                        <h3 className="text-xs font-medium text-stone-400 uppercase tracking-widest pb-1 border-b border-stone-100">5. Note Particolari & Esclusioni</h3>
                                        <div className="space-y-4">
                                            <div className="space-y-1">
                                                <label htmlFor="infoNascoste" className="text-xs font-medium text-stone-600">Ci sono mansioni o vecchie esperienze che NON desideri inserire?</label>
                                                <input type="text" id="infoNascoste" name="infoNascoste" placeholder="Es. Esperienze extra-settore superate, stage datati..." value={formData.infoNascoste} onChange={handleInputChange} className="w-full border border-stone-200 rounded-xl px-4 py-2.5 text-stone-800 focus:border-stone-900 outline-none transition-colors font-light text-sm" />
                                            </div>
                                            <div className="space-y-1">
                                                <label htmlFor="note" className="text-xs font-medium text-stone-600">Note aggiuntive o richieste particolari per il team</label>
                                                <textarea id="note" name="note" rows="2" value={formData.note} onChange={handleInputChange} placeholder="Qualsiasi altra informazione o preferenza stilistica/strategica..." className="w-full border border-stone-200 rounded-xl px-4 py-2.5 text-stone-800 focus:border-stone-900 outline-none transition-colors font-light text-sm resize-none" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* FILE UPLOAD DRAG-AND-DROP SIMULATO */}
                                    <div className="border border-dashed border-stone-200 bg-stone-50/50 p-6 rounded-2xl text-center space-y-1 cursor-pointer hover:bg-stone-100/50 hover:border-stone-300 transition-colors">
                                        <span className="text-xl block">📂</span>
                                        <p className="text-xs font-medium text-stone-700">Trascina qui il tuo vecchio CV, se disponibile</p>
                                        <p className="text-[10px] text-stone-400 font-light">Accetta file PDF o DOCX fino a 10MB (Opzionale)</p>
                                    </div>

                                    {/* BOTTONE DI INVIO */}
                                    <motion.button
                                        whileTap={{ scale: 0.99 }}
                                        type="submit"
                                        className="w-full py-4 bg-stone-950 hover:bg-indigo-600 text-stone-50 font-medium rounded-xl text-xs tracking-wider uppercase shadow-sm transition-colors"
                                    >
                                        Salva ed Invia i Dati di Onboarding
                                    </motion.button>
                                </form>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* FOOTER DEL MODULO */}
            <footer className="bg-stone-50 text-stone-400 py-6 text-center text-[11px] font-light border-t border-stone-200/40">
                <p>© {new Date().getFullYear()} CVForge. Personal Branding d'Élite.</p>
            </footer>
        </div>
    );
};

export default Onboarding;