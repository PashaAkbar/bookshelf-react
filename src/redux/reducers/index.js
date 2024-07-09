import { combineReducers } from '@reduxjs/toolkit';
import authReducer from '../slices/authSlice';
import bookReducer from '../slices/bookSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  book: bookReducer,
});

export default rootReducer;
