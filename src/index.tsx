import React from 'react';
import ReactDOM from 'react-dom';

import GlobalStyle from './styles/globals'
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/theme';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <div>Oi!</div>
      <GlobalStyle />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);