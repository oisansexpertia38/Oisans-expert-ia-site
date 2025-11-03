import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import type { ChatMessage } from '../types.ts';

// Helper component to render markdown links as React Router Links
const MessageRenderer: React.FC<{ text: string }> = ({ text }) => {
    // Regex to find markdown links: [text](url)
    const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g);

    return (
        <p>
            {parts.map((part, index) => {
                const match = part.match(/\[([^\]]+)\]\(([^)]+)\)/);
                if (match) {
                    const linkText = match[1];
                    const href = match[2];
                    // Internal links for React Router
                    if (href.startsWith('/')) {
                        return <Link key={index} to={href} className="underline text-primary hover:text-highlight">{linkText}</Link>;
                    }
                    // External links
                    return <a key={index} href={href} target="_blank" rel="noopener noreferrer" className="underline text-primary hover:text-highlight">{linkText}</a>;
                }
                return part;
            })}
        </p>
    );
};


const Chatbot: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement | null>(null);

    const initialMessage: ChatMessage = {
        from: 'bot',
        text: 'Bonjour ! Comment puis-je vous aider ?',
        options: ['Nos solutions', 'Nos tarifs', 'Nous contacter']
    };
    const [messages, setMessages] = useState<ChatMessage[]>([initialMessage]);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(scrollToBottom, [messages, isLoading]);
    
    const processMessage = (text: string) => {
        setIsLoading(true);

        let botResponseText: string;
        
        switch (text.toLowerCase()) {
            case 'nos solutions':
                botResponseText = 'Voici un aperçu de nos solutions. Vous pouvez toutes les consulter en détail sur notre page dédiée. [Découvrir nos solutions](/solutions).';
                break;
            case 'nos tarifs':
                botResponseText = 'Nos tarifs sont détaillés par service sur la page solutions. [Consulter les tarifs](/solutions).';
                break;
            case 'nous contacter':
                botResponseText = 'Pour toute demande ou pour obtenir un devis, le plus simple est de remplir notre formulaire de contact. [Aller à la page contact](/contact).';
                break;
            default:
                botResponseText = "Je ne suis pas sûr de comprendre. Pour une demande précise, le mieux est de nous contacter via notre [formulaire de contact](/contact). Vous pouvez aussi me demander des informations sur 'Nos solutions' ou 'Nos tarifs'.";
        }

        // Simulate bot thinking
        setTimeout(() => {
            // Re-add options for the next interaction
            setMessages(prev => [...prev, { from: 'bot', text: botResponseText, options: initialMessage.options }]);
            setIsLoading(false);
        }, 1000);
    };
    
    const handleUserSubmit = (text: string) => {
        if (!text.trim()) return;

        // Add user message and remove options from previous bot message
        setMessages(prev => {
            const updatedMessages = prev.map(msg => {
                const { options, ...rest } = msg;
                return rest;
            });
            updatedMessages.push({ from: 'user', text });
            return updatedMessages;
        });

        setInputValue('');
        processMessage(text);
    };

    return (
        <>
            {/* Chat Window */}
            <div className={`fixed bottom-24 right-4 sm:right-6 lg:right-8 w-[calc(100%-2rem)] max-w-sm h-[60vh] max-h-[500px] bg-white rounded-2xl shadow-2xl flex flex-col transition-all duration-300 ease-in-out z-50 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
                {/* Header */}
                <div className="bg-secondary text-white p-4 rounded-t-2xl flex justify-between items-center flex-shrink-0">
                    <div>
                        <h3 className="font-bold font-heading text-lg">Oisans Expert IA</h3>
                        <p className="text-sm text-neutralLight/80">Assistant Virtuel</p>
                    </div>
                    <button onClick={() => setIsOpen(false)} aria-label="Fermer le chat" className="text-white hover:text-primary transition-colors">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                    </button>
                </div>
                
                {/* Messages */}
                <div className="flex-grow p-4 overflow-y-auto bg-neutralLight/50">
                    <div className="space-y-4">
                        {messages.map((msg, index) => (
                            <div key={index}>
                                <div className={`flex ${msg.from === 'bot' ? 'justify-start' : 'justify-end'}`}>
                                    <div className={`max-w-[80%] p-3 rounded-xl ${msg.from === 'bot' ? 'bg-white shadow-sm text-neutralDark' : 'bg-primary text-white'}`}>
                                        <MessageRenderer text={msg.text} />
                                    </div>
                                </div>
                                {msg.from === 'bot' && msg.options && (
                                     <div className="mt-3 flex flex-wrap gap-2">
                                        {msg.options.map(opt => (
                                            <button key={opt} onClick={() => handleUserSubmit(opt)} className="px-3 py-1.5 bg-highlight/50 text-secondary rounded-full text-sm font-medium hover:bg-primary hover:text-white transition-colors">
                                                {opt}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                        {isLoading && (
                            <div className="flex justify-start">
                                <div className="max-w-[80%] p-3 rounded-xl bg-white shadow-sm text-neutralDark">
                                    <div className="flex items-center space-x-1">
                                        <span className="block w-2 h-2 bg-neutralDark/50 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                                        <span className="block w-2 h-2 bg-neutralDark/50 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                                        <span className="block w-2 h-2 bg-neutralDark/50 rounded-full animate-bounce"></span>
                                    </div>
                                </div>
                            </div>
                        )}
                         <div ref={messagesEndRef} />
                    </div>
                </div>
                
                {/* Input */}
                <form onSubmit={(e) => { e.preventDefault(); handleUserSubmit(inputValue); }} className="p-4 border-t border-highlight/50 bg-white rounded-b-2xl flex items-center flex-shrink-0">
                    <input 
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder="Posez votre question..."
                        className="w-full px-4 py-2 rounded-full bg-neutralLight border border-highlight focus:outline-none focus:ring-2 focus:ring-primary"
                        disabled={isLoading}
                    />
                    <button type="submit" aria-label="Envoyer" className="ml-3 flex-shrink-0 bg-primary text-white p-2.5 rounded-full hover:brightness-95 transition-all disabled:bg-primary/70" disabled={isLoading || !inputValue.trim()}>
                         <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path></svg>
                    </button>
                </form>
            </div>

            {/* FAB */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-4 right-4 sm:right-6 lg:right-8 bg-primary text-white w-16 h-16 rounded-full shadow-lg flex items-center justify-center transform hover:scale-110 transition-transform duration-300 z-50"
                aria-label="Ouvrir le chat"
            >
                 <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
            </button>
        </>
    );
};

export default Chatbot;