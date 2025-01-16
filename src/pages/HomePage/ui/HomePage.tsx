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
} from './Home.styles';
import { Title } from 'shared/lib/ui/Title';

import { bannerInfo, blogSlider, slides, tabs } from '../consts/consts';
import { Slider } from 'widgets/Slider';
import { MyTabs } from 'widgets/Tabs';
import { Container } from 'app/layout';
import { Adwantages } from 'widgets/Adwantages';
import { StyledButton } from 'shared/lib/ui/StyledButton';
import { Formalities } from 'widgets/Formalities';
import { Text17, Text20, Text20Bold } from 'shared/lib/ui/Text';
import { CompanyPayImage } from 'shared/assets/images';
import { AccordionDetails, AccordionSummary, Accordion } from '@mui/material';
import { BlogSlider } from 'widgets/BlogSlider';
import { ExampleCourseSlider } from 'widgets/ExampleCourseSlider';
import { ManagerSlider } from 'widgets/ManagerSlider';

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
      <Section>
        <Container>
          <Title>Вопросы и ответы</Title>

          <Accordion
            sx={{
              borderTop: '2px solid #dee0e1',
              borderBottom: '2px solid #dee0e1',
              borderRadius: '0px !important',
              boxShadow: 'none',
            }}
          >
            <AccordionSummary id="panel1-header">
              <Text20Bold>Где открывают визы</Text20Bold>
            </AccordionSummary>
            <AccordionDetails>
              <Text17>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus
                ex, sit amet blandit leo lobortis eget.
              </Text17>
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{
              borderTop: '2px solid #dee0e1',
              borderBottom: '2px solid #dee0e1',
              borderRadius: '0px !important',
              boxShadow: 'none',
            }}
          >
            <AccordionSummary
              // expandIcon={<ArrowDownwardIcon />}
              // aria-controls="panel1-content"
              id="panel1-header"
            >
              <Text20Bold>Где открывают визы</Text20Bold>
            </AccordionSummary>
            <AccordionDetails>
              <Text17>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus
                ex, sit amet blandit leo lobortis eget.
              </Text17>
            </AccordionDetails>
          </Accordion>
        </Container>
      </Section>
    </div>
  );
};
