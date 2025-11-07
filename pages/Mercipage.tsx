import React from 'react';

const MerciPage = () => {
    return (
        <div className="min-h-screen bg-background flex items-center justify-center py-12 px-4">
            <div className="max-w-md w-full bg-white rounded-xl shadow-xl p-8 text-center">
                <h1 className="text-3xl font-bold text-primary mb-4">Merci !</h1>
                <p className="text-lg text-secondary">Votre message a bien été envoyé.</p>
                <p className="text-sm text-neutralDark mt-2">Nous vous répondrons dans les 24h.</p>
                <a href="/" className="mt-6 inline-block text-primary hover:underline">← Retour à l'accueil</a>
            </div>
        </div>
    );
};

export default MerciPage;