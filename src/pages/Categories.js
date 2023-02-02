import React from 'react';
import '../styles/Categories.css';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/Categories/category';
import Navigation from '../components/Navigation';

const Categories = () => {
  const selectedCategories = useSelector((state) => state.categories.status);
  let Construction;
  if (selectedCategories && selectedCategories !== '') {
    Construction = selectedCategories;
  }
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(checkStatus());
  };

  return (
    <>
      <div className="cat">
        <div className="updated">
          <div className="nav"><Navigation /></div>
          <div className="construction">
            <h2>{Construction}</h2>
            <button type="button" onClick={handleClick} className="updatebtn">
              Check status
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;
