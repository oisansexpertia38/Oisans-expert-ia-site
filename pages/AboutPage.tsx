import React from 'react';
import { PAGES_DATA } from '../constants.ts';

const CheckIcon = () => (
    <svg className="w-6 h-6 text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
);

const AboutPage: React.FC = () => {
    const pageData = PAGES_DATA.a_propos;

    return (
        <>
            <section className="relative text-white py-20 sm:py-28 overflow-hidden">
                <img 
                    src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1920&auto=format&fit=crop"
                    alt="Vaste chaîne de montagnes sous un ciel clair"
                    className="absolute inset-0 w-full h-full object-cover z-0"
                    aria-hidden="true"
                />
                <div className="absolute inset-0 bg-secondary/70 z-0" aria-hidden="true"></div>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <h1 className="text-4xl md:text-5xl font-bold font-heading">{pageData.title}</h1>
                </div>
            </section>
            <div className="bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl py-16 sm:py-20">
                    <div className="space-y-6 text-lg text-neutralDark/90 leading-relaxed">
                        {pageData.content?.map((item, index) => {
                            if (typeof item === 'string') {
                                return <p key={index}>{item}</p>;
                            }
                            if (item.type === 'image') {
                                return (
                                    <figure key={index} className="my-10">
                                        <img 
                                            src={item.src}
                                            alt={item.alt}
                                            className="rounded-2xl shadow-lg w-full h-auto object-cover"
                                            loading="lazy"
                                        />
                                        {item.caption && (
                                            <figcaption className="mt-3 text-center text-sm text-neutralDark/70 italic">
                                                {item.caption}
                                            </figcaption>
                                        )}
                                    </figure>
                                );
                            }
                            if (item.type === 'quote') {
                                 return (
                                    <blockquote key={index} className="text-xl md:text-2xl font-medium italic text-secondary border-l-4 border-primary pl-6 my-10">
                                        {item.text}
                                    </blockquote>
                                );
                            }
                            if (item.type === 'values') {
                                return (
                                    <div key={index} className="my-10">
                                        <h2 className="text-2xl font-bold font-heading text-secondary mb-4">Nos Valeurs</h2>
                                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                            {item.items.map(value => (
                                                <div key={value} className="bg-neutralLight p-4 rounded-lg flex items-center">
                                                    <CheckIcon />
                                                    <span className="ml-3 font-semibold text-neutralDark">{value}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )
                            }
                            return null;
                        })}
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutPage;