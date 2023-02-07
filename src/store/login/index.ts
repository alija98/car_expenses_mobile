import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from '../../utils/helpers/axios';
import {LoginData, RUserLogin} from './loginType';

const initialState: RUserLogin = {
  status: 'idle',
  isLogged: false,
  token: '',
  errorMessage: '',
  username: '',
  // first_name: '',
  // last_name: '',
};

export const loginUser = createAsyncThunk(
  'login/saveToken',
  async (data: LoginData, {rejectWithValue}) => {
    try {
      const response = await axios.post('login', data);
      return response.data;
    } catch (error: any) {
      console.log('error', error);

      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.response.data.error);
      }
    }
  },
);

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    logout: state => {
      state.status = 'idle';
      state.isLogged = false;
      state.token = '';
      state.errorMessage = '';
    },
    refreshToken: (state, action) => {
      state.token = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(loginUser.pending, state => {
        state.status = 'loading';
        state.isLogged = false;
        state.token = '';
        state.errorMessage = '';
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = 'idle';
        state.isLogged = true;
        state.errorMessage = '';
        state.token = action.payload.authorization.token;
        // state.first_name = action?.payload?.user?.first_name;
        // state.last_name = action?.payload?.user?.last_name;
        state.username = action?.payload?.user?.email;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = 'failed';
        state.isLogged = false;
        state.token = '';
        state.errorMessage = action.payload as string;
      });
  },
});

export const {logout, refreshToken} = loginSlice.actions;
export default loginSlice.reducer;
