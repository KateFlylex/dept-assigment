import React, { useEffect, useState } from 'react';
import GroupedWorksCard from '../GroupedWorksCard/GroupedWorksCard';
import WorkCard from '../WorkCard/WorkCard';
import { useGetWorksQuery } from '../../store/dept/dept.api';
import { IProject } from '../../models/models';
import { useAppSelector } from '../../hooks/redux';

const WorkGrid = () => {
  const {isLoading, isError, data: projects} = useGetWorksQuery(null);
  const [displayedProjects, setDisplayedProjects] = useState(projects);
  const {categoryFilter, industryFilter} = useAppSelector(state => state.dept);

  useEffect(() => {
    if (!projects) return

    const filteredProjects = projects
    .filter((p: IProject) => !categoryFilter.id ? true : p.categoryID === categoryFilter.id)
    .filter((p: IProject) => !industryFilter.id ? true : p.industriesID === industryFilter.id);

    setDisplayedProjects(filteredProjects);
  }, [categoryFilter, industryFilter, projects])

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (!displayedProjects?.length) {
    return <div className="text-center text-white font-extralight text-2xl p-8">Nothing was
      found</div>
  }

  return (
    <div className="grid grid-flow-row-dense grid-cols-2">
      {
        displayedProjects.map((project: IProject) =>
          project.notes.length ? (
            <GroupedWorksCard project={project} key={project.id}/>
          ) : (
            <div
              className={`${categoryFilter.id || industryFilter.id ? 'col-span-2' : 'col-span-2 md:col-span-1'}`}
              key={project.id}
            >
              <WorkCard
                project={project}
              />
            </div>
          )
        )
      }
    </div>
  );
};

export default WorkGrid;
