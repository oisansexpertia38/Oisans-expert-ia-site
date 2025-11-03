


import type { HeaderData, FooterData, HomePageData, PagesData, PricingData, CaseStudy, BlogPost, Recording, NavLinkItem } from './types.ts';

export const HEADER_DATA: HeaderData = {
  logo_alt: "Oisans Expert IA",
  menu: [
    { label: "Accueil", href: "/" },
    { 
      label: "Solutions", 
      href: "/solutions",
      children: [
        { label: "Répondeur IA", href: "/repondeur-ia" },
        { label: "Chatbot IA", href: "/chatbot-ia" },
        { label: "Automatisation", href: "/automatisation-ia" },
        { label: "Sites Internet", href: "/sites-internet" },
        { label: "Formations IA", href: "/formations-ia" },
      ]
    },
    { label: "Études de Cas", href: "/etudes-de-cas" },
    { label: "Blog", href: "/blog" },
  ],
  cta: { label: "Obtenir un devis", href: "/contact" }
};

export const FOOTER_DATA: FooterData = {
  columns: [
    {
      title: "Oisans Expert IA",
      links: [
        { label: "À propos", href: "/a-propos" },
        { label: "Solutions", href: "/solutions" },
        { label: "Sites Internet", href: "/sites-internet" },
        { label: "Études de Cas", href: "/etudes-de-cas"},
        { label: "Blog", href: "/blog"},
        { label: "Mentions légales", href: "/mentions-legales" } // This route is not defined, will go to 404
      ]
    },
    {
      title: "Contact",
      links: [
        { label: "oisans.expert.ia@gmail.com", href: "mailto:oisans.expert.ia@gmail.com" },
        { label: "+33 9 72 21 32 94", href: "tel:+33972213294" },
      ]
    }
  ],
  socials: [
    { name: "LinkedIn", href: "#" },
    { name: "Facebook", href: "#" },
    { name: "Instagram", href: "#" },
    { name: "TikTok", href: "#" },
  ],
  note: "TVA non applicable, article 293 B du CGI."
};

