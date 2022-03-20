import React from 'react';
import { ThemeProvider } from 'styled-components';
import { NavigationContainer } from '@react-navigation/native';

import theme from './global/styles/theme';

import Routes from './routes';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Routes/>
      </NavigationContainer>
    </ThemeProvider>
  );
}
