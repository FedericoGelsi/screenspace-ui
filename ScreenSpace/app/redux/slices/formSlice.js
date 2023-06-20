import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getCinemas, newCinema } from '../../networking/api/endpoints/cinemasWS';

const initialState = {
    cinemaName: null,
    companyName: null,
    pricePerShow: null,
    active: null,
    address: null,
    postalCode: null,
    city: null,
    province: 'Buenos Aires',
    country: null,
    error: null,
};

export const createCinema = createAsyncThunk(
  'owner/cinema',
  async (ownerId, thunkAPI) => {
    const state = thunkAPI.getState();
    const result = await newCinema(ownerId, state.form);
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
      state.cinemaName = action.payload.name;
      state.companyName = action.payload.company;
      state.pricePerShow = action.payload.seatCosts.toString();
      state.active = action.payload.available;
      state.address = action.payload.calle + " " + action.payload.numero;
      state.postalCode = "No definido";
      state.city = action.payload.localidad;
      state.province = action.payload.provincia;
      state.country = action.payload.pais;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(createCinema.pending, (state, action) => {
      state.error = null;
    })
      .addCase(createCinema.fulfilled, (state, action) => {
        state.restaurants = action.payload;
        state.error = false;
        console.log(action.type);
      })
      .addCase(createCinema.rejected, (state, action) => {
        state.error = true
        console.log(action);
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
