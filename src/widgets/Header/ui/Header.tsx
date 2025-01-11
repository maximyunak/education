import { Avatar, Drawer } from '@mui/material';
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
} from './Header.styles';
import { Button } from '@mui/material';

import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PhoneIcon from '@mui/icons-material/Phone';

import ExAva from './exAva.png';
import { useState } from 'react';

export const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <HeaderContainer>
      <HeaderContent>
        <LogoBlock>
          <img src={Logo} alt="logo" />
          <Link to="/courses">
            <Button sx={{ textTransform: 'none' }} variant="outlined" onClick={() => setOpen(true)}>
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
        <ProfileBlock>
          <NotificationsNoneOutlinedIcon sx={{ marginRight: 2 }} />
          <Avatar alt="avatar" src={ExAva} />
          <Text>Федоров Сергей</Text>
          <KeyboardArrowDownIcon />
        </ProfileBlock>
      </ProfileContainer>
    </HeaderContainer>
  );
};
{
  /* <Drawer anchor="top" open={open} onClose={() => setOpen(false)}>
  <p>Hello</p>
</Drawer> */
}
