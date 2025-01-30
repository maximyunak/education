import { styled } from '@mui/material';

export const Text17 = styled('h3')({
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

export const Text20 = styled('h1')({
  fontSize: '20px',
  lineHeight: '28px',
  fontWeight: 400,
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

export const Text20Bold = styled(Text20)({
  fontWeight: 600,
});

export const Text16 = styled('p')({
  fontSize: '16px',
  lineHeight: '19px',
  fontWeight: 400,
  '@media (max-width: 1250px)': {
    fontSize: '15px',
  },
  '@media (max-width: 1000px)': {
    fontSize: '14px',
    lineHeight: '17px',
  },
});

export const Text16Bold = styled(Text16)({
  fontWeight: 600,
});

export const Text36 = styled('h2')({
  fontSize: '36px',
  lineHeight: '44px',
  fontWeight: 600,
  '@media (max-width: 1250px)': {
    fontSize: '28px',
    lineHeight: '36px',
  },
  '@media (max-width: 1000px)': {
    fontSize: '24px',
    lineHeight: '32px',
  },
  '@media (max-width: 550px)': {
    fontSize: '20px',
    lineHeight: '28px',
  },
});

export const Text12 = styled('p')({
  fontSize: '12px',
  lineHeight: '16px',
  fontWeight: 400,
});

export const TextGray = styled('span')`
  color: #999;
`;
