import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {getCinemasByMovieId} from '../../networking/api/endpoints/cinemasWS';

const initialState = {
  cinemas: [],
  hasError: false,
  error: null,
  isLoading: false,
};

export const getCinemasByMovie = createAsyncThunk(
  'user/cinema',
  async (movieId, thunkAPI) => {
    try {
      const response = await getCinemasByMovieId(movieId);
      return response;
    } catch (error) {
      if (error.response) {
        const statusCode = error.response.status;
        return thunkAPI.rejectWithValue(statusCode);
      } else {
        throw error;
      }
    }
  },
);

const userCinemasSlice = createSlice({
  name: 'userCinemas',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getCinemasByMovie.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
        state.hasError = false;
      })
      .addCase(getCinemasByMovie.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.hasError = false;
        state.cinemas = action.payload;
      })
      .addCase(getCinemasByMovie.rejected, (state, action) => {
        state.isLoading = false;
        if (action.payload === 404) {
          state.error = null;
          state.cinemas = [];
        } else {
          state.hasError = false;
          state.error = 'We are sorry. An error has occurred. Try again later.';
        }
      });
  },
});

export default userCinemasSlice.reducer;
