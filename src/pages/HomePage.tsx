import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// FIX: Import `BLOG_POSTS_DATA` to make it available in the component.
import { HOME_PAGE_DATA, PAGES_DATA, BLOG_POSTS_DATA } from '../constants.ts';
import CtaButton from '../components/CtaButton.tsx';
import CountdownTimer from '../components/CountdownTimer.tsx';
import SeoMeta from '../components/SeoMeta.tsx';

const CheckIcon = () => (
    <svg className="w-6 h-6 text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
);

const FeatureIcon: React.FC<{ path: string }> = ({ path }) => (
    <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d={path} />
    </svg>
);

const HomePage: React.FC = () => {
    const { hero, services, testimonials, finalCTA, localPresence } = HOME_PAGE_DATA;
    const pageMeta = PAGES_DATA.home.meta;
    const [showConditions, setShowConditions] = useState(false);
    const latestPosts = BLOG_POSTS_DATA.slice(0, 3);
    
    const schema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebSite",
                "url": "https://www.oisans-expert-ia.fr/",
                "name": "Oisans Expert IA",
                "potentialAction": {
                    "@type": "SearchAction",
                    "target": "https://www.oisans-expert-ia.fr/#/solutions?q={search_term_string}",
                    "query-input": "required name=search_term_string"
                }
            },
            {
                "@type": "LocalBusiness",
                "name": "Oisans Expert IA",
                "url": "https://www.oisans-expert-ia.fr/",
                "telephone": "+33972213294",
                "email": "oisans.expert.ia@gmail.com",
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Le Bourg d'Oisans",
                    "postalCode": "38520",
                    "addressCountry": "FR"
                },
                "description": "Solutions d'intelligence artificielle sur mesure pour les entreprises locales.",
                "servesCuisine": [], 
                "priceRange": "$$", 
                "openingHours": "Mo-Fr 09:00-18:00"
            }
        ]
    };

    return (
        <div className="bg-neutralLight">
            <SeoMeta 
                title={pageMeta.title}
                description={pageMeta.description}
                canonical="https://www.oisans-expert-ia.fr/"
                schema={schema}
            />
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">
                <div 
                    className="absolute inset-0 bg-cover bg-center z-0" 
                    style={{ backgroundImage: "url(https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1920&auto=format&fit=crop)" }}
                    aria-hidden="true"
                ></div>
                <div className="absolute inset-0 bg-black opacity-60 z-10" aria-hidden="true"></div>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20">
                    <h1 className="text-4xl md:text-6xl font-bold font-heading leading-tight mb-4">{hero.headline}</h1>
                    <p className="text-lg md:text-xl max-w-3xl mx-auto text-neutralLight/90 mb-8">{hero.subheadline}</p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <CtaButton href={hero.primaryCTA.href} variant="primary">{hero.primaryCTA.label}</CtaButton>
                        <CtaButton href={hero.secondaryCTA.href} variant="secondary">{hero.secondaryCTA.label}</CtaButton>
                    </div>
                </div>
            </section>
            
            {/* Promo Spotlight Section */}
            <section id="promo" className="py-16 sm:py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="relative bg-white rounded-2xl shadow-2xl p-8 md:p-12 border-2 border-primary overflow-hidden">
                        <div className="absolute top-0 right-0 h-40 w-40">
                            <div className="absolute top-[45px] -right-[50px] bg-warning text-secondary font-bold text-center transform rotate-45 w-48 py-1.5 shadow-lg">
                                -10% PROMO
                            </div>
                        </div>
                        <div className="text-center">
                            <p className="font-semibold text-primary uppercase tracking-wider">Application du mois</p>
                            <h2 className="text-3xl md:text-4xl font-bold font-heading text-secondary mt-2">Répondeur IA — votre accueil téléphonique devient intelligent</h2>
                            <h3 className="text-xl md:text-2xl font-semibold text-accent mt-2">-10% sur toute pré-commande passée avant le 30/12/2025</h3>
                            <p className="mt-6 max-w-3xl mx-auto text-lg text-neutralDark/80">
                                Ne perdez plus un appel. Notre Répondeur IA comprend, parle, qualifie et transmet les messages. Disponible 24/7, voix naturelle, scénarios personnalisés, intégrations agenda/CRM et alertes urgentes.
                            </p>
                        </div>
                        <div className="mt-8 mb-10">
                            <CountdownTimer deadline="2025-12-30T23:59:59+01:00" />
                        </div>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                             <CtaButton href="/contact" variant="primary">Profiter de -10% maintenant</CtaButton>
                             <CtaButton href="/repondeur-ia" variant="secondary">Voir les détails du Répondeur IA</CtaButton>
                        </div>
                        <div className="mt-8 text-center">
                            <p className="text-sm text-neutralDark/70">À partir de 29 €/mois et installation sur devis.</p>
                            <button
                                onClick={() => setShowConditions(!showConditions)}
                                className="text-sm text-primary hover:underline focus:outline-none mt-2"
                                aria-expanded={showConditions}
                            >
                                {showConditions ? 'Masquer les conditions' : 'Voir les conditions'}
                            </button>
                            <div
                                className={`transition-all duration-500 ease-in-out overflow-hidden ${showConditions ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}
                            >
                                <div className="bg-neutralLight p-4 rounded-lg text-left text-xs text-neutralDark/80 max-w-xl mx-auto">
                                    <p className="font-semibold mb-2">Détails de l'offre promotionnelle :</p>
                                    <ul className="list-disc list-inside space-y-1">
                                        <li>L'offre de -10% s'applique sur les deux premiers mois de l'abonnement mensuel pour le service "Répondeur IA".</li>
                                        <li>Valable pour toute pré-commande confirmée avant le 30 décembre 2025 à 23h59 (heure de Paris).</li>
                                        <li>Les frais d'installation (sur devis) ne sont pas inclus dans cette réduction.</li>
                                        <li>Offre non cumulable avec d'autres promotions en cours.</li>
                                    </ul>
                                </div>
                            </div>
                             <p className="text-xs text-neutralDark/50 mt-2">TVA non applicable, art. 293 B du CGI.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Sections */}
            {services.map((service, index) => (
                <section key={service.title} className={`py-16 sm:py-20 ${index % 2 === 1 ? 'bg-white' : 'bg-neutralLight'}`}>
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div className={`group rounded-2xl shadow-lg overflow-hidden ${index % 2 === 1 ? 'lg:order-last' : ''}`}>
                                <img 
                                    src={service.imageUrl} 
                                    alt={service.title} 
                                    className="w-full h-auto object-cover aspect-[4/3] transition-transform duration-300 ease-in-out group-hover:scale-105" 
                                    loading="lazy" 
                                />
                            </div>
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold font-heading text-secondary">{service.title}</h2>
                                <p className="mt-4 text-lg text-neutralDark/80 leading-relaxed">{service.description}</p>
                                <ul className="mt-6 space-y-3">
                                    {service.benefits.map((benefit, i) => (
                                        <li key={i} className="flex items-start">
                                            <CheckIcon />
                                            <span className="ml-3 text-neutralDark">{benefit}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-8">
                                    <CtaButton href={service.cta.href} variant="secondary">{service.cta.label}</CtaButton>
                                </div>
                            </div>
                        </div>
                        {service.features && (
                            <div className="mt-20">
                                <h3 className="text-2xl md:text-3xl font-bold font-heading text-secondary text-center">Toutes les fonctions pour révolutionner votre gestion d'appels</h3>
                                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                                    {service.features.map(feature => (
                                        <div key={feature.text} className="flex items-start bg-white p-6 rounded-lg shadow-md">
                                            <FeatureIcon path={feature.icon} />
                                            <p className="ml-4 font-medium text-neutralDark">{feature.text}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </section>
            ))}

             {/* Local Presence Section */}
            <section className="py-16 sm:py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                             <img src={localPresence.imageUrl} alt="Village alpin de Vénosc en Oisans" className="rounded-2xl shadow-lg w-full h-auto object-cover aspect-[4/3]" loading="lazy" />
                        </div>
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold font-heading text-secondary">{localPresence.title}</h2>
                            <p className="mt-4 text-lg text-neutralDark/80 leading-relaxed">{localPresence.text}</p>
                            <div className="mt-8">
                                <CtaButton href={localPresence.cta.href} variant="secondary">{localPresence.cta.label}</CtaButton>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-20 bg-neutralLight">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl md:text-4xl font-bold font-heading text-center text-secondary mb-12">Ils nous font confiance</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                           <div key={index} className="bg-white rounded-xl shadow-md p-8 h-full flex flex-col transition-all duration-300 transform hover:shadow-2xl hover:-translate-y-2">
                                <svg className="w-10 h-10 text-primary/30 mb-4" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                                    <path d="M9.333 22.667h4L16 16.667v-8h-8v8h4zM22.667 22.667h4L29.333 16.667v-8h-8v8h4z"></path>
                                </svg>
                                <blockquote className="flex-grow">
                                    <p className="text-neutralDark/80 italic mb-6">« {testimonial.quote} »</p>
                                </blockquote>
                                <footer className="mt-auto">
                                    <p className="font-bold text-secondary">{testimonial.author}</p>
                                    <p className="text-sm text-neutralDark/70">{testimonial.company}</p>
                                </footer>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Latest Blog Posts Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold font-heading text-secondary">Nos derniers articles</h2>
                        <p className="mt-4 text-lg max-w-2xl mx-auto text-neutralDark/80">
                            Suivez nos analyses et conseils pour intégrer l'IA dans votre quotidien.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {latestPosts.map((post) => (
                            <Link to={`/blog/${post.slug}`} key={post.slug} className="block group">
                                <div className="bg-white rounded-xl shadow-md overflow-hidden h-full flex flex-col transition-all duration-300 transform group-hover:shadow-2xl group-hover:-translate-y-2 border border-highlight/50">
                                    <img src={post.imageUrl} alt={`Image pour l'article : ${post.title}`} className="w-full h-56 object-cover" loading="lazy" />
                                    <div className="p-6 flex flex-col flex-grow">
                                        <h3 className="text-xl font-bold font-heading text-secondary mb-2 group-hover:text-primary transition-colors">{post.title}</h3>
                                        <p className="text-neutralDark/80 mb-4 flex-grow">{post.excerpt}</p>
                                        <div className="text-sm text-neutralDark/60 mt-auto">
                                            <span>{post.author}</span> &bull; <span>{post.date}</span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                    <div className="mt-12 text-center">
                        <CtaButton href="/blog" variant="secondary">Voir tout le blog</CtaButton>
                    </div>
                </div>
            </section>
            
            {/* Final CTA Section */}
            <section className="relative text-white py-20 overflow-hidden">
                <div 
                    className="absolute inset-0 bg-cover bg-center z-0" 
                    style={{ backgroundImage: "url(https://images.unsplash.com/photo-1464802686167-b939a6910659?q=80&w=1920&auto=format&fit=crop)" }}
                    aria-hidden="true"
                ></div>
                <div className="absolute inset-0 bg-secondary/90 z-0" aria-hidden="true"></div>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <h2 className="text-3xl md:text-4xl font-bold font-heading">{finalCTA.title}</h2>
                    <p className="mt-4 text-lg max-w-3xl mx-auto text-neutralLight/90">{finalCTA.subtitle}</p>
                    <div className="mt-8">
                        <CtaButton href={finalCTA.cta.href}>{finalCTA.cta.label}</CtaButton>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;