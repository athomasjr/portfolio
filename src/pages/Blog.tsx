import { Container, Typography } from '@mui/material';

export default function Blog() {
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h2" component="h1" gutterBottom>
        Blog
      </Typography>
      <Typography variant="body1">Coming soon...</Typography>
    </Container>
  );
}
