import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import counterReducer from './counter/counter.slice';
import usersReducer from './users/users.slice';
import authReducer from './auth/auth.slice';
import userReducer from './user/user.slice';

const persistConfig = {
  key: 'AUTH',
  storage,
  blacklist: ['status'],
};

const persistedReducer = persistReducer(persistConfig, authReducer);

export const rootReducer = combineReducers({
  counter: counterReducer,
  users: usersReducer,
  auth: persistedReducer,
  user: userReducer,
});
