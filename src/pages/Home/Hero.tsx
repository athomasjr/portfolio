import { Box, Typography, Avatar, Button } from '@mui/material';
import avatar from '../../assets/profile-avatar.png';

export default function Hero() {
  return (
    <Box
      sx={{
        maxWidth: `1200px`,
        width: `100%`,
        display: `flex`,
        alignItems: `center`,
        justifyContent: `space-between`,
        gap: 4,
        flexDirection: { xs: `column`, md: `row` },
      }}
    >
      <Box
        sx={{
          flex: 1,
          textAlign: `left`,
          pr: { sm: 4, md: 8, lg: 12 },
        }}
      >
        <Typography
          variant="h1"
          gutterBottom
          color="primary"
          sx={theme => ({
            fontSize: {
              xs: theme.typography.pxToRem(40),
              sm: theme.typography.pxToRem(56),
              md: theme.typography.pxToRem(72),
              lg: theme.typography.pxToRem(80),
            },
            lineHeight: 1.2,
          })}
        >
          Senior Software Engineer
        </Typography>
        <Typography
          variant="h5"
          component="h2"
          color="text.secondary"
          sx={theme => ({
            fontWeight: 400,
            lineHeight: 1.6,
            fontSize: {
              xs: theme.typography.pxToRem(20),
              sm: theme.typography.pxToRem(24),
              md: theme.typography.pxToRem(28),
              lg: theme.typography.pxToRem(32),
            },
            mb: 4,
          })}
        >
          Building scalable frontends with React and TypeScript. Leading architecture and
          modernization at Powur.
        </Typography>
        <Box sx={{ display: `flex`, gap: 2, flexWrap: `wrap` }}>
          <Button
            component="a"
            href="#projects"
            variant="contained"
            color="primary"
            size="large"
            sx={{
              px: 4,
              py: 1.5,
              fontSize: { md: `1.1rem` },
              fontWeight: 600,
            }}
          >
            Explore My Work
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            size="large"
            sx={{
              px: 4,
              py: 1.5,
              fontSize: { md: `1.1rem` },
              fontWeight: 600,
              borderWidth: 2,
              '&:hover': {
                borderWidth: 2,
              },
            }}
          >
            Get in Touch
          </Button>
        </Box>
      </Box>
      <Avatar
        src={avatar}
        alt="Antonio Thomas"
        sx={{
          display: { xs: `none`, sm: `block` },
          alignSelf: `flex-end`,
          width: {
            sm: 150,
            md: 175,
            lg: 300,
          },
          height: {
            sm: 150,
            md: 175,
            lg: 300,
          },
          border: `3px solid`,
          borderColor: `primary.main`,
          '& img': {
            objectFit: `cover`,
            width: `100%`,
            height: `100%`,
          },
        }}
      />
    </Box>
  );
}
