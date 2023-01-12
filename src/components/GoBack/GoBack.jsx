import { Button } from 'components/Button';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const GoBack = () => {
  const location = useLocation();
  console.log('location :>> ', location.state?.from);

  return <Link to={location.state?.from ?? '/'}>Go back</Link>;
};

export default GoBack;
