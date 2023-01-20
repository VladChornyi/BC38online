import { useState } from 'react';
import { useMemo } from 'react';
import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { selectCounter } from 'redux/counter/counter.selectors';
import { incrementAction } from 'redux/counter/counter.slice';
import {
  selectFilter,
  selectFilteredUsersItems,
  selectIsLoading,
  selectMarriedUsersItems,
  selectUsersItems,
} from 'redux/users/selector';
import { changeFilter } from 'redux/users/users.slice';
import { deleteUser, fetchUsers } from 'redux/users/users.thunk';

const UsersPage = () => {
  const isLoading = useSelector(selectIsLoading);
  const filteredUsersItems = useSelector(selectFilteredUsersItems);
  const counter = useSelector(selectCounter);
  const filter = useSelector(selectFilter);
  const countMarried = useSelector(selectMarriedUsersItems);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers({ userId: 1 }));
  }, []);

  const handleChange = ({ target: { value } }) => {
    dispatch(changeFilter(value));
  };

  return (
    <div>
      <p>Married: {countMarried}</p>
      <input type="text" name="filter" value={filter} onChange={handleChange} />
      <h2>{counter}</h2>
      <button
        onClick={() => {
          dispatch(incrementAction(1));
        }}
      >
        +1
      </button>
      {isLoading && <p>Loading...</p>}
      <p>users</p>
      <ul>
        {filteredUsersItems.map(user => (
          <li key={user.id}>
            <img src={user.avatar} alt="avatar" />
            <h3>{user.name}</h3>
            <p>{user.birthday}</p>
            <p>{user.address}</p>
            <button
              type="button"
              onClick={() => {
                dispatch(deleteUser(user.id));
              }}
            >
              Delete me
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersPage;
