import React from 'react';
import './styles.styl';

console.log('hi!');

const Layout = ({ children }) => (
  <div>
    <h1 className="div">Hi!!!</h1>
    {children}
  </div>
);

export default Layout;
