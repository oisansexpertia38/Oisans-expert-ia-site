import React from 'react';
import { PAGES_DATA, PRICING_DATA } from '../constants.ts';
import CtaButton from '../components/CtaButton.tsx';
import PricingCard from '../components/PricingCard.tsx';

const FormationsPage: React.FC = () => {
    const pageData = PAGES_DATA.formations_ia;
    const pricingData = PRICING_DATA.formations;
    
    // Map formation names to anchor IDs
    const formationAnchors: { [key: string]: string } = {
        "Découverte (4h)": "decouverte",
        "Avancée (7h)": "avancee",
        "Expert (10h)": "expert",
    };

    return (
        <div>
            {/* Hero Section */}
            <section className="relative text-white py-20 sm:py-28 overflow-hidden">
                <div 
                    className="absolute inset-0 bg-cover bg-center z-0" 
                    style={{ backgroundImage: "url(https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1920&auto=format&fit=crop)" }}
                    aria-hidden="true"
                ></div>
                <div className="absolute inset-0 bg-secondary/80 z-0" aria-hidden="true"></div>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <h1 className="text-4xl md:text-5xl font-bold font-heading">{pageData.title}</h1>
                    <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-neutralLight/90">{pageData.intro}</p>
                </div>
            </section>

            {/* Formats Section */}
            <section className="py-16 sm:py-20 bg-neutralLight">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl md:text-4xl font-bold font-heading text-center text-secondary mb-4">Nos formats de formation</h2>
                    <p className="text-center text-lg text-neutralDark/80 mb-12">À partir de {pricingData.starting_from}€ par personne.</p>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {pricingData.formats?.map(format => (
                            <PricingCard 
                                key={format.name} 
                                item={format} 
                                type="format" 
                                ctaLabel="Voir le programme" 
                                ctaHref={`/formations-ia/programme#${formationAnchors[format.name] || ''}`} 
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Topics Section */}
            <section className="py-16 sm:py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl md:text-4xl font-bold font-heading text-center text-secondary mb-12">Au programme de nos formations</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {pageData.topics?.map((topic, index) => (
                            <div key={index} className="bg-neutralLight p-8 rounded-2xl shadow-sm border border-highlight/50">
                                <h3 className="font-heading text-xl font-bold text-secondary mb-4">{topic.title}</h3>
                                <ul className="space-y-3">
                                    {topic.points.map((point, i) => (
                                        <li key={i} className="flex items-start">
                                            <svg className="w-5 h-5 text-accent flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                            <span className="ml-3 text-neutralDark/90">{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Options Section */}
            <section className="bg-neutralLight py-16 sm:py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                     <h2 className="text-3xl md:text-4xl font-bold font-heading text-center text-secondary mb-12">Options et avantages</h2>
                     <div className="max-w-3xl mx-auto space-y-4">
                        <div className="bg-white p-6 rounded-lg shadow-sm border border-accent">
                            <p className="font-semibold text-accent-dark text-center">Bundle Formation + Automatisation : -15% sur votre projet d'automatisation.</p>
                        </div>
                         <div className="bg-white p-6 rounded-lg shadow-sm border border-primary">
                            <p className="font-semibold text-secondary text-center">Paiement en 3x sans frais possible pour toutes nos formations.</p>
                        </div>
                     </div>
                </div>
            </section>
            
            {/* CTA Section */}
            <section className="bg-accent py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                    <h2 className="text-3xl font-bold font-heading">Montez en compétence sur l'IA</h2>
                    <p className="mt-4 text-lg max-w-2xl mx-auto">Contactez-nous pour un programme de formation sur mesure, adapté aux défis de votre secteur.</p>
                    {pageData.cta && (
                        <div className="mt-8">
                            <CtaButton href={pageData.cta.href} variant="secondary">{pageData.cta.label}</CtaButton>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default FormationsPage;