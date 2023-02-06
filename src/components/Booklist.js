import React from 'react';
import '../styles/Booklist.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/Api/api';
import comment from '../assets/comment.png';
import dustbin from '../assets/dustbin.png';
import edit from '../assets/edit.png';

const Booklist = ({
  Title, Author, id, category,
}) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeBook(id));
  };

  const handleEdit = () => {
  };

  const percentage = Math.floor(Math.random() * 90 + 10);
  const randomChapter = Math.floor(Math.random() * 10 + 1);

  const adjectives = ['Dark', 'Mystical', 'Enchanted', 'Forgotten', 'Whispers', 'Introduction'];
  const nouns = ['Secrets', 'Worlds', 'Legends', 'Dreams', 'Fables'];

  const generateChapterName = () => {
    const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
    if (randomAdjective === 'Introduction') {
      return randomAdjective;
    }
    return ` "${randomAdjective} of ${randomNoun}"`;
  };

  return (
    <li className="booklist-item">
      <div className="bookdetails">
        <div className="genre">{category}</div>
        <div className="title">{Title}</div>
        <div className="author">{Author}</div>
        <div className="interact">
          <button type="button" className="comment">
            <span>
              <img src={comment} alt="comment" />
            </span>
            Comments

          </button>
          <span className="vr" />
          <button type="button" onClick={handleRemove} className="remove">
            <span>
              <img src={dustbin} alt="dustbin" />
            </span>
            Remove
          </button>
          <span className="vr" />
          <button type="button" onClick={handleEdit} className="edit">
            <span>
              <img src={edit} alt="edit" />
            </span>
            Edit

          </button>
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
