/* eslint-disable react/prop-types */
import React from 'react';

const BookCard = ({ book }) => (
  <div className="p-4 border border-gray-300 rounded mb-2">
    <h3>{book.title}</h3>
    <p>{book.author}</p>
  </div>
);

export default BookCard;
