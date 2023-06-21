import { configureStore } from '@reduxjs/toolkit';
import formReducer from './slices/formSlice';
import showFormSlice from './slices/showFormSlice';

export const store = configureStore({
  reducer: {
    form: formReducer,
    newShowForm: showFormSlice,
  },
});
