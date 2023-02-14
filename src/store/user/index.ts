import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {LoginData, UserLogin} from './userType';
import UserService from '../../services/userService';
import {CreateUserPost} from '@utils/helpers/types';
import {showMessage} from 'react-native-flash-message';

const initialState: UserLogin = {
  status: 'idle',
  token: '',
  errorMessage: '',
  email: '',
  name: '',
};

export const signUpUser = createAsyncThunk(
  'user/signUp',
  async (data: CreateUserPost, {rejectWithValue}) => {
    try {
      const response = await UserService.createUser(data);
      return response.data;
    } catch (error: any) {
      console.log('error', error);
      if (error.response && error.response.data.message) {
        showMessage({
          message: error.response.data.message,
          type: 'danger',
        });
        return rejectWithValue(error.response.data.message);
      } else {
        showMessage({
          message: error.response.data.error,
          type: 'danger',
        });
        return rejectWithValue(error.response.data.error);
      }
    }
  },
);

export const signInUser = createAsyncThunk(
  'user/signIn',
  async (data: LoginData, {rejectWithValue}) => {
    try {
      const response = await UserService.logInUser(data);
      return response.data;
    } catch (error: any) {
      console.log('error', error);
      if (error.response && error.response.data.message) {
        showMessage({
          message: error.response.data.message,
          type: 'danger',
        });
        return rejectWithValue(error.response.data.message);
      } else {
        showMessage({
          message: error.response.data.error,
          type: 'danger',
        });
        return rejectWithValue(error.response.data.error);
      }
    }
  },
);

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: state => {
      state.status = 'idle';
      state.token = '';
      state.errorMessage = '';
    },
    refreshToken: (state, action) => {
      state.token = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(signInUser.pending, state => {
        state.status = 'loading';
      })
      .addCase(signInUser.fulfilled, (state, action) => {
        state.status = 'idle';
        state.errorMessage = '';
        state.token = action.payload.accessToken;
        state.name = action.payload.name;
        state.email = action?.payload?.email;
      })
      .addCase(signInUser.rejected, (state, action) => {
        state.status = 'failed';
        state.token = '';
        state.errorMessage = action.payload as string;
      });
    builder
      .addCase(signUpUser.pending, state => {
        state.status = 'loading';
      })
      .addCase(signUpUser.fulfilled, (state, action) => {
        console.log('Payload jeee', action.payload);

        state.status = 'idle';
        state.errorMessage = '';
        state.token = action.payload.accessToken;
        state.name = action.payload.name;
        state.email = action?.payload?.email;
      })
      .addCase(signUpUser.rejected, (state, action) => {
        state.status = 'failed';
        state.token = '';
        state.errorMessage = action.payload as string;
      });
  },
});

export const {logout, refreshToken} = userSlice.actions;
export default userSlice.reducer;
