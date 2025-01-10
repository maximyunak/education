import { Button } from '@mui/material';
import { SwiperSlide } from 'swiper/react';
import { Swiper } from 'swiper/react';
import { FC } from 'react';

import { Mousewheel, Navigation, Pagination } from 'swiper/modules';

import { SliderContainer, SliderControls, SwiperPagination } from './Slider.styles';

import 'swiper/css';
import './style.css';

import NavigateNextOutlinedIcon from '@mui/icons-material/NavigateNextOutlined';
import NavigateBeforeOutlinedIcon from '@mui/icons-material/NavigateBeforeOutlined';
import { SliderCard } from '../SliderCard/SliderCard';

interface SliderProps {
  slides: {
    image: string;
    title: string;
    description: string;
    academicHours: string;
  }[];
}

export const Slider: FC<SliderProps> = ({ slides }) => {
  const styledNavigation = {
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
  const nextButton = {
    ...styledNavigation,
    right: '0',
  };
  const prevButton = {
    ...styledNavigation,
    left: '0',
  };

  const swiperButtons = {
    fontSize: '30px',
    color: '#000000',
    '@media (max-width: 374px)': {
      fontSize: '20px',
    },
  };
  return (
    <div>
      <SliderContainer>
        <Swiper
          modules={[Pagination, Navigation, Mousewheel]}
          spaceBetween={20}
          slidesPerView={1}
          slidesPerGroup={1}
          pagination={{
            el: '#swiper-pagination',
          }}
          navigation={{
            nextEl: '#next',
            prevEl: '#prev',
          }}
          loop={true}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          breakpoints={{
            780: {
              slidesPerView: 3,
              spaceBetween: 30,
              slidesPerGroup: 3,
            },
            540: {
              slidesPerView: 2,
              spaceBetween: 20,
              slidesPerGroup: 2,
            },
          }}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={`${slide.title}--${index}`}>
              <SliderCard {...slide} />
            </SwiperSlide>
          ))}
        </Swiper>
        <SliderControls>
          <Button id="prev" variant="outlined" sx={prevButton}>
            <NavigateBeforeOutlinedIcon sx={swiperButtons} />
          </Button>
          <SwiperPagination id="swiper-pagination"></SwiperPagination>
          <Button id="next" variant="outlined" sx={nextButton}>
            <NavigateNextOutlinedIcon sx={swiperButtons} />
          </Button>
        </SliderControls>
      </SliderContainer>
    </div>
  );
};
