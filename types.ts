// types.ts
// FIX: Import React to provide type definitions for React.ReactElement
import type React from 'react';

export interface Link {
  label: string;
  href: string;
}

export interface NavLinkItem extends Link {
  children?: NavLinkItem[];
}

export interface HeaderData {
  logo_alt: string;
  menu: NavLinkItem[];
  cta: Link;
}

export interface SocialLink {
  name: string;
  href: string;
}

export interface FooterColumn {
  title: string;
  links: Link[];
}

export interface FooterData {
  columns: FooterColumn[];
  socials?: SocialLink[];
  note: string;
}

export interface ServiceHighlight {
  icon: string;
  title: string;
  desc: string;
  href: string;
}

export interface Feature {
  text: string;
  icon: string; // SVG path data
}

export interface ServiceDetails {
  title: string;
  description: string;
  benefits: string[];
  imageUrl: string;
  cta: Link;
  features?: Feature[];
}

export interface Testimonial {
  quote: string;
  author: string;
  company: string;
}

export interface HomePageData {
  hero: {
    headline: string;
    subheadline: string;
    primaryCTA: Link;
    secondaryCTA: Link;
  };
  services: ServiceDetails[];
  localPresence: {
    title: string;
    text: string;
    imageUrl: string;
    cta: Link;
  };
  testimonials: Testimonial[];
  finalCTA: {
    title: string;
    subtitle: string;
    cta: Link;
  };
}

export interface PricingPack {
    name: string;
    price_from?: number;
    monthly_from?: number;
    bullets: string[];
    featured?: boolean;
}

export interface PricingTier {
    name: string;
    monthly_from: number;
    bullets: string[];
}

export interface FormationFormat {
    name: string;
    from_per_person: number;
    group_examples: string[];
}


export interface PricingSection {
    title: string;
    starting_from?: number;
    packs?: PricingPack[];
    tiers?: PricingTier[];
    formats?: FormationFormat[];
    addons?: string[];
    promo_bundle?: string;
}

export interface PricingData {
    chatbot: PricingSection;
    automatisation: PricingSection;
    sites_internet: PricingSection;
    repondeur_ia: PricingSection;
    formations: PricingSection;
}

export interface FormField {
  name: string;
  type: 'text' | 'email' | 'tel' | 'select' | 'textarea';
  label: string;
  required: boolean;
  options?: string[];
}

export interface FormationTopic {
    title: string;
    points: string[];
}

export interface ProgramModule {
  title: string;
  description: string;
  topics: string[];
}

export interface FormationProgramData {
  id: string;
  title: string;
  intro: string;
  targetAudience: string;
  prerequisites: string;
  duration: string;
  modules: ProgramModule[];
  cta: Link;
}

export interface PageData {
    title: string;
    intro?: string;
    hero?: {
        headline: string;
        subheadline: string;
    };
    why?: string[];
    benefits?: string[];
    content?: (string | { type: 'quote'; text: string } | { type: 'values'; items: string[] } | { type: 'image'; src: string; alt: string; caption?: string; }) [];
    cta?: Link;
    form?: {
        fields: FormField[];
        submit: { label: string };
    };
    contact_info?: {
        email: string;
        website: string;
        location: string;
        phone?: string;
    };
    topics?: FormationTopic[];
}

export interface PagesData {
    solutions: PageData;
    repondeur_ia: PageData;
    chatbot_ia: PageData;
    automatisation_ia: PageData;
    sites_internet: PageData;
    formations_ia: PageData;
    formation_programs: FormationProgramData[];
    a_propos: PageData;
    contact: PageData;
}

export interface CaseStudy {
    client: string;
    title: string;
    challenge: string;
    solution: string;
    results: string[];
    imageUrl?: string;
}

export interface BlogPost {
    slug: string;
    title: string;
    excerpt: string;
    author: string;
    date: string;
    imageUrl: string;
    content: string; // HTML content for the post
}

export interface Recording {
  id: string;
  caller: string;
  date: string;
  duration: string;
  audioUrl: string;
}

export interface ChatMessage {
  from: 'user' | 'bot';
  text: string;
  options?: string[];
}