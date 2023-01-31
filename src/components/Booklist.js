import React from 'react';
import '../styles/Booklist.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/Books/books';

const Booklist = (props) => {
  const { Title, Author, id } = props;
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeBook(id));
  };

  return (
    <li className="booklist-item">
      <div className="bookdetails">
        <div className="genre">Action</div>
        <div className="title">{Title}</div>
        <div className="author">{Author}</div>
        <div className="interact">
          <div className="comment">Comments</div>
          <span className="vr" />
          <button type="button" onClick={handleRemove} className="remove">
            Remove
          </button>
          <span className="vr" />
          <div className="edit">Edit</div>
        </div>
      </div>
      <div className="progress">
        <div className="progress-bar">
          <div className="progress-bar-outer">
            <div className="progress-bar-inner" />
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            width="160px"
            height="160px"
          >
            <defs>
              <linearGradient id="GradientColor">
                <stop offset="0%" stopColor="#e91e63" />
                <stop offset="100%" stopColor="#673ab7" />
              </linearGradient>
            </defs>
            <circle cx="80" cy="80" r="70" strokeLinecap="round" />
          </svg>
        </div>
        <div className="progress-percentage">
          64%
          <span>Completed</span>
        </div>
      </div>
      <span className="vrr" />
      <div className="chapter">
        <div className="current">CURRENT CHAPTER</div>
        <div className="chapters">Chapter 17</div>
        <button type="button" className="update">
          UPDATE PROGRESS
        </button>
      </div>
    </li>
  );
};

Booklist.propTypes = {
  Title: PropTypes.string.isRequired,
  Author: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default Booklist;
