import { Container, Box } from '@mui/material';
import OngoingProjects from '../../components/OngoingProjects';
import OtherProjects from '../../components/OtherProjects';

export default function Projects() {
  return (
    <Box id="projects">
      <Box
        sx={{
          backgroundColor: theme => theme.custom.colors.backgroundBlue15,
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            py: { xs: 6, md: 10 },
          }}
        >
          <OngoingProjects />
        </Container>
      </Box>
      <Box>
        <Container
          maxWidth="lg"
          sx={{
            py: { xs: 6, md: 10 },
          }}
        >
          <OtherProjects />
        </Container>
      </Box>
    </Box>
  );
}
