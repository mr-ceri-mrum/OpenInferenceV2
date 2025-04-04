import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { GlobalStyles } from '../../styles/GlobalStyles';

const Layout = () => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
