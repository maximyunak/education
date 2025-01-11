import { useState } from 'react';
import { Banner } from 'widgets/Banner';
import { HomeTabsContainer, TabsWrapper } from './Home.styles';
import { Title } from 'shared/lib/ui/Title';

import { bannerInfo, slides, tabs } from '../consts/consts';
import { Slider } from 'widgets/Slider';
import { MyTabs } from 'widgets/Tabs';

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
    <div style={{ marginBottom: '100px' }}>
      {/* // ! banner section */}
      <Banner {...bannerInfo} />
      {/* // ! tabs section */}
      <HomeTabsContainer>
        <Title>Найди то, что тебе нужно</Title>
        <TabsWrapper>
          <MyTabs tabs={tabs} selectedTab={selectedTab} handleTabChange={handleTabChange} />
        </TabsWrapper>
      </HomeTabsContainer>
      {/* // ! slider section */}
      <Slider slides={sliderData} key={selectedTab} />
    </div>
  );
};
