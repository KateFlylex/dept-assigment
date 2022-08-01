import React from 'react';
import { IProject } from '../../models/models';
import { Link } from 'react-router-dom';
import { importAllImages } from '../../hooks/importAllImages';

const images = importAllImages(require.context('../../assets/projectImages', false, /\.(png|jpe?g|svg)$/));

type WorkCardProps = {
  project: IProject
}

const WorkCard: React.FC<WorkCardProps> = ({project}) => {
  return (
    <div
      className="flex items-end h-484 md:h-568 transition ease-in-out delay-150"
      style={{
        background: `linear-gradient( rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2) ), url(${images[project.img]})`,
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    }}
    >
      <div className="m-8 text-white">
        <div className="mb-2 font-extralight uppercase">{project.company}</div>
        <div className="mt-2 mb-2 text-5xl font-extralight">{project.title}</div>
        <Link className="mt-2" to={project.link}><i className="icon-dot" /><span className="mt-1.5 mb-2 font-extralight ml-3">Read more</span></Link>
      </div>
    </div>
  );
};

export default WorkCard;
