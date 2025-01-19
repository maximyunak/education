import { Pagination } from 'swiper/modules';
import { Navigation } from 'swiper/modules';
import { SliderCard } from '../SliderCard/SliderCard';
import { FC } from 'react';
import { SliderPrev } from 'shared/lib';
import { SliderNext } from 'shared/lib';

export { SliderNext, SliderPrev, SwiperPagination } from 'shared/lib';

import { Swiper, SwiperSlide } from 'swiper/react';
import { SwiperPagination } from 'shared/lib';
import { BlogSliderContainer, SliderControls } from './BlogSlider.style';

interface BlogSliderProps {
  slides: {
    image: string;
    title: string;
    avatar: string;
    name: string;
    date: string;
    views: string;
    id: string;
  }[];
}

export const BlogSlider: FC<BlogSliderProps> = ({ slides }) => {
  return (
    <BlogSliderContainer>
      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        slidesPerGroup={1}
        pagination={{
          el: `#blog-slider-pagination`,
          clickable: true,
          type: 'bullets',
        }}
        navigation={{
          nextEl: `#blog-slider-next`,
          prevEl: `#blog-slider-prev`,
        }}
        loop={slides.length > 3}
        breakpoints={{
          780: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          539: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={`${slide.title}--${index}`}>
            <SliderCard {...slide} />
          </SwiperSlide>
        ))}
        <SliderControls>
          <SliderPrev currentKey={'blog-slider'} />
          <SwiperPagination id={'blog-slider-pagination'}></SwiperPagination>
          <SliderNext currentKey={'blog-slider'} />
        </SliderControls>
      </Swiper>
    </BlogSliderContainer>
  );
};
