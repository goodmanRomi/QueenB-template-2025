import React from 'react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MainLayout from './components/MainLayout';
import { ThemeProvider } from './contexts/ThemeContext';
import { useTheme } from './hooks/useTheme';

function App() {
  const theme = useTheme();

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <ThemeProvider>
        <MainLayout />
      </ThemeProvider>
    </MuiThemeProvider>
  );
}

export default App;
