import { createSlice } from '@reduxjs/toolkit';
import { FETCH_STATUS } from 'constants/fetchStatus';
import { logoutAction } from 'redux/auth/auth.slice';
import { getUserDataThunk } from './user.thunk';

const initialState = {
  status: FETCH_STATUS.Idle,
  data: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  extraReducers: builder => {
    builder
      .addCase(getUserDataThunk.pending, state => {
        state.status = FETCH_STATUS.Loading;
      })
      .addCase(getUserDataThunk.fulfilled, (state, { payload }) => {
        state.status = FETCH_STATUS.Resolved;
        state.data = payload;
      })
      .addCase(getUserDataThunk.rejected, state => {
        state.status = FETCH_STATUS.Rejected;
      })
      .addCase(logoutAction, () => initialState);
  },
});

export default userSlice.reducer;
