import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/Api/api';
import '../styles/Addbook.css';

const Addbook = () => {
  const [formData, setFormData] = useState({
    item_id: '',
    title: '',
    author: '',
    category: '',
  });

  const handleDataChange = (e) => {
    setFormData({
      ...formData,
      item_id: uuidv4(),
      [e.target.name]: e.target.value,
      category: 'Category Action',
    });
  };

  const dispatch = useDispatch();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(addBook(formData));
    setFormData({
      item_id: '',
      title: '',
      author: '',
      category: '',
    });
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
