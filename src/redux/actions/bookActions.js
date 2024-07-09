import api from '../../api/api';

export const getBooks = () => async (dispatch) => {
  try {
    const response = await api.get('/books');
    dispatch({ type: 'GET_BOOKS_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'GET_BOOKS_FAIL', payload: error.message });
  }
};

export const addBook = (book) => async (dispatch) => {
  try {
    const response = await api.post('/books', book);
    dispatch({ type: 'ADD_BOOK_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'ADD_BOOK_FAIL', payload: error.message });
  }
};

export const editBook = (id, updatedBook) => async (dispatch) => {
  try {
    const response = await api.put(`/books/${id}`, updatedBook);
    dispatch({ type: 'EDIT_BOOK_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'EDIT_BOOK_FAIL', payload: error.message });
  }
};

export const deleteBook = (id) => async (dispatch) => {
  try {
    await api.delete(`/books/${id}`);
    dispatch({ type: 'DELETE_BOOK_SUCCESS', payload: id });
  } catch (error) {
    dispatch({ type: 'DELETE_BOOK_FAIL', payload: error.message });
  }
};
