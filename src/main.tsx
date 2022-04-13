import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// import ChakraProvider component
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
// import custom theme
import { theme } from './helpers/theme';
import App from './App';

// import Redux Provider
import { Provider } from 'react-redux';

// import store
import { store } from './redux/store/store';

ReactDOM.render(
  <Provider store={store}>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </Provider>,
  document.getElementById('root')
);
