import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {getCinemas, getCinemaById} from '../../networking/api/endpoints/cinemasWS';
import { loadHalls } from './hallSlice';

const initialState = {
  cinemas: [],
  error: null,
  isLoading: false,
};

export const getOwnerCinemas = createAsyncThunk('cinemas', async ownerId => {
  return await getCinemas(ownerId);
});

export const getCinema = createAsyncThunk('cinemas/id', async (cinemaId, {dispatch}) => {
  const response = await getCinemaById(cinemaId);
  dispatch(loadHalls(response.halls));
  return response;
});

const ownerCinemasSlice = createSlice({
  name: 'ownerCinemas',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getOwnerCinemas.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getOwnerCinemas.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.cinemas = action.payload;
      })
      .addCase(getOwnerCinemas.rejected, (state, action) => {
        state.isLoading = false;
        state.error = 'Hubo un error en la carga de cines';
      })
      .addCase(getCinema.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getCinema.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        
        state.cinemas = state.cinemas.map(obj => {
          if (obj.id === action.payload.id) {
            return action.payload
          }
          return obj;
        });
      })
      .addCase(getCinema.rejected, (state, action) => {
        state.isLoading = false;
        state.error = 'Hubo un error en la carga de cines';
      });
  },
});

export default ownerCinemasSlice.reducer;
