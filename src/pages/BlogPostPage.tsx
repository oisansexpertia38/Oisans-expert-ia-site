import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { BLOG_POSTS_DATA } from '../constants.ts';
import NotFoundPage from './NotFoundPage.tsx';
import CtaButton from '../components/CtaButton.tsx';
import SeoMeta from '../components/SeoMeta.tsx';

// Helper function to parse French month names into a valid Date object
const parseFrenchDate = (dateString: string): Date | null => {
    const months: { [key: string]: number } = {
        'janvier': 0, 'février': 1, 'mars': 2, 'avril': 3, 'mai': 4, 'juin': 5,
        'juillet': 6, 'août': 7, 'septembre': 8, 'octobre': 9, 'novembre': 10, 'décembre': 11
    };
    const parts = dateString.toLowerCase().split(' '); // e.g., ["15", "octobre", "2024"]
    if (parts.length === 3) {
        const day = parseInt(parts[0], 10);
        const monthName = parts[1];
        const monthIndex = months[monthName];
        const year = parseInt(parts[2], 10);
        if (!isNaN(day) && monthIndex !== undefined && !isNaN(year)) {
            return new Date(Date.UTC(year, monthIndex, day));
        }
    }
    // Fallback for different locales or formats if needed, otherwise return null
    const parsedDate = new Date(dateString);
    if (!isNaN(parsedDate.getTime())) {
        return parsedDate;
    }
    
    return null;
};


const BlogPostPage: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const post = BLOG_POSTS_DATA.find(p => p.slug === slug);

    if (!post) {
        return <NotFoundPage />;
    }
    
    const canonicalUrl = `https://www.oisans-expert-ia.fr/#/blog/${post.slug}`;
    const publishedDate = parseFrenchDate(post.date);

    const schema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Article",
                "mainEntityOfPage": {
                    "@type": "WebPage",
                    "@id": canonicalUrl
                },
                "headline": post.title,
                "description": post.excerpt,
                "image": post.imageUrl,
                "author": {
                    "@type": "Person",
                    "name": post.author
                },
                "publisher": {
                    "@type": "Organization",
                    "name": "Oisans Expert IA",
                    "logo": {
                        "@type": "ImageObject",
                        "url": "https://www.oisans-expert-ia.fr/logo.png" 
                    }
                },
                "datePublished": publishedDate ? publishedDate.toISOString() : undefined,
            },
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    {
                        "@type": "ListItem",
                        "position": 1,
                        "name": "Accueil",
                        "item": "https://www.oisans-expert-ia.fr/"
                    },
                    {
                        "@type": "ListItem",
                        "position": 2,
                        "name": "Blog",
                        "item": "https://www.oisans-expert-ia.fr/#/blog"
                    },
                    {
                        "@type": "ListItem",
                        "position": 3,
                        "name": post.title
                    }
                ]
            }
        ]
    };

    return (
        <div className="bg-white">
            <SeoMeta 
                title={`${post.title} | Oisans Expert IA`}
                description={post.excerpt}
                canonical={canonicalUrl}
                schema={schema}
            />
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl py-16 sm:py-20">
                <div className="text-center mb-12">
                    <Link to="/blog" className="text-primary hover:underline font-semibold">&larr; Retour au blog</Link>
                    <h1 className="text-3xl md:text-5xl font-bold font-heading text-secondary mt-4">{post.title}</h1>
                    <p className="mt-4 text-neutralDark/70">{post.author} &bull; {post.date}</p>
                </div>

                <img 
                    src={post.imageUrl} 
                    alt={`Image principale pour l'article : ${post.title}`}
                    className="w-full h-auto max-h-[500px] object-cover rounded-2xl shadow-lg mb-12" 
                />

                <div 
                    className="blog-content max-w-none mx-auto text-neutralDark/90"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                >
                </div>
                 {/* CTA Section */}
                <section className="bg-neutralLight p-8 sm:p-12 rounded-2xl mt-20 text-center">
                    <h2 className="text-2xl md:text-3xl font-bold font-heading text-secondary">Prêt à mettre l'IA au service de votre entreprise ?</h2>
                    <p className="mt-4 text-lg max-w-2xl mx-auto text-neutralDark/80">Discutons de votre projet. Nous vous fournirons une proposition claire et sur mesure, sans engagement.</p>
                    <div className="mt-8">
                        <CtaButton href="/contact">Obtenir un devis personnalisé</CtaButton>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default BlogPostPage;