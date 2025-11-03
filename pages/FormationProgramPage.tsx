import React from 'react';
import { PAGES_DATA } from '../constants.ts';
import CtaButton from '../components/CtaButton.tsx';
import type { FormationProgramData } from '../types.ts';

const InfoIcon: React.FC<{ path: string }> = ({ path }) => (
    <svg className="w-6 h-6 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d={path} />
    </svg>
);

const CheckIcon = () => (
    <svg className="w-5 h-5 text-accent flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
);

const ProgramSection: React.FC<{ program: FormationProgramData, isFirst: boolean }> = ({ program, isFirst }) => (
    <section id={program.id} className={`py-16 sm:py-20 ${isFirst ? 'pt-0' : ''}`}>
        <div className="lg:grid lg:grid-cols-3 lg:gap-12 items-start">
            {/* Main Content: Modules */}
            <div className="lg:col-span-2">
                <h2 className="text-4xl font-bold font-heading text-secondary">{program.title}</h2>
                <p className="mt-4 text-lg text-neutralDark/80">{program.intro}</p>
                <div className="space-y-8 mt-8">
                    {program.modules.map((module, index) => (
                        <div key={index} className="bg-white p-6 rounded-xl shadow-md border-l-4 border-primary">
                            <span className="bg-primary/10 text-primary font-bold py-1 px-3 rounded-full text-sm">Module {index + 1}</span>
                            <h3 className="text-2xl font-bold font-heading text-secondary mt-3">{module.title}</h3>
                            <p className="mt-2 text-neutralDark/80">{module.description}</p>
                            <ul className="mt-4 space-y-2">
                                {module.topics.map((topic, i) => (
                                    <li key={i} className="flex items-start">
                                        <CheckIcon />
                                        <span className="ml-3 text-neutralDark/90">{topic}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            {/* Sidebar */}
            <aside className="mt-12 lg:mt-0">
                <div className="sticky top-28 space-y-6">
                    <div className="bg-white p-6 rounded-xl shadow-lg border border-highlight/50">
                        <h3 className="text-xl font-bold font-heading text-secondary mb-4">En bref</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <InfoIcon path="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                <div className="ml-3">
                                    <p className="font-semibold text-neutralDark">Durée</p>
                                    <p className="text-neutralDark/80">{program.duration}</p>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <InfoIcon path="M17 20h5.414a1 1 0 00.707-1.707l-3.75-3.75a1 1 0 00-1.414 0l-3.75 3.75a1 1 0 00.707 1.707H17zM5 10a5 5 0 1110 0 5 5 0 01-10 0z" />
                                <div className="ml-3">
                                    <p className="font-semibold text-neutralDark">Public Cible</p>
                                    <p className="text-neutralDark/80">{program.targetAudience}</p>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <InfoIcon path="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                <div className="ml-3">
                                    <p className="font-semibold text-neutralDark">Prérequis</p>
                                    <p className="text-neutralDark/80">{program.prerequisites}</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="text-center">
                        <CtaButton href={program.cta.href} className="w-full">{program.cta.label}</CtaButton>
                    </div>
                </div>
            </aside>
        </div>
    </section>
);


const FormationProgramPage: React.FC = () => {
    const pageData = PAGES_DATA.formation_programs;

    return (
        <div className="bg-white">
             <section className="relative text-white py-20 sm:py-28 overflow-hidden">
                <div 
                    className="absolute inset-0 bg-cover bg-center z-0" 
                    style={{ backgroundImage: "url(https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1920&auto=format&fit=crop)" }}
                    aria-hidden="true"
                ></div>
                <div className="absolute inset-0 bg-secondary/80 z-0" aria-hidden="true"></div>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <h1 className="text-4xl md:text-5xl font-bold font-heading">Nos Programmes de Formation IA</h1>
                    <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-neutralLight/90">Un parcours complet pour maîtriser l'IA, de la découverte à l'expertise.</p>
                </div>
            </section>
            
            <div className="bg-neutralLight">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 divide-y-2 divide-highlight">
                    {pageData.map((program, index) => (
                       <ProgramSection key={program.id} program={program} isFirst={index === 0} />
                    ))}
                </div>
            </div>

            <section className="bg-secondary py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                    <h2 className="text-3xl font-bold font-heading">Prêt à monter en compétence ?</h2>
                    <p className="mt-4 text-lg max-w-2xl mx-auto text-neutralLight/90">Contactez-nous pour organiser une session pour vous ou votre équipe.</p>
                    <div className="mt-8">
                        <CtaButton href="/contact">Demander un devis personnalisé</CtaButton>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FormationProgramPage;