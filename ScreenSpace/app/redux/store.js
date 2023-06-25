import {configureStore} from '@reduxjs/toolkit';
import formReducer from '../redux/slices/formSlice';
import hallReducer from '../redux/slices/hallSlice';
import ownerCinemasReducer from './slices/ownerCinemasSlice';
import showFormSlice from './slices/showFormSlice';
import userLoginReducer from './slices/loginSlice';

export const store = configureStore({
  reducer: {
    form: formReducer,
    hall: hallReducer,
    ownerCinemas: ownerCinemasReducer,
    newShowForm: showFormSlice,
    login: userLoginReducer,
  },
});
