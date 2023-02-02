import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Booklist from '../components/Booklist';
import Addbook from '../components/Addbook';
import Navigation from '../components/Navigation';
import { fetchBooks } from '../redux/Api/api';
import '../styles/Books.css';

const Books = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);
  return (
    <div className="books">
      <Navigation />
      <ul className="BOOKS">
        {useSelector((state) => state.books.books).map((book) => (
          <Booklist
            key={book.id}
            id={book.id}
            Title={book.title}
            Author={book.author}
            category={book.category}
          />
        ))}
      </ul>
      <Addbook />
    </div>
  );
};

export default Books;
