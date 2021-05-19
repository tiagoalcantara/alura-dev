import React from 'react';
import ReactDOM from 'react-dom';

import { ThemeProvider } from 'styled-components';
import { defaultTheme, GlobalStyle } from './styles/globals';

import Home from './pages/Home';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <Home />
      <GlobalStyle />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);