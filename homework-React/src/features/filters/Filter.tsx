import React from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import { useSelector, useDispatch } from 'react-redux';
import { StatusFilters } from './filtersSlice';
import { statusFilterChanged } from '../creators/creators';
import { StoreState, FilterItem } from "../../interface/todoInterface";

const filterItems: FilterItem[] = [
  {
    status: StatusFilters.All,
    type: 'outline-primary',
  },
  {
    status: StatusFilters.New,
    type: 'outline-warning',
  },
  {
    status: StatusFilters.Done,
    type: 'outline-success',
  },
  {
    status: StatusFilters.Expired,
    type: 'outline-danger',
  }
];

function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector((state: StoreState) => state.filter);
  const onStatusChange = (status) => {
    dispatch(statusFilterChanged(status));
  };

  return (
    <ButtonGroup>
      {filterItems.map((item) => (
        <ToggleButton
          className="todo-filter-button"
          id={item.status}
          key={item.status}
          type="radio"
          variant={item.type}
          name="radio"
          value={item.status}
          checked={filter === item.status}
          onChange={(e) => onStatusChange(e.currentTarget.value)}
        >
          {item.status}
        </ToggleButton>
      ))}
    </ButtonGroup>
  );
}

export default Filter;
