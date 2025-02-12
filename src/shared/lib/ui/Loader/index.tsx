import { styled } from '@mui/material';

export const LoadingWave = styled('div')`
  width: 300px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
`;

export const LoadingBar = styled('div')({
  width: '20px',
  height: '10px',
  margin: '0 5px',
  backgroundColor: '#3498db',
  borderRadius: '5px',
  animation: 'loading-wave-animation 1s ease-in-out infinite',
  '&:nth-of-type(2)': {
    animationDelay: '0.1s',
  },
  '&:nth-of-type(3)': {
    animationDelay: '0.2s',
  },
  '&:nth-of-type(4)': {
    animationDelay: '0.3s',
  },
  '@keyframes loading-wave-animation': {
    '0%': {
      height: '10px',
    },
    '50%': {
      height: '50px',
    },
    '100%': {
      height: '10px',
    },
  },
});

export const Loader = () => {
  return (
    <LoadingWave>
      <LoadingBar />
      <LoadingBar />
      <LoadingBar />
      <LoadingBar />
    </LoadingWave>
  );
};
