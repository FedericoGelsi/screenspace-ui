import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cinemaName: null,
    companyName: null,
    pricePerShow: null,
    active: null,
    address: null,
    postalCode: null,
    city: null,
    province: 'Buenos Aires',
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

export const isDetailsComplete = (state) => {
  return (state?.form?.cinemaName == null || state?.form?.cinemaName === "") ||
         (state?.form?.companyName == null || state?.form?.companyName === "")  ||
         (state?.form?.pricePerShow == null || state?.form?.pricePerShow === "")
};

export const isAddressComplete = (state) => {
  return (state?.form?.address == null || state?.form?.address === "") || 
         (state?.form?.postalCode == null || state?.form?.postalCode === "") || 
         (state?.form?.city == null || state?.form?.city === "") ||
         (state?.form?.country == null || state?.form?.country === "")
};

export default formSlice.reducer;
