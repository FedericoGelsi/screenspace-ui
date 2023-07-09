import {configureStore} from '@reduxjs/toolkit';
import formReducer from '../redux/slices/formSlice';
import hallReducer from '../redux/slices/hallSlice';
import ownerCinemasReducer from './slices/ownerCinemasSlice';
import userLoginReducer from './slices/loginSlice';
import newShowFormReducer from './slices/showFormSlice';
import moviesReducer from './slices/moviesSlice';
import showingReducer from './slices/showingSlice';
import bookingReducer from './slices/bookingSlice';

export const store = configureStore({
  reducer: {
    form: formReducer,
    hall: hallReducer,
    ownerCinemas: ownerCinemasReducer,
    login: userLoginReducer,
    newShowForm: newShowFormReducer,
    movies: moviesReducer,
    showing: showingReducer,
    booking: bookingReducer,
  },
});
