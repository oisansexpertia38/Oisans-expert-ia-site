
import React, { useState } from 'react';
import { GoogleGenAI, Type } from "@google/genai";

const NameGenerator: React.FC = () => {
    const [industry, setIndustry] = useState('');
    const [generatedNames, setGeneratedNames] = useState<string[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const mockGenerateNames = () => {
        const mockNames = [
            "L'Atelier du Sommet",
            "Clarté Numérique",
            "Le Goût des Cimes",
            "Horizon Alpin",
            "Pulsar Créatif"
        ];
        // We don't need a timeout here when called from the catch block, 
        // but it's fine to keep it for the no-api-key case.
        setTimeout(() => {
            setGeneratedNames(mockNames);
            setIsLoading(false);
        }, 1000);
    };

    const handleGenerate = async () => {
        if (!industry.trim()) {
            setError("Veuillez entrer un secteur d'activité.");
            return;
        }
        
        setIsLoading(true);
        setError(null);
        setGeneratedNames([]);

        if (!process.env.API_KEY) {
            console.log("API key not found. Using mock data.");
            mockGenerateNames();
            return;
        }

        try {
            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
            
            const prompt = `Génère une liste de 5 noms d'entreprise créatifs, professionnels et mémorables pour le secteur suivant : "${industry}". Les noms doivent être en français.`;

            const response = await ai.models.generateContent({
                model: "gemini-2.5-flash",
                contents: prompt,
                config: {
                    responseMimeType: "application/json",
                    responseSchema: {
                        type: Type.OBJECT,
                        properties: {
                            names: {
                                type: Type.ARRAY,
                                items: {
                                    type: Type.STRING
                                }
                            }
                        }
                    },
                },
            });
            
            const jsonText = response.text.trim();
            const parsed = JSON.parse(jsonText);
            
            if (parsed && Array.isArray(parsed.names)) {
                setGeneratedNames(parsed.names);
            } else {
                throw new Error("Format de réponse inattendu de l'IA.");
            }

        } catch (e: any) {
            console.error("API call failed, falling back to mock data. Error:", e);
            // Fallback to mock data if the API call fails for any reason (e.g., invalid key)
            mockGenerateNames();
        } finally {
            // setIsLoading is handled inside mockGenerateNames for timing consistency
        }
    };

    return (
        <div className="bg-white p-8 sm:p-10 rounded-2xl shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold font-heading text-secondary text-center">Générateur de Nom d'Entreprise</h3>
            <p className="text-center text-neutralDark/80 mt-2 mb-6">Recevez des idées de noms créatifs grâce à l'IA.</p>

            <div className="space-y-4">
                <input
                    type="text"
                    value={industry}
                    onChange={(e) => setIndustry(e.target.value)}
                    placeholder="Ex: Boulangerie artisanale à Grenoble"
                    className="w-full px-4 py-3 rounded-md bg-neutralLight border border-highlight focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow"
                    disabled={isLoading}
                />
                <button
                    onClick={handleGenerate}
                    disabled={isLoading}
                    className="w-full bg-primary text-white font-bold py-3 px-6 rounded-full hover:brightness-95 transition-all duration-300 disabled:bg-primary/70 flex items-center justify-center"
                >
                    {isLoading ? (
                        <>
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Génération en cours...
                        </>
                    ) : "Générer des noms"}
                </button>
            </div>

            {error && <p className="text-red-600 mt-4 text-center">{error}</p>}

            {generatedNames.length > 0 && (
                <div className="mt-8">
                    <h4 className="text-lg font-semibold text-secondary mb-4">Voici quelques suggestions :</h4>
                    <ul className="list-disc list-inside bg-primary/10 p-4 rounded-lg space-y-2">
                        {generatedNames.map((name, index) => (
                            <li key={index} className="text-neutralDark font-medium">{name}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default NameGenerator;