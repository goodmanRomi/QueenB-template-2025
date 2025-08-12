import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Chip,
  OutlinedInput,
  useTheme
} from '@mui/material';

function MenteeSignUp() {
  const theme = useTheme();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    learningGoals: [],
    description: ''
  });

  // Predefined technology options for learning goals
  const technologyOptions = [
    'JavaScript', 'React', 'Node.js', 'Python', 'Java', 'C++', 'C#',
    'PHP', 'Ruby', 'Go', 'Swift', 'Kotlin', 'TypeScript', 'Vue.js',
    'Angular', 'Django', 'Flask', 'Express.js', 'MongoDB', 'PostgreSQL',
    'MySQL', 'AWS', 'Docker', 'Kubernetes', 'Git', 'DevOps', 'UI/UX',
    'Mobile Development', 'Data Science', 'Machine Learning', 'AI'
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Mentee form data:', formData);
    // TODO: Connect to database later
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Typography 
        variant="h5" 
        gutterBottom 
        sx={{ 
          textAlign: 'center', 
          mb: 3,
          color: theme.palette.primary.main,
          fontWeight: 500
        }}
      >
        🎓 Find Your Mentor
      </Typography>
      
      <Typography 
        variant="body1" 
        color="text.secondary" 
        sx={{ 
          textAlign: 'center', 
          mb: 4,
          color: '#8B6B7B'
        }}
      >
        Connect with experienced developers who can guide your learning journey
      </Typography>

      <Grid container spacing={3}>
        {/* Name Fields */}
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            label="First Name"
            value={formData.firstName}
            onChange={(e) => handleInputChange('firstName', e.target.value)}
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: 2,
              }
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            label="Last Name"
            value={formData.lastName}
            onChange={(e) => handleInputChange('lastName', e.target.value)}
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: 2,
              }
            }}
          />
        </Grid>

        {/* Email */}
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            type="email"
            label="Email"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: 2,
              }
            }}
          />
        </Grid>

        {/* Phone */}
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            label="Phone Number"
            value={formData.phone}
            onChange={(e) => handleInputChange('phone', e.target.value)}
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: 2,
              }
            }}
          />
        </Grid>

        {/* Learning Goals */}
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel>What technologies do you want to learn?</InputLabel>
            <Select
              multiple
              value={formData.learningGoals}
              onChange={(e) => handleInputChange('learningGoals', e.target.value)}
              input={<OutlinedInput label="What technologies do you want to learn?" />}
              renderValue={(selected) => (
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                  {selected.map((value) => (
                    <Chip 
                      key={value} 
                      label={value} 
                      size="small"
                      sx={{ 
                        backgroundColor: theme.palette.primary.light,
                        color: theme.palette.primary.contrastText
                      }}
                    />
                  ))}
                </Box>
              )}
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: 2,
                }
              }}
            >
              {technologyOptions.map((tech) => (
                <MenuItem key={tech} value={tech}>
                  {tech}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        {/* Description (Optional) */}
        <Grid item xs={12}>
          <TextField
            fullWidth
            multiline
            rows={4}
            label="Additional details about your learning journey (optional)"
            value={formData.description}
            onChange={(e) => handleInputChange('description', e.target.value)}
            helperText="Tell us more about your background, current skill level, and what you hope to achieve with mentoring"
            placeholder="For example: I'm a beginner in web development, currently learning HTML/CSS. I want to build my first React app and eventually work as a frontend developer..."
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: 2,
              }
            }}
          />
        </Grid>

        {/* Submit Button */}
        <Grid item xs={12}>
          <Box textAlign="center" mt={2}>
            <Button
              type="submit"
              variant="contained"
              size="large"
              sx={{
                px: 6,
                py: 1.5,
                borderRadius: 3,
                fontSize: '1.1rem',
                fontWeight: 600,
                textTransform: 'none',
              }}
            >
              Create Mentee Profile
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
    );
}

export default MenteeSignUp;
