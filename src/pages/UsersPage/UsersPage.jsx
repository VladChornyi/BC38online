import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, fetchUsers } from 'redux/users/users.thunk';

const UsersPage = () => {
  const isLoading = useSelector(state => state.users.isLoading);
  const usersItems = useSelector(state => state.users.items);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers({ userId: 1 }));
  }, []);

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      <p>users</p>
      <ul>
        {usersItems.map(user => (
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
