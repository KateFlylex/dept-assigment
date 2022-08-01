import React, { useEffect } from 'react';
import { categories, industries } from '../../constants/categories';
import { IFilterItem } from '../../models/models';
import { useLocation } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import DropDown from '../DropDown/DropDown';
import { useAppSelector } from '../../hooks/redux';
import { useAction } from '../../hooks/actions';

const FiltersBar = () => {
  const {changeCategoryFilter, changeIndustryFilter} = useAction();
  const {categoryFilter, industryFilter} = useAppSelector(state => state.dept);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const history = createBrowserHistory();

  useEffect(() => {
    searchParams.forEach((value, key) => {
      switch (key) {
        case 'c':
          changeCategoryFilter(Number(value));
          break;
        case 'i':
          changeIndustryFilter(Number(value));
          break;
      }
    })
  }, [location]);

  const filterHandlerCategory = (category: IFilterItem) => {
    changeCategoryFilter(category.id);
    const searchParams = new URLSearchParams(location.search);
    searchParams.set('c', category.id.toString());
    history.push(`${location.pathname}?${searchParams.toString()}`);
  };

  const filterHandlerIndustry = (industry: IFilterItem) => {
    changeIndustryFilter(industry.id);
    const searchParams = new URLSearchParams(location.search);
    searchParams.set('i', industry.id.toString());
    history.push(`${location.pathname}?${searchParams.toString()}`);
  };

  return (
    <div
      className="relative h-24 bg-white p-8 text-2xl font-extralight z-20 text-neutral-500 flex justify-between">
      <div>
        Show me
        <DropDown
          onClickHandler={filterHandlerCategory}
          selectedItem={categoryFilter}
          list={categories}
          dropdownPosition="left"
        />
      </div>
      <div>
        in
        <DropDown
          onClickHandler={filterHandlerIndustry}
          selectedItem={industryFilter}
          list={industries}
          dropdownPosition="right"
        />
      </div>
    </div>
  );
};

export default FiltersBar;
