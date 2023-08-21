import React from 'react';
import Header from './Header';  // Updated import
import Footer from './Footer';  // Updated import
import { Outlet } from 'react-router-dom';

const Layout = () => {  // Updated component name
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;  // Updated export
