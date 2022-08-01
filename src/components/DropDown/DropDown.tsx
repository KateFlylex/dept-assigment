import React, { useState } from 'react';
import { IFilterItem } from '../../models/models';

type ListElemType = {
  id: number,
  name: string,
}

type DropDownProps = {
  onClickHandler: (elem: ListElemType) => void,
  selectedItem: IFilterItem,
  dropdownPosition: string,
  list: ListElemType[],
}

const DropDown: React.FC<DropDownProps> = (
  {
    onClickHandler,
    selectedItem,
    list,
    dropdownPosition
  }) => {

  const [isDropdownClosed, setIsDropdownClosed] = useState(true);

  return (
    <div className="inline-block relative">
      <button
        data-dropdown-toggle="dropdown"
        className="ml-1.5 underline text-neutral-900 lowercase"
        type="button"
        onClick={() => setIsDropdownClosed(!isDropdownClosed)}
      >
        {selectedItem.name}
      </button>
      <div
        className={`${isDropdownClosed && 'hidden'} absolute ${dropdownPosition === 'right' ? 'right-0' : 'left-0'}  w-fit z-10 bg-white whitespace-nowrap`}
        onMouseLeave={() => setIsDropdownClosed(true)}
      >
        <ul className="p-3 text-2xl text-neutral-500"
            aria-labelledby="">
          {
            list.filter(e => e.id !== selectedItem.id).map((elem) => (
              <li key={elem.id}>
                <button
                  className="block py-3 px-5 hover:underline"
                  onClick={() => onClickHandler(elem)}
                >
                  {elem.name}
                </button>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  );
};

export default DropDown;
