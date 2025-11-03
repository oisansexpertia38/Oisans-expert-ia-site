import React from 'react';
import CtaButton from './CtaButton.tsx';
import type { PricingPack, PricingTier, FormationFormat } from '../types.ts';

interface PricingCardProps {
  item: PricingPack | PricingTier | FormationFormat;
  type: 'pack' | 'tier' | 'format';
  ctaLabel: string;
  ctaHref: string;
}

const CheckIcon = () => (
  <svg className="w-5 h-5 text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
  </svg>
);

const PricingCard: React.FC<PricingCardProps> = ({ item, type, ctaLabel, ctaHref }) => {
  const { name } = item;
  const isFeatured = 'featured' in item && item.featured;

  const cardClasses = `
    bg-white rounded-2xl shadow-lg p-8 flex flex-col h-full border-2 
    transition-all duration-300 transform 
    ${isFeatured ? 'featured-card border-primary' : 'border-highlight/50 hover:shadow-2xl hover:border-primary hover:-translate-y-2'}
  `;

  return (
    <div className={cardClasses}>
      {isFeatured && (
        <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2">
            <span className="bg-primary text-white text-xs font-bold px-4 py-1 rounded-full uppercase">Le plus populaire</span>
        </div>
      )}
      <h3 className="font-heading text-2xl font-bold text-secondary text-center pt-2">{name}</h3>
      <div className="my-6">
        {('price_from' in item && item.price_from) && (
          <div className="text-center">
            <p className="text-sm text-neutralDark/70">À partir de</p>
            <p className="text-4xl font-bold font-heading text-secondary">{item.price_from}€</p>
            { 'monthly_from' in item && item.monthly_from && <p className="text-sm text-neutralDark/70">+ {item.monthly_from}€/mois</p> }
          </div>
        )}
        {('monthly_from' in item && !('price_from' in item)) && (
          <div className="text-center">
              <p className="text-4xl font-bold font-heading text-secondary">{item.monthly_from}€</p>
              <p className="text-sm text-neutralDark/70">/ mois</p>
          </div>
        )}
        {('from_per_person' in item) && (
           <div className="text-center">
              <p className="text-sm text-neutralDark/70">À partir de</p>
              <p className="text-4xl font-bold font-heading text-secondary">{item.from_per_person}€</p>
              <p className="text-sm text-neutralDark/70">/ personne</p>
          </div>
        )}
      </div>
      <ul className="space-y-4 flex-grow">
        {('bullets' in item && item.bullets) && item.bullets.map((bullet, index) => (
            <li key={index} className="flex items-start">
                <CheckIcon />
                <span className="ml-3 text-neutralDark/90">{bullet}</span>
            </li>
        ))}
        {('group_examples' in item && item.group_examples) && item.group_examples.map((example, index) => (
            <li key={index} className="flex items-start">
                <CheckIcon />
                <span className="ml-3 text-neutralDark/90">{example}</span>
            </li>
        ))}
      </ul>
      <div className="mt-8 text-center">
        <CtaButton href={ctaHref} variant={isFeatured ? 'primary' : 'secondary'}>{ctaLabel}</CtaButton>
      </div>
    </div>
  );
};

export default PricingCard;
