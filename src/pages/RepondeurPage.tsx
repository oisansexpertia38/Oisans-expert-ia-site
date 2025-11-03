import React from 'react';
import { PAGES_DATA, PRICING_DATA, RECORDINGS_DATA } from '../constants.ts';
import CtaButton from '../components/CtaButton.tsx';
import PricingCard from '../components/PricingCard.tsx';
import SeoMeta from '../components/SeoMeta.tsx';

const CheckIcon = () => (
    <svg className="w-6 h-6 text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
);

const DownloadIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
    </svg>
);

const PhoneIconMini = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-neutralDark/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
);

const ClockIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-neutralDark/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);


const RepondeurPage: React.FC = () => {
    const pageData = PAGES_DATA.repondeur_ia;
    const pricingData = PRICING_DATA.repondeur_ia;
    
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
          "name": "Répondeur IA",
          "item": "https://www.oisans-expert-ia.fr/#/repondeur-ia"
        }
      ]
    };

    return (
        <div>
             <SeoMeta 
                title={pageData.meta.title}
                description={pageData.meta.description}
                canonical="https://www.oisans-expert-ia.fr/#/repondeur-ia"
                schema={schema}
            />
            {/* Hero Section */}
            <section className="relative text-white py-20 sm:py-28 overflow-hidden">
                <div 
                    className="absolute inset-0 bg-cover bg-center z-0" 
                    style={{ backgroundImage: "url(https://images.unsplash.com/photo-1615752258286-382928dbd6aa?q=80&w=1920&auto=format&fit=crop)" }}
                    aria-hidden="true"
                ></div>
                <div className="absolute inset-0 bg-secondary/80 z-0" aria-hidden="true"></div>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <h1 className="text-4xl md:text-5xl font-bold font-heading">{pageData.hero?.headline}</h1>
                    <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-neutralLight/90">{pageData.hero?.subheadline}</p>
                </div>
            </section>

            {/* Why Section */}
            <section className="py-16 sm:py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl md:text-4xl font-bold font-heading text-center text-secondary mb-12">Ne manquez plus jamais une opportunité</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {pageData.why?.map((reason, index) => (
                            <div key={index} className="flex items-start p-4">
                                <CheckIcon />
                                <span className="ml-4 text-lg font-medium text-neutralDark">{reason}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tiers Section */}
            <section className="py-16 sm:py-20 bg-neutralLight">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl md:text-4xl font-bold font-heading text-center text-secondary mb-12">{pricingData.title}</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {pricingData.tiers?.map(tier => (
                            <PricingCard key={tier.name} item={tier} type="tier" ctaLabel="Choisir ce forfait" ctaHref="/contact" />
                        ))}
                    </div>
                    {pricingData.promo_bundle && (
                        <div className="mt-12 text-center bg-accent/10 p-8 rounded-lg border border-accent">
                           <p className="text-lg font-semibold text-accent-dark mb-4">✨ {pricingData.promo_bundle}</p>
                           <CtaButton href="/contact" variant="secondary">Choisir ce forfait</CtaButton>
                        </div>
                    )}
                </div>
            </section>

            {/* Addons Section */}
            <section className="py-16 sm:py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                     <h2 className="text-3xl md:text-4xl font-bold font-heading text-center text-secondary mb-12">Options et intégrations sur mesure</h2>
                     <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-5xl mx-auto text-center">
                        {pricingData.addons?.map(addon => (
                            <div key={addon} className="bg-neutralLight p-4 rounded-lg shadow-sm">
                                <p className="font-medium text-neutralDark">{addon}</p>
                            </div>
                        ))}
                     </div>
                </div>
            </section>

            {/* Recordings Section */}
            <section className="py-16 sm:py-20 bg-neutralLight">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl md:text-4xl font-bold font-heading text-center text-secondary mb-12">Vos derniers enregistrements</h2>
                    <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-6 sm:p-8">
                        <div className="space-y-4">
                            {RECORDINGS_DATA.map(rec => (
                                <div key={rec.id} className="p-4 border-b border-highlight/50 last:border-b-0 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                                    <div className="flex-grow">
                                        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-2">
                                            <div className="flex items-center gap-2">
                                                <PhoneIconMini />
                                                <p className="font-semibold text-secondary">{rec.caller}</p>
                                            </div>
                                            <div className="flex items-center gap-2 text-sm text-neutralDark/80">
                                                <ClockIcon />
                                                <span>{rec.duration}</span>
                                            </div>
                                        </div>
                                        <p className="text-sm text-neutralDark/60 mb-3 sm:mb-0">{rec.date}</p>
                                        <audio controls src={rec.audioUrl} className="w-full mt-3">
                                            Votre navigateur ne supporte pas l'élément audio.
                                        </audio>
                                    </div>
                                    <div className="flex-shrink-0 self-start sm:self-center">
                                        <a 
                                            href={rec.audioUrl} 
                                            download={`enregistrement-${rec.id}.ogg`}
                                            className="inline-flex items-center justify-center px-4 py-2 rounded-full font-semibold text-center transition-all duration-300 transform hover:scale-105 shadow-md bg-secondary text-white hover:bg-neutralDark"
                                            aria-label={`Télécharger l'enregistrement de ${rec.caller}`}
                                        >
                                            <DownloadIcon />
                                            Télécharger
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                         {RECORDINGS_DATA.length === 0 && (
                            <div className="text-center py-8 text-neutralDark/70">
                                <p>Vous n'avez aucun enregistrement pour le moment.</p>
                            </div>
                        )}
                    </div>
                </div>
            </section>
            
            {/* CTA Section */}
            <section className="bg-secondary py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                    <h2 className="text-3xl font-bold font-heading">Prêt à automatiser votre accueil téléphonique ?</h2>
                    <p className="mt-4 text-lg max-w-2xl mx-auto text-neutralLight/90">Contactez-nous pour une démonstration ou pour activer votre répondeur intelligent dès aujourd'hui.</p>
                    {pageData.cta && (
                        <div className="mt-8">
                            <CtaButton href={pageData.cta.href}>{pageData.cta.label}</CtaButton>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default RepondeurPage;