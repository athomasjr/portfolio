import { Box, Container, Stack, Typography, Grid, Paper } from '@mui/material';
import aboutImg from '../../assets/about-update.jpeg';

const skills = [
  `React`,
  `TypeScript`,
  `Redux Toolkit (RTK Query)`,
  `Redux Sagas`,
  `JavaScript (ES6+)`,
  `CSS & Responsive Design`,
  `Material-UI`,
  `Ruby on Rails`,
  `REST API Design`,
  `Webhook Integrations`,
  `Test-Driven Development (TDD)`,
  `Jest`,
  `React Testing Library`,
  `Agile/Scrum`,
  `Git & Code Reviews`,
  `Performance Optimization`,
  `Architectural Design`,
  `Mentoring & Team Leadership`,
  `Renovate`,
];

export default function About() {
  return (
    <Box
      id="about"
      sx={{
        backgroundColor: theme => theme.custom.colors.backgroundBlue15,
        py: 6,
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={{ xs: 2, md: 8 }}>
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
            About
          </Typography>
          <Grid container spacing={4}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Stack
                direction="column"
                justifyContent="space-between"
                alignItems="center"
                spacing={4}
                sx={{ height: `100%` }}
              >
                <Box
                  component="img"
                  src={aboutImg}
                  alt="Antonio Thomas"
                  sx={{
                    width: { xs: 150, md: 200 },
                    height: { xs: 150, md: 200 },
                    borderRadius: `50%`,
                    boxShadow: 3,
                    display: `block`,
                    mx: { xs: `auto`, md: 0 },
                  }}
                />

                <Paper
                  elevation={1}
                  sx={{
                    borderRadius: 2,
                    p: 2,
                  }}
                >
                  <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 600 }}>
                    Quick Facts
                  </Typography>
                  <Stack spacing={1}>
                    <Typography variant="body2">Senior Software Engineer, Powur</Typography>
                    <Typography variant="body2">5 years in web development</Typography>
                    <Typography variant="body2">Creative writing background</Typography>
                    <Typography variant="body2">
                      React · TypeScript · Redux Toolkit · MUI
                    </Typography>
                    <Typography variant="body2">Ruby on Rails · Webhooks</Typography>
                    <Typography variant="body2">Jest · React Testing Library · TDD</Typography>
                    <Typography variant="body2">Agile · Git · Mentoring</Typography>
                  </Stack>
                </Paper>
              </Stack>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Stack spacing={3}>
                <Typography
                  component="p"
                  variant="body1"
                  sx={{ lineHeight: 1.6, fontSize: { xs: `1rem`, md: `1.125rem` } }}
                >
                  Hi, I’m Antonio—a Senior Software Engineer based in Wisconsin. I specialize in
                  architecting and modernizing frontends with React and TypeScript, mentoring
                  cross-functional teams, and driving high-impact features from concept to
                  production.
                </Typography>

                <Typography
                  component="p"
                  variant="body1"
                  sx={{ lineHeight: 1.6, fontSize: { xs: `1rem`, md: `1.125rem` } }}
                >
                  My background in creative writing taught me how to tell compelling stories—and
                  today I apply that same craft to code, designing interfaces that are not only
                  performant but intuitive and accessible. Over the years I’ve taken on challenges
                  from migrating large legacy codebases to introducing test-driven development
                  practices that boost reliability and confidence.
                </Typography>

                <Typography
                  component="p"
                  variant="body1"
                  sx={{ lineHeight: 1.6, fontSize: { xs: `1rem`, md: `1.125rem` } }}
                >
                  In my current role at Powur, I led the migration of 38% of our frontend to
                  TypeScript, introduced RTK Query for streamlined data fetching, and designed a
                  validation system that slashed production bugs by over 75%. When I’m not coding, I
                  enjoy experimenting with the latest web APIs and refining our team’s development
                  workflows.
                </Typography>
              </Stack>
            </Grid>
          </Grid>
          {/* Key Skills Section */}
          <Box>
            <Paper
              elevation={2}
              sx={{
                p: { xs: 2, md: 4 },
                borderRadius: 2,
              }}
            >
              <Typography
                variant="h4"
                component="h2"
                align="center"
                sx={{ fontWeight: 700, mb: 3 }}
              >
                Key Skills
              </Typography>
              <Stack direction="row" flexWrap="wrap" justifyContent="center" gap={2}>
                {skills.map(skill => (
                  <Box
                    key={skill}
                    sx={{
                      px: 3,
                      py: 1,
                      borderRadius: 999,
                      border: `2px solid`,
                      borderColor: `primary.main`,
                      color: `primary.main`,
                      fontWeight: 500,
                      fontSize: { xs: `0.95rem`, md: `1.05rem` },
                      transition: `all 0.2s ease`,
                      '&:hover': {
                        backgroundColor: `secondary.main`,
                        color: `background.default`,
                        borderColor: `secondary.main`,
                      },
                    }}
                  >
                    {skill}
                  </Box>
                ))}
              </Stack>
            </Paper>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
