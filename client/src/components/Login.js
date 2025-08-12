import React from 'react';
import { Box, Paper, Typography, Button, useTheme } from '@mui/material';

function Login({ onBackToWelcome }) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #FCE8D6 0%, #FFC0CB 50%, #FF99AA 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        p: 2
      }}
    >
      <Paper
        elevation={8}
        sx={{
          p: 6,
          borderRadius: 4,
          background: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          textAlign: 'center',
          maxWidth: 400
        }}
      >
        <Typography variant="h4" gutterBottom sx={{ color: theme.palette.primary.main }}>
          🔐 Login
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
          Login page coming soon...
        </Typography>
        <Button
          variant="outlined"
          onClick={onBackToWelcome}
          sx={{ mt: 2 }}
        >
          Back to Welcome
        </Button>
      </Paper>
    </Box>
  );
}

export default Login;
