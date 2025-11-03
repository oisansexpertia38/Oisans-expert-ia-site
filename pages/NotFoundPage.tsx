
import React from 'react';
import CtaButton from '../components/CtaButton.tsx';

const NotFoundPage: React.FC = () => {
    return (
        <div className="flex items-center justify-center min-h-[60vh] bg-neutralLight">
            <div className="text-center p-8">
                <h1 className="text-6xl md:text-9xl font-bold font-heading text-primary">404</h1>
                <h2 className="mt-4 text-2xl md:text-4xl font-semibold text-secondary">Page non trouvée</h2>
                <p className="mt-4 text-lg text-neutralDark/80 max-w-md mx-auto">
                    Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
                </p>
                <div className="mt-8">
                    <CtaButton href="/" variant="primary">
                        Retour à l'accueil
                    </CtaButton>
                </div>
            </div>
        </div>
    );
};

export default NotFoundPage;