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

function MentorSignUp() {
  const theme = useTheme();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    technologies: [],
    yearsExperience: '',
    description: '',
    email: '',
    phone: '',
    linkedin: ''
  });

  // Predefined technology options
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
    console.log('Mentor form data:', formData);
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
        🌟 Become a Mentor
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
        Share your knowledge and experience with the next generation of developers
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

        {/* Technologies Field */}
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel>Technologies & Skills</InputLabel>
            <Select
              multiple
              value={formData.technologies}
              onChange={(e) => handleInputChange('technologies', e.target.value)}
              input={<OutlinedInput label="Technologies & Skills" />}
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

        {/* Years of Experience */}
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>Years of Experience</InputLabel>
            <Select
              value={formData.yearsExperience}
              onChange={(e) => handleInputChange('yearsExperience', e.target.value)}
              label="Years of Experience"
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: 2,
                }
              }}
            >
              <MenuItem value="0-1">0-1 years</MenuItem>
              <MenuItem value="1-3">1-3 years</MenuItem>
              <MenuItem value="3-5">3-5 years</MenuItem>
              <MenuItem value="5-10">5-10 years</MenuItem>
              <MenuItem value="10+">10+ years</MenuItem>
            </Select>
          </FormControl>
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

        {/* LinkedIn */}
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="LinkedIn Profile URL"
            value={formData.linkedin}
            onChange={(e) => handleInputChange('linkedin', e.target.value)}
            placeholder="https://linkedin.com/in/yourprofile"
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: 2,
              }
            }}
          />
        </Grid>

        {/* Description */}
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            multiline
            rows={4}
            label="Tell us about your experience and what you can offer as a mentor"
            value={formData.description}
            onChange={(e) => handleInputChange('description', e.target.value)}
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
              Create Mentor Profile
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default MentorSignUp;
