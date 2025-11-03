import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { BLOG_POSTS_DATA } from '../constants.ts';
import NotFoundPage from './NotFoundPage.tsx';
import CtaButton from '../components/CtaButton.tsx';

const BlogPostPage: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const post = BLOG_POSTS_DATA.find(p => p.slug === slug);

    useEffect(() => {
        const setMetaTag = (attr: 'name' | 'property', value: string, content: string) => {
            let element = document.querySelector(`meta[${attr}="${value}"]`);
            if (!element) {
                element = document.createElement('meta');
                element.setAttribute(attr, value);
                document.head.appendChild(element);
            }
            element.setAttribute('content', content);
        };

        if (post) {
            document.title = `${post.title} - Oisans Expert IA`;
            setMetaTag('name', 'description', post.excerpt);
            
            // Open Graph tags for social sharing
            setMetaTag('property', 'og:title', post.title);
            setMetaTag('property', 'og:description', post.excerpt);
            setMetaTag('property', 'og:image', post.imageUrl);
            setMetaTag('property', 'og:type', 'article');
            setMetaTag('property', 'og:url', window.location.href);

        } else {
            document.title = 'Page non trouvée - Oisans Expert IA';
        }
    }, [post]);

    if (!post) {
        return <NotFoundPage />;
    }

    return (
        <div className="bg-white">
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