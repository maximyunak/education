import { Box, Tabs, Tab, Button } from '@mui/material';
import { useState } from 'react';
import { Banner } from 'widgets/Banner';
import {
  HomeTabsContainer,
  SliderContainer,
  SliderControls,
  SwiperPagination,
  TabsWrapper,
} from './Home.styles';
import { Title } from 'shared/lib/ui/Title';
import { Swiper, SwiperSlide } from 'swiper/react';

import { SliderCard } from 'widgets/SliderCard';
import { bannerInfo, slides, tabs } from '../consts/consts';

import 'swiper/css';
import { Mousewheel, Navigation, Pagination } from 'swiper/modules';

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

import './style.css';
import NavigateNextOutlinedIcon from '@mui/icons-material/NavigateNextOutlined';
import NavigateBeforeOutlinedIcon from '@mui/icons-material/NavigateBeforeOutlined';

export const HomePage = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  };

  const styledNavigation = {
    textTransform: 'none',
    borderRadius: '50%',
    minWidth: '57px',
    width: '57px',
    height: '57px',
    padding: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#000000',
    filter: 'contrast(0%)',
    '@media (max-width: 540px)': {
      minWidth: '40px',
      width: '40px',
      height: '40px',
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
    },
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
      <SliderContainer>
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
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          breakpoints={{
            780: {
              slidesPerView: 3,
              spaceBetween: 30,
              slidesPerGroup: 3,
            },
            540: {
              slidesPerView: 2,
              spaceBetween: 20,
              slidesPerGroup: 2,
            },
          }}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={`${slide.title}--${index}`}>
              <SliderCard {...slide} />
            </SwiperSlide>
          ))}
        </Swiper>
        <SliderControls>
          <Button id="prev" variant="outlined" sx={styledNavigation}>
            <NavigateBeforeOutlinedIcon sx={{ fontSize: '30px', color: '#000000' }} />
          </Button>
          <SwiperPagination id="swiper-pagination"></SwiperPagination>
          <Button id="next" variant="outlined" sx={styledNavigation}>
            <NavigateNextOutlinedIcon sx={{ fontSize: '30px', color: '#000000' }} />
          </Button>
        </SliderControls>
      </SliderContainer>
    </div>
  );
};
