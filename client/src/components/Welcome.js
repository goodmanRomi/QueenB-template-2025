import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  FormControl,
  Select,
  MenuItem,
  Button,
  Paper,
  useTheme
} from '@mui/material';
import {
  School as SchoolIcon,
  Psychology as PsychologyIcon,
  ArrowForward as ArrowForwardIcon
} from '@mui/icons-material';

const Welcome = ({ onRoleSelect }) => {
  const theme = useTheme();
  const [selectedRole, setSelectedRole] = useState('');
  const [isSelecting, setIsSelecting] = useState(false);

  const handleRoleSelect = (role) => {
    setSelectedRole(role);
    setIsSelecting(true);
    // You can add a delay here for better UX
    setTimeout(() => {
      onRoleSelect(role);
    }, 800);
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #FFE5E5 0%, #FFB6C1 50%, #FF69B4 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        p: 2
      }}
    >
      <Container maxWidth="sm">
        <Paper
          elevation={8}
          sx={{
            p: 6,
            borderRadius: 4,
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            textAlign: 'center'
          }}
        >
          {/* QueenB Logo/Title */}
          <Box mb={4}>
            <Typography 
              variant="h2" 
              component="h1" 
              gutterBottom
              sx={{
                fontWeight: 'bold',
                background: 'linear-gradient(45deg, #FF69B4, #FF1493)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                mb: 1
              }}
            >
              👑 QueenB
            </Typography>
            <Typography 
              variant="h6" 
              color="text.secondary"
              sx={{ 
                fontWeight: 300,
                color: '#FF69B4'
              }}
            >
              Choose Your Path
            </Typography>
          </Box>

          {/* Role Selection Dropdown */}
          <Box mb={4}>
            <Typography 
              variant="body1" 
              color="text.secondary" 
              sx={{ mb: 3, color: '#666' }}
            >
              I want to...
            </Typography>
            
            <FormControl fullWidth sx={{ mb: 3 }}>
              <Select
                value={selectedRole}
                onChange={(e) => setSelectedRole(e.target.value)}
                displayEmpty
                sx={{
                  borderRadius: 3,
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#FFB6C1',
                    borderWidth: 2,
                  },
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#FF69B4',
                  },
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#FF1493',
                    borderWidth: 2,
                  },
                  '& .MuiSelect-icon': {
                    color: '#FF69B4',
                  }
                }}
                MenuProps={{
                  PaperProps: {
                    sx: {
                      borderRadius: 2,
                      border: '2px solid #FFB6C1',
                      '& .MuiMenuItem-root': {
                        '&:hover': {
                          backgroundColor: '#FFF0F5',
                        },
                        '&.Mui-selected': {
                          backgroundColor: '#FFE5E5',
                          color: '#FF1493',
                          fontWeight: 600,
                        }
                      }
                    }
                  }
                }}
              >
                <MenuItem value="" disabled>
                  <em>Select your role...</em>
                </MenuItem>
                <MenuItem value="mentee">
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <SchoolIcon sx={{ color: '#FF69B4' }} />
                    <Typography>I need a mentor</Typography>
                  </Box>
                </MenuItem>
                <MenuItem value="mentor">
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <PsychologyIcon sx={{ color: '#FF1493' }} />
                    <Typography>I want to mentor</Typography>
                  </Box>
                </MenuItem>
              </Select>
            </FormControl>

            {/* Continue Button */}
            {selectedRole && (
              <Button
                variant="contained"
                size="large"
                onClick={() => handleRoleSelect(selectedRole)}
                disabled={isSelecting}
                sx={{
                  background: 'linear-gradient(45deg, #FF69B4, #FF1493)',
                  borderRadius: 3,
                  px: 4,
                  py: 1.5,
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  textTransform: 'none',
                  boxShadow: '0 4px 15px rgba(255, 105, 180, 0.3)',
                  '&:hover': {
                    background: 'linear-gradient(45deg, #FF1493, #FF69B4)',
                    boxShadow: '0 6px 20px rgba(255, 105, 180, 0.4)',
                    transform: 'translateY(-2px)',
                  },
                  '&:disabled': {
                    background: '#FFB6C1',
                  },
                  transition: 'all 0.3s ease'
                }}
                endIcon={isSelecting ? null : <ArrowForwardIcon />}
              >
                {isSelecting ? 'Getting Ready...' : 'Continue'}
              </Button>
            )}
          </Box>

          {/* Role Selection Feedback */}
          {selectedRole && !isSelecting && (
            <Box 
              sx={{
                animation: 'fadeIn 0.5s ease-in',
                p: 2,
                borderRadius: 2,
                background: selectedRole === 'mentee' 
                  ? 'linear-gradient(45deg, #E6F3FF, #B3D9FF)'
                  : 'linear-gradient(45deg, #FFF0F5, #FFE5E5)',
                border: `2px solid ${selectedRole === 'mentee' ? '#4ECDC4' : '#FF69B4'}`
              }}
            >
              <Typography variant="body2" color="text.secondary">
                {selectedRole === 'mentee' 
                  ? '🎓 Perfect! You\'re ready to start your learning journey.'
                  : '🌟 Amazing! You\'re ready to share your wisdom and help others.'
                }
              </Typography>
            </Box>
          )}
        </Paper>
      </Container>
    </Box>
  );
};

export default Welcome;
