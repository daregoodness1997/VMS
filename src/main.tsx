import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// import ChakraProvider component
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
// import custom theme
import { theme } from './helpers/theme';
// import Redux Provider
import { Provider } from 'react-redux';

// import store
import { store } from './redux/store/store';

// import BrowserRouter from react-router-dom
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes';

ReactDOM.render(
  <Provider store={store}>
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ChakraProvider>
  </Provider>,
  document.getElementById('root')
);
