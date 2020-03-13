import React from 'react';
import './App.css';
import styled from 'styled-components';
import DefaultRouter from './config/Router';
import { ThemeProvider } from 'styled-components';

import theme from './config/theme';

function App() {
  return (
      <ThemeProvider theme={theme}>
        <DefaultTheme>
          <DefaultRouter />
        </DefaultTheme>
      </ThemeProvider>
  );
}

const DefaultTheme = styled.div`
  display: block;
  position: relative;
  min-height: 100vh;
  &::after {
    content: '';
    opacity: 0.7;
    background: url(${props => props.theme.bg}) fixed center;
    background-size: cover;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;
  }
`;

export default App;
