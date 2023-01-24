import { useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { selectToken } from 'redux/auth/auth.selector';

const PublicRoute = () => {
  const location = useLocation();

  const token = useSelector(selectToken);
  return token ? <Navigate to={location.state?.authLocation ?? '/'} /> : <Outlet />;
};

export default PublicRoute;
