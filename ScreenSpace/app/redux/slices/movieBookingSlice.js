import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {newBooking} from '../../networking/api/endpoints/bookingWS';
import {getMoviesInTheaters} from './showingSlice';

const initialState = {
  movieId: null,
  cinemaId: null,
  datetime: null,
  showId: null,
  hall: null,
  show: null,
  seats: null,
  selectedCard: null,
  selectedTime: null,
  seats: null,
  error: null,
  hasError: false,
  isProcessing: false,
  bookingCode: null,
};

export const newUserBooking = createAsyncThunk(
  'user/newBooking',
  async (args, thunkAPI) => {
    const state = thunkAPI.getState();
    const result = await newBooking(state.login.userId, state.movieBooking);
    return result;
  },
);

export const movieBookingSlice = createSlice({
  name: 'movieBooking',
  initialState,
  reducers: {
    completeForm: (state, action) => {
      state[action.payload.key] = action.payload.value;
    },
    reset: () => initialState,
  },
  extraReducers: builder => {
    builder
      .addCase(newUserBooking.pending, (state, action) => {
        state.error = null;
        state.hasError = false;
        state.isProcessing = true;
      })
      .addCase(newUserBooking.fulfilled, (state, action) => {
        state.error = null;
        state.hasError = false;
        state.isProcessing = false;
        state.bookingCode = action.payload.bookingCode;
      })
      .addCase(newUserBooking.rejected, (state, action) => {
        state.hasError = true;
        state.isProcessing = false;
        state.error = 'We are sorry. An error has occurred. Try again later.';
      });
  },
});

// Action creators are generated for each case reducer function
export const {completeForm, reset} = movieBookingSlice.actions;

export default movieBookingSlice.reducer;
