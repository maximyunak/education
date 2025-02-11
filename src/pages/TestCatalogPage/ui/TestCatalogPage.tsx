import { Modal, styled } from '@mui/material';
import { Container } from 'app/layout';
import { SearchFilter } from 'features/SearchFilter';
import { StyledButton, Title, useAppSelector } from 'shared/lib';

import { MoreButton, Section, TestsContainer } from './TestCatalog.styles';
import { TestPreview } from 'widgets/TestPreview';
import { TestPreviewType } from 'entities/TestPreview/model/TestPreviewType';
import { CreateTestModal } from 'features/CreateTest';
import React, { useState } from 'react';
import { fetchTest, tests } from 'entities/Tests';
import { useGetTestsQuery } from 'entities/Tests/api/testsApi';

// const tests: TestPreviewType[] = [
//   {
//     id: 1,
//     category: 'Педагогика',
//     time: 30,
//     questions: 20,
//     title:
//       'Тест охватывает базовые концепции JavaScript, включая переменные, типы данных, функции и циклы.',
//     author: 'Иван Иванов',
//   },
//   {
//     id: 2,
//     category: 'Педагогика',
//     time: 45,
//     questions: 25,
//     title:
//       'Этот тест предназначен для тех, кто уже знаком с основами JavaScript и хочет углубить свои знания в замыканиях, промисах и асинхронности.',
//     author: 'Алексей Петров',
//   },
//   {
//     id: 3,
//     category: 'Педагогика',
//     time: 60,
//     questions: 30,
//     title: 'Тест по основам библиотеки React, включая JSX, компоненты, состояние и пропсы.',
//     author: 'Мария Сидорова',
//   },
//   {
//     id: 4,
//     category: 'Педагогика',
//     time: 50,
//     questions: 22,
//     title:
//       'Тест по основам создания серверных приложений с использованием Node.js и фреймворка Express.',
//     author: 'Дмитрий Кузнецов',
//   },
//   {
//     id: 5,
//     category: 'Педагогика',
//     time: 40,
//     questions: 18,
//     title: 'Тест охватывает основные концепции баз данных и язык запросов SQL.',
//     author: 'Ольга Васильева',
//   },
//   {
//     id: 6,
//     category: 'Педагогика',
//     time: 40,
//     questions: 18,
//     title: 'Тест охватывает основные концепции баз данных и язык запросов SQL.',
//     author: 'Ольга Васильева',
//   },
// ];

export const TestCatalogPage = () => {
  const data = useAppSelector((state) => state.SearchFilter);

  const [open, setOpen] = useState(false);
  const [limit, setLimit] = React.useState(10);
  const [page, setPage] = React.useState(1);
  const { testsData, isLoading, error } = useGetTestsQuery({
    limit,
    page,
  });
  console.log('🚀 ~ TestCatalogPage ~ isLoading:', isLoading);
  console.log('🚀 ~ TestCatalogPage ~ error:', error);
  console.log('🚀 ~ TestCatalogPage ~ testsData:', testsData);

  // const fetchTests = async () => {
  //   const items = await fetchTest({
  //     limit,
  //     page,
  //   });
  //   return items;
  // };

  // const items = fetchTests();

  return (
    <div>
      <Section>
        <Container>
          <Title>Каталог тестов</Title>
          <SearchFilter />
          {
            <TestsContainer>
              {/* {tests.items.map((el, id) => (
                <TestPreview key={`${el.id}__${id}`} {...el} />
              ))} */}
              {/* {tests.items ? tests.items.map((el) => <>{el.title}</>) : <div>loading...</div>} */}
            </TestsContainer>
          }
        </Container>
      </Section>
      <Modal open={open} onClose={() => setOpen(false)}>
        <CreateTestModal onClick={() => setOpen(false)} />
      </Modal>
      <Container>
        <MoreButton>
          <StyledButton maxWidth="180px">Загрузить еще 10</StyledButton>
          <StyledButton maxWidth="180px" onClick={() => setOpen(true)}>
            Создать тест
          </StyledButton>
        </MoreButton>
      </Container>
    </div>
  );
};
