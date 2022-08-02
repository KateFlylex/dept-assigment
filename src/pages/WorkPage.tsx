import React from 'react';
import FiltersBar from '../components/FiltersBar/FiltersBar';
import WorkGrid from '../components/WorkGrid/WorkGrid';
import HeroSection from '../components/HeroSection/HeroSection';
import ClientsList from '../components/ClientsList/ClientsList';
import Form from '../components/Form/Form';

type WorkPageProps = {
  heroImage: string
}

const WorkPage: React.FC<WorkPageProps> = ({heroImage}) => {
  const heroText = <p>A selection of projects that <b>pioneer tech</b> and <b>marketing</b> to help brands stay ahead.</p>;

  return (
    <div>
      <HeroSection heroImage={heroImage} heroText={heroText} />
      <FiltersBar />
      <WorkGrid />
      <ClientsList />
    </div>
  )
};

export default WorkPage;
