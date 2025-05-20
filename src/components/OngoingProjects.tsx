import { Box, Typography, Stack, Chip, Button, useTheme, useMediaQuery } from '@mui/material';
import powurScreenshot from '../assets/powur-screen-shot.png';

export default function OngoingProjects() {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down(`sm`));

  return (
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
        Ongoing Projects
      </Typography>
      <Box
        sx={{
          display: `flex`,
          flexDirection: { xs: `column`, md: `row` },
          alignItems: `center`,
          gap: { xs: 3, md: 6 },
          mt: { xs: 4, md: 6 },
        }}
      >
        <Box
          component="img"
          src={powurScreenshot}
          alt="Powur Landing Page"
          sx={{
            width: { xs: `100%`, md: `50%` },
            aspectRatio: `4 / 3`,
            objectFit: `cover`,
            borderRadius: 2,
            boxShadow: 3,
            flexShrink: 0,
          }}
        />

        <Box sx={{ flex: 1, width: { xs: `100%`, md: `40%` } }}>
          <Typography
            variant="h4"
            component="h3"
            gutterBottom
            sx={{
              color: `primary.main`,
              fontWeight: 700,
              lineHeight: 1.3,
              fontSize: { xs: `1.75rem`, md: `2.25rem` },
            }}
          >
            TypeScript Migration & Frontend Modernization at Powur
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mb: { xs: 2, md: 3 },
              lineHeight: 1.6,
              fontSize: { xs: `1rem`, md: `1.125rem` },
            }}
          >
            Engineered a migration of 38% of the frontend to TypeScript, introduced RTK Query for
            streamlined data fetching, and architected a validation system that cut production bugs
            by 50–75%.
          </Typography>

          <Stack
            direction="row"
            flexWrap="wrap"
            gap={0.5}
            justifyContent="flex-start"
            sx={{ mb: { xs: 3, md: 4 } }}
          >
            {[
              `React`,
              `TypeScript`,
              `Redux Toolkit (RTK Query)`,
              `Material-UI`,
              `Ruby on Rails`,
              `Webhooks`,
            ].map(tech => (
              <Chip
                key={tech}
                label={tech}
                variant="outlined"
                sx={{
                  textTransform: `none`,
                  fontSize: `0.875rem`,
                  color: `primary.main`,
                  borderColor: `secondary.main`,
                }}
              />
            ))}
          </Stack>

          <Box
            sx={{
              mt: { xs: 3, md: 4 },
              display: `flex`,
              justifyContent: { xs: `center`, md: `flex-start` },
            }}
          >
            <Button
              variant="contained"
              color="primary"
              size={isXs ? `medium` : `large`}
              fullWidth={isXs}
              endIcon={
                <Box component="span" sx={{ fontSize: `1.25rem` }}>
                  →
                </Box>
              }
              href="https://powur.com"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                fontWeight: 600,
                px: { xs: 2, md: 4 },
                py: { xs: 1.25, md: 1.5 },
                maxWidth: { xs: `100%`, sm: `auto` },
              }}
            >
              Visit Site
            </Button>
          </Box>
        </Box>
      </Box>
    </Stack>
  );
}
