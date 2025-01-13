import React from 'react';
import { AdwantageItem, AdwantagesContainer } from './Adwantages.styles';

import {
  clockIcon,
  contactIcon,
  deliveryIcon,
  hatIcon,
  paymentIcon,
  testIcon,
} from 'shared/assets';

const cards = [
  {
    title: 'Онлайн-обучение',
    description:
      'Учитесь в любое удобное время. Получайте знания находясь дома, на работе или в поездке. Система обучения открыта 24/7.',
    image: hatIcon,
  },
  {
    title: 'Рассрочка и онлайн оплата',
    description:
      'Оплачивайте в рассрочку через онлайн банк или карточкой прямо на нашем сайте. Это просто и безопасно.',
    image: paymentIcon,
  },
  {
    title: 'Сами подготовим все документы',
    description:
      'Мы подготовим документы самостоятельно. Вам нужно будет только подписать и отправить обратно в приложенном конверте.',
    image: testIcon,
  },
  {
    title: 'Доставка документов',
    description:
      'Бесплатно отправим документы посредством ФГУП "Почта России" до ближайшего отделения либо закажите курьерскую доставку.',
    image: deliveryIcon,
  },
  {
    title: 'Ускоренное обучение',
    description:
      'Если диплом нужен срочно, возможно обучение по ускоренной интенсивной программе. Сокращение срока обучения вдвое.',
    image: clockIcon,
  },
  {
    title: 'Общайтесь как Вам удобно',
    description:
      'Пишите нам в социальные сети, мессенджеры, чат на сайте или позвоните по телефону. Вам доступны различные каналы связи.',
    image: contactIcon,
  },
];

const Adwantage = ({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: string;
}) => {
  return (
    <AdwantageItem>
      <img src={image} alt="advantage" />
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </AdwantageItem>
  );
};

export const Adwantages = () => {
  return (
    <AdwantagesContainer>
      {cards.map((card) => (
        <Adwantage key={card.title} {...card} />
      ))}
    </AdwantagesContainer>
  );
};
