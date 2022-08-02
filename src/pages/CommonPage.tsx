import React, { ReactElement } from 'react';
import { useLocation } from 'react-router-dom';
import HeroSection from '../components/HeroSection/HeroSection';

type CommonPageProps = {
  heroText: ReactElement,
  heroImage: string
}

const CommonPage: React.FC<CommonPageProps> = ({heroText, heroImage}) => {
  return (
    <HeroSection heroImage={heroImage} heroText={heroText} />
  );
};

export default CommonPage;
