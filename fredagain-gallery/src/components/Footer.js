import React from 'react';
import './Footer.css'; // Create this CSS file

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <p>&copy; {currentYear} fredagain. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
