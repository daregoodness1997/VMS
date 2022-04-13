import { Route, Routes } from 'react-router-dom';
import SignIn from '../pages/auth/sign-in';
import Dashboard from '../pages/app/Dashboard';
import { RequireAuth } from './requireAuth';
import SignUp from '../pages/auth/sign-up';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<SignIn />} />
      <Route path='/signup' element={<SignUp />} />

      <Route
        path='/app'
        element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
