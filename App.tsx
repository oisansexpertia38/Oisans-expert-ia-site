


import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout.tsx';
import HomePage from './pages/HomePage.tsx';
import SolutionsPage from './pages/SolutionsPage.tsx';
import RepondeurPage from './pages/RepondeurPage.tsx';
import ChatbotPage from './pages/ChatbotPage.tsx';
import AutomatisationPage from './pages/AutomatisationPage.tsx';
import SitesInternetPage from './pages/SitesInternetPage.tsx';
import FormationsPage from './pages/FormationsPage.tsx';
import FormationProgramPage from './pages/FormationProgramPage.tsx';
import AboutPage from './pages/AboutPage.tsx';
import ContactPage from './pages/ContactPage.tsx';
import CaseStudiesPage from './pages/CaseStudiesPage.tsx';
import BlogListPage from './pages/BlogListPage.tsx';
import BlogPostPage from './pages/BlogPostPage.tsx';
import NotFoundPage from './pages/NotFoundPage.tsx';

// ScrollToTop component to scroll to the top of the page on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="solutions" element={<SolutionsPage />} />
          <Route path="repondeur-ia" element={<RepondeurPage />} />
          <Route path="chatbot-ia" element={<ChatbotPage />} />
          <Route path="automatisation-ia" element={<AutomatisationPage />} />
          <Route path="sites-internet" element={<SitesInternetPage />} />
          <Route path="formations-ia" element={<FormationsPage />} />
          <Route path="formations-ia/programme" element={<FormationProgramPage />} />
          <Route path="etudes-de-cas" element={<CaseStudiesPage />} />
          <Route path="blog" element={<BlogListPage />} />
          <Route path="blog/:slug" element={<BlogPostPage />} />
          <Route path="a-propos" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
		  <Route path="/merci" element={<MerciPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;