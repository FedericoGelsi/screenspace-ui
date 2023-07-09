import {configureStore} from '@reduxjs/toolkit';
import formReducer from '../redux/slices/formSlice';
import hallReducer from '../redux/slices/hallSlice';
import ownerCinemasReducer from './slices/ownerCinemasSlice';
import userLoginReducer from './slices/loginSlice';
import newShowFormReducer from './slices/showFormSlice';
import moviesReducer from './slices/moviesSlice';
import movieBookingReducer from './slices/movieBookingSlice';
import userCinemasReducer from './slices/userCinemaSlice';

export const store = configureStore({
  reducer: {
    form: formReducer,
    hall: hallReducer,
    ownerCinemas: ownerCinemasReducer,
    userCinemas: userCinemasReducer,
    login: userLoginReducer,
    newShowForm: newShowFormReducer,
    movies: moviesReducer,
    movieBooking: movieBookingReducer,
  },
});
