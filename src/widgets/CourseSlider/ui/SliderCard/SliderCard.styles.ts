import { styled } from '@mui/material/styles';

const MAX_WIDTH_1 = '970px';
const MAX_WIDTH_2 = '700px';
const MAX_WIDTH_3 = '540px';

export const SliderCardContainer = styled('div')`
  display: flex;
  gap: 100px;
  @media (max-width: ${MAX_WIDTH_1}) {
    gap: 50px;
  }
`;

export const ImageContainer = styled('div')`
  max-width: calc(300 / 1200 * 100%);
  position: relative;
  img {
    position: relative;
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

export const InfoContainer = styled('div')`
  padding-bottom: 20px;
`;

export const Subtitle = styled('p')`
  font-size: 16px;
  font-weight: 600;
`;

export const Title = styled('p')`
  font-size: 24px;
  font-weight: 600;
  margin-top: 40px;
  margin-bottom: 30px;
  @media (max-width: ${MAX_WIDTH_1}) {
    margin-top: 20px;
    margin-bottom: 15px;
  }
  @media (max-width: ${MAX_WIDTH_3}) {
    font-size: 18px;
  }
`;

export const ListContainer = styled('ul')`
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media (max-width: ${MAX_WIDTH_1}) {
    gap: 10px;
  }
`;

export const ListItem = styled('li')`
  font-size: 17px;
  position: relative;
  padding-left: 15px;
  ::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #3D8BE4;
  }
`;
