import { createAsyncThunk } from '@reduxjs/toolkit';
import { token } from 'http/http';
import { selectToken } from 'redux/auth/auth.selector';
import { getUserData } from 'services/users.service';

export const getUserDataThunk = createAsyncThunk('user/getData', async (_, { rejectWithValue, getState }) => {
  try {
    const access_token = selectToken(getState());
    if (access_token) {
      token.set(access_token);
    } else {
      return rejectWithValue();
    }
    const data = await getUserData();
    return data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});
