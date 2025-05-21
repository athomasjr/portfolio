import { useState, useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { Fab, useTheme, useMediaQuery } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

export default function ScrollTopButton() {
  const [visible, setVisible] = useState(false);
  const [overFooter, setOverFooter] = useState(false);
  const theme = useTheme();
  const showOnDesktop = useMediaQuery(theme.breakpoints.up(`sm`));

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener(`scroll`, handleScroll);
    return () => window.removeEventListener(`scroll`, handleScroll);
  }, []);

  useEffect(() => {
    const footer = document.getElementById(`footer`);
    if (!footer) return;
    const observer = new IntersectionObserver(([entry]) => setOverFooter(entry.isIntersecting), {
      root: null,
      threshold: 0,
    });
    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  if (!visible || !showOnDesktop) return null;

  return (
    <Fab
      size="small"
      aria-label="Scroll back to top"
      onClick={() => scroll.scrollToTop({ smooth: true, duration: 400 })}
      sx={{
        position: `fixed`,
        bottom: theme.spacing(4),
        right: theme.spacing(4),
        zIndex: theme.zIndex.tooltip,
        bgcolor: overFooter ? theme.palette.secondary.main : theme.palette.primary.main,
        color: theme.palette.common.white,
        '&:hover': {
          bgcolor: overFooter ? theme.palette.secondary.dark : theme.palette.primary.dark,
        },
      }}
    >
      <KeyboardArrowUpIcon />
    </Fab>
  );
}
