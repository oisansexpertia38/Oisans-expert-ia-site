import React, { useState } from 'react';
import { PAGES_DATA } from '../constants.ts';
import type { FormField } from '../types.ts';

const ContactPage: React.FC = () => {
    const { title, intro, form, contact_info } = PAGES_DATA.contact;
    const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setFormStatus('submitting');

        // Formspree handles the submission server-side – no need for fetch here
        // The form action below sends the data to Formspree, which emails you
        try {
            // Let Formspree handle the POST (success if no error)
            setFormStatus('success');
        } catch (error) {
            console.error("Form submission failed:", error);
            setFormStatus('error');
        }
    };

    const renderField = (field: FormField) => {
        const commonClasses = "w-full px-4 py-3 rounded-md bg-neutralLight border border-highlight focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow";

        switch (field.type) {
            case 'text':
            case 'email':
            case 'tel':
            case 'number':
            case 'date':
                return <input className={commonClasses} type={field.type} id={field.id} name={field.id} placeholder={field.placeholder} required={field.required} />;
            case 'select':
                return (
                    <select className={commonClasses} id={field.id} name={field.id} required={field.required}>
                        {field.options?.map(option => (
                            <option key={option.value} value={option.value}>{option.label}</option>
                        ))}
                    </select>
                );
            case 'textarea':
                return <textarea className={commonClasses + " h-32 resize-none"} id={field.id} name={field.id} placeholder={field.placeholder} required={field.required} />;
            default:
                return null;
        }
    };

    return (
        <>
            <div className="min-h-screen bg-background flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl w-full space-y-8 bg-white rounded-xl shadow-xl p-8">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold text-primary mb-4">{title}</h1>
                        <p className="text-xl text-secondary mb-8">{intro}</p>
                    </div>
                    
              <form 
    action="https://formsubmit.co/oisans.expert.ia@gmail.com" 
    method="POST"
    className="space-y-6"
>
    {/* Champ caché pour éviter le spam */}
    <input type="text" name="_honey" style={{display: 'none'}} />
    <input type="hidden" name="_captcha" value="false" />
    <input type="hidden" name="_next" value="https://oisansexpertia.com/merci" />

    <div>
        <label className="block text-sm font-medium text-secondary mb-1">Nom</label>
        <input 
            type="text" 
            name="name" 
            required 
            className="w-full px-4 py-3 rounded-md bg-neutralLight border border-highlight focus:outline-none focus:ring-2 focus:ring-primary"
        />
    </div>

    <div>
        <label className="block text-sm font-medium text-secondary mb-1">Email</label>
        <input 
            type="email" 
            name="email" 
            required 
            className="w-full px-4 py-3 rounded-md bg-neutralLight border border-highlight focus:outline-none focus:ring-2 focus:ring-primary"
        />
    </div>

    <div>
        <label className="block text-sm font-medium text-secondary mb-1">Message</label>
        <textarea 
            name="message" 
            required 
            rows={5}
            className="w-full px-4 py-3 rounded-md bg-neutralLight border border-highlight focus:outline-none focus:ring-2 focus:ring-primary"
        ></textarea>
    </div>

    <button 
        type="submit"
        className="w-full bg-primary text-white font-bold py-3 px-4 rounded-md hover:bg-secondary transition-colors"
    >
        Envoyer le message
    </button>
</form>

                    <div className="mt-12 border-t pt-8">
                        <h2 className="text-2xl font-semibold text-primary mb-6 text-center">Autres moyens de contact</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {contact_info?.email && (
                                <div className="flex items-start">
                                    <div className="bg-primary/10 p-3 rounded-full">
                                        <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="font-semibold text-secondary text-lg">Email</h4>
                                        <a href={`mailto:${contact_info.email}`} className="text-primary hover:underline">{contact_info.email}</a>
                                    </div>
                                </div>
                            )}
                            {contact_info?.phone && (
                                <div className="flex items-start">
                                    <div className="bg-primary/10 p-3 rounded-full">
                                        <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a15.042 15.042 0 006.502 6.502l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
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
        </>
    );
};

export default ContactPage;