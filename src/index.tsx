import React from 'react';
import { ThemeProvider } from 'styled-components';
import { NavigationContainer } from '@react-navigation/native';

import theme from './global/styles/theme';

import Exercise from './screens/Exercise'
import MainScreen from './screens/Main';
import Routes from './routes/routes';

export default function App() {
  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <Routes/>
        {/* <MainScreen/> */}
      </ThemeProvider>
    </NavigationContainer>
   
  );
}
