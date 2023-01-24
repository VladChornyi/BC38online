import axios from 'axios';

export const userPublicAPI = axios.create({
  baseURL: 'http://70.34.201.18:4444/',
});

export const userPrivateAPI = axios.create({
  baseURL: 'http://70.34.201.18:4444/',
});

export const token = {
  set: token => {
    userPrivateAPI.defaults.headers.Authorization = `Bearer ${token}`;
  },
  unset: () => {
    userPrivateAPI.defaults.headers.Authorization = '';
  },
};
