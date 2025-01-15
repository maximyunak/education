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
    button {
      display: none;
    }
  }
`;

export const ButtonMobile = styled('div')`
  display: none;
  @media (max-width: 540px) {
    display: flex;
    justify-content: center;
    width: 100%;
  }
`;

export const CompanyPayContainer = styled('div')`
  display: flex;
  justify-content: space-between;
  @media (max-width: 1000px) {
    img {
      width: 45vw;
    }
  }
  @media (max-width: 750px) {
    flex-direction: column;
    align-items: center;
    img {
      width: 80vw;
      margin-top: 6vw;
    }
  }
`;

export const CompanyPayTextWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  max-width: 560px;

  p {
    margin-top: 40px;
  }
  button {
    margin-top: 60px;
  }
  @media (max-width: 1000px) {
    max-width: 460px;
    p {
      margin-top: 20px;
    }
    button {
      margin-top: 40px;
    }
  }
  @media (max-width: 750px) {
    align-items: center;
  }
`;

export const ManagerCardContainer = styled('div')`
  margin-top: 90px;
  margin-bottom: 30px;
  padding-bottom: 30px;
  @media (max-width: 920px) {
    margin-top: 60px;
  }
  @media (max-width: 560px) {
    margin-top: 40px;
    max-width: 300px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const ManagerTextContainer = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  row-gap: 10px;
  column-gap: 30px;
  p {
    max-width: 560px;
    @media (max-width: 1000px) {
      max-width: 460px;
    }
  }
`;

export const SwiperPagination = styled('div')`
  display: none;
  justify-content: center;
  align-items: center;
  gap: 20px;
  span {
    background-color: #e5e5e5;
    width: 13px;
    height: 13px;
    display: block;
    border-radius: 50%;

    &.swiper-pagination-bullet-active {
      background-color: #000000;
    }

    @media (max-width: 800px) {
      width: 10px;
      height: 10px;
    }
  }
  @media (max-width: 920px) {
    display: flex;
  }
  @media (max-width: 800px) {
    gap: 10px;
    span {
      width: 8px;
      height: 8px;
    }
  }
`;
