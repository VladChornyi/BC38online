import { DECREMENT, INCREMENT } from './action.types';
import { counterInitialState } from './counter.initial-state';

export const counterReducer = (state = counterInitialState, action) => {
  console.log('state :>> ', state);
  switch (action.type) {
    case INCREMENT:
      return state + action.payload;
    case DECREMENT:
      return state - action.payload;
    default:
      return state;
  }
};
