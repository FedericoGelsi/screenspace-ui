import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {
  deleteShowAPI,
  editShowAPI,
  newShowAPI,
} from '../../networking/api/endpoints/showsWS';
import {getCinema, getOwnerCinemas} from './ownerCinemasSlice';

const initialState = {
  showId: null,
  cinemaId: null,
  hallId: null,
  movieId: null,
  datetime: null,
  name: null,
  error: null,
  hasError: false,
  isProcessing: false,
};

export const createShow = createAsyncThunk(
  'owner/createShow',
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

export const editShow = createAsyncThunk(
  'owner/editShow',
  async (args, thunkAPI) => {
    const state = thunkAPI.getState();
    const result = await editShowAPI(state.newShowForm);
    thunkAPI.dispatch(getCinema(state.newShowForm.cinemaId));
    return result;
  },
);

export const removeShow = createAsyncThunk(
  'owner/removeShow',
  async ({cinemaId, hallId, showId}, thunkAPI) => {
    const result = await deleteShowAPI(cinemaId, hallId, showId);
    thunkAPI.dispatch(getCinema(cinemaId))
    return result;
  },
);
export const showFormSlice = createSlice({
  name: 'newShowForm',
  initialState,
  reducers: {
    completeForm: (state, action) => {
      state[action.payload.key] = action.payload.value;
    },
    reset: () => initialState,
    loadForm: (state, action) => {
      return action.payload;
    },
    loadFormBack: (state, action) => {
      state.cinemaId = action.payload.cinemaId;
      state.hallId = action.payload.hallId;
      state.name = action.payload.showName;
      state.movieId = action.payload.movieId;
      state.datetime = new Date(action.payload.datetime).toISOString();
      state.showId = action.payload.showId;
    },
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
      })
      .addCase(editShow.pending, (state, action) => {
        state.error = null;
        state.hasError = false;
        state.isProcessing = true;
      })
      .addCase(editShow.rejected, (state, action) => {
        state.hasError = true;
        state.isProcessing = false;
        state.error = 'We are sorry. An error has occurred. Try again later.';
      })
      .addCase(editShow.fulfilled, (state, action) => {
        state.error = null;
        state.hasError = false;
        state.isProcessing = false;
      })
      .addCase(removeShow.pending, (state, action) => {
        state.error = null;
        state.hasError = false;
        state.isProcessing = true;
      })
      .addCase(removeShow.rejected, (state, action) => {
        state.hasError = true;
        state.isProcessing = false;
        state.error = 'We are sorry. An error has occurred. Try again later.';
      })
      .addCase(removeShow.fulfilled, (state, action) => {
        state.error = null;
        state.hasError = false;
        state.isProcessing = false;
      });
  },
});

// Action creators are generated for each case reducer function
export const {completeForm, reset, loadForm, loadFormBack} =
  showFormSlice.actions;

export default showFormSlice.reducer;
