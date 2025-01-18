import styled from '@mui/material/styles/styled';

export const StyledScrollTop = styled('div')`
  position: fixed;
  bottom: 50px;
  right: 30px;
  width: 55px;
  height: 55px;
  opacity: 1;
  transition: opacity 0.3s ease;
  animation: fadeIn 0.3s ease;

  z-index: 99;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  svg {
    rotate: -90deg;
  }

  button {
    width: 55px;
    height: 55px;
    min-width: 55px;
    padding: 0;
  }

  @media (max-width: 1200px) {
    width: 40px;
    height: 40px;

    button {
      width: 40px;
      height: 40px;
      min-width: 40px;
    }
  }
  @media (max-width: 768px) {
    bottom: 30px;
    right: 20px;
  }
`;
