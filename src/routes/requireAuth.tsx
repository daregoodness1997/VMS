import { useLocation, Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const { signedIn } = useAuth();
  let location = useLocation();
  if (!signedIn) {
    return <Navigate to='/' state={{ from: location }} replace />;
  } else {
    return children;
  }
};
