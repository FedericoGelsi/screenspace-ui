import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { editCinemaAPI, getCinemas, newCinemaAPI } from '../../networking/api/endpoints/cinemasWS';

const initialState = {
    cinemaName: null,
    companyName: null,
    pricePerShow: null,
    active: false,
    address: null,
    postalCode: null,
    city: null,
    province: 'Buenos Aires',
    country: null,
    error: null,
};

export const createCinema = createAsyncThunk(
  'owner/createCinema',
  async (ownerId, thunkAPI) => {
    const state = thunkAPI.getState();
    const result = await newCinemaAPI(ownerId, state.form);
    return result;
  }
);

export const editCinema = createAsyncThunk(
  'owner/editCinema',
  async (cinemaId, thunkAPI) => {
    const state = thunkAPI.getState();
    const result = await editCinemaAPI(cinemaId, state.form);
    return result;
  }
);

export const formSlice = createSlice({
  name: 'form',
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
      state.cinemaName = action.payload.cinemaName;
      state.companyName = action.payload.companyName;
      state.pricePerShow = action.payload.pricePerShow.toString();
      state.active = action.payload.active;
      state.address = action.payload.address;
      state.postalCode = action.payload.postalCode;
      state.city = action.payload.city;
      state.province = action.payload.province;
      state.country = action.payload.country;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(createCinema.pending, (state, action) => {
      state.error = null;
    })
      .addCase(createCinema.fulfilled, (state, action) => {
        state.error = false;
      })
      .addCase(createCinema.rejected, (state, action) => {
        state.error = true
      })
      .addCase(editCinema.pending, (state, action) => {
        state.error = null;
      })
      .addCase(editCinema.rejected, (state, action) => {
        state.error = true
      })
      .addCase(editCinema.fulfilled, (state, action) => {
        state.restaurants = action.payload;
        state.error = false;
      })
    }
});

// Action creators are generated for each case reducer function
export const { completeForm, reset, loadForm, loadFormBack } = formSlice.actions;

export const isDetailsComplete = (state) => {
  return (state?.form?.cinemaName == null || state?.form?.cinemaName === "") ||
         (state?.form?.companyName == null || state?.form?.companyName === "")  ||
         (state?.form?.pricePerShow == null || state?.form?.pricePerShow === "")
};

export const isAddressComplete = (state) => {
  return (state?.form?.address == null || state?.form?.address === "") || 
         (state?.form?.postalCode == null || state?.form?.postalCode === "") || 
         (state?.form?.city == null || state?.form?.city === "") ||
         (state?.form?.country == null || state?.form?.country === "")
};

export default formSlice.reducer;
