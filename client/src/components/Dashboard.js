import React from "react";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Button
} from "@mui/material";
import UserManagement from "./UserManagement";

function Dashboard({ selectedRole, onBackToWelcome }) {
  return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" elevation={2}>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              👑 QueenB - {selectedRole === 'mentee' ? 'Mentee Dashboard' : 'Mentor Dashboard'}
            </Typography>
            <Button 
              color="inherit" 
              onClick={onBackToWelcome}
              sx={{ ml: 2 }}
            >
              ← Back to Welcome
            </Button>
          </Toolbar>
        </AppBar>
        <Box sx={{ p: 3 }}>
          <Typography variant="h4" gutterBottom>
            Welcome, {selectedRole === 'mentee' ? 'Mentee' : 'Mentor'}! 👋
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            {selectedRole === 'mentee' 
              ? 'You\'re here to learn and grow. Let\'s find the perfect mentor for you!'
              : 'You\'re here to share your wisdom and help others succeed. Let\'s make a difference!'
            }
          </Typography>
        </Box>
        <UserManagement />
      </Box>
  );
}

export default Dashboard;
