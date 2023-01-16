import { combineReducers } from 'redux';
import { authReducer } from './auth/auth.reducer';
import { counterReducer } from './counter/counter.reducer';

export const rootReducer = combineReducers({
  counter: counterReducer,
  auth: authReducer,
});
