import { Box, Button, IconButton, Tooltip, styled, Theme } from '@mui/material';
import { FaDownload } from 'react-icons/fa';

export function ResumeLinks() {
  return (
    <Box sx={{ display: `flex`, alignItems: `center`, gap: 1 }}>
      <ResumeButton
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        color="inherit"
        component="a"
      >
        Resume
      </ResumeButton>

      <Tooltip title="Download Resume">
        <DownloadButton
          href="/resume.pdf"
          download={true}
          color="inherit"
          size="small"
          sx={{ ml: -0.5 }}
        >
          <FaDownload size={16} />
        </DownloadButton>
      </Tooltip>
    </Box>
  );
}

const hoverEffectStyles = (theme: Theme) => ({
  position: `relative` as const,
  '&:hover': {
    backgroundColor: `transparent`,
  },
  '&::after': {
    content: `""`,
    display: `block`,
    background: theme.palette.secondary.main,
    height: `2px`,
    width: `0`,
    position: `absolute`,
    bottom: `-2px`,
    left: 0,
    borderRadius: `100px`,
    transition: `width 0.3s ease`,
  },
  '&:hover::after': {
    width: `100%`,
  },
});

const ResumeButton = styled(Button, {
  shouldForwardProp: prop => ![`component`, `to`].includes(prop as string),
})<{
  component?: React.ElementType;
  to?: string;
  href?: string;
  target?: string;
  rel?: string;
}>(({ theme }) => ({
  ...hoverEffectStyles(theme),
}));

const DownloadButton = styled(IconButton)<{
  component?: React.ElementType;
  href?: string;
  download?: boolean;
}>(({ theme }) => ({
  ...hoverEffectStyles(theme),
}));
