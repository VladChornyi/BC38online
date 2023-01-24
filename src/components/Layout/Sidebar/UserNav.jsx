import { UserCard } from 'components/UserCard/UserCard';
import { token } from 'http/http';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';
import { logoutAction } from 'redux/auth/auth.slice';
import { selectUser } from 'redux/user/user.selector';

export const UserNav = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const user = useSelector(selectUser);

  const logout = () => {
    token.unset();
    dispatch(logoutAction());
  };

  return (
    <div className="d-flex flex-column justify-content-between h-100">
      <div className="d-flex flex-column justify-content-between">
        <h2 className="h3 mb-4">Welcome back! {user?.first_name}</h2>
        <UserCard />
        <NavLink
          to="/"
          style={{ textAlign: 'left', marginLeft: '-10px' }}
          className={({ isActive }) => (isActive ? 'btn btn-primary' : 'btn btn-light')}
          state={{ from: location }}
        >
          Home page
        </NavLink>
        <NavLink
          to="/posts"
          style={{ textAlign: 'left', marginLeft: '-10px' }}
          className={({ isActive }) => (isActive ? 'btn btn-primary' : 'btn btn-light')}
          state={{ from: location }}
        >
          Posts list
        </NavLink>
        <NavLink
          to="/tasks"
          style={{ textAlign: 'left', marginLeft: '-10px' }}
          className={({ isActive }) => (isActive ? 'btn btn-primary' : 'btn btn-light')}
          state={{ from: location }}
        >
          React exercises
        </NavLink>

        <button type="button" onClick={logout} className="btn btn-primary mt-5">
          Log out
        </button>
      </div>
    </div>
  );
};
