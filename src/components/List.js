import React from 'react';
import '../styles/List.css';

const List = () => (
  <>
    <div className="listcategory">
      <span className="category">Category</span>
      <select name="category" id="category">
        <option value="Action">Action</option>
        <option value="Biography">Biography</option>
        <option value="History">History</option>
        <option value="Horror">Horror</option>
        <option value="Kids">Kids</option>
        <option value="Learning">Learning</option>
        <option value="Sci-Fi">Sci-Fi</option>
      </select>
    </div>
  </>
);

export default List;
