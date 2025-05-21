import { Box, Container, Stack, Link, Typography, IconButton } from '@mui/material';
import { FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa';

export default function Footer() {
  return (
    <Box
      id="footer"
      component="footer"
      sx={{ py: 4, bgcolor: `primary.main`, color: `primary.contrastText` }}
    >
      <Container maxWidth="lg">
        <Stack direction="row" justifyContent="center" spacing={3} sx={{ mb: 2 }}>
          {[`Home`, `Projects`, `About`, `Contact`].map(section => (
            <Link
              key={section}
              href={`#${section.toLowerCase()}`}
              underline="hover"
              color="inherit"
            >
              {section}
            </Link>
          ))}
        </Stack>

        <Stack direction="row" justifyContent="center" spacing={2} sx={{ mb: 2 }}>
          <IconButton
            component="a"
            href="https://github.com/athomasjr"
            target="_blank"
            color="inherit"
          >
            <FaGithub />
          </IconButton>
          <IconButton
            component="a"
            href="https://linkedin.com/in/athomas-jr/"
            target="_blank"
            color="inherit"
          >
            <FaLinkedin />
          </IconButton>
          <IconButton component="a" href="/resume.pdf" download color="inherit">
            <FaDownload />
          </IconButton>
        </Stack>

        <Typography variant="body2" align="center">
          © {new Date().getFullYear()} Antonio Thomas. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}
