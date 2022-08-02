import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
//import heroImage from '../../assets/pages/work-page.png'

type HeroSectionProps = {
  heroText: ReactElement,
  heroImage: string
}

const HeroSection: React.FC<HeroSectionProps> = ({heroImage, heroText}) => {
  return (
    <div>
      <div
        className="flex items-end h-484 md:h-568 transition ease-in-out delay-150"
        style={{
          background: `linear-gradient( rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2) ), url(${heroImage})`,
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        }}
      >
        <div className="px-6 py-8 md:pl-14 md:pb-20 md:w-3/5 text-white text-3xl font-extralight">
         {heroText}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
