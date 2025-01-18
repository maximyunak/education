import React from 'react';
import { Link } from 'react-router-dom';

import { Text16Bold, Text16, Text12 } from 'shared/lib';
import {
  FooterContainer,
  ListBlockContainer,
  ContactsContainer,
  ListBlock,
  SocialIconsContainer,
  ContactItem,
  FooterLine,
} from './Footer.styles';

import { Logo } from 'shared/assets';
// import Logo from './';

import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailIcon from '@mui/icons-material/Mail';

import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { vkDarkIcon } from 'shared/assets';

export const Footer = () => {
  return (
    <>
      <FooterLine />
      <FooterContainer>
        <ListBlockContainer>
          <ListBlock>
            <Text16Bold>Об организации</Text16Bold>
            <Link to="/about">
              <Text16>Об УДПО</Text16>
            </Link>
            <Link to="/management">
              <Text16>Руководство</Text16>
            </Link>
            <Link to="/documents">
              <Text16>Нормативные документы</Text16>
            </Link>
            <Link to="/teachers">
              <Text16>Преподаватели</Text16>
            </Link>
            <Link to="/education">
              <Text16>Образование</Text16>
            </Link>
            <Link to="/paid-services">
              <Text16>Платные услуги</Text16>
            </Link>
            <Link to="/vacancies">
              <Text16>Вакансии</Text16>
            </Link>
          </ListBlock>
          <ListBlock>
            <Text16Bold>Обучение</Text16Bold>
            <Link to="/courses">
              <Text16>Курсы</Text16>
            </Link>
            <Link to="/video">
              <Text16>Видеолекции</Text16>
            </Link>
            <Link to="/tests">
              <Text16>Тесты</Text16>
            </Link>
            <Link to="/low-price">
              <Text16>Low Price</Text16>
            </Link>
          </ListBlock>
          <ListBlock>
            <Text16Bold>Медиа</Text16Bold>
            <Link to="/blog">
              <Text16>Блог</Text16>
            </Link>
            <Link to="/faq">
              <Text16>Вопросы и ответы</Text16>
            </Link>
          </ListBlock>
          <ListBlock>
            <Text16Bold>Об организации</Text16Bold>
            <Link to="/about">
              <Text16>Об УДПО</Text16>
            </Link>
            <Link to="/management">
              <Text16>Руководство</Text16>
            </Link>
            <Link to="/documents">
              <Text16>Нормативные документы</Text16>
            </Link>
            <Link to="/teachers">
              <Text16>Преподаватели</Text16>
            </Link>
            <Link to="/education">
              <Text16>Образование</Text16>
            </Link>
            <Link to="/paid-services">
              <Text16>Платные услуги</Text16>
            </Link>
            <Link to="/vacancies">
              <Text16>Вакансии</Text16>
            </Link>
          </ListBlock>
        </ListBlockContainer>
        <ContactsContainer>
          <SocialIconsContainer>
            <img src={vkDarkIcon} alt="vk" />
            <InstagramIcon />
            <TelegramIcon />
            <WhatsAppIcon />
            <FacebookIcon />
            <LinkedInIcon />
          </SocialIconsContainer>
          <ContactItem>
            <div>
              <LocalPhoneIcon />
              <Text16Bold>+7 (999) 999-99-99</Text16Bold>
            </div>
            <Text12>Пн-Пт, 8:00-17:00 по МСК</Text12>
          </ContactItem>
          <ContactItem>
            <div>
              <MailIcon />
              <Text16Bold>info@udpo.ru</Text16Bold>
            </div>
            <Text12>Круглосуточно, для подачи документов</Text12>
          </ContactItem>
          <img src={Logo} alt="logo" />
        </ContactsContainer>
      </FooterContainer>
    </>
  );
};
