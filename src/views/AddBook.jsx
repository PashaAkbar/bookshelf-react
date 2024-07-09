/* eslint-disable react/prop-types */
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/actions/bookActions';

const AddBook = ({ history }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  const handleAddBook = (e) => {
    e.preventDefault();
    dispatch(addBook({ title, author }));
    history.push('/books');
  };

  return (
    <div className="container mx-auto p-4">
      <h2>Add Book</h2>
      <form onSubmit={handleAddBook}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="block p-2 border border-gray-300 rounded mb-2"
        />
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="block p-2 border border-gray-300 rounded mb-2"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;
