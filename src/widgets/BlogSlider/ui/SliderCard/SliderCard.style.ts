import styled from '@mui/material/styles/styled';
import { Link } from 'react-router-dom';

export const SliderCardContainer = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 366px;
  color: inherit;
  @media (max-width: 800px) {
    gap: 10px;
  }
  @media (max-width: 540px) {
    margin: 0 auto;
    max-width: 320px;
  }
`;

export const ProfileBlock = styled('div')`
  margin-top: 20px;
  display: flex;
  align-items: center;
  gap: 10px;

  .avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
  .profile-info {
    display: flex;
    flex-direction: column;
    h1 {
      font-size: 16px;
      font-weight: 600;
    }
    .profile-info-bottom {
      display: flex;
      align-items: center;
      gap: 15px;
      font-size: 12px;
      color: #999999;
    }
  }
  .profile-views {
    display: flex;
    align-items: center;
    gap: 6px;
  }
  @media (max-width: 800px) {
    margin-top: 10px;
    .profile-info {
      h1 {
        font-size: 14px;
      }
    }
  }
`;
