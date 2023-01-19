import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginAction(state, action) {
      if (action.payload.password === 'admin') {
        state.isLoggedIn = true;
        state.user = action.payload.user;
      }
    },
    logoutAction() {
      return initialState;
    },
  },
});

export const { loginAction, logoutAction } = authSlice.actions;
const authReducer = authSlice.reducer;
export default authReducer;
