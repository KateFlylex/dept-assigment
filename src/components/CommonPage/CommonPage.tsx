import React from 'react';
import { useLocation } from 'react-router-dom';

type CommonPageProps = {
  pageName: string
}

const CommonPage: React.FC<CommonPageProps> = ({pageName}) => {
  return (
    <div className="text-center text-white font-extralight text-2xl p-8">
      {pageName}
    </div>
  );
};

export default CommonPage;
