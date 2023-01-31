import React from 'react';
import { useSelector } from 'react-redux';
import Booklist from '../components/Booklist';
import Addbook from '../components/Addbook';

const Books = () => (
  <div className="books">
    <ul>
      {useSelector((state) => state.books.books).map((book) => (
        <Booklist
          key={book.id}
          id={book.id}
          Title={book.title}
          Author={book.author}
        />
      ))}
    </ul>
    <Addbook />
  </div>
);

export default Books;
