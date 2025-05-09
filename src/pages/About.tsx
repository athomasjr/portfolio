import { Container, Typography } from '@mui/material';

export default function About() {
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h2" component="h1" gutterBottom>
        About Me
      </Typography>
      <Typography variant="body1" paragraph>
        I'm a passionate developer with expertise in modern web technologies.
      </Typography>
    </Container>
  );
}
