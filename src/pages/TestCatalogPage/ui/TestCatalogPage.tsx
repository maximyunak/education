import { Modal, styled } from '@mui/material';
import { Container } from 'app/layout';
import { SearchFilter } from 'features/SearchFilter';
import { StyledButton, Title, useAppSelector } from 'shared/lib';

import { MoreButton, Section, TestsContainer } from './TestCatalog.styles';
import { TestPreview } from 'widgets/TestPreview';
import { TestPreviewType } from 'entities/TestPreview/model/TestPreviewType';
import { CreateTestModal } from 'features/CreateTest';
import React, { useState } from 'react';
import { useGetTestsQuery } from 'entities/Tests/api/testsApi';
import { useGetThemesQuery } from 'entities/Themes/themesApi';

export const TestCatalogPage = () => {
  const data = useAppSelector((state) => state.SearchFilter);

  const [open, setOpen] = useState(false);
  const [limit, setLimit] = React.useState(10);
  const [page, setPage] = React.useState(1);
  console.log('🚀 ~ TestCatalogPage ~ page:', page);
  const {
    data: testsData,
    isLoading,
    error,
  } = useGetTestsQuery({
    limit,
    page,
  });

  const { data: themesData } = useGetThemesQuery();

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
          <StyledButton maxWidth="180px" onClick={() => setPage(page + 1)}>
            Загрузить еще 10
          </StyledButton>
          <StyledButton maxWidth="180px" onClick={() => setOpen(true)}>
            Создать тест
          </StyledButton>
        </MoreButton>
      </Container>
    </div>
  );
};
