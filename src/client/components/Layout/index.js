import React from 'react';
import Header from '../Header/Header';
import './styles.styl';

const Layout = ({ children }) => (
  <>
    <Header />
    {children}
  </>
);

export default Layout;
