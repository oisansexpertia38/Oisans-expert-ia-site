import React, { useState } from 'react';
import { PAGES_DATA } from '../constants.ts';
import type { FormField } from '../types.ts';

const ContactPage: React.FC = () => {
    const { title, intro, form, contact_info } = PAGES_DATA.contact;
    const [formData, setFormData] = useState<{ [key: string]: string }>({});
    const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setFormStatus('submitting');
        
        try {
            // Using a safe, public mock API endpoint for testing form submissions.
            // This simulates a real backend call.
            const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                // This will trigger the catch block if the server responds with an error status
                throw new Error('Network response was not ok.');
            }
            
            console.log("Form submission successful (simulation):", formData);
            setFormStatus('success');
            setFormData({});

        } catch (error) {
            console.error("Form submission failed:", error);
            setFormStatus('error');
        }
    };
    
    const renderField = (field: FormField) => {
        const commonClasses = "w-full px-4 py-3 rounded-md bg-neutralLight border border-highlight focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow";
        switch (field.type) {
            case 'select':
                return (
                    <select id={field.name} name={field.name} required={field.required} value={formData[field.name] || ''} onChange={handleInputChange} className={commonClasses}>
                        <option value="" disabled>Sélectionnez une option</option>
                        {field.options?.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                    </select>
                );
            case 'textarea':
                return (
                    <textarea id={field.name} name={field.name} required={field.required} value={formData[field.name] || ''} onChange={handleInputChange} rows={5} className={commonClasses}></textarea>
                );
            default:
                return (
                    <input type={field.type} id={field.name} name={field.name} required={field.required} value={formData[field.name] || ''} onChange={handleInputChange} className={commonClasses} />
                );
				<input type="text" name="name" placeholder="Nom" required />
<input type="email" name="email" placeholder="Email" required />
<textarea name="message" placeholder="Votre message" required></textarea>
        }
    }

    return (
        <>
            <section className="relative text-white py-20 sm:py-28 overflow-hidden">
                <img 
                    src="https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=1920&auto=format&fit=crop" 
                    alt="Deux personnes avec des sacs à dos regardant une carte en montagne"
                    className="absolute inset-0 w-full h-full object-cover z-0" 
                    aria-hidden="true" 
                />
                <div className="absolute inset-0 bg-black/60 z-0" aria-hidden="true"></div>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <h1 className="text-4xl md:text-5xl font-bold font-heading">{title}</h1>
                    <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-neutralLight/90">{intro}</p>
                </div>
            </section>

            <div className="py-16 sm:py-20 bg-neutralLight">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        {/* Form */}
                        <div className="bg-white p-8 sm:p-10 rounded-2xl shadow-lg">
                            {formStatus === 'success' ? (
                                <div className="text-center py-12">
                                    <h3 className="text-2xl font-bold font-heading text-accent">Merci !</h3>
                                    <p className="mt-2 text-neutralDark/80">Votre message a bien été envoyé. Nous vous répondrons dans les plus brefs délais.</p>
                                </div>
                            ) : (
                               <form action="https://formspree.io/f/https://formspree.io/f/xqawzzwg" method="POST">
                                    {form?.fields.map(field => (
                                        <div key={field.name}>
                                            <label htmlFor={field.name} className="block text-sm font-medium text-secondary mb-2">{field.label}{field.required && ' *'}</label>
                                            {renderField(field)}
                                        </div>
                                    ))}
                                    <button type="submit" disabled={formStatus === 'submitting'} className="w-full bg-primary text-white font-bold py-3 px-6 rounded-full hover:brightness-95 transition-all duration-300 disabled:bg-primary/70">
                                        {formStatus === 'submitting' ? 'Envoi en cours...' : form?.submit.label}
                                    </button>
                                </form>
                            )}
                             {formStatus === 'error' && (
                                <div className="mt-4 text-center p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                                    <p>Une erreur est survenue. Veuillez réessayer plus tard ou nous contacter directement par email.</p>
                                </div>
                            )}
                        </div>

                        {/* Contact Info */}
                        <div className="bg-white p-8 rounded-2xl shadow-lg space-y-8">
                            <div>
                                <h3 className="text-2xl font-bold font-heading text-secondary">Contactez-nous directement</h3>
                                <p className="mt-2 text-neutralDark/80">Nous sommes à votre disposition pour toute question.</p>
                            </div>
                            <div className="space-y-6">
                                {contact_info?.email && (
                                    <div className="flex items-start">
                                        <div className="bg-primary/10 p-3 rounded-full">
                                            <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <div className="ml-4">
                                            <h4 className="font-semibold text-secondary text-lg">Email</h4>
                                            <a href={`mailto:${contact_info.email}`} className="text-primary hover:underline break-all">{contact_info.email}</a>
                                        </div>
                                    </div>
                                )}
                                {contact_info?.phone && (
                                    <div className="flex items-start">
                                        <div className="bg-primary/10 p-3 rounded-full">
                                            <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                               <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                            </svg>
                                        </div>
                                        <div className="ml-4">
                                            <h4 className="font-semibold text-secondary text-lg">Téléphone</h4>
                                            <a href={`tel:${contact_info.phone.replace(/\s/g, '')}`} className="text-primary hover:underline">{contact_info.phone}</a>
                                            <p className="text-xs text-neutralDark/70 mt-1">Appel gratuit - <span className="font-semibold text-warning">En maintenance</span></p>
                                        </div>
                                    </div>
                                )}
                                {contact_info?.location && (
                                     <div className="flex items-start">
                                        <div className="bg-primary/10 p-3 rounded-full">
                                             <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                        </div>
                                        <div className="ml-4">
                                            <h4 className="font-semibold text-secondary text-lg">Notre base</h4>
                                            <p className="text-neutralDark">{contact_info.location}</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactPage;