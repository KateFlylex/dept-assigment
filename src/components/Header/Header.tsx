import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const resetFilters = () => {
    resetFilters();
  }

  return (
    <header className="flex justify-between items-center h-[80px] px-5 bg-dept-grey text-white">
      <Link to="/"><h3 className="font-bold text-2xl">DEPT</h3></Link>
      <div className="flex items-baseline">
        <span>
          <Link to="/work" className="header-item" onClick={() => resetFilters()} >Work</Link>
          <Link to="/culture" className="header-item">Culture</Link>
          <Link to="/service" className="header-item">Service</Link>
          <Link to="/insights" className="header-item">Insights</Link>
          <Link to="/careers" className="header-item">Careers</Link>
          <Link to="/contact" className="header-item">Contact</Link>
        </span>
        <div className="font-bold text-2xl ml-10">...</div>
      </div>
    </header>
  );
};

export default Header;
