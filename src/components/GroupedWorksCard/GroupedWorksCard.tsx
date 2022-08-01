import React from 'react';
import { IProject } from '../../models/models';
import { POSITION } from '../../constants/notesPosition';
import WorkCard from '../WorkCard/WorkCard';
import NotesCard from '../NotesCard/NotesCard';

type WorkCardProps = {
  project: IProject
}

const GroupedWorksCard: React.FC<WorkCardProps> = ({project}) => {
  return (
    <div className={`col-span-2 md:flex `}>
      {
        project.position === POSITION.left ? (
          <>
            <div
              className="md:w-4/6"
            >
              <WorkCard project={project}/>
            </div>
            <div
              className="md:w-2/6  h-auto md:max-h-568"
            >
              <NotesCard notes={project.notes}/>
            </div>
          </>
        ) : (
          <>
            <div className="md:w-2/6 h-484 h-auto md:max-h-568">
              <NotesCard notes={project.notes}/>
            </div>
            <div className="md:w-4/6">
              <WorkCard project={project}/>
            </div>
          </>
        )
      }
    </div>
  );
};

export default GroupedWorksCard;
