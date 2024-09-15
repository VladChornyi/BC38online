import axios from 'axios';
import { userPrivateAPI, userPublicAPI } from 'http/http';

export const signUp = body => {
  return userPublicAPI.post('users/create', body);
};

export const login = async body => {
  const { data } = await userPublicAPI.post('users/login', body);
  return data;
};

export const getUserData = async () => {
  const { data } = await userPrivateAPI.get('users/profile');
  return data;
};
