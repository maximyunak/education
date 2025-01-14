import { styled } from '@mui/material';

export const Text17 = styled('p')({
  fontSize: '17px',
  lineHeight: '24px',
  fontWeight: 400,
  '@media (max-width: 1250px)': {
    fontSize: '15px',
    lineHeight: '20px',
  },
  '@media (max-width: 1000px)': {
    fontSize: '14px',
    lineHeight: '18px',
  },
});

export const Text20 = styled('p')({
  fontSize: '20px',
  lineHeight: '28px',
  fontWeight: 600,
  '@media (max-width: 1250px)': {
    fontSize: '18px',
  },
  '@media (max-width: 1000px)': {
    fontSize: '16px',
    lineHeight: '20px',
  },
  '@media (max-width: 550px)': {
    fontSize: '15px',
  },
});
