import { Route, Routes } from 'react-router-dom';
import SignIn from '../pages/auth/sign-in';
import Dashboard from '../pages/app/Dashboard';
import { RequireAuth } from './requireAuth';
import SignUp from '../pages/auth/sign-up';
import Overview from '../core-ui/Dashboard/Overview';
import Departments from '../core-ui/Dashboard/Departments';
import Staffs from '../core-ui/Dashboard/Staffs';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<SignIn />} />
      <Route path='/signup' element={<SignUp />} />

      <Route path='/app' element={<RequireAuth />}>
        <Route index element={<Overview />} />
        <Route path='/app/departments' element={<Departments />} />
        <Route path='/app/staffs' element={<Staffs />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
