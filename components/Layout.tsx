
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header.tsx';
import Footer from './Footer.tsx';
import Chatbot from './Chatbot.tsx';

const Layout: React.FC = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen bg-neutralLight">
        <Header />
        <main className="flex-grow">
          <Outlet />
        </main>
        <Footer />
      </div>
      <Chatbot />
    </>
  );
};

export default Layout;