import { AppBar, Toolbar, Button, Box, Avatar, styled, Theme } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Logo from './Logo';
import thumbnail from '../assets/thumbnail.png';
import { ResumeLinks } from './ResumeLinks';

const navItems = [
  { label: `Blog`, path: `/blog` },
  { label: `About`, path: `/about` },
];

const socialLinks = [
  { icon: FaGithub, url: `https://github.com/athomasjr`, label: `GitHub` },
  { icon: FaLinkedin, url: `https://www.linkedin.com/in/athomas-jr/`, label: `LinkedIn` },
];

export default function Navbar() {
  return (
    <AppBar
      position="static"
      sx={{
        boxShadow: `none`,
        borderBottom: `1px solid`,
        borderColor: `divider`,
      }}
    >
      <Toolbar sx={{ justifyContent: `space-between` }}>
        <Box sx={{ display: `flex`, alignItems: `center`, gap: 2 }}>
          <Avatar
            src={thumbnail}
            alt="Profile"
            sx={{
              width: 40,
              height: 40,
              border: `2px solid`,
              borderColor: `white`,
            }}
          />
          <Logo />
        </Box>

        <Box sx={{ display: `flex`, gap: 2, alignItems: `center` }}>
          {navItems.map(item => (
            <NavBtn key={item.path} color="inherit" component={RouterLink} to={item.path}>
              {item.label}
            </NavBtn>
          ))}
          <ResumeLinks />
        </Box>

        <Box sx={{ display: `flex`, gap: 2 }}>
          {socialLinks.map(link => (
            <SocialLink
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
            >
              <link.icon size={20} />
              <span>{link.label}</span>
            </SocialLink>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
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

const NavBtn = styled(Button)<{ component?: React.ElementType; to?: string }>(({ theme }) => ({
  ...hoverEffectStyles(theme),
}));

const SocialLink = styled(`a`)(({ theme }) => ({
  color: theme.palette.background.default,
  textDecoration: `none`,
  padding: theme.spacing(1),
  display: `flex`,
  alignItems: `center`,
  gap: theme.spacing(1),
  ...theme.typography.button,
  ...hoverEffectStyles(theme),
}));
