import { styled } from '@mui/material/styles';

export const Registration = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  margin: '0 auto',
  width: '100%',
  minHeight: '100vh',
  alignItems: 'center',
});

export const RegistrationContainer = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  maxWidth: '812px',
  width: '100%',
  margin: '0 auto',
  '@media (max-width: 980px)': {
    width: '100%',
    justifyContent: 'center',
  },
});
