import { Button } from '@mui/material';

import NavigateNextOutlinedIcon from '@mui/icons-material/NavigateNextOutlined';
import NavigateBeforeOutlinedIcon from '@mui/icons-material/NavigateBeforeOutlined';

const styledNavigation = {
  textTransform: 'none',
  borderRadius: '50%',
  minWidth: '57px',
  width: '57px',
  height: '57px',
  padding: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderColor: '#000000',
  filter: 'contrast(0%)',
  zIndex: 2,
  '@media (max-width: 540px)': {
    minWidth: '40px',
    width: '40px',
    height: '40px',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-100%)',
  },
  '@media (max-width: 374px)': {
    minWidth: '30px',
    width: '30px',
    height: '30px',
  },
};
const nextButton = {
  ...styledNavigation,
  right: '0',
};
const prevButton = {
  ...styledNavigation,
  left: '0',
};

const swiperButtons = {
  fontSize: '30px',
  color: '#000000',
  '@media (max-width: 374px)': {
    fontSize: '20px',
  },
};

export const SliderNext = ({ currentKey }: { currentKey: string }) => {
  return (
    <Button id={`${currentKey}-next`} variant="outlined" sx={nextButton}>
      <NavigateNextOutlinedIcon sx={swiperButtons} />
    </Button>
  );
};

export const SliderPrev = ({ currentKey }: { currentKey: string }) => {
  return (
    <Button id={`${currentKey}-prev`} variant="outlined" sx={prevButton}>
      <NavigateBeforeOutlinedIcon sx={swiperButtons} />
    </Button>
  );
};
