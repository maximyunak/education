import { SliderPrev, SliderNext } from 'shared/lib/ui/SliderNavigation';
import { ExampleCourseCard } from '../ExampleCourseCard/ExampleCourseCard';
import { SwiperPagination } from 'shared/lib';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SliderControls } from 'widgets/BlogSlider/ui/Slider/BlogSlider.style';
import { Navigation } from 'swiper/modules';
import { Pagination } from 'swiper/modules';

export const ExampleCourseSlider = () => {
  return (
    <Swiper
      modules={[Pagination, Navigation]}
      spaceBetween={30}
      loop
      slidesPerView={1}
      pagination={{
        clickable: true,
        el: '#example-slider-pagination',
      }}
      navigation={{
        nextEl: `#example-slider-next`,
        prevEl: `#example-slider-prev`,
      }}
    >
      <SwiperSlide>
        <ExampleCourseCard
          title="Видосики индусов"
          description="Смотрим, как умные люди чтото делают"
        />
      </SwiperSlide>
      <SwiperSlide>
        <ExampleCourseCard title="картинки с мемами" description="Смотрим мемасики яхз" />
      </SwiperSlide>
      <SwiperSlide>
        <ExampleCourseCard
          title="гадание на кофейной гуще"
          description="Гадаем, можем еще на таро"
        />
      </SwiperSlide>
      <SliderControls>
        <SliderPrev currentKey={'example-slider'} />
        <SwiperPagination id={'example-slider-pagination'}></SwiperPagination>
        <SliderNext currentKey={'example-slider'} />
      </SliderControls>
    </Swiper>
  );
};
