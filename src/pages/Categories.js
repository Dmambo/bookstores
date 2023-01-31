import React from 'react';
import '../styles/Categories.css';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/Categories/category';

const Categories = () => {
  const selectedCategories = useSelector(
    // eslint-disable-next-line comma-dangle
    (state) => state.categories.categories[0]
  );
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(checkStatus());
  };

  return (
    <div className="updated">
      <h2>{selectedCategories}</h2>
      <button type="button" onClick={handleClick}>
        Check status
      </button>
    </div>
  );
};

export default Categories;
