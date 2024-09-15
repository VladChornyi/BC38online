import { createAsyncThunk } from '@reduxjs/toolkit';
import { token } from 'http/http';
import { getUserDataThunk } from 'redux/user/user.thunk';
import { login } from 'services/users.service';

export const logInThunk = createAsyncThunk('user/login', async (body, { rejectWithValue, dispatch }) => {
  try {
    const data = await login(body);
    token.set(data.access_token);
    // dispatch(getUserDataThunk());
    return data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});
