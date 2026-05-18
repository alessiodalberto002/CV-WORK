import { motion } from 'framer-motion';

const Method = () => {
    // Configurazione dell'animazione a cascata (Stagger)
    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.1 }
        }
    };

    const stepVariants = {
        hidden: { opacity: 0, y: 15 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
    };

    const steps = [
        {
            number: "01",
            title: "Analisi Strategica & ATS",
            description: "Analizziamo i link dei tuoi annunci target. Estraiamo le parole chiave fondamentali e le hard skill richieste dagli algoritmi di selezione per assicurarci che il tuo profilo passi i primi filtri automatici."
        },
        {
            number: "02",
            title: "Copywriting Editoriale",
            description: "Riscriviamo la tua storia professionale eliminando i testi generici. Trasformiamo le tue mansioni passate in traguardi quantificabili, arricchiti da metriche d'impatto e dati numerici reali."
        },
        {
            number: "03",
            title: "Design Sincrono",
            description: "Progettiamo un'architettura visiva coordinata. Creiamo un layout tipografico perfetto per la stampa fisica e, contemporaneamente, sviluppiamo la tua vetrina web interattiva con lo stesso DNA stilistico."
        }
    ];

    return (
        <section id="metodo" className="py-24 sm:py-32 bg-white border-t border-stone-200/60">
            <div className="max-w-4xl mx-auto px-6 sm:px-8">

                {/* Intestazione Sezione */}
                <div className="max-w-2xl mb-20 space-y-4">
                    <span className="text-xs font-medium tracking-widest text-stone-400 uppercase">
                        Il Nostro Approccio
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-normal tracking-tight text-stone-900 leading-tight">
                        Un metodo ingegnerizzato, <br />
                        dalla strategia al codice.
                    </h2>
                    <p className="text-base text-stone-500 font-light max-w-xl">
                        Non compiliamo modelli predefiniti. Costruiamo un ecosistema digitale sartoriale per posizionarti come la scelta più autorevole nel tuo settore.
                    </p>
                </div>

                {/* Lista dei Passaggi (Timeline Asimmetrica) */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 relative"
                >
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            variants={stepVariants}
                            className="relative bg-stone-50/50 border border-stone-200/60 rounded-[24px] p-8 flex flex-col justify-between overflow-hidden group hover:bg-stone-50 transition-colors duration-300"
                        >
                            {/* Numero Gigante sullo Sfondo (La Sorpresa Visiva) */}
                            <div className="absolute -top-6 -right-2 text-7xl font-light text-stone-200/40 select-none tracking-tighter group-hover:text-stone-200/70 transition-colors duration-300 font-mono">
                                {step.number}
                            </div>

                            <div className="space-y-4 relative z-10">
                                {/* Indicatore di progresso minimale */}
                                <div className="h-1 w-8 bg-stone-950/10 group-hover:bg-stone-950/80 transition-colors duration-300 rounded-full" />

                                <h3 className="text-lg font-normal text-stone-900 pt-2">
                                    {step.title}
                                </h3>
                                <p className="text-sm text-stone-500 font-light leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
};

export default Method;