import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {
  deleteShowAPI,
  editShowAPI,
  newShowAPI,
} from '../../networking/api/endpoints/showsWS';

const initialState = {
  movieId: null,
  cinemaId: null,
  datetime: null,
  showId: null,
  timeTable: null,
  seats: null,
  error: null,
  hasError: false,
  isProcessing: false,
};

export const createShow = createAsyncThunk(
  'user/newBooking',
  async (args, thunkAPI) => {
    const state = thunkAPI.getState();
    const result = await newShowAPI(
      state.newShowForm.cinemaId,
      state.newShowForm.hallId,
      state.newShowForm,
    );
    thunkAPI.dispatch(getCinema(state.newShowForm.cinemaId));
    return result;
  },
);

export const movieBookingSlice = createSlice({
  name: 'movieBooking',
  initialState,
  reducers: {
    completeForm: (state, action) => {
      console.log(action.payload.key);
      console.log(action.payload.value);
      state[action.payload.key] = action.payload.value;
    },
    reset: () => initialState,
  },
  extraReducers: builder => {
    builder
      .addCase(createShow.pending, (state, action) => {
        state.error = null;
        state.hasError = false;
        state.isProcessing = true;
      })
      .addCase(createShow.fulfilled, (state, action) => {
        state.error = null;
        state.hasError = false;
        state.isProcessing = false;
      })
      .addCase(createShow.rejected, (state, action) => {
        state.hasError = true;
        state.isProcessing = false;
        state.error = 'We are sorry. An error has occurred. Try again later.';
      });
  },
});

// Action creators are generated for each case reducer function
export const {completeForm, reset} = movieBookingSlice.actions;

export default movieBookingSlice.reducer;
