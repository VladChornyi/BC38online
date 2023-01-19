import { createSlice } from '@reduxjs/toolkit';
import { fetchUsersActionSuccess } from './users.action';
import { deleteUser, fetchUsers } from './users.thunk';

const error = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
const loading = state => {
  state.isLoading = true;
};

const initialState = { items: [], isLoading: false, error: null };

const usersSlice = createSlice({
  name: 'users',
  initialState,
  // reducers: {
  //   fetchUsersPending(state) {
  //     state.isLoading = true;
  //   },
  //   fetchUsersError(state, action) {
  //     state.isLoading = false;
  //     state.error = action.payload;
  //   },
  //   fetchUsersActionSuccess,
  // },
  extraReducers: builder => {
    builder
      .addCase(fetchUsers.pending, loading)
      .addCase(deleteUser.pending, loading)
      .addCase(fetchUsers.rejected, error)
      .addCase(deleteUser.rejected, error)
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        // state.items = state.items.filter(item => item.id !== action.payload);
        state.isLoading = false;
        state.error = null;
      });
  },
});

export const { fetchUsersPending, fetchUsersError } = usersSlice.actions;
export default usersSlice.reducer;
