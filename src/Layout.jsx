import React from 'react';
import { UserIdProvider } from './components/UserIdContext';
import Header from './components/Header';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <UserIdProvider>
      <Header />
      <Outlet />
      <Footer />
    </UserIdProvider>
  );
}

export default Layout;
