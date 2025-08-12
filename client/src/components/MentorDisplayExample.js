import React from 'react';
import { 
  Box, 
  Card, 
  CardContent, 
  Typography, 
  Avatar, 
  Chip, 
  Button,
  Grid,
  Container
} from '@mui/material';
import { useSharedTheme } from '../contexts/ThemeContext';

// Example mentor data
const exampleMentors = [
  {
    id: 1,
    name: 'Sarah Chen',
    role: 'Senior Frontend Developer',
    company: 'TechCorp',
    technologies: ['React', 'TypeScript', 'Node.js'],
    experience: '5+ years',
    avatar: '👩‍💻',
    description: 'Passionate about helping others learn React and modern web development.'
  },
  {
    id: 2,
    name: 'Maria Rodriguez',
    role: 'Full Stack Engineer',
    company: 'StartupXYZ',
    technologies: ['Python', 'Django', 'AWS'],
    experience: '3+ years',
    avatar: '👩‍💼',
    description: 'Love teaching backend development and cloud technologies.'
  },
  {
    id: 3,
    name: 'Alex Johnson',
    role: 'DevOps Engineer',
    company: 'Enterprise Inc',
    technologies: ['Docker', 'Kubernetes', 'Jenkins'],
    experience: '4+ years',
    avatar: '👩‍🔧',
    description: 'Expert in CI/CD pipelines and infrastructure automation.'
  }
];

function MentorDisplayExample() {
  const theme = useSharedTheme();

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: `linear-gradient(135deg, ${theme.palette.background.default} 0%, ${theme.palette.secondary.light} 50%, ${theme.palette.primary.light} 100%)`,
        py: 4
      }}
    >
      <Container maxWidth="lg">
        {/* Header */}
        <Box textAlign="center" mb={6}>
          <Typography 
            variant="h2" 
            gutterBottom
            sx={{
              fontWeight: 300,
              background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mb: 2
            }}
          >
            👑 Find Your Perfect Mentor
          </Typography>
          <Typography 
            variant="h6" 
            color="text.secondary"
            sx={{ fontWeight: 400 }}
          >
            Connect with experienced developers who are ready to guide your journey
          </Typography>
        </Box>

        {/* Mentor Cards Grid */}
        <Grid container spacing={4}>
          {exampleMentors.map((mentor) => (
            <Grid item xs={12} md={6} lg={4} key={mentor.id}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: `0 16px 48px ${theme.palette.primary.dark}20`,
                  }
                }}
              >
                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  {/* Mentor Header */}
                  <Box display="flex" alignItems="center" mb={2}>
                    <Avatar
                      sx={{
                        width: 60,
                        height: 60,
                        fontSize: '2rem',
                        backgroundColor: theme.palette.primary.light,
                        color: theme.palette.primary.contrastText,
                        mr: 2
                      }}
                    >
                      {mentor.avatar}
                    </Avatar>
                    <Box>
                      <Typography variant="h6" fontWeight={600} color="text.primary">
                        {mentor.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {mentor.role}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {mentor.company}
                      </Typography>
                    </Box>
                  </Box>

                  {/* Experience */}
                  <Box mb={2}>
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                      Experience: <strong>{mentor.experience}</strong>
                    </Typography>
                  </Box>

                  {/* Technologies */}
                  <Box mb={2}>
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                      Technologies:
                    </Typography>
                    <Box display="flex" flexWrap="wrap" gap={1}>
                      {mentor.technologies.map((tech) => (
                        <Chip
                          key={tech}
                          label={tech}
                          size="small"
                          sx={{
                            backgroundColor: theme.palette.primary.light,
                            color: theme.palette.primary.contrastText,
                            fontWeight: 500
                          }}
                        />
                      ))}
                    </Box>
                  </Box>

                  {/* Description */}
                  <Typography 
                    variant="body2" 
                    color="text.secondary" 
                    sx={{ mb: 3, lineHeight: 1.6 }}
                  >
                    {mentor.description}
                  </Typography>

                  {/* Action Buttons */}
                  <Box display="flex" gap={1}>
                    <Button
                      variant="contained"
                      size="small"
                      sx={{ flex: 1 }}
                    >
                      Connect
                    </Button>
                    <Button
                      variant="outlined"
                      size="small"
                      sx={{ flex: 1 }}
                    >
                      View Profile
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default MentorDisplayExample;
