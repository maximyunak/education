import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

export const TextContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: '6px',
});

export const Form = styled('form')({
  marginTop: '43px',
  display: 'flex',
  flexDirection: 'column',
  gap: '22px',
  '@media (max-width: 450px)': {
    gap: '15px',
    marginTop: '30px',
  },
});

export const StyledLink = styled(Link)({
  fontSize: '14px',
  color: '#000',
  display: 'flex',
  justifyContent: 'flex-end',
  marginTop: '10px',
});

export const LoginWith = styled('div')({
  marginTop: '38px',
  display: 'flex',
  alignItems: 'center',
  gap: '2px',
  position: 'relative',
  justifyContent: 'center',
  '@media (max-width: 450px)': {
    marginTop: '20px',
  },
});

export const Line = styled('div')({
  width: '100%',
  height: '1px',
  backgroundColor: '#d8dadc',
  position: 'absolute',
});

export const LoginWithText = styled('p')({
  fontSize: '14px',
  color: '#00000070',
  backgroundColor: '#fff',
  padding: '0 4px',
  zIndex: 2,
});

export const LoginWithIcon = styled('img')({
  width: '20px',
  height: '20px',
});

export const LoginWithContainer = styled('div')({
  marginTop: '22px',
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
});
