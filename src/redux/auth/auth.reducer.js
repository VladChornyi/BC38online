import { INCREMENT } from 'redux/counter/action.types';
import { LOG_IN } from './action.types';
import { authInitialState } from './auth.initial-state';

export const authReducer = (state = authInitialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { isLoggedIn: true };
    default:
      return state;
  }
};
