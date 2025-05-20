import { Stack, IconButton, Tooltip } from '@mui/material';
import { FaEnvelope, FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa';

export default function ContactIcons() {
  return (
    <Stack direction="row" justifyContent="center" spacing={3} sx={{ mt: 6 }}>
      <Tooltip title="Email Me">
        <IconButton
          component="a"
          href="mailto:antonio@antoniothomasjr.com"
          aria-label="Email"
          color="inherit"
        >
          <FaEnvelope size={24} />
        </IconButton>
      </Tooltip>

      <Tooltip title="View GitHub">
        <IconButton
          component="a"
          href="https://github.com/athomasjr"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          color="inherit"
        >
          <FaGithub size={24} />
        </IconButton>
      </Tooltip>

      <Tooltip title="View LinkedIn">
        <IconButton
          component="a"
          href="https://linkedin.com/in/athomas-jr/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          color="inherit"
        >
          <FaLinkedin size={24} />
        </IconButton>
      </Tooltip>

      <Tooltip title="Download Resume">
        <IconButton
          component="a"
          href="/resume.pdf"
          download
          aria-label="Download Resume"
          color="inherit"
        >
          <FaDownload size={24} />
        </IconButton>
      </Tooltip>
    </Stack>
  );
}
