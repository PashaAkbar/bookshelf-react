/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editBook } from '../redux/actions/bookActions';

const EditBook = ({ match, history }) => {
  const bookId = match.params.id;
  const dispatch = useDispatch();
  const book = useSelector(state => state.book.books.find(b => b.id === bookId));

  const [title, setTitle] = useState(book ? book.title : '');
  const [author, setAuthor] = useState(book ? book.author : '');

  useEffect(() => {
    if (book) {
      setTitle(book.title);
      setAuthor(book.author);
    }
  }, [book]);

  const handleEditBook = (e) => {
    e.preventDefault();
    dispatch(editBook(bookId, { title, author }));
    history.push('/books');
  };

  return (
    <div className="container mx-auto p-4">
      <h2>Edit Book</h2>
      <form onSubmit={handleEditBook}>
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
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Edit Book</button>
      </form>
    </div>
  );
};

export default EditBook;
