import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { editCinemaHallAPI, newCinemaHallAPI, removeCinemaHallAPI } from '../../networking/api/endpoints/cinemasWS';
import { getCinema } from './ownerCinemasSlice';

const initialState = {
    halls: [],
    hallId: null,
    hallName: null,
    numberOfLines: 0,
    numberOfSeats: 0,
    active: 0,
    error: null,
};

export const createHall = createAsyncThunk(
  'owner/createHall',
  async (cinemaId, thunkAPI) => {
    const state = thunkAPI.getState();
    const result = await newCinemaHallAPI(cinemaId, state.hall);
    thunkAPI.dispatch(getCinema(cinemaId));
    return result;
  }
);

export const editHall = createAsyncThunk(
  'owner/editHall',
  async (cinemaId, thunkAPI) => {
    const state = thunkAPI.getState();
    const result = await editCinemaHallAPI(cinemaId, state.hall);
    thunkAPI.dispatch(getCinema(cinemaId));
    return result;
  }
);

export const removeHall = createAsyncThunk(
  'owner/removeHall',
  async (cinemaId, thunkAPI) => {
    const state = thunkAPI.getState();
    const result = await removeCinemaHallAPI(cinemaId, state.hall.hallId);
    thunkAPI.dispatch(getCinema(cinemaId));
    return result;
  }
);

export const hallSlice = createSlice({
  name: 'hall',
  initialState,
  reducers: {
    completeHall: (state, action) => {
      state[action.payload.key] = action.payload.value;
    },
    reset: (state) => {
      state.hallId = null,
      state.hallName = null,
      state.numberOfLines = 0,
      state.numberOfSeats = 0,
      state.active = 0
    },
    loadHall: (state, action) => {
      return action.payload;
    },
    loadHallFromBack: (state, action) => {
      state.hallName = action.payload.name;
      state.numberOfLines = action.payload.height;
      state.numberOfSeats = action.payload.width;
      state.active = action.payload.available ? 1 : 0;
    },
    loadHalls: (state, action) => {
      state.halls = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createHall.pending, (state, action) => {
      state.error = null;
    })
    .addCase(createHall.fulfilled, (state, action) => {
      state.error = false;
    })
    .addCase(createHall.rejected, (state, action) => {
      state.error = true
    })
    .addCase(editHall.pending, (state, action) => {
      state.error = null;
    })
    .addCase(editHall.fulfilled, (state, action) => {
      state.error = false;
    })
    .addCase(editHall.rejected, (state, action) => {
      state.error = true
    })
    .addCase(removeHall.pending, (state, action) => {
      state.error = null;
    })
    .addCase(removeHall.fulfilled, (state, action) => {
      state.error = false;
    })
    .addCase(removeHall.rejected, (state, action) => {
      state.error = true
    })
  }
});

// Action creators are generated for each case reducer function
export const { completeHall, reset, loadHall, loadHallFromBack, loadHalls } = hallSlice.actions;

export const isComplete = (state) => {
  return (state?.hall?.hallName == null || state?.hall?.hallName === "") ||
         (state?.hall?.numberOfLines === 0)  ||
         (state?.hall?.numberOfSeats === 0)
};

export default hallSlice.reducer;
