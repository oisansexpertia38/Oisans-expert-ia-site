import React from 'react';
import { PAGES_DATA, PRICING_DATA } from '../constants.ts';
import PricingCard from '../components/PricingCard.tsx';
import CtaButton from '../components/CtaButton.tsx';
import SeoMeta from '../components/SeoMeta.tsx';

const SolutionsPage: React.FC = () => {
    const pageData = PAGES_DATA.solutions;
    const { title, intro, cta, meta } = pageData;
    
    // Explicitly order services
    const servicesOrder = ['repondeur_ia', 'formations', 'chatbot', 'automatisation', 'sites_internet'];
    const allServices = servicesOrder.map(key => PRICING_DATA[key as keyof typeof PRICING_DATA]);
    
    const formationAnchors: { [key: string]: string } = {
        "Découverte (4h)": "decouverte",
        "Avancée (7h)": "avancee",
        "Expert (10h)": "expert",
    };

    const serviceIntros: { [key: string]: string } = {
        "Répondeur IA (Forfaits mensuels)": "Ne manquez plus jamais un appel. Notre répondeur intelligent est votre réceptionniste 24/7, capable de qualifier les appels, prendre des rendez-vous et gérer les urgences pour vous laisser vous concentrer sur votre métier.",
        "Chatbot IA": "Engagez chaque visiteur de votre site web avec un assistant virtuel intelligent. Nos chatbots répondent aux questions fréquentes, génèrent des prospects qualifiés et peuvent même initier des ventes, le tout de manière automatisée.",
        "Automatisation IA": "Libérez votre équipe des tâches manuelles et répétitives. Nous connectons vos applications et créons des flux de travail intelligents qui économisent du temps, réduisent les erreurs et augmentent la productivité globale de votre entreprise.",
        "Création de Sites Internet": "Plus qu'une vitrine, votre site web est votre principal outil de vente. Nous créons des sites modernes, rapides et optimisés pour le SEO, prêts à intégrer nativement nos solutions d'IA pour une efficacité maximale.",
        "Formations IA": "Donnez à vos équipes les moyens de comprendre et d'utiliser l'intelligence artificielle. Nos formations sur mesure sont conçues pour être pratiques et directement applicables à votre secteur d'activité, transformant l'IA en un atout quotidien."
    };
    
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
        }
      ]
    };

    return (
        <>
            <SeoMeta 
                title={meta.title}
                description={meta.description}
                canonical="https://www.oisans-expert-ia.fr/#/solutions"
                schema={schema}
            />
            <section className="relative text-white py-20 sm:py-28 overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center z-0" style={{backgroundImage: "url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1920&auto=format&fit=crop)"}} aria-hidden="true"></div>
                <div className="absolute inset-0 bg-black/60 z-0" aria-hidden="true"></div>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <h1 className="text-4xl md:text-5xl font-bold font-heading">{title}</h1>
                    <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-neutralLight/90">{intro}</p>
                </div>
            </section>

            <div className="bg-neutralLight py-16 sm:py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="space-y-20">
                        {allServices.map(service => (
                            <section key={service.title} id={service.title.toLowerCase().replace(/\s/g, '-')}>
                                <div className="text-center max-w-3xl mx-auto mb-12">
                                    <h2 className="text-3xl md:text-4xl font-bold font-heading text-secondary">{service.title}</h2>
                                    {serviceIntros[service.title] && <p className="mt-4 text-lg text-neutralDark/80">{serviceIntros[service.title]}</p>}
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                                    {service.packs?.map(pack => (
                                        <PricingCard key={pack.name} item={pack} type="pack" ctaLabel="Obtenir un devis" ctaHref="/contact" />
                                    ))}
                                    {service.tiers?.map(tier => (
                                        <div key={tier.name} className="lg:col-span-1 md:col-span-1">
                                          <PricingCard key={tier.name} item={tier} type="tier" ctaLabel="Choisir ce forfait" ctaHref="/contact" />
                                        </div>
                                    ))}
                                    {service.formats?.map(format => (
                                        <PricingCard 
                                            key={format.name} 
                                            item={format} 
                                            type="format" 
                                            ctaLabel="Voir le programme" 
                                            ctaHref={`/formations-ia/programme#${formationAnchors[format.name] || ''}`}
                                        />
                                    ))}
                                </div>
                                 {service.promo_bundle && (
                                    <div className="mt-12 text-center bg-accent/10 p-8 rounded-lg border border-accent max-w-2xl mx-auto">
                                        <p className="text-lg font-semibold text-accent-dark mb-4">✨ {service.promo_bundle}</p>
                                        <CtaButton href="/contact" variant="secondary">Choisir ce forfait</CtaButton>
                                    </div>
                                )}
                            </section>
                        ))}
                    </div>

                    <div className="mt-20 text-center bg-white p-12 rounded-2xl shadow-lg">
                        <h2 className="text-3xl font-bold font-heading text-secondary">Prêt à transformer votre entreprise ?</h2>
                        <p className="mt-4 text-lg max-w-2xl mx-auto text-neutralDark/80">Discutons de votre projet. Nous vous fournirons une proposition claire et sur mesure, sans engagement.</p>
                        {cta && (
                            <div className="mt-8">
                                <CtaButton href={cta.href}>{cta.label}</CtaButton>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default SolutionsPage;