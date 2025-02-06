import { styled } from '@mui/material';

export const AnswerContainer = styled('div')`
  display: flex;
  align-items: center;
  gap: 10px;
  position: relative;

  .button {
    svg {
      path {
        color: #000 !important;
      }
    }
  }
`;

export const InputContainer = styled('div')`
  max-width: 406px;
  width: 100%;
`;

export const ButtonsContainer = styled('div')`
  @media (hover: hover) {
    opacity: 0;
    visibility: hidden;
    transition: 0.3s;

    &.active {
      opacity: 1;
      visibility: visible;
    }
  }

  @media (max-width: 550px) {
    position: absolute;
    right: 0;
    img {
      width: 25px;
    }
  }
`;
