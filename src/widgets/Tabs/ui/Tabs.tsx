import { Tab, Tabs } from '@mui/material';
import { FC } from 'react';

interface TabsProps {
  tabs: string[];
  selectedTab: number;
  handleTabChange: (event: React.SyntheticEvent, newValue: number) => void;
}

export const MyTabs: FC<TabsProps> = ({ tabs, selectedTab, handleTabChange }) => {
  return (
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
  );
};
