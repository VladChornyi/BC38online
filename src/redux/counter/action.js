import { DECREMENT, INCREMENT } from './action.types';

export const incrementAction = (payload = 1) => {
  return { type: INCREMENT, payload };
};
export const decrementAction = (payload = 1) => {
  return { type: DECREMENT, payload };
};
