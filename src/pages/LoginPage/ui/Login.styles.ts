import { styled } from '@mui/material/styles';

export const Login = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  margin: '0 auto',
  width: '100%',
  minHeight: '100vh',
  alignItems: 'center',
});

export const LoginImage = styled('img')({
  width: '645px',
  '@media (max-width: 1050px)': {
    width: '550px',
    height: '504px',
  },
  '@media (max-width: 980px)': {
    display: 'none',
  },
});

export const LoginContainer = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  maxWidth: '1187px',
  margin: '0 auto',
  '@media (max-width: 980px)': {
    width: '100%',
    justifyContent: 'center',
  },
});
