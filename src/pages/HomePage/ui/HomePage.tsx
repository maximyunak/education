import { useState } from 'react';
import { Banner } from 'widgets/Banner';
import {
  ButtonMobile,
  CompanyPayTextWrapper,
  CompanyPayContainer,
  FlexBetween,
  HomeTabsContainer,
  Section,
  TabsWrapper,
  ManagerCardContainer,
  ManagerTextContainer,
  SwiperPagination,
} from './Home.styles';
import { Title } from 'shared/lib/ui/Title';

import { bannerInfo, slides, tabs } from '../consts/consts';
import { Slider } from 'widgets/Slider';
import { MyTabs } from 'widgets/Tabs';
import { Container } from 'app/layout';
import { Adwantages } from 'widgets/Adwantages';
import { StyledButton } from 'shared/lib/ui/StyledButton';
import { Formalities } from 'widgets/Formalities';
import { Text20 } from 'shared/lib/ui/Text';
import { CompanyPayImage } from 'shared/assets/images';
import { ManagerCard } from 'widgets/ManagerCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';

export const HomePage = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
    const target = event.currentTarget as HTMLElement;
    console.log(target.textContent);
  };
  console.log(selectedTab);

  const sliderData = slides.filter(
    (slider) => slider.title === tabs[selectedTab] || tabs[selectedTab] === 'Все курсы',
  );

  return (
    <div>
      {/* // ! banner */}
      <Container>
        <Banner {...bannerInfo} />
      </Container>
      {/* // ! tabs */}
      <Section>
        <Container>
          <HomeTabsContainer>
            <Title>Найди то, что тебе нужно</Title>
            <TabsWrapper>
              <MyTabs tabs={tabs} selectedTab={selectedTab} handleTabChange={handleTabChange} />
            </TabsWrapper>
          </HomeTabsContainer>
          {/* // ! slider section */}
          <Slider slides={sliderData} key={selectedTab} currentKey={'Found'} />
        </Container>
      </Section>
      {/* // ! advantages */}
      <Section className="bg-blue">
        <Container>
          <Title>Преимущества УДПО</Title>
          <Adwantages />
        </Container>
      </Section>
      {/* // ! low price */}
      <Section>
        <Container>
          <Title>Low price</Title>
          <FlexBetween>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur corrupti quisquam
              aperiam quis iusto obcaecati.
            </p>
            <StyledButton maxWidth="180px">Смотреть больше</StyledButton>
          </FlexBetween>
          <Slider slides={slides} key={'LowPriceSlider'} currentKey={'LowPriceSlider'} />
          <ButtonMobile>
            <StyledButton maxWidth="180px">Смотреть больше</StyledButton>
          </ButtonMobile>
        </Container>
      </Section>
      {/* // ! Formalities */}
      <Section className="bg-blue">
        <Container>
          <Title>Мы уладили все формальности</Title>
          <Formalities />
        </Container>
      </Section>

      {/* // ! Popular programs */}
      <Section>
        <Container>
          <FlexBetween>
            <Title>Популярные программы</Title>
            <StyledButton maxWidth="180px">Смотреть больше</StyledButton>
          </FlexBetween>
          <Slider slides={slides} key={'PopularSlider'} currentKey={'PopularSlider'} />
          <ButtonMobile>
            <StyledButton maxWidth="180px">Смотреть больше</StyledButton>
          </ButtonMobile>
        </Container>
      </Section>

      <Section className="bg-blue">
        <Container>
          <CompanyPayContainer>
            <CompanyPayTextWrapper>
              <Title>Обучение за счёт вашей компании.</Title>
              <Text20>
                У нас действует 2 вида договора на обучение. По одному вы оплачиваете сами. А второй
                предлагает оплатить обучение за счёт вашей компании.
              </Text20>
              <StyledButton maxWidth="180px">Выбрать курс</StyledButton>
            </CompanyPayTextWrapper>
            <img src={CompanyPayImage} alt="companyPay" />
          </CompanyPayContainer>
        </Container>
      </Section>
      {/* // ! our managers */}
      <Section>
        <Container>
          <ManagerTextContainer>
            <Title>Наши менеджеры</Title>
            <Text20>На сайте работают менеджеры, которым вы можете задать свои вопросы.</Text20>
          </ManagerTextContainer>
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
            <SwiperPagination id="manager-slider" />
        </Container>
      </Section>
    </div>
  );
};
