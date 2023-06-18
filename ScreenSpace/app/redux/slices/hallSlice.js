import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    hallName: null,
    numberOfLines: 0,
    numberOfSeats: 0,
    active: 0,
};

export const hallSlice = createSlice({
  name: 'hall',
  initialState,
  reducers: {
    completeHall: (state, action) => {
      state[action.payload.key] = action.payload.value;
    },
    reset: () => initialState,
    loadHall: (state, action) => {
      return action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { completeHall, reset, loadHall } = hallSlice.actions;

export const isComplete = (state) => {
  return (state?.hall?.hallName == null || state?.hall?.hallName === "") ||
         (state?.hall?.numberOfLines === 0)  ||
         (state?.hall?.numberOfSeats === 0)
};

export default hallSlice.reducer;
