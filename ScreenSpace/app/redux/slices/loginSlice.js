import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {loginAPI} from '../../networking/api/endpoints/loginWS';
import {loginGoogleAPI} from '../../networking/api/endpoints/loginGoogleWS';

const initialState = {
  token: '',
  refreshToken: null,
  userId: '',
  username: '',
  email: '',
  isLoading: false,
  error: null,
  hasError: false,
  isNewUser: false,
  userClaims: {}
};

export const userLogin = createAsyncThunk('userLogin', async loginInfo => {
  const response = await loginAPI(loginInfo.email, loginInfo.password);
  return response;
});

export const userLoginGoogle = createAsyncThunk('userLoginGoogle', async googleIdToken => {
    const response = await loginGoogleAPI(googleIdToken);
    return response;
});

const UserLoginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    reset: () => initialState,
    completeUserId: (state, action) => {
      state.userId = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(userLogin.pending, (state, action) => {
        console.log('pending');
        state.isLoading = true;
        state.error = null;
        state.hasError = false;
      })
      .addCase(userLogin.fulfilled, (state, action) => {
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
      })
      .addCase(userLoginGoogle.pending, (state, action) => {
        console.log('pending');
        state.isLoading = true;
        state.error = null;
        state.hasError = false;
      })
      .addCase(userLoginGoogle.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.hasError = false;
        state.token = action.payload.jwt;
        state.userClaims = action.payload.user;
        state.userId = action.payload.user.id;
        state.username = action.payload.user.username;
        state.email = action.payload.user.email;
        state.isNewUser = action.payload.isNewUser;
      })
      .addCase(userLoginGoogle.rejected, (state, action) => {
        console.log('rejected');
        state.isLoading = false;
      });
  },
});

export const {reset, completeUserId} = UserLoginSlice.actions;

export default UserLoginSlice.reducer;
