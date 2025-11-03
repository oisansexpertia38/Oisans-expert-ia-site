import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { HEADER_DATA } from '../constants.ts';
import CtaButton from './CtaButton.tsx';

const Logo = () => (
    <div className="flex items-center space-x-3">
        <span className="font-heading font-bold text-2xl text-secondary whitespace-nowrap">{HEADER_DATA.logo_alt}</span>
    </div>
);

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `font-medium text-base transition-colors duration-300 ${isActive ? 'text-primary' : 'text-secondary hover:text-primary'}`;

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-sm shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <NavLink to="/" aria-label="Oisans Expert IA - Page d'accueil">
            <Logo />
          </NavLink>
          <nav className="hidden md:flex items-center space-x-8">
            {HEADER_DATA.menu.map((item) => (
              <div key={item.label} className="relative group">
                <NavLink to={item.href} className={navLinkClasses}>
                  {item.label}
                  {item.children && (
                    <svg className="inline-block w-4 h-4 ml-1 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  )}
                </NavLink>
                {item.children && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-white rounded-md shadow-lg py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 invisible group-hover:visible z-50">
                    {item.children.map(child => (
                      <NavLink key={child.label} to={child.href} className="block px-4 py-2 text-secondary hover:bg-neutralLight hover:text-primary">
                        {child.label}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
          <div className="hidden md:flex items-center space-x-6">
            <div className="text-right">
                <a href="tel:+33972213294" className="font-semibold text-secondary hover:text-primary transition-colors duration-300">
                    +33 9 72 21 32 94
                </a>
                <p className="text-xs text-neutralDark/70">Appel gratuit - <span className="font-semibold text-warning">En maintenance</span></p>
            </div>
            <CtaButton href={HEADER_DATA.cta.href}>{HEADER_DATA.cta.label}</CtaButton>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-secondary focus:outline-none"
              aria-label="Ouvrir le menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-20 left-0 w-full bg-white shadow-lg transition-transform duration-300 ease-in-out ${isOpen ? 'translate-y-0' : '-translate-y-[150%]'}`}>
        <nav className="flex flex-col items-center space-y-4 py-8">
          {HEADER_DATA.menu.map((item) => (
            <React.Fragment key={item.label}>
              <NavLink to={item.href} className={navLinkClasses} onClick={() => setIsOpen(false)}>
                {item.label}
              </NavLink>
              {item.children && (
                <div className="flex flex-col items-center space-y-2 pl-4">
                  {item.children.map(child => (
                     <NavLink key={child.label} to={child.href} className="text-sm text-neutralDark/80 hover:text-primary" onClick={() => setIsOpen(false)}>
                       {child.label}
                     </NavLink>
                  ))}
                </div>
              )}
            </React.Fragment>
          ))}
          <div className="text-center mt-6">
            <a href="tel:+33972213294" className="font-semibold text-secondary hover:text-primary transition-colors duration-300 text-lg">
                +33 9 72 21 32 94
            </a>
            <p className="text-sm text-neutralDark/70 mt-1">Appel gratuit - <span className="font-semibold text-warning">En maintenance</span></p>
          </div>
          <CtaButton href={HEADER_DATA.cta.href} className="mt-4">{HEADER_DATA.cta.label}</CtaButton>
        </nav>
      </div>
    </header>
  );
};

export default Header;