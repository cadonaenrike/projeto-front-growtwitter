import React from 'react';
import { ThemeProvider } from 'styled-components';

const lightTheme = {
  colors: {
    primary: '#ffffff',
    secondary: '#000303',
    background: '#fff',
    backgroundSecondary: 'rgb(242, 242, 242)',
    text: '#000'
  },
  fonts: ['sans-serif', 'Roboto'],
  fontSizes: {
    small: '1em',
    medium: '2em',
    large: '3em'
  }
};

const darkTheme = {
  colors: {
    primary: '#1A1A1A',
    secondary: '#4A4A4A',
    backgroundSecondary: '#4A4A4A',
    background: '#000000',
    text: '#fcfcfc'
  },
  fonts: ['sans-serif', 'Roboto'],
  fontSizes: {
    small: '1em',
    medium: '2em',
    large: '3em'
  }
};

interface ThemeProps {
  children: React.ReactNode;
  isDarkTheme: boolean;
}

const DefaultTheme: React.FC<ThemeProps> = ({ children, isDarkTheme }) => (
  <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>{children}</ThemeProvider>
);

export default DefaultTheme;
