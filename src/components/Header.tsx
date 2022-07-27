import React from 'react';
import { Link } from 'react-router-dom';
import './Header.styles.scss';

const Header = () => {
  return (
    <header className="flex justify-between items-center h-[80px] px-5 bg-black text-white">
      <Link to="/"><h3 className="font-bold">DEPT</h3></Link>
      <span>
        <Link to="/work" className="header-item">Work</Link>
        <Link to="/culture" className="header-item">Culture</Link>
        <Link to="/service" className="header-item">Service</Link>
        <Link to="/insights" className="header-item">Insights</Link>
        <Link to="/careers" className="header-item">Careers</Link>
        <Link to="/contact" className="header-item">Contact</Link>
      </span>
    </header>
  );
};

export default Header;
