import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {loginAPI} from '../../networking/api/endpoints/loginWS';

const initialState = {
  token: '',
  refreshToken: null,
  userId: '',
  username: '',
  email: '',
  isLoading: false,
  error: null,
  hasError: false,
};

export const userLogin = createAsyncThunk('userLogin', async loginInfo => {
  const response = await loginAPI(loginInfo.email, loginInfo.password);
  return response;
});

const UserLoginSlice = createSlice({
  name: 'login',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(userLogin.pending, (state, action) => {
        console.log('pending');
        state.isLoading = true;
        state.error = null;
        state.hasError = false;
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        console.log('fullfilled');
        state.isLoading = false;
        state.error = null;
        state.hasError = false;
        state.token = action.payload.token;
        state.userId = action.payload.userId;
        state.username = action.payload.username;
        state.email = action.payload.email;
      })
      .addCase(userLogin.rejected, (state, action) => {
        console.log('rejected');
        state.isLoading = false;
      });
  },
});

export default UserLoginSlice.reducer;
