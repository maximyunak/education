import { styled } from '@mui/material/styles';

export const HomeContainer = styled('div')`
  display: flex;
  flex-direction: column;
`;

export const Section = styled('section')`
  padding: 120px 0;
  &.bg-blue {
    background-color: #f6f8f9;
  }
  @media (max-width: 1180px) {
    padding: 80px 0;
  }
  @media (max-width: 800px) {
    padding: 60px 0;
  }
  @media (max-width: 620px) {
    padding: 40px 0;
  }
`;

export const HomeTabsContainer = styled('div')`
  /* margin-top: 60px; */
  display: flex;
  flex-direction: column;
  align-items: center;

  .MuiTabs-root {
    min-height: 48px;
    overflow-x: auto;
    display: flex;
    /* justify-content: center; */

    .MuiTabs-flexContainer {
      /* justify-content: center; */
    }

    &::-webkit-scrollbar {
      display: none;
    }
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`;

export const TabsWrapper = styled('div')`
  position: relative;
  overflow-x: auto;
  width: 100%;
  display: flex;
  justify-content: center;

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

export const AdvantagesContainer = styled('div')`
  background-color: #f6f8f9;
`;
export const FlexBetween = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 40px;
  p {
    max-width: 570px;
    font-size: 20px;
    @media (max-width: 800px) {
      max-width: 400px;
      font-size: 14px;
    }
    @media (max-width: 620px) {
      max-width: 320px;
      letter-spacing: 0.01em;
    }
  }
  @media (max-width: 800px) {
    margin-top: 20px;
  }
  @media (max-width: 540px) {
    flex-direction: column;
    gap: 20px;
    align-items: flex-start;
  }
`;

export const LowPriceContainer = styled('div')``;
