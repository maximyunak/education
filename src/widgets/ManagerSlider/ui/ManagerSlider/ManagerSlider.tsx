import { ManagerCard } from '../ManagerCard/ManagerCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import styled from 'styled-components';

const ManagerCardContainer = styled('div')`
  margin-top: 90px;
  @media (max-width: 920px) {
    margin-top: 60px;
    margin-bottom: 30px;
  }
  @media (max-width: 560px) {
    margin-top: 40px;
    max-width: 300px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const ManagerSlider = () => {
  return (
    <div>
      <ManagerCardContainer>
        <Swiper
          modules={[Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{
            clickable: true,
            el: '#manager-slider',
          }}
          // navigation
          breakpoints={{
            920: {
              slidesPerView: 3,
            },
            560: {
              slidesPerView: 2,
            },
          }}
        >
          <SwiperSlide>
            <ManagerCard
              name="John Doe"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum inventore sunt cumque illum fugit exercitationem, illo consectetur facere in rem."
            />
          </SwiperSlide>
          <SwiperSlide>
            <ManagerCard
              name="John Doe"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum inventore sunt cumque illum fugit exercitationem, illo consectetur facere in rem."
            />
          </SwiperSlide>
          <SwiperSlide>
            <ManagerCard
              name="John Doe"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum inventore sunt cumque illum fugit exercitationem, illo consectetur facere in rem."
            />
          </SwiperSlide>
        </Swiper>
      </ManagerCardContainer>
    </div>
  );
};
