import { useState } from 'react';
import { Banner } from 'widgets/Banner';
import { FlexBetween, HomeTabsContainer, Section, TabsWrapper } from './Home.styles';
import { Title } from 'shared/lib/ui/Title';

import { bannerInfo, slides, tabs } from '../consts/consts';
import { Slider } from 'widgets/Slider';
import { MyTabs } from 'widgets/Tabs';
import { Container } from 'app/layout';
import { Adwantages } from 'widgets/Adwantages';
import { StyledButton } from 'shared/lib/ui/StyledButton';

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
        </Container>
      </Section>
      {/* // ! Examples */}
      <Section>
        <Container>
          <FlexBetween>
            <Title>Популярные программы</Title>
            <StyledButton maxWidth="180px">Смотреть больше</StyledButton>
          </FlexBetween>
          <Slider slides={slides} key={'PopularSlider'} currentKey={'PopularSlider'} />
        </Container>
      </Section>
    </div>
  );
};
