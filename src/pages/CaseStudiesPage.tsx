import React from 'react';
import { CASE_STUDIES_DATA, PAGES_DATA } from '../constants.ts';
import CtaButton from '../components/CtaButton.tsx';
import SeoMeta from '../components/SeoMeta.tsx';

const CheckIcon = () => (
  <svg className="w-6 h-6 text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
  </svg>
);

const CaseStudiesPage: React.FC = () => {
    const pageMeta = PAGES_DATA.etudes_de_cas.meta;

    const schema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Accueil",
          "item": "https://www.oisans-expert-ia.fr/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Études de Cas",
          "item": "https://www.oisans-expert-ia.fr/#/etudes-de-cas"
        }
      ]
    };

    return (
        <div className="bg-neutralLight">
             <SeoMeta 
                title={pageMeta.title}
                description={pageMeta.description}
                canonical="https://www.oisans-expert-ia.fr/#/etudes-de-cas"
                schema={schema}
            />
            {/* Hero Section */}
            <section className="relative text-white py-20 sm:py-28 overflow-hidden">
                 <div 
                    className="absolute inset-0 bg-cover bg-center z-0" 
                    style={{ backgroundImage: "url(https://images.unsplash.com/photo-1454496522488-7a8e488e8606?q=80&w=1920&auto=format&fit=crop)" }}
                    aria-hidden="true"
                ></div>
                <div className="absolute inset-0 bg-secondary/80 z-0" aria-hidden="true"></div>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <h1 className="text-4xl md:text-5xl font-bold font-heading">Nos Études de Cas</h1>
                    <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-neutralLight/90">Des problèmes concrets, des solutions IA sur mesure, des résultats mesurables.</p>
                </div>
            </section>

            {/* Case Studies List */}
            <section className="py-16 sm:py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="space-y-20">
                        {CASE_STUDIES_DATA.map((study, index) => (
                            <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                                    {study.imageUrl && (
                                        <img src={study.imageUrl} alt={`Image illustrant l'étude de cas pour ${study.client}`} className="rounded-2xl shadow-lg w-full h-auto object-cover aspect-video" loading="lazy" />
                                    )}
                                </div>
                                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                                    <p className="font-bold text-primary text-lg">{study.client}</p>
                                    <h2 className="text-3xl font-bold font-heading text-secondary mt-2 mb-6">{study.title}</h2>
                                    
                                    <div className="space-y-4">
                                        <div>
                                            <h3 className="font-semibold text-secondary mb-1">Le Défi</h3>
                                            <p className="text-neutralDark/80">{study.challenge}</p>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-secondary mb-1">La Solution IA</h3>
                                            <p className="text-neutralDark/80">{study.solution}</p>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-secondary mb-1">Les Résultats</h3>
                                            <ul className="mt-2 space-y-2">
                                                {study.results.map((result, i) => (
                                                    <li key={i} className="flex items-start">
                                                        <CheckIcon />
                                                        <span className="ml-3 text-neutralDark">{result}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

             {/* CTA Section */}
            <section className="bg-white py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold font-heading text-secondary">Votre entreprise pourrait être notre prochain succès.</h2>
                    <p className="mt-4 text-lg max-w-2xl mx-auto text-neutralDark/80">Discutons de vos défis et explorons ensemble comment l'IA peut vous aider à les surmonter.</p>
                    <div className="mt-8">
                        <CtaButton href="/contact">Demander une consultation gratuite</CtaButton>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CaseStudiesPage;