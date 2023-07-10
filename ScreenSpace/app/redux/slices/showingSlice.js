import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {
  getCinemas,
  getCinemasFilter,
} from '../../networking/api/endpoints/cinemasWS';

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

export const getMoviesFilter = createAsyncThunk(
  'moviesFilter',
  async filterInfo => {
    const response = await getCinemasFilter(
      filterInfo.latitude,
      filterInfo.longitude,
      filterInfo.distance,
      filterInfo.genre,
      filterInfo.rating,
    );
    return response;
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
        const activeCinemas = action.payload.filter(
          item => item.active === true,
        );
        const flattenedHalls = activeCinemas.flatMap(o =>
          o.halls.map(e => ({
            cinemaId: o.id,
            hallId: e.id,
            cinemaShows: e.cinemaShows,
          })),
        );
        const flattenedShows = flattenedHalls.flatMap(o =>
          o.cinemaShows.map(e => ({
            cinemaId: o.cinemaId,
            hallId: o.hallId,
            showId: e.id,
            availableSeats: e.availableSeats,
            movie: e.movie,
          })),
        );
        state.movies = flattenedShows;
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
      })
      .addCase(getMoviesFilter.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
        state.hasError = false;
      })
      .addCase(getMoviesFilter.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.hasError = false;
        const activeCinemas = action.payload.filter(
          item => item.active === true,
        );
        const flattenedHalls = activeCinemas.flatMap(o =>
          o.halls.map(e => ({
            cinemaId: o.id,
            hallId: e.id,
            cinemaShows: e.cinemaShows,
          })),
        );
        const flattenedShows = flattenedHalls.flatMap(o =>
          o.cinemaShows.map(e => ({
            cinemaId: o.cinemaId,
            hallId: o.hallId,
            showId: e.id,
            availableSeats: e.availableSeats,
            movie: e.movie,
          })),
        );
        state.movies = flattenedShows;
      })
      .addCase(getMoviesFilter.rejected, (state, action) => {
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
