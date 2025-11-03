import React from 'react';
import { Link } from 'react-router-dom';

interface CtaButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
}

const CtaButton: React.FC<CtaButtonProps> = ({ href, children, variant = 'primary', className = '' }) => {
  const baseClasses = 'inline-block px-8 py-3 rounded-full font-semibold text-center transition-all duration-300 transform hover:scale-105 shadow-lg';
  
  const variantClasses = {
    primary: 'bg-primary text-white hover:brightness-95',
    secondary: 'bg-secondary text-white hover:bg-neutralDark',
  };

  return (
    <Link to={href} className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      {children}
    </Link>
  );
};

export default CtaButton;