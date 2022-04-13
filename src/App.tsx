import './App.css';
import { Navbar } from './components';

// import useColorMode from chakra-ui

import SignIn from './pages/auth/sign-in';
import SignUp from './pages/auth/sign-up';

function App() {
  return (
    <div className='App'>
      {/* <Navbar /> */}
      <SignIn />
      {/* <SignUp /> */}
    </div>
  );
}

export default App;
