import {
  AppBar,
  Toolbar,
  Box,
  styled,
  Theme,
  IconButton,
  Drawer,
  List,
  ListItem,
  useMediaQuery,
  useTheme,
  ListItemButton,
  ListItemText,
  ListItemIcon,
} from '@mui/material';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import { FaDownload, FaGithub, FaLinkedin } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from './Logo';
import { Link as ScrollLink } from 'react-scroll';

const createScrollEvent = (sectionId: string) => {
  return new CustomEvent(`scrollToSection`, { detail: { sectionId } });
};

const navItems = [
  { label: `Projects`, path: `projects`, isHash: true },
  { label: `About`, path: `about`, isHash: true },
  { label: `Contact`, path: `contact`, isHash: true },
];

const ctaLinks = [
  { icon: FaGithub, url: `https://github.com/athomasjr`, label: `GitHub` },
  { icon: FaLinkedin, url: `https://www.linkedin.com/in/athomas-jr/`, label: `LinkedIn` },
  { icon: FaDownload, url: `/resume.pdf`, label: `Resume` },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down(`md`));
  const location = useLocation();
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleHashClick = (path: string) => {
    if (location.pathname !== `/`) {
      navigate(`/`);
      setTimeout(() => {
        window.dispatchEvent(createScrollEvent(path));
      }, 100);
    } else {
      window.dispatchEvent(createScrollEvent(path));
    }
    if (isMobile) {
      setMobileOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = (event: CustomEvent<{ sectionId: string }>) => {
      const element = document.getElementById(event.detail.sectionId);
      if (element) {
        element.scrollIntoView({ behavior: `smooth` });
      }
    };

    window.addEventListener(`scrollToSection`, handleScroll as EventListener);
    return () => {
      window.removeEventListener(`scrollToSection`, handleScroll as EventListener);
    };
  }, []);

  const drawer = (
    <Box sx={{ textAlign: `center` }}>
      <List>
        {navItems.map(item => (
          <ListItem disablePadding key={item.path}>
            {item.isHash ? (
              <NavBtn>
                {location.pathname === `/` ? (
                  <ScrollLink
                    to={item.path}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    style={{ cursor: `pointer`, width: `100%` }}
                    onClick={() => setMobileOpen(false)}
                  >
                    <ListItemText primary={item.label} />
                  </ScrollLink>
                ) : (
                  <Box
                    onClick={() => {
                      handleHashClick(item.path);
                      setMobileOpen(false);
                    }}
                    sx={{ cursor: `pointer`, width: `100%` }}
                  >
                    <ListItemText primary={item.label} />
                  </Box>
                )}
              </NavBtn>
            ) : (
              <NavBtn component={RouterLink} to={item.path} onClick={() => setMobileOpen(false)}>
                <ListItemText primary={item.label} />
              </NavBtn>
            )}
          </ListItem>
        ))}
        {ctaLinks.map(link => (
          <ListItem disablePadding key={link.url}>
            <ListItemButton
              component="a"
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              onClick={() => isMobile && setMobileOpen(false)}
              sx={theme => ({
                alignItems: `center`,
                gap: theme.spacing(1),
                ...hoverEffectStyles(theme),
              })}
            >
              <ListItemText primary={link.label} sx={{ flex: `unset`, width: `35%` }} />
              <ListItemIcon
                sx={{
                  color: `text.primary`,
                  minWidth: `unset`,
                  maxWidth: `fit-content`,
                }}
              >
                <link.icon size={20} />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          boxShadow: `none`,
          borderBottom: `1px solid`,
          borderColor: `divider`,
        }}
      >
        <Toolbar sx={{ justifyContent: `space-between` }}>
          <Logo />
          {isMobile ? (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <>
              <List sx={{ display: `flex`, gap: 2, alignItems: `center` }}>
                {navItems.map(item => (
                  <ListItem key={item.path}>
                    {item.isHash ? (
                      <NavBtn>
                        {location.pathname === `/` ? (
                          <ScrollLink
                            to={item.path}
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            style={{ cursor: `pointer` }}
                          >
                            {item.label}
                          </ScrollLink>
                        ) : (
                          <Box
                            onClick={() => handleHashClick(item.path)}
                            sx={{ cursor: `pointer` }}
                          >
                            {item.label}
                          </Box>
                        )}
                      </NavBtn>
                    ) : (
                      <NavBtn color="inherit" component={RouterLink} to={item.path}>
                        {item.label}
                      </NavBtn>
                    )}
                  </ListItem>
                ))}
              </List>

              <List sx={{ display: `flex`, gap: 2, alignItems: `center` }}>
                {ctaLinks.map(link => (
                  <ListItem disablePadding key={link.url}>
                    <ListItemButton
                      component="a"
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.label}
                      sx={theme => ({
                        display: `flex`,
                        alignItems: `center`,
                        gap: theme.spacing(1),
                        ...hoverEffectStyles(theme),
                      })}
                    >
                      <ListItemIcon
                        sx={{
                          color: `background.default`,
                          minWidth: `unset`,
                          maxWidth: `fit-content`,
                        }}
                      >
                        <link.icon size={20} />
                      </ListItemIcon>
                      <ListItemText primary={link.label} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </>
          )}
        </Toolbar>
      </AppBar>
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: `block`, md: `none` },
          '& .MuiDrawer-paper': {
            boxSizing: `border-box`,
            width: 240,
            backgroundColor: `background.paper`,
            color: `text.primary`,
          },
        }}
      >
        {drawer}
      </Drawer>
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
    background: theme.custom.colors.accentYellow,
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

const NavBtn = styled(ListItemButton)<{
  component?: React.ElementType;
  to?: string;
  href?: string;
}>(({ theme }) => ({
  ...hoverEffectStyles(theme),
}));
