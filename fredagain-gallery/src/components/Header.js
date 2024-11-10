import React from 'react';
import { Link } from 'react-scroll';
import './Header.css';

const Header = () => {
  return (
    <section className="section-1">
      <div className="container-1">
        <h1><a href="/">fredagain</a></h1>
        <ul className="right-links">
          <li>
            <Link to="tour" smooth={true} duration={500}>
              Tour
            </Link>
          </li>
          <li><a href="/music">Music</a></li>
          <li><a href="https://www.levellr.com/fred-again">Discord</a></li>
        </ul>
      </div>
    </section>
  );
};

export default Header;
