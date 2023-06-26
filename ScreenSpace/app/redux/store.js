import {configureStore} from '@reduxjs/toolkit';
import formReducer from '../redux/slices/formSlice';
import hallReducer from '../redux/slices/hallSlice';
import ownerCinemasReducer from './slices/ownerCinemasSlice';
import newShowFormReducer from './slices/showFormSlice';
import moviesReducer from './slices/moviesSlice';

export const store = configureStore({
  reducer: {
    form: formReducer,
    hall: hallReducer,
    ownerCinemas: ownerCinemasReducer,
    newShowForm: newShowFormReducer,
    movies: moviesReducer,
  },
});
