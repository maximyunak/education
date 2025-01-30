import { styled } from '@mui/material';
import { Container } from 'app/layout';
import { VideoFilter } from 'features/SearchFilter';
import React from 'react';
import { Title } from 'shared/lib';
import { Section } from './TestCatalog.styles';
import { TestPreview } from 'widgets/TestPreview';

const exampleTests = [
  {
    title: 'Основы JavaScript',
    time: 30,
    questions: 20,
    desc: 'Тест охватывает базовые концепции JavaScript, включая переменные, типы данных, функции и циклы.',
    autor: 'Иван Иванов',
  },
  {
    title: 'Продвинутый JavaScript',
    time: 45,
    questions: 25,
    desc: 'Этот тест предназначен для тех, кто уже знаком с основами JavaScript и хочет углубить свои знания в замыканиях, промисах и асинхронности.',
    autor: 'Алексей Петров',
  },
  {
    title: 'React для начинающих',
    time: 60,
    questions: 30,
    desc: 'Тест по основам библиотеки React, включая JSX, компоненты, состояние и пропсы.',
    autor: 'Мария Сидорова',
  },
  {
    title: 'Node.js и Express',
    time: 50,
    questions: 22,
    desc: 'Тест по основам создания серверных приложений с использованием Node.js и фреймворка Express.',
    autor: 'Дмитрий Кузнецов',
  },
  {
    title: 'Базы данных и SQL',
    time: 40,
    questions: 18,
    desc: 'Тест охватывает основные концепции баз данных и язык запросов SQL.',
    autor: 'Ольга Васильева',
  },
];

export const TestCatalogPage = () => {
  return (
    <div>
      <Section>
        <Container>
          <Title>Каталог тестов</Title>
          <VideoFilter />
          {exampleTests.map((el) => (
            <TestPreview />
          ))}
        </Container>
      </Section>
    </div>
  );
};
