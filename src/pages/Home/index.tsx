import { Container } from '@mui/material';
import Hero from './Hero';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';
import SEO from '../../components/SEO';

export default function Home() {
  return (
    <>
      <SEO
        title="Antonio Thomas – Senior Software Engineer"
        description="Building scalable frontends with React & TypeScript. Explore my projects, read about my experience, or get in touch."
        image="/og-home.png"
      />
      <Container
        maxWidth="lg"
        sx={{
          height: `calc(100vh - 64px)`,
          display: `flex`,
          alignItems: `center`,
          justifyContent: { xs: `center`, md: `flex-start` },
        }}
      >
        <Hero />
      </Container>
      <Projects />
      <About />
      <Contact />
    </>
  );
}
