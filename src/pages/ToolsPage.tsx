import React from 'react';
import NameGenerator from '../components/NameGenerator.tsx';
import CtaButton from '../components/CtaButton.tsx';
import SeoMeta from '../components/SeoMeta.tsx';
import { PAGES_DATA } from '../constants.ts';

const ToolsPage: React.FC = () => {
    const pageMeta = PAGES_DATA.outils.meta;

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
          "name": "Outils IA",
          "item": "https://www.oisans-expert-ia.fr/#/outils"
        }
      ]
    };

    return (
        <div className="bg-neutralLight">
            <SeoMeta 
                title={pageMeta.title}
                description={pageMeta.description}
                canonical="https://www.oisans-expert-ia.fr/#/outils"
                schema={schema}
            />
            {/* Hero Section */}
            <section className="relative text-white py-20 sm:py-28 overflow-hidden">
                <div 
                    className="absolute inset-0 bg-cover bg-center z-0" 
                    style={{ backgroundImage: "url(https://images.unsplash.com/photo-1611117775350-ac3972960895?q=80&w=1920&auto=format&fit=crop)" }}
                    aria-hidden="true"
                ></div>
                <div className="absolute inset-0 bg-black/60 z-0" aria-hidden="true"></div>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <h1 className="text-4xl md:text-5xl font-bold font-heading text-white">Nos Outils IA</h1>
                    <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-neutralLight/90">Testez la puissance de l'IA avec nos outils gratuits, conçus pour vous inspirer et vous aider au quotidien.</p>
                </div>
            </section>

            {/* Name Generator Section */}
            <section className="py-16 sm:py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <NameGenerator />
                </div>
            </section>
            
            {/* CTA Section */}
            <section className="bg-secondary py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                    <h2 className="text-3xl font-bold font-heading">Ceci n'est qu'un aperçu.</h2>
                    <p className="mt-4 text-lg max-w-2xl mx-auto text-neutralLight/90">Imaginez ce que des outils IA sur mesure pourraient faire pour votre entreprise. Parlons-en.</p>
                    <div className="mt-8">
                        <CtaButton href="/contact">Découvrir nos solutions sur mesure</CtaButton>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ToolsPage;