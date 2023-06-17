import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cinemaName: null,
    companyName: null,
    pricePerShow: null,
    active: null,
    address: null,
    postalCode: null,
    city: null,
    province: null,
    country: null,
};

export const formSlice = createSlice({
  name: 'form',
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
export const { completeForm, reset, loadForm } = formSlice.actions;

export default formSlice.reducer;
