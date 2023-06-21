import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cinemaId: null,
    hallId: null,
    movieId: null,
    datetime: null,
    name: null,
};

export const showFormSlice = createSlice({
  name: 'newShowForm',
  initialState,
  reducers: {
    completeForm: (state, action) => {
      state[action.payload.key] = action.payload.value;
    },
    reset: () => initialState,
    loadForm: (state, action) => {
      return action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { completeForm, reset, loadForm } = showFormSlice.actions;

export default showFormSlice.reducer;
