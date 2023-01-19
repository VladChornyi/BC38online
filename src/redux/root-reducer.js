import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from './auth/auth.slice';
import counterReducer from './counter/counter.slice';
import usersReducer from './users/users.slice';

const persistConfig = {
  key: 'BC38',
  storage,
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);

export const rootReducer = combineReducers({
  counter: counterReducer,
  auth: persistedAuthReducer,
  users: usersReducer,
});
