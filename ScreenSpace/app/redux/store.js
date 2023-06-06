import { configureStore } from '@reduxjs/toolkit';
import formReducer from '../redux/slices/formSlice';

export const store = configureStore({
  reducer: {
    form: formReducer,
  },
});
