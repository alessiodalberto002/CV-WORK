import { motion } from 'framer-motion';

const Method = () => {
    const steps = [
        {
            number: "01",
            title: "Analisi Strategica & ATS",
            description: "Analizziamo i link dei tuoi annunci target. Estraiamo le parole chiave fondamentali e le hard skill richieste dagli algoritmi di selezione."
        },
        {
            number: "02",
            title: "Copywriting Editoriale",
            description: "Riscriviamo la tua storia professionale eliminando i testi generici. Trasformiamo le tue mansioni in traguardi quantificabili."
        },
        {
            number: "03",
            title: "Design Sincrono",
            description: "Progettiamo un'architettura visiva coordinata: layout per la stampa fisica e vetrina web con lo stesso DNA stilistico."
        }
    ];

    return (
        <section id="metodo" className="min-h-screen flex justify-center items-center bg-white">
            <div className="max-w-4xl mx-auto px-6">

                {/* Header d'impatto */}
                <div className="mb-12">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400">Processo Operativo</span>
                    <h2 className="text-4xl md:text-5xl font-medium text-indigo-600 mt-4 tracking-tight">Il nostro metodo <br /> ingegnerizzato.</h2>
                </div>

                {/* Timeline Verticale */}
                <div className="space-y-12 relative">
                    {/* Linea di connessione */}
                    <div className="absolute left-[30px] top-4 bottom-4 w-px bg-stone-200 hidden md:block" />

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="relative flex gap-8 md:gap-12 group"
                        >
                            {/* Marker con numero */}
                            <div className="relative z-10 flex-shrink-0 w-16 h-16 rounded-full bg-stone-950 flex items-center justify-center text-white font-medium text-lg shadow-xl shadow-stone-200 group-hover:bg-indigo-600 transition-colors duration-500">
                                {step.number}
                            </div>

                            {/* Contenuto */}
                            <div className="pt-2 pb-8 md:pb-16 border-b border-stone-100 last:border-0 w-full">
                                <h3 className="text-2xl font-normal text-stone-900 mb-4">{step.title}</h3>
                                <p className="text-stone-500 font-light leading-relaxed max-w-lg">{step.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Method;