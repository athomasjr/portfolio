import { Container, Box, Typography, Stack } from '@mui/material';
import OngoingProjects from '../../components/OngoingProjects';
export default function Projects() {
  return (
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
        <Stack spacing={{ xs: 2, md: 4 }}>
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            sx={{
              color: `primary.main`,
              fontWeight: 700,
              textAlign: `center`,
              fontSize: { xs: `2rem`, md: `2.5rem` },
            }}
          >
            Ongoing Projects
          </Typography>

          <OngoingProjects />
        </Stack>
      </Container>
    </Box>
  );
}
