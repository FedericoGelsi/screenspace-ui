import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {
  getCinemas,
  getCinemaById,
} from '../../networking/api/endpoints/cinemasWS';
import {loadHalls} from './hallSlice';

const initialState = {
  cinemas: [],
  hasError: false,
  error: null,
  isLoading: false,
};

export const getOwnerCinemas = createAsyncThunk('cinemas', async (ownerId, thunkAPI) => {
  try {
    const response = await getCinemas(ownerId);
    return response;
  } catch (error) {
    if (error.response) {
      const statusCode = error.response.status;
      return thunkAPI.rejectWithValue(statusCode);
    } else {
      throw error;
    }
  }
});

export const getCinema = createAsyncThunk(
  'cinemas/id',
  async (cinemaId, {dispatch}) => {
    const response = await getCinemaById(cinemaId);
    dispatch(loadHalls(response.halls));
    return response;
  },
);

const ownerCinemasSlice = createSlice({
  name: 'ownerCinemas',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getOwnerCinemas.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
        state.hasError = false;
      })
      .addCase(getOwnerCinemas.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.hasError = false;
        state.cinemas = action.payload;
      })
      .addCase(getOwnerCinemas.rejected, (state, action) => {
        state.isLoading = false;
        if (action.payload === 404) state.error = null;
        else {
          state.hasError = false;
          state.error = 'We are sorry. An error has occurred. Try again later.';
        }
      })
      .addCase(getCinema.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
        state.hasError = false;
      })
      .addCase(getCinema.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.hasError = false;

        state.cinemas = state.cinemas.map(obj => {
          if (obj.id === action.payload.id) {
            return action.payload;
          }
          return obj;
        });
      })
      .addCase(getCinema.rejected, (state, action) => {
        state.isLoading = false;
        state.error = 'Hubo un error en la carga de cines';
        state.hasError = true;
      });
  },
});

export default ownerCinemasSlice.reducer;
