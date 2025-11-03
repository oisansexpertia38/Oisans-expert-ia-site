

import React from 'react';
import { Link } from 'react-router-dom';
import { FOOTER_DATA } from '../constants.ts';

const Logo = () => (
    <div className="flex items-center space-x-3">
        <span className="font-heading font-bold text-2xl text-white">Oisans Expert IA</span>
    </div>
);

const SocialIcon: React.FC<{ name: string }> = ({ name }) => {
    // FIX: Replaced JSX.Element with React.ReactElement to fix "Cannot find namespace 'JSX'" error.
    const icons: { [key: string]: React.ReactElement } = {
        LinkedIn: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
            </svg>
        ),
        Facebook: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v2.385z" />
            </svg>
        ),
        Instagram: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                 <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919 1.266-.058 1.644-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z"/>
            </svg>
        ),
        TikTok: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21.42,6.92a6.3,6.3,0,0,0-5.46-3.34h0a6.3,6.3,0,0,0-5.46,3.34v8a4.61,4.61,0,1,1-3.9-4.52V8.42a8.61,8.61,0,1,0,9.36,8.55V8.45A2.22,2.22,0,0,0,15,6.72a2.33,2.33,0,0,0-2.08,1.15h0V6.92Z"/>
            </svg>
        ),
    };
    return icons[name] || null;
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className="md:col-span-1 lg:col-span-2 mb-6 md:mb-0">
            <Logo />
            <p className="mt-4 text-neutralLight/70 max-w-sm">L’intelligence artificielle au service de vos sommets.</p>
            {FOOTER_DATA.socials && (
              <div className="mt-6 flex space-x-6">
                {FOOTER_DATA.socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Suivez-nous sur ${social.name}`}
                    className="text-neutralLight/70 hover:text-primary transition-colors duration-300"
                  >
                    <SocialIcon name={social.name} />
                  </a>
                ))}
              </div>
            )}
          </div>
          {FOOTER_DATA.columns.map((column) => (
            <div key={column.title}>
              <h3 className="font-heading font-semibold tracking-wider uppercase text-white">{column.title}</h3>
              <ul className="mt-4 space-y-4">
                {column.links.map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith('tel:') ? (
                        <div>
                           <a href={link.href} className="text-neutralLight/70 hover:text-primary transition-colors duration-300">
                             {link.label}
                           </a>
                           <p className="text-xs text-neutralLight/60 mt-1">Appel gratuit - <span className="font-semibold text-warning">En maintenance</span></p>
                        </div>
                    ) : link.href.startsWith('mailto:') || link.href.startsWith('http') ? (
                       <a href={link.href} className="text-neutralLight/70 hover:text-primary transition-colors duration-300" target="_blank" rel="noopener noreferrer">
                         {link.label}
                       </a>
                    ) : (
                       <Link to={link.href} className="text-neutralLight/70 hover:text-primary transition-colors duration-300">
                         {link.label}
                       </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 border-t border-neutralDark/50 pt-8 text-center text-sm text-neutralLight/50">
          <p>&copy; {new Date().getFullYear()} Oisans Expert IA. Tous droits réservés.</p>
          <p className="mt-2">{FOOTER_DATA.note}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;