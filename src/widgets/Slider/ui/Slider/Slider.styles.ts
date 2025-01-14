import { styled } from '@mui/material/styles';

export const SliderControls = styled('div')`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 60px;

  @media (max-width: 800px) {
    margin-top: 40px;
  }
  @media (max-width: 620px) {
    margin-top: 20px;
  }
`;

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
  @media (max-width: 620px) {
    /* display: none; */
  }
`;

export const SliderContainer = styled('div')`
  position: relative;
  margin-top: 40px;
`;

export const styledNavigation = {
  textTransform: 'none',
  borderRadius: '50%',
  minWidth: '57px',
  width: '57px',
  height: '57px',
  padding: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderColor: '#000000',
  filter: 'contrast(0%)',
  zIndex: 2,
  '@media (max-width: 540px)': {
    minWidth: '40px',
    width: '40px',
    height: '40px',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-100%)',
  },
  '@media (max-width: 374px)': {
    minWidth: '30px',
    width: '30px',
    height: '30px',
  },
};
export const nextButton = {
  ...styledNavigation,
  right: '0',
};
export const prevButton = {
  ...styledNavigation,
  left: '0',
};

export const swiperButtons = {
  fontSize: '30px',
  color: '#000000',
  '@media (max-width: 374px)': {
    fontSize: '20px',
  },
};
