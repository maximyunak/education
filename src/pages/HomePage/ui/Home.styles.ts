import { styled } from '@mui/material/styles';

export const HomeContainer = styled('div')`
  display: flex;
  flex-direction: column;
`;

export const HomeTabsContainer = styled('div')`
  margin-top: 60px;
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

  .MuiTabs-scroller {
    /* overflow: unset !important; */
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
  margin-top: 100px;
  padding: 120px 0;

  @media (max-width: 1180px) {
    padding: 80px 0;
    margin-top: 80px;
  }
  @media (max-width: 800px) {
    padding: 60px 0;
    margin-top: 20px;
  }
`;
