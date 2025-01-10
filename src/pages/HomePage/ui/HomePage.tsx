import { Box, Tabs, Tab } from '@mui/material';
import { useState } from 'react';
import { Banner } from 'widgets/Banner';
import { HomeTabsContainer, TabsWrapper } from './Home.styles';
import { Title } from 'shared/lib/ui/Title';

import { bannerInfo, slides, tabs } from '../consts/consts';
import { Slider } from 'widgets/Slider';

function CustomTabPanel(props: { children: React.ReactNode; value: number; index: number }) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

export const HomePage = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  };

  return (
    <div style={{ marginBottom: '100px' }}>
      {/* // ! banner section */}
      <Banner {...bannerInfo} />
      {/* // ! tabs section */}
      <HomeTabsContainer>
        <Title>Найди то, что тебе нужно</Title>
        <TabsWrapper>
          <Tabs
            sx={{
              marginTop: '30px',
              '.MuiTabs-flexContainer': {
                gap: '20px',
              },
              '.MuiTab-root': {
                fontSize: '16px',
                '@media (max-width: 500px)': {
                  fontSize: '15px !important',
                },
              },
            }}
            value={selectedTab}
            onChange={handleTabChange}
            variant="scrollable"
            scrollButtons="auto"
            allowScrollButtonsMobile
          >
            {tabs.map((tab) => (
              <Tab
                key={tab}
                label={tab}
                sx={{
                  minWidth: 'unset',
                  padding: '12px 24px',
                  whiteSpace: 'nowrap',
                  textTransform: 'none',
                  '@media (max-width: 500px)': {
                    padding: '8px 10px',
                  },
                }}
              />
            ))}
          </Tabs>
        </TabsWrapper>
        {tabs.map((tab, index) => (
          <CustomTabPanel value={selectedTab} index={index} key={`${tab}__${index}`}>
            {tab}
          </CustomTabPanel>
        ))}
      </HomeTabsContainer>
      {/* // ! slider section */}
      <Slider slides={slides} />
    </div>
  );
};
