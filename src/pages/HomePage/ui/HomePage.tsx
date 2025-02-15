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
  ManagerTextContainer,
  SwiperPagination,
  FeedbackFormContainer,
  LicenceContainer,
  MobileButtons,
  LicenseTextContainer,
} from './Home.styles';
import { Title } from 'shared/lib/ui/Title';

import { bannerInfo, blogSlider, slides, tabs } from '../consts/consts';
import { Slider } from 'widgets/Slider';
import { MyTabs } from 'widgets/Tabs';
import { Container } from 'app/layout';
import { Adwantages } from 'widgets/Adwantages';
import { StyledButton } from 'shared/lib/ui/StyledButton';
import { Formalities } from 'widgets/Formalities';
import { Text17, Text20 } from 'shared/lib/ui/Text';
import { CompanyPayImage, LicenceImage } from 'shared/assets';
import { BlogSlider } from 'widgets/BlogSlider';
import { ExampleCourseSlider } from 'widgets/ExampleCourseSlider';
import { ManagerSlider } from 'widgets/ManagerSlider';
import { QweryAnswer } from 'widgets/Q&A';
import { ScrollTop } from 'widgets/ScrollTop';
import { FeedbackForm } from 'features/FeedbackForm';
import { Link } from 'react-router-dom';

export const HomePage = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
    const target = event.currentTarget as HTMLElement;
  };

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
      {/* // ! Example Course */}
      <Section>
        <Container>
          <ExampleCourseSlider />
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
      {/* // ! CompanyPay */}
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
          <ManagerSlider />
          <SwiperPagination id="manager-slider" />
        </Container>
      </Section>
      {/* // ! Licence */}
      <Section>
        <Container>
          <LicenceContainer>
            <LicenseTextContainer>
              <Title>Лицензия на право ведения образовательной деятельности</Title>
              <Text17>
                Лицензия на осуществление образовательной деятельности №7536 от 16 ноября 2020 года
                выдана ООО "Университет дополнительного профессионального образования". Лицензия
                дает право на осуществление образовательной деятельности по любым программам
                дополнительного профессионального образования и выдачу документов установленного
                образца. Лицензия выдана бессрочно и без дополнительных ограничений. Вы можете
                проверить лицинзию, с помощью специального сервиса Рособрнадзора, позволяющего
                получить информацию из сводного реестра лицензий. Для этого, достаточно просто
                указать номер лицензии - 7536 в соответствующее поле формы.
              </Text17>
              <div>
                <Link to="/">
                  <StyledButton maxWidth="180px">Скачать pdf</StyledButton>
                </Link>
                <Link to="/">
                  <StyledButton variant="outlined" maxWidth="235px">
                    Проверить лицензию
                  </StyledButton>
                </Link>
              </div>
            </LicenseTextContainer>
            <img src={LicenceImage} alt="licence" />
            <MobileButtons>
              <Link to="/">
                <StyledButton maxWidth="180px">Скачать pdf</StyledButton>
              </Link>
              <Link to="/">
                <StyledButton variant="outlined" maxWidth="255px !important">
                  Проверить лицензию
                </StyledButton>
              </Link>
            </MobileButtons>
          </LicenceContainer>
        </Container>
      </Section>
      {/* // ! BlogSlider */}
      <Section>
        <Container>
          <FlexBetween>
            <Title>Наш блог</Title>
            <StyledButton maxWidth="180px">Читать больше</StyledButton>
          </FlexBetween>
          <BlogSlider slides={blogSlider} />
          <ButtonMobile>
            <StyledButton maxWidth="180px">Читать больше</StyledButton>
          </ButtonMobile>
        </Container>
      </Section>
      {/* // ! Q&A */}
      <Section className="bg-blue">
        <Container>
          <Title>Вопросы и ответы</Title>
          <QweryAnswer />
        </Container>
      </Section>
      {/* // ! FeedbackForm */}
      <Section className="bg-blue">
        <Container>
          <FeedbackFormContainer>
            <Title>Заполните форму обратной связи, если у вас остались вопросы</Title>
            <FeedbackForm />
          </FeedbackFormContainer>
        </Container>
      </Section>
      {/* // ! ScrollTop */}
      <ScrollTop />
    </div>
  );
};