export const HOME_PAGE_DATA: HomePageData = {
  hero: {
    headline: "Ne Manquez Plus Jamais un Appel Important.",
    subheadline: "Découvrez notre Répondeur IA, la solution qui capture 100% de vos appels, qualifie vos prospects et vous libère du temps, 24h/24 et 7j/7.",
    primaryCTA: { label: "Découvrir le Répondeur IA", href: "/repondeur-ia" },
    secondaryCTA: { label: "Toutes nos solutions", href: "/solutions" },
  },
  services: [
    {
      title: "📞 Répondeur Intelligent Oisans Expert IA",
      description: "Transformez votre accueil téléphonique. Notre IA conversationnelle répond instantanément, comprend les demandes de vos clients, prend des messages détaillés, fixe des rendez-vous et peut même répondre aux questions fréquentes. Offrez une expérience client impeccable, même lorsque vous êtes occupé ou en dehors des heures d'ouverture.",
      benefits: [
          "Capturez 100% de vos appels et opportunités",
          "Qualification automatique des demandes urgentes",
          "Prise de rendez-vous intégrée à votre agenda",
          "Disponible en plusieurs langues pour vos clients internationaux"
      ],
      imageUrl: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=1470&auto=format&fit=crop",
      cta: { label: "En savoir plus", href: "/repondeur-ia" },
      features: [
          { text: "Réponse automatique 24h/24 et 7j/7", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
          { text: "Accueil vocal personnalisé à votre image", icon: "M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" },
          { text: "Prise de rendez-vous automatique", icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" },
          { text: "Enregistrement et gestion des messages", icon: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" },
          { text: "Alerte immédiate en cas d’urgence (SMS+email)", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
          { text: "Reconnaissance des clients fidèles", icon: "M17 20h5.414a1 1 0 00.707-1.707l-3.75-3.75a1 1 0 00-1.414 0l-3.75 3.75a1 1 0 00.707 1.707H17zM5 10a5 5 0 1110 0 5 5 0 01-10 0z" },
          { text: "Transcription et envoi par email", icon: "M3 10h12M3 14h7m-7 4h12M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" },
          { text: "Support multilingue (FR / EN / DE)", icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2h1a2 2 0 002-2v-1a2 2 0 012-2h1.945M7.8 15.25a.75.75 0 01-1.06 0l-2.25-2.25a.75.75 0 010-1.06l2.25-2.25a.75.75 0 111.06 1.06L5.56 12l2.24 2.25a.75.75 0 010 1.06zM16.2 15.25a.75.75 0 001.06 0l2.25-2.25a.75.75 0 000-1.06l-2.25-2.25a.75.75 0 00-1.06 1.06L18.44 12l-2.24 2.25a.75.75 0 000 1.06z" },
          { text: "Historique et suivi complet des appels", icon: "M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" },
          { text: "Statistiques et tableau de bord", icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0h10" },
          { text: "Mode “répondeur IA” activable à la demande", icon: "M3.685 14.332C2.015 12.82 1 10.554 1 8c0-4.418 3.582-8 8-8s8 3.582 8 8c0 2.554-1.015 4.82-2.685 6.332M15 17H9" },
          { text: "Notifications intelligentes appels manqués", icon: "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" },
          { text: "Compatible tous téléphones et ordinateurs", icon: "M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" },
      ],
    },
    {
      title: "Formations IA : Démystifiez l'intelligence artificielle",
      description: "L'IA n'est pas une technologie inaccessible. Nos formations sur mesure sont conçues pour les dirigeants et les équipes des entreprises locales. Nous vous donnons les clés pour comprendre les enjeux de l'IA, identifier les opportunités pour votre activité et utiliser des outils concrets pour gagner en productivité et en efficacité au quotidien.",
      benefits: [
          "Des modules adaptés à votre secteur d'activité",
          "Apprenez à utiliser des outils IA pertinents (ChatGPT, etc.)",
          "Identifiez les tâches à automatiser dans votre entreprise",
          "Accompagnement pour vos premiers projets IA"
      ],
      imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1470&auto=format&fit=crop",
      cta: { label: "Voir nos formations", href: "/formations-ia" }
    },
    {
      title: "Chatbots & Automatisation : L'efficacité invisible",
      description: "Libérez vos équipes des tâches répétitives et offrez une assistance instantanée à vos clients. Nous créons des chatbots intelligents pour votre site web ou vos réseaux sociaux, et nous mettons en place des automatisations qui connectent vos outils (CRM, facturation, emailing) pour fluidifier vos processus et vous faire gagner des heures précieuses chaque semaine.",
       benefits: [
          "Réponse instantanée aux questions fréquentes 24/7",
          "Génération et qualification de prospects automatisées",
          "Synchronisation de vos applications pour éviter la double saisie",
          "Réduction des erreurs et augmentation de la productivité"
      ],
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1470&auto=format&fit=crop",
      cta: { label: "Explorer les possibilités", href: "/solutions" }
    },
    {
        title: "Sites Internet : Votre camp de base digital",
        description: "Nous créons des sites web modernes, rapides et optimisés pour le référencement local. Plus qu'une simple vitrine, votre site devient un outil de conversion puissant, prêt à intégrer un chatbot pour engager vos visiteurs ou des automatisations pour gérer vos formulaires de contact. Une présence en ligne professionnelle, conçue pour grandir avec vous.",
        benefits: [
            "Design professionnel et expérience utilisateur soignée",
            "Optimisation pour le SEO local (Google Maps, etc.)",
            "Intégration native de nos solutions IA (chatbot, formulaires intelligents)",
            "Maintenance et sécurité pour votre tranquillité d'esprit"
        ],
        imageUrl: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=1470&auto=format&fit=crop",
        cta: { label: "Découvrir nos offres web", href: "/sites-internet" }
    }
  ],
  localPresence: {
      title: "Votre Partenaire IA au Cœur de l'Oisans",
      text: "Nés au cœur des Alpes, nous comprenons les défis uniques des entreprises de notre région et de toute la France. Notre mission est de vous fournir des outils IA puissants, simples et sur mesure, avec la proximité et la réactivité d'un partenaire local. Nous sommes là pour vous aider à intégrer l'intelligence artificielle dans votre quotidien, pour que vous puissiez vous concentrer sur votre cœur de métier.",
      imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1770&auto=format&fit=crop",
      cta: { label: "Découvrez notre histoire", href: "/a-propos" }
  },
  testimonials: [
    {
      quote: "La mise en place du répondeur IA a transformé notre gestion d'appels. Plus aucune demande n'est manquée et nos clients sont dirigés efficacement. Un gain de temps et de sérénité incroyable.",
      author: "Jean Dupont",
      company: "Gérant, Hôtel Le Sommet"
    },
    {
      quote: "Oisans Expert IA a su comprendre nos besoins spécifiques et a développé un chatbot sur-mesure qui répond à 90% des questions de nos visiteurs. Nos équipes peuvent enfin se concentrer sur les cas complexes.",
      author: "Marie Curie",
      company: "Responsable Clientèle, SkiLoc Oisans"
    },
    {
      quote: "L'automatisation de nos processus de facturation nous a fait économiser près de 10 heures par semaine. Le déploiement a été rapide et l'accompagnement est toujours au rendez-vous. Je recommande vivement.",
      author: "Pierre Martin",
      company: "Artisan du Bois"
    }
  ],
  finalCTA: {
      title: "Prêt à passer à la vitesse supérieure ?",
      subtitle: "Discutons de vos défis. Nous vous proposerons un plan d'action clair et des solutions concrètes pour intégrer l'intelligence artificielle dans votre quotidien.",
      cta: { label: "Planifier un appel découverte", href: "/contact" }
  }
};

export const PRICING_DATA: PricingData = {
    chatbot: {
      title: "Chatbot IA",
      starting_from: 1350,
      packs: [
        {
          name: "Pack Starter — Assistant IA Prêt à l’Emploi",
          price_from: 1350,
          bullets: [
            "Chatbot sur site ou Messenger",
            "FAQ automatiques, thème alpin, installation et test",
            "Délai indicatif: 2–4 semaines"
          ],
        },
        {
          name: "Pack Pro — Connect & Optimise",
          price_from: 3000,
          bullets: [
            "Intégrations CRM/Agenda, analytics mensuel",
            "Automatisations leads & rappels SMS",
            "Support prioritaire (<48h)"
          ],
          featured: true, // Highlight this pack
        },
        {
          name: "Pack Premium — Expérience sur Mesure",
          price_from: 6500,
          bullets: [
            "UX/UI personnalisée, branding",
            "Formation équipe (2x2h), optimisation trimestrielle",
            "Maintenance 12 mois incluse"
          ]
        }
      ],
    },
    automatisation: {
      title: "Automatisation IA",
      starting_from: 850,
      packs: [
        {
          name: "Pack Starter — Automatisation Express",
          price_from: 850,
          bullets: [
            "Automatiser une tâche simple (relance, mail, archivage)",
            "n8n/Make, tests, prise en main (1h)",
            "Délai 2–3 semaines"
          ]
        },
        {
          name: "Pack Pro — Connect & Flow",
          price_from: 2400,
          bullets: [
            "Multi-étapes, sync outils (Sheets, CRM, Gmail)",
            "Analytics mensuel, support prioritaire",
            "Délai 4–6 semaines"
          ]
        },
        {
          name: "Pack Premium — Flux IA sur mesure",
          price_from: 6000,
          bullets: [
            "Workflows IA personnalisés, NLP, supervision temps réel",
            "Formation équipe (2h), maintenance 12 mois",
            "Délai 6–8 semaines"
          ]
        }
      ],
    },
    sites_internet: {
      title: "Création de Sites Internet",
      starting_from: 1100,
      packs: [
        {
          name: "Pack Vitrine Essentiel",
          price_from: 1100,
          monthly_from: 35,
          bullets: [
            "3 pages (Accueil, Services, Contact), responsive",
            "Formulaire, SEO local de base, domaine/hébergement",
            "Sauvegardes, email pro, support <48h"
          ]
        },
        {
          name: "Pack E-Commerce Express",
          price_from: 2500,
          monthly_from: 59,
          bullets: [
            "Boutique (jusqu’à 20 produits), paiements Stripe/PayPal",
            "Stocks & commandes, support prioritaire <24h"
          ]
        },
        {
          name: "Pack Premium — Expérience Alpin Sur Mesure",
          price_from: 4500,
          monthly_from: 99,
          bullets: [
            "Jusqu’à 10 pages custom, UX/UI sur mesure",
            "CRM ou réservation, SEO avancé multilingue",
            "Assistant IA (chat & vocal), support 24/7"
          ]
        }
      ],
    },
    repondeur_ia: {
      title: "Répondeur IA (Forfaits mensuels)",
      tiers: [
        { name: "Starter", monthly_from: 29, bullets: ["Réponse IA 24/7 basique", "1 numéro inclus"] },
        { name: "Pro", monthly_from: 69, bullets: ["+ Prise de RDV", "Reconnaissance client", "Agenda basique"] },
        { name: "Business", monthly_from: 129, bullets: ["+ Urgences & SMS", "Multilingue", "CRM avancé"] },
        { name: "Enterprise", monthly_from: 249, bullets: ["Tout inclus", "Support prioritaire", "Analytics avancés"] }
      ],
      addons: [
        "Prise de rendez-vous",
        "Reconnaissance client / historique",
        "Urgences & alertes SMS/Email",
        "Traduction multilingue",
        "Intégration agenda / CRM"
      ],
      promo_bundle: "Bundle 'Oisans Pro' : Starter + Traduction + Urgences à 59 €/mois",
    },
    formations: {
      title: "Formations IA",
      starting_from: 180,
      formats: [
        {
          name: "Découverte (4h)",
          from_per_person: 180,
          group_examples: ["10 pers: 1500 €", "15 pers: 1950 €", "20 pers: 2200 €"]
        },
        {
          name: "Avancée (7h)",
          from_per_person: 290,
          group_examples: ["10 pers: 2400 €", "15 pers: 3150 €", "20 pers: 3600 €"]
        },
        {
          name: "Expert (10h)",
          from_per_person: 450,
          group_examples: ["10 pers: 3800 €", "15 pers: 5100 €", "20 pers: 6000 €"]
        }
      ],
    }
};

export const PAGES_DATA: PagesData = {
    solutions: {
      title: "Nos solutions IA",
      intro: "Des outils concrets et adaptés à votre activité : répondeur IA, chatbots, automatisations, sites web et formations.",
      cta: { label: "Obtenir un devis personnalisé", href: "/contact" }
    },
    repondeur_ia: {
      title: "Répondeur téléphonique intelligent",
      hero: {
        headline: "Votre accueil téléphonique devient intelligent.",
        subheadline: "Réponse en <3 secondes, 24/7, scénarios sur mesure, intégrations et rapports."
      },
      why: [
        "Ne perdez plus un appel important",
        "Qualification automatique et messages instantanés",
        "Intégrations agenda/CRM, alertes urgentes"
      ],
      cta: { label: "Essayer le répondeur IA", href: "/contact" }
    },
    chatbot_ia: {
      title: "Chatbot IA — Assistant digital",
      benefits: [
        "Disponible 24/7 sur votre site, WhatsApp ou Messenger",
        "Prise de rendez-vous, FAQ, génération de leads",
        "Intégrations CRM, analytics et automatisations"
      ],
      cta: { label: "Créer mon chatbot", href: "/contact" }
    },
    automatisation_ia: {
      title: "Automatisation IA — L’efficacité invisible",
      benefits: [
        "Reliez vos outils (Google, CRM, email, facturation)",
        "Réduisez les tâches répétitives",
        "Suivi et analytics pour piloter vos flux"
      ],
      cta: { label: "Demander une étude", href: "/contact" }
    },
    sites_internet: {
      title: "Création de sites internet",
      benefits: [
        "Sites modernes, rapides et responsive",
        "SEO local et sécurité",
        "Assistant IA intégré en option"
      ],
      cta: { label: "Lancer mon site", href: "/contact" }
    },
    formations_ia: {
      title: "Formations IA",
      intro: "Des modules concrets pour dirigeants, équipes, écoles et collectivités.",
      cta: { label: "Demander un programme", href: "/contact" },
      topics: [
        {
            title: "Comprendre l'IA",
            points: [
                "Démystifier le vocabulaire : IA, Machine Learning, LLM...",
                "Identifier les opportunités et les risques pour votre secteur.",
                "Panorama des outils IA incontournables (ChatGPT, Midjourney...)."
            ]
        },
        {
            title: "Utiliser l'IA au quotidien",
            points: [
                "Maîtriser l'art du 'prompt' pour des résultats optimaux.",
                "Automatiser les tâches : rédaction, synthèse, traduction...",
                "Créer des contenus (textes, images) de qualité professionnelle."
            ]
        },
        {
            title: "Intégrer l'IA dans votre stratégie",
            points: [
                "Définir un cas d'usage concret et mesurable.",
                "Choisir les bons outils et les bonnes plateformes.",
                "Sensibiliser et former vos équipes pour une adoption réussie."
            ]
        }
      ]
    },
    formation_programs: [
      {
        id: "decouverte",
        title: "Programme Détaillé – Formation Découverte IA",
        intro: "Une demi-journée (4h) intensive pour passer de la curiosité à la compétence. Ce programme est conçu pour vous donner des bases solides et des outils directement applicables pour booster votre productivité.",
        targetAudience: "Dirigeants, managers, indépendants et équipes souhaitant comprendre et utiliser l'IA.",
        prerequisites: "Aucun prérequis technique. Une curiosité pour les nouvelles technologies est un plus !",
        duration: "4 heures (1/2 journée)",
        modules: [
          {
            title: "Module 1 : Démystifier l'IA (1h)",
            description: "Plongez dans le monde de l'IA. Nous clarifions les concepts clés et explorons ensemble le potentiel réel de ces technologies pour votre activité, loin des clichés et du jargon technique.",
            topics: [
              "Qu'est-ce que l'IA, le Machine Learning, un LLM ?",
              "Les grandes familles d'IA : Générative, prédictive, etc.",
              "Identifier les opportunités et les risques pour votre secteur.",
              "Panorama des outils incontournables (ChatGPT, Midjourney, etc.)."
            ]
          },
          {
            title: "Module 2 : Maîtriser l'Art du Prompt (1.5h)",
            description: "C'est le cœur de la formation. Apprenez à 'parler' aux IA pour obtenir des résultats qui dépassent vos attentes. Un bon prompt, c'est 80% du travail.",
            topics: [
              "Les principes d'un prompt efficace : Contexte, Rôle, Tâche, Format.",
              "Atelier pratique : rédaction de prompts pour des cas concrets (emails, posts réseaux sociaux, idées de business).",
              "Techniques avancées : 'Chain of Thought', 'Few-shot prompting'.",
              "Analyse de prompts réussis et ratés."
            ]
          },
          {
            title: "Module 3 : Cas d'Usage et Ateliers Pratiques (1h)",
            description: "Mettez les mains dans le cambouis ! Appliquez les connaissances acquises à des problématiques concrètes de votre quotidien professionnel pour un retour sur investissement immédiat.",
            topics: [
              "Automatiser la rédaction de comptes-rendus.",
              "Créer une campagne marketing (textes + images) en 30 minutes.",
              "Utiliser l'IA pour analyser des avis clients ou des documents longs.",
              "Brainstorming : identifier 3 tâches à automatiser dans VOTRE entreprise."
            ]
          },
          {
            title: "Module 4 : Stratégie et Prochaines Étapes (0.5h)",
            description: "Repartez avec une vision claire et un plan d'action. Nous discutons de l'intégration de l'IA dans votre stratégie long-terme et des ressources pour continuer à progresser.",
            topics: [
              "Comment choisir les bons outils pour vos besoins ?",
              "Sensibiliser et former ses équipes : les clés du succès.",
              "Questions / Réponses et partage de ressources.",
              "Définir votre premier micro-projet IA."
            ]
          }
        ],
        cta: { label: "Je suis intéressé, obtenir un devis", href: "/contact" }
      },
      {
        id: "avancee",
        title: "Programme Détaillé – Formation Avancée IA",
        intro: "Passez à la vitesse supérieure. Cette journée complète (7h) est conçue pour ceux qui maîtrisent les bases et veulent construire des solutions IA plus complexes et personnalisées pour leur entreprise.",
        targetAudience: "Professionnels, développeurs et chefs de projet ayant suivi la formation Découverte ou ayant une expérience équivalente.",
        prerequisites: "Maîtrise de ChatGPT, compréhension des principes du prompt engineering.",
        duration: "7 heures (1 journée)",
        modules: [
            {
                title: "Module 1 : Prompt Engineering Avancé (1.5h)",
                description: "Allez au-delà des bases pour dialoguer avec l'IA comme un expert. Apprenez à structurer vos requêtes pour des tâches complexes et à obtenir des résultats nuancés et précis.",
                topics: [
                    "Création de personas complexes et 'expert mode'.",
                    "Techniques de décomposition : 'Chain of Thought' et 'Tree of Thoughts'.",
                    "Prompting multi-shots pour guider le modèle avec des exemples.",
                    "Atelier : Résolution d'un problème métier complexe."
                ]
            },
            {
                title: "Module 2 : Création de GPTs Personnalisés (2h)",
                description: "Ne vous contentez plus du ChatGPT de base. Construisez votre propre assistant IA, entraîné sur vos documents et configuré pour effectuer des tâches spécifiques à votre activité.",
                topics: [
                    "Principes du RAG (Retrieval-Augmented Generation).",
                    "Construire un GPT sur mesure pour une tâche spécifique (support client, analyse...).",
                    "Intégrer des bases de connaissances (PDFs, base de données...).",
                    "Définir des actions personnalisées pour connecter votre GPT au monde extérieur."
                ]
            },
            {
                title: "Module 3 : Introduction aux APIs et à l'Automatisation (2.5h)",
                description: "Libérez la vraie puissance de l'IA en la connectant à vos outils existants. Découvrez comment automatiser des processus métier grâce aux APIs et aux plateformes no-code.",
                topics: [
                    "Comprendre le fonctionnement des APIs (OpenAI, Gemini).",
                    "Utiliser Make/n8n pour connecter l'IA à Google Sheets, votre CRM, etc.",
                    "Atelier : Construire un workflow automatisé (ex: tri et réponse automatique d'emails).",
                    "Calculer les coûts et optimiser l'usage des APIs."
                ]
            },
            {
                title: "Module 4 : Cas Pratiques et Projets (1h)",
                description: "Synthétisez vos nouvelles compétences en construisant un projet concret de A à Z, démontrant un retour sur investissement direct pour votre entreprise.",
                topics: [
                    "Atelier final : construire un agent de service client simple.",
                    "Pitcher son projet IA : définir les objectifs, les étapes et les KPIs.",
                    "Revue de projets et prochaines étapes."
                ]
            }
        ],
        cta: { label: "Participer à la formation avancée", href: "/contact" }
      },
      {
        id: "expert",
        title: "Programme Détaillé – Formation Expert IA",
        intro: "Devenez le référent IA de votre organisation. Ce programme intensif de 10 heures vous plonge dans l'intégration stratégique et technique de l'IA pour créer une valeur ajoutée durable.",
        targetAudience: "Décideurs techniques, développeurs, futurs 'IA managers' et consultants.",
        prerequisites: "Formation Avancée ou compétences solides en automatisation et connaissance des APIs.",
        duration: "10 heures (2 demi-journées)",
        modules: [
            {
                title: "Module 1 : Stratégie d'Intégration IA (2h)",
                description: "Avant la technique, la stratégie. Apprenez à identifier les bons cas d'usage, à évaluer la faisabilité et à construire un business case solide pour vos projets d'IA.",
                topics: [
                    "Auditer un processus métier pour l'IA.",
                    "Calculer le ROI d'un projet IA : coûts, gains de productivité, etc.",
                    "Choisir le bon modèle (LLM) pour le bon usage.",
                    "Considérations éthiques, de sécurité et de confidentialité des données."
                ]
            },
            {
                title: "Module 2 : Agents IA et 'Function Calling' (3h)",
                description: "Passez de simples prompts à la création d'agents autonomes. Donnez à l'IA la capacité d'utiliser des outils externes pour interagir avec des systèmes complexes.",
                topics: [
                    "Principes des agents IA et des workflows complexes.",
                    "Le 'Function Calling' : permettre à l'IA d'appeler votre propre code.",
                    "Gestion de la mémoire et du contexte sur le long terme.",
                    "Atelier : Construire un agent capable de consulter une base de données ou une API externe."
                ]
            },
            {
                title: "Module 3: Fine-Tuning : Concepts et Pratiques (3h)",
                description: "Personnalisez un modèle de langage pour qu'il adopte le ton, le style et les connaissances spécifiques de votre entreprise. Le summum de l'IA sur mesure.",
                topics: [
                    "Quand et pourquoi fine-tuner un modèle ?",
                    "Préparation et formatage des datasets pour l'entraînement.",
                    "Utilisation des plateformes de fine-tuning (OpenAI, Hugging Face).",
                    "Évaluer la performance d'un modèle fine-tuné."
                ]
            },
            {
                title: "Module 4 : Déploiement et Monitoring (2h)",
                description: "Un projet IA n'est terminé que lorsqu'il est en production, de manière fiable et supervisée. Apprenez les bases du MLOps pour les LLMs.",
                topics: [
                    "Mettre en production un service IA : options et architectures.",
                    "Surveiller les coûts, la latence et la qualité des réponses.",
                    "Stratégies de mise à jour et de maintenance des modèles.",
                    "Présentation finale : un projet IA complet, de l'idée au déploiement."
                ]
            }
        ],
        cta: { label: "Devenir un expert IA", href: "/contact" }
      }
    ],
    a_propos: {
      title: "Notre Histoire",
      content: [
        "Née au cœur des montagnes, Oisans Expert IA est le fruit d'une double passion : la technologie de pointe et un profond attachement à notre territoire. Nous avons vu le potentiel incroyable de l'intelligence artificielle et nous nous sommes donné une mission claire : la rendre accessible, compréhensible et surtout utile pour les entreprises qui font la richesse de nos régions, en Oisans et partout en France.",
        {type: 'image', src: 'https://i.imgur.com/mq18VWo.jpeg', alt: "Lac de Buclet à Bourg d'Oisans en automne", caption: "Lac de Buclet, Le Bourg d'Oisans."},
        "Nous croyons fermement que l'IA n'est pas l'apanage des géants de la tech. C'est un formidable levier de croissance pour les artisans, les hôteliers, les commerçants et les PME. C'est un outil pour vous redonner ce que vous avez de plus précieux : du temps. Du temps pour innover, pour satisfaire vos clients, pour vous développer.",
        {type: 'quote', text: 'L’IA ne remplace pas l’humain — elle lui permet de se concentrer sur ce que seul un humain peut faire.'},
        "Notre approche est basée sur l'écoute, la pédagogie et le sur-mesure. Nous ne vendons pas de solutions toutes faites, nous construisons avec vous les outils qui répondent précisément à vos défis. Votre succès est notre plus grande fierté.",
        {type: 'values', items: ['Proximité', 'Pédagogie', 'Performance', 'Sur-mesure']}
      ]
    },
    contact: {
      title: "Contact",
      intro: "Expliquez-nous votre besoin et recevrez un devis clair sous 48h.",
      form: {
        fields: [
          { name: "nom", type: "text", label: "Nom", required: true },
          { name: "email", type: "email", label: "Email", required: true },
          { name: "telephone", type: "tel", label: "Téléphone", required: false },
          {
            name: "interet",
            type: "select",
            label: "Intérêt",
            options: ["Répondeur IA", "Chatbot IA", "Automatisation", "Site internet", "Formation", "Autre"],
            required: false,
          },
          { name: "message", type: "textarea", label: "Message", required: true }
        ],
        submit: { label: "Envoyer ma demande" }
      },
      contact_info: {
        email: "oisans.expert.ia@gmail.com",
        website: "https://www.oisans-expert-ia.fr",
        location: "Le Bourg d'Oisans, 38520",
        phone: "+33 9 72 21 32 94"
      }
    }
};

export const CASE_STUDIES_DATA: CaseStudy[] = [
    {
        client: "Hôtel Le Sommet",
        title: "Automatisation de la réception et qualification des appels entrants",
        challenge: "L'hôtel recevait un grand volume d'appels pour des questions récurrentes (horaires, disponibilité, services), surchargeant la réception et menant à des appels manqués pendant les heures de pointe.",
        solution: "Mise en place d'un Répondeur IA capable de répondre aux questions fréquentes 24/7, de prendre des messages détaillés et de transférer uniquement les appels urgents ou complexes à l'équipe.",
        results: [
            "80% des appels de routine gérés sans intervention humaine.",
            "0 appel manqué depuis l'installation.",
            "Satisfaction client en hausse de 25% (moins d'attente).",
        ],
        imageUrl: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1770&auto=format&fit=crop",
    },
    {
        client: "Artisan du Bois",
        title: "Optimisation de la génération de devis et du suivi client",
        challenge: "Le processus de création de devis était manuel, chronophage et source d'erreurs. Le suivi des prospects était irrégulier, entraînant une perte d'opportunités.",
        solution: "Création d'une automatisation connectant le formulaire de contact du site web à un tableur intelligent (Google Sheets) et un CRM. L'IA pré-remplit les devis, envoie des emails de suivi automatiques et alerte l'artisan pour les relances.",
        results: [
            "Temps de création d'un devis divisé par 4.",
            "Taux de conversion des prospects augmenté de 40%.",
            "10 heures de travail administratif économisées par semaine.",
        ],
        imageUrl: "https://i.imgur.com/waJdQgy.jpeg",
    }
];

export const BLOG_POSTS_DATA: BlogPost[] = [
    {
        slug: "comment-choisir-sa-formation-ia-5-criteres",
        title: "Comment choisir sa formation IA ? 5 critères pour ne pas se tromper",
        excerpt: "Le marché des formations IA explose, mais toutes ne se valent pas. Programme, intervenants, approche pratique... Nous vous donnons 5 critères essentiels pour choisir la formation qui correspond vraiment à vos besoins et vous apportera des compétences concrètes.",
        author: "Ada Lovelace",
        date: "15 octobre 2024",
        imageUrl: "https://images.unsplash.com/photo-1542744095-291d1f67b221?q=80&w=1200&auto=format&fit=crop",
        content: `
<p>L'intelligence artificielle est partout, et avec elle, une multitude de formations qui promettent de vous rendre expert en quelques heures. Mais comment naviguer dans cette offre abondante et choisir une formation qui aura un impact réel sur votre carrière ou votre entreprise ? Voici 5 critères à examiner de près.</p>
<h3>1. L'approche est-elle pratique et orientée "cas d'usage" ?</h3>
<p>La théorie, c'est bien, mais l'IA est avant tout une discipline qui s'apprend par la pratique. Une bonne formation doit se concentrer sur des cas d'usage concrets et des ateliers pratiques. Vous devez repartir en sachant comment appliquer ce que vous avez appris à VOS problématiques. Méfiez-vous des programmes trop théoriques qui survolent les concepts sans jamais les mettre en application.</p>
<h3>2. Le programme est-il adapté à votre niveau ?</h3>
<p>Il existe des formations pour tous les niveaux : 'Découverte' pour les débutants, 'Avancée' pour ceux qui maîtrisent les bases, et 'Expert' pour les profils techniques. Assurez-vous que le programme correspond à votre point de départ. Une formation trop simple sera une perte de temps, une formation trop complexe vous découragera.</p>
<ul>
    <li><strong>Débutant :</strong> Cherchez des formations qui démystifient le vocabulaire et se concentrent sur l'utilisation d'outils existants (comme ChatGPT).</li>
    <li><strong>Intermédiaire :</strong> Visez des programmes qui abordent la création de solutions simples (GPTs personnalisés, automatisations).</li>
</ul>
<h3>3. Qui sont les formateurs ?</h3>
<p>Un bon formateur n'est pas seulement quelqu'un qui connaît bien son sujet, mais quelqu'un qui le pratique au quotidien. Renseignez-vous sur l'expérience des intervenants. Sont-ils des consultants qui déploient des solutions IA pour des clients ? Des entrepreneurs qui ont intégré l'IA dans leur business ? Leur expérience du terrain est un gage de qualité et de pertinence.</p>
<h3>4. Le format est-il flexible et engageant ?</h3>
<p>Que ce soit en présentiel, en ligne, sur une demi-journée ou plusieurs jours, le format doit vous convenir. Mais au-delà de ça, la formation doit favoriser l'interaction. Privilégiez les petits groupes qui permettent de poser des questions et d'échanger avec le formateur et les autres participants. L'apprentissage est plus efficace quand il est collaboratif.</p>
<h3>5. Que se passe-t-il après la formation ?</h3>
<p>Une formation ponctuelle, c'est un bon début. Mais l'IA évolue si vite que le support post-formation est crucial. La formation propose-t-elle un accès à des ressources (slides, enregistrements), une communauté d'anciens élèves, ou un contact pour poser des questions après coup ? Cet accompagnement est souvent ce qui fait la différence sur le long terme.</p>
<p>En conclusion, ne choisissez pas une formation IA uniquement sur un titre ou une promesse. Prenez le temps d'analyser ces cinq points pour faire un investissement qui portera ses fruits et vous donnera une véritable longueur d'avance.</p>
        `
    },
    {
        slug: "pourquoi-se-former-a-ia-2024",
        title: "Pourquoi se former à l'IA en 2024 ? L'atout indispensable pour votre carrière.",
        excerpt: "L'intelligence artificielle n'est plus une option. De la PME au grand groupe, comprendre l'IA est devenu un avantage compétitif majeur. Découvrez pourquoi une formation en IA est le meilleur investissement que vous puissiez faire pour votre avenir professionnel.",
        author: "John McCarthy",
        date: "05 octobre 2024",
        imageUrl: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=1200&auto=format&fit=crop",
        content: `
<p>Il y a quelques années, la maîtrise des outils bureautiques est devenue une compétence de base. Aujourd'hui, l'intelligence artificielle suit le même chemin, mais à une vitesse fulgurante. Que vous soyez dirigeant, employé, ou indépendant, ignorer l'IA n'est plus une option. Se former est devenu une nécessité stratégique. Voici pourquoi.</p>
<h3>1. Augmenter son employabilité et sa valeur sur le marché</h3>
<p>Les offres d'emploi mentionnant des compétences en IA ont explosé. Les entreprises ne cherchent pas seulement des experts en IA, mais aussi des professionnels (marketing, finance, RH...) capables de dialoguer avec ces technologies et de les intégrer dans leur métier. Avoir une certification ou simplement une connaissance pratique de l'IA sur votre CV vous distingue immédiatement.</p>
<h3>2. Gagner en productivité et en efficacité</h3>
<p>C'est l'avantage le plus immédiat. Une formation en IA vous apprend à utiliser des outils qui peuvent automatiser les tâches répétitives et chronophages. </p>
<ul>
    <li>Rédiger des emails et des comptes-rendus en quelques secondes.</li>
    <li>Analyser de grands volumes de données ou de documents pour en extraire l'essentiel.</li>
    <li>Générer des idées créatives pour une campagne marketing.</li>
</ul>
<p>Ces gains de temps vous permettent de vous concentrer sur des tâches à plus haute valeur ajoutée, comme la stratégie ou la relation client.</p>
<h3>3. Mieux piloter son entreprise ou son équipe</h3>
<p>Pour un manager ou un dirigeant, comprendre l'IA est crucial pour prendre des décisions éclairées. Une formation vous donnera les clés pour :</p>
<ul>
    <li>Identifier les opportunités d'intégration de l'IA dans vos processus.</li>
    <li>Évaluer la faisabilité et le retour sur investissement d'un projet IA.</li>
    <li>Dialoguer avec des prestataires techniques et comprendre les enjeux.</li>
</ul>
<h3>4. Anticiper les transformations de son secteur</h3>
<p>L'IA va transformer tous les secteurs d'activité, sans exception. Se former, c'est acquérir une grille de lecture pour comprendre ces changements, anticiper les menaces et, surtout, saisir les nouvelles opportunités pour votre entreprise ou votre carrière. Ceux qui attendent seront simplement spectateurs de la transformation ; ceux qui se forment en seront les acteurs.</p>
<p>Se former à l'IA en 2024 n'est pas un luxe, c'est un investissement fondamental pour rester pertinent et compétitif dans le monde de demain. La bonne nouvelle ? Il n'est pas nécessaire de devenir un expert en code. Des formations accessibles, comme celles que nous proposons, peuvent vous donner des compétences pratiques en quelques heures seulement.</p>
        `
    },
    {
        slug: "ia-productivite-meilleurs-outils-2024",
        title: "IA et Productivité : 10 Outils pour Automatiser Votre Quotidien en 2024",
        excerpt: "Gagnez des heures chaque semaine en intégrant l'IA dans vos tâches quotidiennes. De la gestion d'emails à la prise de notes, découvrez notre sélection d'outils qui vont transformer votre façon de travailler.",
        author: "John McCarthy",
        date: "20 septembre 2024",
        imageUrl: "https://images.unsplash.com/photo-1677756119517-756a188d2d94?q=80&w=1200&auto=format&fit=crop",
        content: `
<p>L'intelligence artificielle n'est pas seulement un concept futuriste ; c'est une réalité tangible qui peut décupler votre productivité dès aujourd'hui. Voici une sélection d'outils, basés sur l'IA, qui peuvent automatiser, simplifier et améliorer votre travail quotidien.</p>
<h3>1. Gestion de Projets et Tâches</h3>
<p>Des outils comme <strong>Motion</strong> ou <strong>Notion AI</strong> utilisent l'IA pour organiser automatiquement vos tâches, planifier votre journée en fonction de vos priorités et de vos échéances, et même rédiger des comptes-rendus de réunion.</p>
<ul>
    <li><strong>Cas d'usage :</strong> Planification intelligente de votre emploi du temps, création de listes de tâches dynamiques.</li>
</ul>
<h3>2. Rédaction et Communication</h3>
<p>Au-delà de <strong>ChatGPT</strong>, des outils comme <strong>Jasper</strong> ou <strong>Copy.ai</strong> sont spécialisés dans la création de contenu marketing (emails, articles de blog, posts pour les réseaux sociaux). Des correcteurs comme <strong>Grammarly</strong> utilisent l'IA pour améliorer non seulement l'orthographe, mais aussi le style et le ton de vos écrits.</p>
<ul>
    <li><strong>Cas d'usage :</strong> Rédiger un premier jet d'email promotionnel, corriger un rapport important.</li>
</ul>
<h3>3. Prise de Notes et Synthèse</h3>
<p>Des applications comme <strong>Otter.ai</strong> ou <strong>Fireflies.ai</strong> peuvent rejoindre vos réunions en visioconférence, les transcrire en temps réel, et même en générer un résumé avec les points clés et les actions à mener. C'est la fin des prises de notes manuelles !</p>
<ul>
    <li><strong>Cas d'usage :</strong> Obtenir un compte-rendu complet d'une réunion que vous avez manquée.</li>
</ul>
<h3>4. Gestion des E-mails</h3>
<p><strong>SaneBox</strong> utilise l'IA pour trier votre boîte de réception, en séparant les emails importants des newsletters et notifications. Il apprend de vos habitudes pour devenir de plus en plus précis, vous assurant de ne plus jamais manquer un message crucial.</p>
<ul>
    <li><strong>Cas d'usage :</strong> Atteindre le "zéro inbox" et se concentrer sur les communications prioritaires.</li>
</ul>
<p>En adoptant un ou plusieurs de ces outils, vous ne faites pas que gagner du temps. Vous libérez de l'espace mental pour vous concentrer sur la stratégie, la créativité et les relations humaines — des domaines où votre expertise est irremplaçable.</p>
        `
    },
    {
        slug: "ia-marketing-pme",
        title: "Marketing et IA : 5 Stratégies Puissantes pour les PME",
        excerpt: "L'IA n'est plus un luxe pour les grandes entreprises. Découvrez 5 stratégies concrètes pour utiliser l'intelligence artificielle afin de mieux cibler vos clients, créer du contenu engageant et optimiser vos campagnes marketing, même avec un budget limité.",
        author: "Alain Turing",
        date: "25 août 2024",
        imageUrl: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1200&auto=format&fit=crop",
        content: `
<p>Pour une PME, chaque euro investi en marketing doit compter. L'intelligence artificielle offre des outils pour maximiser le retour sur investissement de vos efforts. Voici 5 stratégies accessibles pour intégrer l'IA dans votre marketing.</p>
<h3>1. Personnalisation de l'Expérience Client</h3>
<p>L'IA peut analyser le comportement de navigation sur votre site, l'historique d'achat et les données de votre CRM pour proposer des recommandations de produits personnalisées, des contenus adaptés et des offres ciblées. Cela augmente l'engagement et les taux de conversion.</p>
<h3>2. Création de Contenu à Grande Échelle</h3>
<p>Le manque de temps est un frein majeur à la création de contenu. Utilisez l'IA pour brainstormer des idées d'articles de blog, rédiger des brouillons pour vos posts sur les réseaux sociaux, ou créer des variations de textes publicitaires. L'humain reste essentiel pour la touche finale, mais l'IA accélère massivement le processus.</p>
<h3>3. Optimisation du SEO</h3>
<p>Des outils IA comme SurferSEO ou MarketMuse peuvent analyser les pages les mieux classées pour un mot-clé donné et vous fournir des recommandations précises sur la structure de votre article, les termes à inclure et les questions auxquelles répondre. C'est un guide précieux pour créer du contenu qui plaît à Google et à vos lecteurs.</p>
<h3>4. Automatisation des Campagnes d'Emailing</h3>
<p>L'IA peut vous aider à déterminer les meilleurs moments pour envoyer vos emails, à segmenter votre audience de manière plus fine et même à rédiger des objets d'email plus percutants pour améliorer vos taux d'ouverture.</p>
<h3>5. Analyse Prédictive</h3>
<p>Même à petite échelle, l'IA peut analyser vos données de vente pour identifier les clients les plus susceptibles d'acheter à nouveau ou, à l'inverse, ceux qui risquent de partir. Cela vous permet de lancer des actions de fidélisation ciblées et proactives.</p>
<p>L'intégration de l'IA dans votre marketing n'a pas besoin d'être un projet colossal. Commencez par une de ces stratégies, mesurez les résultats, et développez progressivement votre expertise. C'est l'une des manières les plus efficaces de rester compétitif dans le paysage digital actuel.</p>
        `
    },
    {
        slug: "ethique-ia-confiance-entreprise",
        title: "Éthique de l'IA : Pourquoi la confiance est votre plus grand atout",
        excerpt: "Au-delà de la performance, l'éthique s'impose comme le pilier de l'adoption de l'IA. Découvrez comment les notions de biais, de transparence et de responsabilité sont cruciales pour bâtir une relation de confiance durable avec vos clients.",
        author: "Grace Hopper",
        date: "05 août 2024",
        imageUrl: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?q=80&w=1296&auto=format&fit=crop",
        content: `
<p>Alors que l'intelligence artificielle s'intègre de plus en plus dans nos vies et nos entreprises, une question devient primordiale : comment s'assurer que cette technologie est utilisée de manière juste, transparente et responsable ? L'éthique de l'IA n'est pas un concept abstrait réservé aux philosophes ; c'est un impératif commercial qui conditionne la confiance de vos clients et la pérennité de votre activité.</p>
<h3>1. Le Biais : Le Fantôme dans la Machine</h3>
<p>Une IA est le reflet des données sur lesquelles elle a été entraînée. Si ces données contiennent des biais historiques ou sociaux (conscients ou non), l'IA les amplifiera. Pour une entreprise, cela peut se traduire par des décisions de recrutement discriminatoires, des recommandations de produits non pertinentes ou un service client qui traite différemment certains groupes de personnes. Lutter contre le biais, c'est s'assurer que vos outils IA sont équitables et servent tous vos clients sans distinction.</p>
<h3>2. La Transparence : Ouvrir la Boîte Noire</h3>
<p>De nombreux systèmes d'IA fonctionnent comme des "boîtes noires" : ils fournissent un résultat sans expliquer le raisonnement qui y a mené. La transparence, ou l'explicabilité, consiste à pouvoir comprendre et justifier les décisions prises par l'IA. Pour vos clients, c'est la garantie qu'une décision les affectant (comme le refus d'un crédit ou une recommandation de santé) n'est pas arbitraire. Pour votre entreprise, c'est un outil essentiel de débogage, d'amélioration continue et de conformité réglementaire.</p>
<h3>3. Le Développement Responsable : Bâtir sur des Fondations Solides</h3>
<p>L'IA responsable est une approche qui intègre des considérations éthiques à chaque étape du cycle de vie d'un projet, de la conception au déploiement et à la maintenance. Cela inclut :</p>
<ul>
    <li><strong>La confidentialité des données :</strong> S'assurer que les données des utilisateurs sont collectées, stockées et utilisées de manière sécurisée et consentie.</li>
    <li><strong>La robustesse et la sécurité :</strong> Créer des systèmes fiables qui résistent aux manipulations et aux pannes.</li>
    <li><strong>La supervision humaine :</strong> Maintenir un contrôle humain sur les systèmes critiques pour pouvoir intervenir et corriger les erreurs.</li>
</ul>
<p>En conclusion, investir dans une IA éthique n'est pas un frein à l'innovation, mais un accélérateur de confiance. Une entreprise qui démontre son engagement pour une IA juste et transparente ne se contente pas de respecter ses clients ; elle construit un avantage concurrentiel durable dans un monde de plus en plus numérisé.</p>
        `
    },
    {
        slug: "5-signes-entreprise-prete-pour-ia",
        title: "5 signes que votre entreprise est prête pour l'IA (et comment démarrer)",
        excerpt: "L'intelligence artificielle n'est plus réservée aux géants de la tech. Découvrez les signes qui montrent que votre PME peut en bénéficier dès aujourd'hui et les premières étapes simples pour vous lancer.",
        author: "Alain Turing",
        date: "15 juillet 2024",
        imageUrl: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&auto=format&fit=crop",
        content: `
<p>L'intelligence artificielle peut sembler intimidante, mais de nombreuses entreprises, même les plus petites, sont déjà prêtes à en tirer parti sans le savoir. Si vous vous reconnaissez dans plusieurs de ces points, il est peut-être temps de sauter le pas.</p>
<h3>1. Vous êtes submergé par les tâches répétitives</h3>
<p>La saisie de données, la gestion des e-mails, la planification de rendez-vous... Si ces tâches consomment une part importante de votre temps et de celui de vos employés, l'automatisation par l'IA peut être une véritable bouffée d'air frais.</p>
<h3>2. Vos clients posent toujours les mêmes questions</h3>
<p>Votre service client passe son temps à répondre aux questions sur vos horaires, vos tarifs ou l'état d'une commande ? Un chatbot ou un répondeur intelligent peut gérer ces demandes 24/7, libérant votre équipe pour des problèmes plus complexes.</p>
<h3>3. Vous manquez des opportunités de vente</h3>
<p>Un appel manqué est un client potentiel perdu. Si vous ne pouvez pas répondre au téléphone en dehors des heures de bureau, un répondeur IA peut qualifier le prospect et même prendre un rendez-vous pour vous.</p>
<h3>4. Vous collectez des données sans les exploiter</h3>
<p>Vous avez des listes de clients, des historiques d'achats, des données de votre site web ? L'IA peut analyser ces informations pour identifier des tendances, prédire les comportements des clients et personnaliser votre marketing.</p>
<h3>5. Vous voulez prendre une longueur d'avance sur la concurrence</h3>
<p>Adopter l'IA n'est pas seulement une question d'efficacité ; c'est aussi un avantage concurrentiel. Proposer une expérience client plus fluide, être plus réactif et prendre des décisions basées sur les données peut faire toute la différence.</p>
<h3>Comment démarrer ?</h3>
<p>Commencez petit. Identifiez UNE seule tâche douloureuse et répétitive dans votre entreprise. C'est le candidat idéal pour votre premier projet d'automatisation. Contactez un expert pour évaluer la faisabilité et le retour sur investissement. Vous serez surpris de la rapidité avec laquelle les premiers résultats peuvent être obtenus.</p>
        `
    },
    {
        slug: "chatbot-vs-repondeur-ia-lequel-choisir",
        title: "Chatbot vs Répondeur IA : Lequel choisir pour votre entreprise ?",
        excerpt: "Ils semblent similaires, mais répondent à des besoins différents. Nous décomposons les forces et les faiblesses de chaque outil pour vous aider à choisir la solution la plus pertinente pour votre activité.",
        author: "Ada Lovelace",
        date: "28 juin 2024",
        imageUrl: "https://images.unsplash.com/photo-1599658880436-c61792e70672?q=80&w=1200&auto=format&fit=crop",
        content: `
<p>Chatbot et Répondeur IA sont deux outils puissants pour améliorer la relation client, mais ils opèrent sur des canaux différents. Voici comment les distinguer pour faire le bon choix.</p>
<h3>Le Chatbot IA : Votre assistant digital écrit</h3>
<p>Le chatbot vit sur votre site web, sur Messenger, WhatsApp ou d'autres plateformes de messagerie. Il est idéal pour :</p>
<ul>
    <li><strong>Répondre aux FAQ :</strong> Il peut fournir des informations instantanées sur vos produits, services, politiques de retour, etc.</li>
    <li><strong>Générer des leads :</strong> Il peut engager les visiteurs de votre site, collecter leurs coordonnées et qualifier leurs besoins.</li>
    <li><strong>Prendre des rendez-vous :</strong> Intégré à votre agenda, il peut proposer des créneaux et confirmer des réservations.</li>
</ul>
<p><strong>Quand le choisir ?</strong> Si une grande partie de vos interactions clients se fait par écrit ou via votre site web, et si vous souhaitez un outil proactif pour engager les visiteurs.</p>
<h3>Le Répondeur IA : Votre réceptionniste téléphonique intelligent</h3>
<p>Le Répondeur IA, ou 'voicebot', prend le relais sur votre ligne téléphonique. Il est parfait pour :</p>
<ul>
    <li><strong>Gérer les appels entrants :</strong> Il assure une réponse 24/7, éliminant les appels manqués.</li>
    <li><strong>Qualifier et router les appels :</strong> Il comprend l'intention de l'appelant (ex: "je veux parler au service compta", "c'est une urgence") et dirige l'appel vers la bonne personne ou prend un message détaillé.</li>
    <li><strong>Gérer les tâches simples par téléphone :</strong> Confirmer un rendez-vous, donner des horaires d'ouverture, etc.</li>
</ul>
<p><strong>Quand le choisir ?</strong> Si le téléphone est votre principal canal de contact, si vous manquez souvent des appels ou si votre standard est régulièrement saturé.</p>
<h3>Le verdict : L'un ou l'autre ? Ou les deux ?</h3>
<p>Le meilleur choix dépend de vos canaux de communication privilégiés. Une entreprise de e-commerce bénéficiera énormément d'un chatbot, tandis qu'un cabinet médical ou un artisan trouvera plus de valeur dans un répondeur IA. Souvent, la stratégie la plus efficace est d'utiliser les deux pour créer une expérience client omnicanale et cohérente, où que se trouve votre client.</p>
        `
    }
];

export const RECORDINGS_DATA: Recording[] = [
    {
        id: 'rec-001',
        caller: "06 XX XX XX 89",
        date: "22/07/2024 - 14:32",
        duration: "01:12",
        audioUrl: "https://www.w3schools.com/html/horse.ogg",
    },
    {
        id: 'rec-002',
        caller: "04 XX XX XX 21",
        date: "22/07/2024 - 11:05",
        duration: "00:45",
        audioUrl: "https://www.w3schools.com/html/horse.ogg",
    },
    {
        id: 'rec-003',
        caller: "Numéro masqué",
        date: "21/07/2024 - 18:54",
        duration: "02:30",
        audioUrl: "https://www.w3schools.com/html/horse.ogg",
    }
];