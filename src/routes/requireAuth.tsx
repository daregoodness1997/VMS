import { useLocation, Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { Dashboard } from '../pages/app/Dashboard';

export const RequireAuth = () => {
  const { signedIn } = useAuth();
  let location = useLocation();
  if (!signedIn) {
    return <Navigate to='/' state={{ from: location }} replace />;
  } else {
    return <Dashboard />;
  }
};
