import { Container } from '@mui/material';
import Hero from '../components/Hero';

export default function Home() {
  return (
    <Container
      maxWidth={`lg`}
      sx={{
        height: `calc(100vh - 64px)`,
        display: `flex`,
        alignItems: `center`,
        justifyContent: { xs: `center`, md: `flex-start` },
      }}
    >
      <Hero />
    </Container>
  );
}
