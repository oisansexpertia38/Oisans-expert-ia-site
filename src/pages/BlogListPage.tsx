import React from 'react';
import { Link } from 'react-router-dom';
import { BLOG_POSTS_DATA, PAGES_DATA } from '../constants.ts';
import CtaButton from '../components/CtaButton.tsx';
import SeoMeta from '../components/SeoMeta.tsx';

const BlogListPage: React.FC = () => {
    
    const pageMeta = PAGES_DATA.blog.meta;

    const schema = {
      "@context": "https://schema.org",
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
        }
      ]
    };
    
    return (
        <div className="bg-neutralLight">
            <SeoMeta 
                title={pageMeta.title}
                description={pageMeta.description}
                canonical="https://www.oisans-expert-ia.fr/#/blog"
                schema={schema}
            />
            {/* Hero Section */}
            <section className="relative text-white py-20 sm:py-28 overflow-hidden">
                <div 
                    className="absolute inset-0 bg-cover bg-center z-0" 
                    style={{ backgroundImage: "url(https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?q=80&w=1920&auto=format&fit=crop)" }}
                    aria-hidden="true"
                ></div>
                <div className="absolute inset-0 bg-black/60 z-0" aria-hidden="true"></div>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <h1 className="text-4xl md:text-5xl font-bold font-heading">Blog & Analyses</h1>
                    <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-neutralLight/90">Décryptage, conseils et tendances sur l'intelligence artificielle pour les entreprises.</p>
                </div>
            </section>

            {/* Blog Posts Grid */}
            <section className="py-16 sm:py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {BLOG_POSTS_DATA.map((post) => (
                            <Link to={`/blog/${post.slug}`} key={post.slug} className="block group">
                                <div className="bg-white rounded-xl shadow-md overflow-hidden h-full flex flex-col transition-all duration-300 transform group-hover:shadow-2xl group-hover:-translate-y-2">
                                    <img src={post.imageUrl} alt={`Image d'illustration pour l'article : ${post.title}`} className="w-full h-56 object-cover" loading="lazy" />
                                    <div className="p-8 flex flex-col flex-grow">
                                        <h2 className="text-xl font-bold font-heading text-secondary mb-2 group-hover:text-primary transition-colors">{post.title}</h2>
                                        <p className="text-neutralDark/80 mb-4 flex-grow">{post.excerpt}</p>
                                        <div className="text-sm text-neutralDark/60 mt-auto">
                                            <span>{post.author}</span> &bull; <span>{post.date}</span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-secondary py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                    <h2 className="text-3xl font-bold font-heading">Une question ? Un projet ?</h2>
                    <p className="mt-4 text-lg max-w-2xl mx-auto text-neutralLight/90">Nos experts sont là pour échanger sur vos problématiques et vous proposer des solutions concrètes.</p>
                    <div className="mt-8">
                        <CtaButton href="/contact">Contactez-nous</CtaButton>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BlogListPage;