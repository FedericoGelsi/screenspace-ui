import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {getCinemas} from '../../networking/api/endpoints/cinemasWS';

const initialState = {
  movies: [],
  hasError: false,
  error: null,
  isLoading: false,
};

export const getMoviesInTheaters = createAsyncThunk(
  'moviesInTheaters',
  async (args, thunkAPI) => {
    try {
      const response = await getCinemas();
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

const showingSlice = createSlice({
  name: 'showing',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getMoviesInTheaters.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
        state.hasError = false;
      })
      .addCase(getMoviesInTheaters.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.hasError = false;
        state.movies = action.payload.flatMap(o => o.moviesInTheaters);
      })
      .addCase(getMoviesInTheaters.rejected, (state, action) => {
        state.isLoading = false;
        if (action.payload === 404) {
          state.error = null;
          state.movies = [];
        } else {
          state.hasError = false;
          state.error = 'We are sorry. An error has occurred. Try again later.';
        }
      });
  },
});

export default showingSlice.reducer;
