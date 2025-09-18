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
  AuthButtons,
} from './Header.styles';
import { Button } from '@mui/material';

import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PhoneIcon from '@mui/icons-material/Phone';

import ExAva from './exAva.png';
import { useState } from 'react';
import { useGetCurrentUserQuery } from 'entities/User';

const HeaderUi = ({ onClose }: { onClose?: () => void }) => {
  const { data: userData } = useGetCurrentUserQuery();
  console.log(userData);

  return (
    <HeaderContainer>
      <HeaderContent>
        <LogoBlock>
          <Link to="/">
            {/* <img src={Logo} alt="logo" /> */}
            logo
          </Link>
          <Link to="/courses">
            <Button sx={{ textTransform: 'none' }} variant="outlined">
              Все курсы
            </Button>
          </Link>
        </LogoBlock>
        <NavBlock onClick={onClose}>
          {/* <Link to="/video-lectures">
            <Text>Видеолекции</Text>
          </Link> */}
          <Link to="/test-catalog">
            <Text>Тесты</Text>
          </Link>
          {/* <Link to="/low-price">
            <Text>Low price</Text>
          </Link>
          <Link to="/blog">
            <Text>Блог</Text>
          </Link> */}
          {/* <Link to="/about">
            <Text>Об организации</Text>
          </Link> */}
        </NavBlock>
      </HeaderContent>
      <ProfileContainer>
        <PhoneBlock>
          <PhoneIcon />
          <Text>+7 (999) 999-99-99</Text>
        </PhoneBlock>
        <NotificationsNoneOutlinedIcon
          sx={{ marginRight: 2, marginLeft: 1, '@media (max-width: 1120px)': { display: 'none' } }}
        />
        {userData ? (
          <ProfileBlock>
            <Avatar alt="avatar" src={ExAva} />
            <Text>
              {userData.first_name} {userData.last_name}
            </Text>
            <KeyboardArrowDownIcon />
          </ProfileBlock>
        ) : (
          <AuthButtons>
            <Link to="/login">
              <Button variant="contained">Войти</Button>
            </Link>
            <Link to="/registration">
              <Button variant="outlined">Регистрация</Button>
            </Link>
          </AuthButtons>
        )}
      </ProfileContainer>
    </HeaderContainer>
  );
};

export const Header = () => {
  const [open, setOpen] = useState(false);
  const width = useMediaQuery('(max-width: 1120px)');

  return (
    <div>
      {width ? (
        <HeaderBase>
          <Link to="/">
            <img src={Logo} alt="logo" />
          </Link>
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
        <HeaderUi onClose={() => setOpen(false)} />
      </Drawer>
    </div>
  );
};
