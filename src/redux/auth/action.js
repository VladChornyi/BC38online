import { LOG_IN } from './action.types';

export const loginAction = payload => {
  return { type: LOG_IN, payload };
};
