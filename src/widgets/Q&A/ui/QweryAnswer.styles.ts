import { styled } from '@mui/material';

export const AccordionContainer = styled('div')(`
  margin-top: 60px; 
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: start;
  @media (max-width: 1280px) {
    margin-top: 40px;
  }
  @media (max-width: 750px) {
    margin-top: 20px;
  }
  @media (max-width: 560px) {
    & > div:last-child {
      border-top: 0 !important;
    }
  }
`);

export const AccordionItem = styled('div')(`
  border-top: 2px solid #dee0e1;
  border-bottom: 2px solid #dee0e1;
  max-width: 570px;
  @media (max-width: 1280px) {
    max-width: calc(50vw - 40px);
  }
  @media (max-width: 750px) {
    max-width: calc(50vw - 30px);
  }
  @media (max-width: 560px) {
    max-width: 100%;
  }
`);

export const ExpandIcon = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 2px;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  span {
    width: 30px;
    height: 1px;
    background-color: #000;
    transition: all 0.3s ease;
    &:nth-of-type(1) {
      transform: rotate(90deg);
    }
    &:nth-of-type(2) {
      margin-top: -2px;
    }
  }

  &.active {
    rotate: 90deg;
    span {
      &:nth-of-type(2) {
        opacity: 0;
      }
    }
  }
  @media (max-width: 1280px) {
    span {
      width: 20px;
    }
  }
`;
