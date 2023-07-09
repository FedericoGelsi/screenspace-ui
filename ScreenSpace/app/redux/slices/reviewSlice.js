import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {postMovieReviewAPI} from '../../networking/api/endpoints/moviesWS';
import {getMoviesInTheaters} from './showingSlice';

const initialState = {
  raiting: null,
  comment: null,
  error: null,
  isLoading: false,
  hasError: false,
};

export const newReview = createAsyncThunk(
  'user/review',
  async (movieId, thunkAPI) => {
    const state = thunkAPI.getState();
    const result = await postMovieReviewAPI(
      movieId,
      state.login.userId,
      state.review,
    );
    thunkAPI.dispatch(getMoviesInTheaters());
    return result;
  },
);

export const reviewSlice = createSlice({
  name: 'review',
  initialState,
  reducers: {
    completeForm: (state, action) => {
      state[action.payload.key] = action.payload.value;
    },
    reset: () => initialState,
  },
  extraReducers: builder => {
    builder
      .addCase(newReview.pending, (state, action) => {
        state.error = null;
        state.hasError = false;
        state.isLoading = true;
      })
      .addCase(newReview.fulfilled, (state, action) => {
        state.error = null;
        state.hasError = false;
        state.isLoading = false;
      })
      .addCase(newReview.rejected, (state, action) => {
        state.error = 'We are sorry. An error has occurred. Try again later.';
        state.hasError = true;
        state.isLoading = false;
      });
  },
});

// Action creators are generated for each case reducer function
export const {completeForm, reset} = reviewSlice.actions;

export default reviewSlice.reducer;
