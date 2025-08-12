import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  Tabs,
  Tab,
  Button,
  useTheme
} from '@mui/material';
import MentorSignUp from './MentorSignUp';
import MenteeSignUp from './MenteeSignUp';

function SignUp({ onBackToWelcome, selectedRole, onGoToLogin }) {
  const theme = useTheme();
  const [selectedTab, setSelectedTab] = useState(selectedRole === 'mentor' ? 0 : 1);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

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
      <Container maxWidth="md">
        <Paper
          elevation={8}
          sx={{
            p: 4,
            borderRadius: 4,
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
          }}
        >
          {/* Back Button */}
          <Box sx={{ mb: 2 }}>
            <Button
              variant="text"
              onClick={onBackToWelcome}
              sx={{
                color: theme.palette.text.secondary,
                '&:hover': {
                  backgroundColor: 'rgba(139, 107, 123, 0.08)',
                },
                textTransform: 'none',
                fontWeight: 500,
              }}
            >
              ← Back to Welcome
            </Button>
          </Box>

          {/* Header */}
          <Box textAlign="center" mb={4}>
            <Typography 
              variant="h3" 
              component="h1" 
              gutterBottom
              sx={{
                fontWeight: 300,
                background: 'linear-gradient(45deg, #FF99AA, #8B6B7B)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                mb: 2
              }}
            >
               Join QueenB 👑
            </Typography>
            <Typography 
              variant="h6" 
              color="text.secondary"
              sx={{ 
                fontWeight: 400,
                color: '#8B6B7B'
              }}
            >
              Choose your path and start your journey
            </Typography>
          </Box>

          {/* Tab Navigation */}
          <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 4 }}>
            <Tabs 
              value={selectedTab} 
              onChange={handleTabChange}
              centered
              sx={{
                '& .MuiTab-root': {
                  fontSize: '1.1rem',
                  fontWeight: 500,
                  textTransform: 'none',
                  minHeight: 56,
                },
                '& .Mui-selected': {
                  color: theme.palette.primary.main,
                },
                '& .MuiTabs-indicator': {
                  backgroundColor: theme.palette.primary.main,
                  height: 3,
                  borderRadius: 2,
                }
              }}
            >
              <Tab 
                label="I want to mentor" 
                icon="🌟"
                iconPosition="end"
              />
              <Tab 
                label="I need a mentor" 
                icon="🎓"
                iconPosition="end"
              />
            </Tabs>
          </Box>

          {/* Tab Content */}
          {selectedTab === 0 && <MentorSignUp />}
          {selectedTab === 1 && <MenteeSignUp />}

          {/* Already have an account button */}
          <Box textAlign="center" mt={4}>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Already have an account?
            </Typography>
            <Button
              variant="text"
              onClick={onGoToLogin}
              sx={{
                color: theme.palette.primary.main,
                textTransform: 'none',
                fontWeight: 500,
                '&:hover': {
                  backgroundColor: 'rgba(255, 153, 170, 0.08)',
                },
              }}
            >
              Sign In
            </Button>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}

export default SignUp;
