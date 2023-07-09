import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {getBookingAPI} from '../../networking/api/endpoints/bookingWS';

const initialState = {
  bookings: [],
};

export const getBooking = createAsyncThunk('getBookings', async userId => {
  const response = await getBookingAPI(userId);
  return response;
});

const BookingSlice = createSlice({
  name: 'Bookings',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getBooking.pending, (state, action) => {
        console.log('pending');
        state.isLoading = true;
        state.error = null;
        state.hasError = false;
      })
      .addCase(getBooking.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.hasError = false;
        state.bookings = action.payload;
      })
      .addCase(getBooking.rejected, (state, action) => {
        console.log('rejected');
        state.isLoading = false;
      });
  },
});

export default BookingSlice.reducer;
