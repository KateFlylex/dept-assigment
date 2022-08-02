import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const resetFilters = () => {
    resetFilters();
  }

  return (
    <header className="flex justify-between h-20 md:h-28 p-6 md:p-10 bg-white md:bg-dept-grey md:text-white">
      <Link to="/">
        <h3 className="relative font-bold text-2xl w-40">
          DEPT
          <span className="absolute top-3 font-extralight text-xl">
              &#174;
            </span>
        </h3>
      </Link>
      <div className="flex items-baseline">
        <div className="hidden md:block">
          <Link to="/work" className="header-item" onClick={() => resetFilters()} >Work</Link>
          <Link to="/culture" className="header-item">Culture</Link>
          <Link to="/service" className="header-item">Service</Link>
          <Link to="/insights" className="header-item">Insights</Link>
          <Link to="/careers" className="header-item">Careers</Link>
          <Link to="/contact" className="header-item">Contact</Link>
        </div>
        <div className="font-bold text-2xl ml-10">...</div>
      </div>
    </header>
  );
};

export default Header;
