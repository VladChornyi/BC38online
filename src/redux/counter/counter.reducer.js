// import { createReducer } from '@reduxjs/toolkit';
// import { decrementAction, incrementAction } from './action';
// import { counterInitialState } from './counter.initial-state';

// export const counterReducer = createReducer(counterInitialState, {
//   [incrementAction]: (state, action) => state + action.payload.number,
//   [decrementAction]: (state, action) => state - action.payload,
// });
// export const counterReducer = (state = counterInitialState, action) => {
//   switch (action.type) {
//     case INCREMENT:
//       return state + action.payload.number;
//     case DECREMENT:
//       return state - action.payload;
//     default:
//       return state;
//   }
// };
