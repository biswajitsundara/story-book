import React from 'react';
import './Layout.css'; // Import the CSS file for styling

const Layout = ({ header, main, footer }) => {
  return (
    <div className="layout">
      <header className="layout-header">{header}</header>
      <main className="layout-main">{main}</main>
      <footer className="layout-footer">{footer}</footer>
    </div>
  );
};

export default Layout;

