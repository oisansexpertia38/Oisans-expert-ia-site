import React, { useEffect } from 'react';

interface SeoMetaProps {
  title: string;
  description: string;
  canonical: string;
  schema?: object;
}

// Helper function to create or update a meta tag
const setMetaTag = (attr: 'name' | 'property', value: string, content: string) => {
  let element = document.querySelector(`meta[${attr}='${value}']`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attr, value);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
};

// Helper function to create or update a link tag
const setLinkTag = (rel: string, href: string) => {
    let element = document.querySelector(`link[rel='${rel}']`) as HTMLLinkElement;
    if (!element) {
        element = document.createElement('link');
        element.setAttribute('rel', rel);
        document.head.appendChild(element);
    }
    element.href = href;
}

const SeoMeta: React.FC<SeoMetaProps> = ({ title, description, canonical, schema }) => {
  
  useEffect(() => {
    // 1. Update Title
    document.title = title;

    // 2. Update Meta Tags
    setMetaTag('name', 'description', description);

    // 3. Update Open Graph Tags
    setMetaTag('property', 'og:title', title);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:url', canonical);
    
    // 4. Update Twitter Card Tags
    setMetaTag('name', 'twitter:title', title);
    setMetaTag('name', 'twitter:description', description);
    setMetaTag('name', 'twitter:url', canonical);
    
    // 5. Update Canonical URL
    setLinkTag('canonical', canonical);

    // FIX: Refactor schema script handling to avoid TypeScript error.
    // This approach is cleaner and avoids type casting issues by removing the old script
    // and creating a new, correctly-typed one when the schema is present.
    const scriptId = 'json-ld-schema';
    const existingScript = document.getElementById(scriptId);
    if (existingScript) {
      existingScript.remove();
    }
    
    if (schema) {
      const scriptElement = document.createElement('script');
      scriptElement.id = scriptId;
      scriptElement.type = 'application/ld+json';
      scriptElement.innerHTML = JSON.stringify(schema);
      document.head.appendChild(scriptElement);
    }
    
  }, [title, description, canonical, schema]);

  return null; // This component does not render anything
};

export default SeoMeta;
