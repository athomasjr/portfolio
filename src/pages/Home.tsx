import { Container, Typography } from '@mui/material';

export default function Home() {
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h2" component="h1" gutterBottom>
        Welcome to My Portfolio
      </Typography>
      <Typography variant="h5" component="h2" gutterBottom>
        Full Stack Developer
      </Typography>
    </Container>
  );
}
