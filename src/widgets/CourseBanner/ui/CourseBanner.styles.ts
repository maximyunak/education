import styled from 'styled-components';
import { Title } from 'shared/lib/ui/Title'

const MAX_WIDTH_1 = '970px';
const MAX_WIDTH_2 = '700px';

export const BannerContainer = styled.div`
  display: grid;
  grid-template-columns: calc(570 / 1200 * 100%) 1fr;
  grid-gap: 20px;
  padding-top: 140px;
  padding-bottom: 40px;

  @media (max-width: ${MAX_WIDTH_2}) {
    padding-top: 100px;
    padding-bottom: 30px;
  }
`;

export const TitleContainer = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 60px;

  @media (max-width: ${MAX_WIDTH_2}) {
    grid-column: span 2;
    gap: 20px;
  }
`;

export const TitleInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const BannerTitle = styled(Title)`
  font-size: 36px;

  @media (max-width: ${MAX_WIDTH_2}) {
    font-size: 28px;
  }
`;

export const BannerSubtitle = styled.p`
  font-size: 16px;
  font-weight: 600;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 40px;
  max-width: 420px;
`;


export const ImageContainer = styled.div`
  grid-area: 1 / 2 / 2 / 3;
  position: relative;
  
  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  @media (max-width: ${MAX_WIDTH_2}) {
    display: none;
  }
`;


export const InfoContainer = styled.div`
  grid-area: 2 / 2 / 3 / 3;
  display: flex;
  justify-content: space-between;
  gap: 30px;
  margin-top: 100px;

  @media (max-width: ${MAX_WIDTH_1}) {
    grid-column: span 2;
  }

  @media (max-width: 970px) {
    margin-top: 40px;
  }
`;

export const InfoItem = styled.div`
`;

export const InfoTitle = styled.p`
  font-size: 36px;
  font-weight: 600;
`;

export const InfoSubtitle = styled.p`
  font-weight: 600;
  margin-top: 20px;
`;

export const InfoDescription = styled.p`
  margin-top: 5px;
`;
