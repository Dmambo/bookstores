import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Booklist from '../components/Booklist';
import Addbook from '../components/Addbook';
import { fetchBooks } from '../redux/Api/api';

const Books = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);
  return (
    <div className="books">
      <ul>
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
