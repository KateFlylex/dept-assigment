import React from 'react';
import { importAllImages } from '../../hooks/importAllImages';
const images = importAllImages(require.context('../../assets/clients', false, /\.(png|jpe?g|svg)$/));

const ClientsList = () => {
  return (
    <div className="p-10 md:pt-24 md:pb-24 grid grid-cols-2 gap-4 md:gap-10 md:grid-cols-3 bg-dept-grey justify-items-center">
      {
        Object.keys(images).map((key: string) => <img className="h-12 md:h-20" src={images[key]} alt={images[key]}/>)
      }
    </div>
  );
};

export default ClientsList;
