import { Avatar, Drawer, useMediaQuery } from '@mui/material';
import { Link } from 'react-router-dom';
import { Logo } from 'shared/assets/images';
import {
  HeaderContainer,
  HeaderContent,
  ProfileBlock,
  NavBlock,
  LogoBlock,
  ProfileContainer,
  Text,
  PhoneBlock,
  HeaderBase,
  Menu,
} from './Header.styles';
import { Button } from '@mui/material';

import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PhoneIcon from '@mui/icons-material/Phone';

import ExAva from './exAva.png';
import { useState } from 'react';

const HeaderUi = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <LogoBlock>
          <img src={Logo} alt="logo" />
          <Link to="/courses">
            <Button sx={{ textTransform: 'none' }} variant="outlined">
              Все курсы
            </Button>
          </Link>
        </LogoBlock>
        <NavBlock>
          <Link to="/video-lectures">
            <Text>Видеолекции</Text>
          </Link>
          <Link to="/tests">
            <Text>Тесты</Text>
          </Link>
          <Link to="/low-price">
            <Text>Low price</Text>
          </Link>
          <Link to="/blog">
            <Text>Блог</Text>
          </Link>
          <Link to="/about">
            <Text>Об организации</Text>
          </Link>
        </NavBlock>
      </HeaderContent>
      <ProfileContainer>
        <PhoneBlock>
          <PhoneIcon />
          <Text>+7 (999) 999-99-99</Text>
        </PhoneBlock>
        <NotificationsNoneOutlinedIcon
          sx={{ marginRight: 1, '@media (max-width: 970px)': { display: 'none' } }}
        />
        <ProfileBlock>
          <Avatar alt="avatar" src={ExAva} />
          <Text>Федоров Сергей</Text>
          <KeyboardArrowDownIcon />
        </ProfileBlock>
      </ProfileContainer>
    </HeaderContainer>
  );
};

export const Header = () => {
  const [open, setOpen] = useState(false);
  const width = useMediaQuery('(max-width: 970px)');

  return (
    <div>
      {width ? (
        <HeaderBase>
          <img src={Logo} alt="logo" />
          {/* <MenuIcon onClick={() => setOpen(true)} /> */}
          <Menu className={open ? 'open' : ''} onClick={() => setOpen(true)}>
            <span />
            <span />
            <span />
          </Menu>
        </HeaderBase>
      ) : (
        <HeaderUi />
      )}

      <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
        <HeaderUi />
      </Drawer>
    </div>
  );
};
{
  /* <Drawer anchor="top" open={open} onClose={() => setOpen(false)}>
  <p>Hello</p>
</Drawer> */
}