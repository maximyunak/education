import styled from '@mui/material/styles/styled';

export const SwiperPagination = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  span {
    background-color: #e5e5e5;
    width: 13px;
    height: 13px;
    display: block;
    border-radius: 50%;
    cursor: pointer;
    &.swiper-pagination-bullet-active {
      background-color: #000000;
    }

    @media (max-width: 800px) {
      width: 10px;
      height: 10px;
    }
  }

  @media (max-width: 800px) {
    gap: 10px;
    span {
      width: 8px;
      height: 8px;
    }
  }
`;
