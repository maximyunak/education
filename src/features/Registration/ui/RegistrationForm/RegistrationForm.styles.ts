import { styled } from '@mui/material/styles';

export const RegistrationFormContainer = styled('div')({
  width: '100%',
  marginBottom: '30px',
  marginTop: '30px',

  '@media (max-width: 600px)': {
    width: '353px',
  },
});

export const InputWrapper = styled('div')({
  marginTop: '60px',
  display: 'flex',
  justifyContent: 'space-between',
  gap: '20px',

  '@media (max-width: 600px)': {
    marginTop: '30px',
    alignItems: 'center',
    flexDirection: 'column',
  },
});

export const TextContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: '6px',
  position: 'relative',
});

export const InputColumn = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: '25px',
  width: '100%',
  maxWidth: '353px',
});

export const ButtonWrapper = styled('div')({
  margin: '60px auto 0',
  maxWidth: '353px',
  display: 'flex',
  justifyContent: 'center',

  '@media (max-width: 600px)': {
    margin: '30px auto 0',
  },
});

