import { styled } from '@mui/material';

export const FormalitiesContainer = styled('div')({
  marginTop: '50px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '20px',
  '@media (max-width: 1250px)': {
    marginTop: '40px',
    '& img': {
      width: '300px',
    },
  },
  '@media (max-width: 1000px)': {
    marginTop: '30px',
    '& img': {
      width: '250px',
    },
  },
  '@media (max-width: 820px)': {
    marginTop: '20px',
    '& img': {
      display: 'none',
    },
  },
});

export const TextContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  flexWrap: 'wrap',
  columnGap: '50px',
  rowGap: '60px',
  '@media (max-width: 1251px)': {
    gap: '30px',
  },
  '@media (max-width: 1000px)': {
    columnGap: '20px',
  },
  '@media (max-width: 820px)': {
    columnGap: '10px',
  },
});

export const TextBlock = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '367px',
  gap: '15px',
  '@media (max-width: 1250px)': {
    gap: '5px',

    maxWidth: '300px',
  },
  '@media (max-width: 1000px)': {
    maxWidth: '250px',
  },
  '@media (max-width: 550px)': {
    maxWidth: '200px',
  },
  '@media (max-width: 440px)': {
    maxWidth: '300px',
  },
});
