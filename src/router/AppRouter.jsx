/* eslint-disable react/prop-types */
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Home from '../views/Home';
import Login from '../views/Login.jsx';
import Signup from '../views/SignUp.jsx';
import BookList from '../views/BookList.jsx';
import AddBook from '../views/AddBook.jsx';
import EditBook from '../views/EditBook.jsx';

const PrivateRoute = ({element}) => {
  const { isAuthenticated } = useSelector(state => state.auth);
  // const authToken = getAuthTokenFromCookie();
  const isLogin = localStorage.getItem('isLogin');
  // Check if the user is authenticated and the authentication token is available
  if (isLogin) {
    return element;
  } else {
    // Redirect to sign-in page if not authenticated or token is missing
    return <Navigate to="/signin" />;
  }
};

// const PrivateRoute = ({ element: Element, ...rest }) => {
//   const { isAuthenticated } = useSelector(state => state.auth);
//   return (
//     <Route
//       {...rest}
//       element={isAuthenticated ? <Element {...rest} /> : <Navigate to="/login" />}
//     />
//   );
// };

const AppRouter = () => (
  <Router>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/home" element={<Home/>}/>
      {/* <Route
        path="/books/add"
        element={<PrivateRoute element={<AddBook />} />}
      />
      <Route
        path="/books/edit/:id"
        element={<PrivateRoute element={<EditBook />} />}
      />
      <Route
        path="/books"
        element={<PrivateRoute element={<BookList />} />}
      /> */}
       <Route
        path="/books/add"
        element={<AddBook/>}
      />
      <Route
        path="/books/edit/:id"
        element={<EditBook  />}
      />
      <Route
        path="/books"
        element={<BookList />}
      />
      {/* <PrivateRoute path="/books/add" element={<AddBook />} />
      <PrivateRoute path="/books/edit/:id" element={<EditBook />} />
      <PrivateRoute path="/books" element={<BookList />} /> */}
      <Route path="*" element={<Login />} />
    </Routes>
  </Router>
);

export default AppRouter;
