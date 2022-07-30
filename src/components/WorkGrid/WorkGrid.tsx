import React from 'react';
import projects from '../../mock/projects.json';
import GroupedWorksCard from '../GroupedWorksCard/GroupedWorksCard';
import WorkCard from '../WorkCard/WorkCard';

const WorkGrid = () => {
  return (
    <div className="grid grid-flow-row-dense grid-cols-2">
      {
        projects.map((project) => (
            <>
              {
                project.notes.length ? (
                  <GroupedWorksCard project={project} />
                ) : (
                  <WorkCard
                    project={project}
                    key={project.id}
                  />
                )

              }
            </>
          )
        )
      }
    </div>
  );
};

export default WorkGrid;
