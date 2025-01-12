import { Title } from 'shared/lib/ui/Title';
import styled from 'styled-components';

export const BannerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 700px;
  gap: 20px;
  padding-bottom: 140px;
  position: relative;
  @media (max-width: 1200px) {
    height: 600px;
  }
  @media (max-width: 970px) {
    flex-direction: column;
    height: auto;
    margin-top: 40px;
    align-items: start;
    padding-bottom: 0;
  }
`;

export const BannerTitleContainer = styled.div`
  max-width: 758px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  z-index: 2;
  @media (max-width: 1200px) {
    max-width: 590px;
  }
`;

export const InfoContainer = styled.div`
  margin-top: 75px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
  position: absolute;
  bottom: -140px;
  left: 50%;
  transform: translateX(-50%);
  gap: 100px;
  @media (max-width: 970px) {
    gap: 50px;
    position: static;
    transform: none;
    left: 0;
    margin-top: 20px;
    justify-content: space-evenly;
  }
`;

export const InfoItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;

export const ImageContainer = styled.div`
  min-width: 629px;
  z-index: 1;
  margin-left: -700px;
  position: relative;

  img {
    width: 629px;
  }
  @media (max-width: 1200px) {
    margin-left: 0px;
    min-width: auto;
    img {
      max-width: 500px;
    }
  }
  @media (max-width: 1100px) {
    img {
      max-width: 400px;
    }
  }
  @media (max-width: 970px) {
    position: static;
    img {
      /* display: none; */
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  @media (max-width: 750px) {
    img {
      display: none;
    }
  }
  @media (max-width: 550px) {
    width: 100%;
  }
`;

export const HelpText = styled.p`
  font-size: 17px;
  font-weight: 400;
  @media (max-width: 750px) {
    font-size: 14px;
    font-size: calc(100vw / 30);
  }
`;

export const BannerTitle = styled(Title)`
  font-size: 55px;
  text-transform: none;
  @media (max-width: 1200px) {
    font-size: 40px;
  }
  @media (max-width: 1100px) {
    font-size: 35px;
  }
  @media (max-width: 550px) {
    font-size: calc(100vw / 15);
  }
`;

export const ButtonContainer = styled.div`
  margin-top: 40px;
  max-width: 400px;
  display: flex;
  gap: 40px;
  @media (max-width: 550px) {
    /* flex-direction: column; */
    margin-top: 10px;
    max-width: 95%;
    gap: 20px;
    button {
      font-size: 14px !important;
      height: 40px;
    }
  }
`;
