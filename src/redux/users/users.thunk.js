import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchUsersActionSuccess } from './users.action';
import { fetchUsersError, fetchUsersPending } from './users.slice';

export const usersAPI = axios.create({
  baseURL: 'https://63c7e1d3075b3f3a91d50f37.mockapi.io/users/',
});

export const fetchUsers = createAsyncThunk('users/fetchAll', async (_, { rejectWithValue }) => {
  try {
    const { data } = await usersAPI.get();
    return data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const deleteUser = createAsyncThunk('users/deleteUser', async (userId, { rejectWithValue, dispatch }) => {
  try {
    await usersAPI.delete(userId);
    dispatch(fetchUsers());

    // return data.id;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

// export const fetchUsers = fetchData => async dispatch => {
//   try {
//     dispatch(fetchUsersPending());
//     const { data } = await usersAPI.get();
//     dispatch(fetchUsersActionSuccess(data));
//   } catch (error) {
//     dispatch(fetchUsersError(error.message));
//   }
// };

// actionCreator = payload => {
//   type: 'action/addAction', payload;
// };
