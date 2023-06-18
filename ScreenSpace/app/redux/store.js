import { configureStore } from '@reduxjs/toolkit';
import formReducer from '../redux/slices/formSlice';
import hallReducer from '../redux/slices/hallSlice';

export const store = configureStore({
  reducer: {
    form: formReducer,
    hall: hallReducer,
  },
});
