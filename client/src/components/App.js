import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Welcome from './Welcome';
import Dashboard from './Dashboard';

// Create a custom theme for QueenB
const theme = createTheme({
  palette: {
    primary: {
      main: '#FF69B4', // Hot pink
      light: '#FFB6C1',
      dark: '#FF1493',
    },
    secondary: {
      main: '#FF1493', // Deep pink
      light: '#FF69B4',
      dark: '#C71585',
    },
    background: {
      default: '#FFF0F5',
      paper: '#FFFFFF',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 600,
    },
    h3: {
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          textTransform: 'none',
          fontWeight: 600,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
        },
      },
    },
  },
});

function App() {
  const [selectedRole, setSelectedRole] = useState(null);
  const [showDashboard, setShowDashboard] = useState(false);

  const handleRoleSelect = (role) => {
    setSelectedRole(role);
    setShowDashboard(true);
  };

  const handleBackToWelcome = () => {
    setSelectedRole(null);
    setShowDashboard(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {!showDashboard ? (
        <Welcome onRoleSelect={handleRoleSelect} />
      ) : (
        <Dashboard 
          selectedRole={selectedRole} 
          onBackToWelcome={handleBackToWelcome}
        />
      )}
    </ThemeProvider>
  );
}

export default App;
