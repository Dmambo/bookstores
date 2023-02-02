import React from 'react';
import '../styles/Booklist.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/Api/api';

const Booklist = ({
  Title, Author, id, category,
}) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeBook(id));
  };

  const percentage = Math.floor(Math.random() * 90 + 10);
  const randomChapter = Math.floor(Math.random() * 10 + 1);

  const adjectives = ['Dark', 'Mystical', 'Enchanted', 'Forgotten', 'Whispers'];
  const nouns = ['Secrets', 'Worlds', 'Legends', 'Dreams', 'Fables'];

  const generateChapterName = () => {
    const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
    return ` "${randomAdjective} of ${randomNoun}"`;
  };

  return (
    <li className="booklist-item">
      <div className="bookdetails">
        <div className="genre">{category}</div>
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
        </div>
        <div className="progress-percentage">
          {percentage}
          %
          <span>Completed</span>
        </div>
      </div>
      <span className="vrr" />
      <div className="chapter">
        <div className="current">CURRENT CHAPTER</div>
        <div className="chapters">
          Chapter
          {' '}
          {randomChapter}
          {' '}
          :
          {generateChapterName()}
        </div>
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
  category: PropTypes.string.isRequired,
};

export default Booklist;
