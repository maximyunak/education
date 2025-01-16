import { Button } from '@mui/material';
import { SwiperSlide } from 'swiper/react';
import { Swiper } from 'swiper/react';
import { FC } from 'react';

import { Mousewheel, Navigation, Pagination } from 'swiper/modules';

import {
  SliderContainer,
  SliderControls,
  SwiperPagination,
  nextButton,
  prevButton,
  swiperButtons,
} from './Slider.styles';

import 'swiper/css';

import NavigateNextOutlinedIcon from '@mui/icons-material/NavigateNextOutlined';
import NavigateBeforeOutlinedIcon from '@mui/icons-material/NavigateBeforeOutlined';
import { SliderCard } from '../SliderCard/SliderCard';

interface SliderProps {
  currentKey: string;
  slides: {
    image: string;
    title: string;
    description: string;
    academicHours: string;
  }[];
}

export const Slider: FC<SliderProps> = ({ slides, currentKey }) => {
  return (
    <div>
      <SliderContainer>
        <Swiper
          modules={[Pagination, Navigation, Mousewheel]}
          spaceBetween={20}
          slidesPerView={1}
          slidesPerGroup={1}
          pagination={{
            el: `#${currentKey}`,
            clickable: true,
            type: 'bullets',
          }}
          navigation={{
            nextEl: `#${currentKey}-next`,
            prevEl: `#${currentKey}-prev`,
          }}
          loop={true}
          breakpoints={{
            780: {
              slidesPerView: 3,
              spaceBetween: 30,
              slidesPerGroup: 3,
            },
            539: {
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
        {/* {slides.length > 3 && ( */}
        <SliderControls>
          <Button id={`${currentKey}-prev`} variant="outlined" sx={prevButton}>
            <NavigateBeforeOutlinedIcon sx={swiperButtons} />
          </Button>
          <SwiperPagination id={currentKey}></SwiperPagination>
          <Button id={`${currentKey}-next`} variant="outlined" sx={nextButton}>
            <NavigateNextOutlinedIcon sx={swiperButtons} />
          </Button>
        </SliderControls>
        {/* )} */}
      </SliderContainer>
    </div>
  );
};
