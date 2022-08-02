import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const resetFilters = () => {
    resetFilters();
  }

  return (
    <footer className="md:h-96 w-full bg-dept-grey flex justify-between">
      <div className="w-full px-14 py-8">
        <div
          className="w-full md:flex items-center bg-dept-grey text-white items-baseline">
          <Link to="/" className="hidden md:block">
            <h3 className="relative font-bold text-2xl w-40 block">
              DEPT
              <span className="absolute top-3 font-extralight text-xl">
              &#174;
            </span>
            </h3>
          </Link>
          <div className="md:flex">
            <div><Link to="/work" className="header-item py-6" onClick={() => resetFilters()}>Work</Link>
            </div>
            <div><Link to="/culture" className="header-item py-6">Culture</Link></div>
            <div><Link to="/service" className="header-item py-6">Service</Link></div>
            <div><Link to="/insights" className="header-item py-6">Insights</Link></div>
            <div><Link to="/careers" className="header-item py-6">Careers</Link></div>
            <div><Link to="/contact" className="header-item py-6">Contact</Link></div>
          </div>
        </div>

        <div
          className="md:flex w-full py-8 items-center bg-dept-grey text-neutral-600 items-baseline border-t border-neutral-600 justify-between">
          <div className="md:flex">
            <div className="mr-8">Chamber of Commerce: 63464101</div>
            <div className="mr-8">vVAT: NL 8552.47.502.B01</div>
          </div>
          <div className="pt-8 md:pt-0">© 2022 Dept Agency</div>
        </div>
      </div>

      <div className="hidden md:block w-52 bg-white text-indigo-500 pt-32">
        <div className="m-auto w-10 relative text-lg uppercase font-extralight">
          <div className="absolute bottom-8 rotate-[225deg] font-extralight text-4xl py-5">
            &#8600;
          </div>
          Top
        </div>

      </div>

    </footer>
  );
};

export default Footer;
