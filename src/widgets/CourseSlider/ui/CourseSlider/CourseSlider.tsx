import { FC } from 'react';
import { Button } from '@mui/material';
import { SwiperSlide } from 'swiper/react';
import { Swiper } from 'swiper/react';

import { Mousewheel, Navigation, Pagination } from 'swiper/modules';
import NavigateNextOutlinedIcon from '@mui/icons-material/NavigateNextOutlined';
import NavigateBeforeOutlinedIcon from '@mui/icons-material/NavigateBeforeOutlined';
import 'swiper/css';
import './style.css';

import { SliderCard } from '../SliderCard/SliderCard';
import {
  SliderContainer,
  SwiperPagination,
  nextButton,
  prevButton,
  swiperButtons,
} from './CourseSlider.styles';

interface SliderProps {
  slides: {
    image: string;
    title: string;
    subtitle: string;
    list: string[];
  }[];
}

export const CourseSlider: FC<SliderProps> = ({ slides }) => {
  return (
    <SliderContainer>
      
      <Button id="prev" variant="outlined" sx={prevButton}>
        <NavigateBeforeOutlinedIcon sx={swiperButtons} />
      </Button>

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
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={`${slide.title}--${index}`}>
              <SliderCard {...slide} />
            </SwiperSlide>
          ))}
          <SwiperPagination id="swiper-pagination"></SwiperPagination>
        </Swiper>

      <Button id="next" variant="outlined" sx={nextButton}>
        <NavigateNextOutlinedIcon sx={swiperButtons} />
      </Button>

    </SliderContainer>
  );
};
