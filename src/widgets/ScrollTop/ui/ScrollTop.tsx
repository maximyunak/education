import { Button } from '@mui/material';
import { arrowTopIcon } from 'shared/assets/icons';
import { StyledScrollTop } from './ScrollTop.styles';
import { useEffect, useState } from 'react';

export const ScrollTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      const viewportHeight = window.innerHeight;
      setIsVisible(window.pageYOffset > viewportHeight - 200);
    };

    window.addEventListener('scroll', toggleVisibility);

    toggleVisibility();

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    const duration = 800;
    const start = window.pageYOffset;
    const startTime = performance.now();

    const animateScroll = (currentTime: number) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);

      const easeProgress = 1 - Math.pow(1 - progress, 3);

      window.scrollTo(0, start * (1 - easeProgress));

      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  };

  if (!isVisible) return null;

  return (
    <StyledScrollTop>
      <Button variant="outlined" onClick={scrollToTop}>
        <img src={arrowTopIcon} alt="arrowTop" />
      </Button>
    </StyledScrollTop>
  );
};
