import { styled } from '@mui/material/styles';

export const Slider = styled('div')`
  img {
    border-radius: 11px 11px 0 0;
    width: 100%;
  }
`;

export const SliderContent = styled('div')`
  min-width: 367px;
  border-radius: 12px;
  border: 2px solid #e0e0e0;
  @media (max-width: 1150px) {
    min-width: 300px;
  }
  @media (max-width: 950px) {
    min-width: 250px;
  }
  @media (max-width: 540px) {
    max-width: 60%;
    margin: 0 auto;
  }
  @media (max-width: 374px) {
    min-width: 220px;
  }
`;

export const SliderCardInfo = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px 30px 22px;
  @media (max-width: 950px) {
    padding: 10px 15px 15px;
  }
`;

export const SliderCardTitle = styled('div')`
  font-size: 17px;
  font-weight: 400;
  @media (max-width: 950px) {
    font-size: 14px;
  }
`;

export const SliderCardDescription = styled('div')`
  font-size: 20px;
  font-weight: 500;
  max-height: 74px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  @media (max-width: 1150px) {
    font-size: 16px;
    max-height: 60px;
  }
  @media (max-width: 950px) {
    font-size: 14px;
    max-height: 50px;
  }
`;
export const SliderCardAcademicHours = styled('div')`
  font-size: 12px;
  font-weight: 400;
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const SliderFooter = styled('div')`
  margin-top: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 950px) {
    margin-top: 15px;
  }
`;
