import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getBooks, deleteBook } from '../redux/slices/bookSlice';
import { logout } from '../redux/slices/authSlice';
import BookCard from '../Components/BookCard';

const BookList = () => {
  const dispatch = useDispatch();
  const { books, loading, error } = useSelector((state) => state.book);

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteBook(id));
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="container mx-auto p-4">
      <h2>Books</h2>
      <button onClick={handleLogout} className="bg-red-500 text-white p-2 rounded mb-2 inline-block">Logout</button>
      <Link to="/books/add" className="bg-blue-500 text-white p-2 rounded mb-2 inline-block ml-2">Add Book</Link>
      {loading ? <p>Loading...</p> : error ? <p>{error}</p> : books.map((book) => (
        <div key={book.id} className="p-4 border border-gray-300 rounded mb-2">
          <BookCard book={book} />
          <Link to={`/books/edit/${book.id}`} className="bg-yellow-500 text-white p-2 rounded mr-2">Edit</Link>
          <button onClick={() => handleDelete(book.id)} className="bg-red-500 text-white p-2 rounded">Delete</button>
        </div>
      ))}
    </div>
  );
};

export default BookList;
