import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {
  getMovieByIdAPI,
  getMoviesAPI,
} from '../../networking/api/endpoints/moviesWS';

const initialState = {
  movies: [],
  error: null,
  isLoading: false,
  hasError: false,
};

export const getMovies = createAsyncThunk(
  'movies',
  async (
    cinema = undefined,
    latitude = undefined,
    longitude = undefined,
    title = undefined,
    genre = undefined,
    rating = undefined,
  ) => {
    try {
      const response = await getMoviesAPI(
        cinema,
        latitude,
        longitude,
        title,
        genre,
        rating,
      );
      return response;
    } catch (error) {
      if (error.response) {
        const statusCode = error.response.status;
        return rejectWithValue(statusCode);
      } else {
        throw error;
      }
    }
  },
);

export const getMovieById = createAsyncThunk('movies/id', async movieId => {
  try {
    const response = await getMovieByIdAPI(movieId);
    return response;
  } catch (error) {
    if (error.response) {
      const statusCode = error.response.status;
      return rejectWithValue(statusCode);
    } else {
      throw error;
    }
  }
});

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    filterMoviesByTitle: (state, action) => {
      let filteredMovies = state.movies;
      if ( action.payload !== ""){
        filteredMovies = state.movies.filter(movie =>
          movie.title.toLowerCase().includes(action.payload.toLowerCase()),
        );
      }
      state.movies = filteredMovies;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getMovies.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
        state.hasError = false;
      })
      .addCase(getMovies.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.hasError = false;
        state.movies = action.payload;
      })
      .addCase(getMovies.rejected, (state, action) => {
        state.isLoading = false;
        if (action.payload === 404) state.error = null;
        else {
          state.hasError = true;
          state.error = 'We are sorry. An error has occurred. Try again later.';
        }
      })
      .addCase(getMovieById.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
        state.hasError = false;
      })
      .addCase(getMovieById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.hasError = false;

        state.movies = state.movies.map(obj => {
          if (obj.id === action.payload.id) {
            return action.payload;
          }
          return obj;
        });
      })
      .addCase(getMovieById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = 'Hubo un error en la carga de cines';
        state.hasError = true;
      });
  },
});

// Action creators are generated for each case reducer function
export const {filterMoviesByTitle} = moviesSlice.actions;
export default moviesSlice.reducer;
