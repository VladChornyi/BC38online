import { createSlice } from '@reduxjs/toolkit';

const initialState = 0;

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    incrementAction(state, action) {
      return state + action.payload;
    },
    decrementAction(state, action) {
      return state - action.payload;
    },
    resetAction() {
      return initialState;
    },
  },
});
export const { incrementAction, decrementAction, resetAction } = counterSlice.actions;

const counterReducer = counterSlice.reducer;
export default counterReducer;
