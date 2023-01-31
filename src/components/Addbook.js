import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/Books/books';
import '../styles/Addbook.css';

const Addbook = () => {
  const [formData, setFormData] = useState({ id: '', title: '', author: '' });

  const handleDataChange = (event) => {
    setFormData({
      ...formData,
      id: uuidv4(),
      [event.target.name]: event.target.value,
    });
  };

  const dispatch = useDispatch();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(addBook(formData));
    setFormData({ id: '', title: '', author: '' });
  };

  return (
    <div className="addbook">
      <h2>Add New Book</h2>
      <form onSubmit={onSubmitHandler}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleDataChange}
        />
        <input
          type="text"
          name="author"
          placeholder="Author"
          value={formData.author}
          onChange={handleDataChange}
        />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default Addbook;
