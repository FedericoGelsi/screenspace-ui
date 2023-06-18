import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {getCinemas} from '../../networking/api/endpoints/cinemasWS';

const initialState = {
  cinemas: [],
  error: null,
  isLoading: false,
};

export const getOwnerCinemas = createAsyncThunk('cinemas', async ownerId => {
  return await getCinemas(ownerId);
});

const ownerCinemasSlice = createSlice({
  name: 'ownerCinemas',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getOwnerCinemas.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
        console.log(action);
      })
      .addCase(getOwnerCinemas.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.cinemas = action.payload.items;
        console.log(action);
      })
      .addCase(getOwnerCinemas.rejected, (state, action) => {
        state.isLoading = false;
        state.error = 'Hubo un error en la carga de restaurants';
        console.log(action);
      });
  },
});

export default ownerCinemasSlice.reducer;
