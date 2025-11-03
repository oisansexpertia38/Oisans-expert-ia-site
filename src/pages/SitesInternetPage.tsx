import React from 'react';
import { PAGES_DATA, PRICING_DATA } from '../constants.ts';
import CtaButton from '../components/CtaButton.tsx';
import PricingCard from '../components/PricingCard.tsx';
import SeoMeta from '../components/SeoMeta.tsx';

const CheckIcon = () => (
    <svg className="w-8 h-8 text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
);

const SitesInternetPage: React.FC = () => {
    const pageData = PAGES_DATA.sites_internet;
    const pricingData = PRICING_DATA.sites_internet;
    
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
          "name": "Solutions",
          "item": "https://www.oisans-expert-ia.fr/#/solutions"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Création de Sites Internet",
          "item": "https://www.oisans-expert-ia.fr/#/sites-internet"
        }
      ]
    };

    return (
        <div>
            <SeoMeta 
                title={pageData.meta.title}
                description={pageData.meta.description}
                canonical="https://www.oisans-expert-ia.fr/#/sites-internet"
                schema={schema}
            />
            {/* Hero Section */}
            <section className="relative text-white py-20 sm:py-28 overflow-hidden">
                 <div 
                    className="absolute inset-0 bg-cover bg-center z-0" 
                    style={{ backgroundImage: "url(https://images.unsplash.com/photo-1534237682392-832fe9b9359a?q=80&w=1920&auto=format&fit=crop)" }}
                    aria-hidden="true"
                ></div>
                <div className="absolute inset-0 bg-secondary/80 z-0" aria-hidden="true"></div>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <h1 className="text-4xl md:text-5xl font-bold font-heading">{pageData.title}</h1>
                    <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-neutralLight/90">Des sites web performants, sécurisés et optimisés pour les entreprises locales.</p>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-16 sm:py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl md:text-4xl font-bold font-heading text-center text-secondary mb-12">Votre vitrine digitale, conçue pour convertir</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12 max-w-6xl mx-auto">
                        {pageData.benefits?.map((benefit, index) => (
                            <div key={index} className="flex items-start">
                                <CheckIcon />
                                <div className="ml-4">
                                    <p className="text-lg font-semibold text-neutralDark">{benefit}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Packs Section */}
            <section className="py-16 sm:py-20 bg-neutralLight">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl md:text-4xl font-bold font-heading text-center text-secondary mb-4">Nos offres de création de site web</h2>
                    <p className="text-center text-lg text-neutralDark/80 mb-12">À partir de {pricingData.starting_from}€, hébergement et maintenance inclus.</p>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {pricingData.packs?.map(pack => (
                            <PricingCard key={pack.name} item={pack} type="pack" ctaLabel="Obtenir un devis" ctaHref="/contact" />
                        ))}
                    </div>
                </div>
            </section>
            
            {/* CTA Section */}
            <section className="bg-primary py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                    <h2 className="text-3xl font-bold font-heading">Donnez vie à votre projet web</h2>
                    <p className="mt-4 text-lg max-w-2xl mx-auto">Discutons de vos objectifs et créons ensemble le site internet qui vous ressemble.</p>
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

export default SitesInternetPage;