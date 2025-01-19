import { styled } from '@mui/material/styles';

export const SliderContainer = styled('div')`
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  width: calc(100% + 200px);
  max-width: 100vw;
  padding: 60px 15px;
  display: flex;
  align-items: center;
  gap: 40px;
`;

export const SwiperPagination = styled('div')`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  @media (max-width: 540px) {
    display: none;
  }
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
