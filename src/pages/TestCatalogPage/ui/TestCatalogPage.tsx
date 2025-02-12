import { Modal, styled } from '@mui/material';
import { Container } from 'app/layout';
import { SearchFilter } from 'features/SearchFilter';
import { StyledButton, Title, useAppSelector } from 'shared/lib';

import { FlexCenter, Section, TestsContainer } from './TestCatalog.styles';
import { TestPreview } from 'widgets/TestPreview';
import { TestPreviewType } from 'entities/TestPreview/model/TestPreviewType';
import { CreateTestModal } from 'features/CreateTest';
import React, { useState } from 'react';
import { useGetTestsQuery } from 'entities/Tests/api/testsApi';
// import { useGetThemesQuery } from 'entities/Themes';
import { Loader } from 'shared/lib/ui/Loader';
import { NotFound } from 'shared/lib/ui/NotFound';
import { themesApi } from 'entities/Themes';

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
  console.log('🚀 ~ TestCatalogPage ~ error:', error);

  const { data: themesData } = themesApi.useGetThemesQuery();

  return (
    <div>
      <Section>
        <Container>
          <Title>Каталог тестов</Title>
          <SearchFilter />
          {isLoading && <Loader />}
          {error && (
            <FlexCenter>
              <NotFound />
              <Title>Произошла ошибка</Title>
            </FlexCenter>
          )}
          {testsData && !error && (
            <>
              <TestsContainer>
                <TestPreview id={1} title={'asd'} author="asasa" />
              </TestsContainer>
              <FlexCenter>
                <StyledButton marginTop="10px" maxWidth="180px" onClick={() => setPage(page + 1)}>
                  Загрузить еще 10
                </StyledButton>
              </FlexCenter>
            </>
          )}
          {/* {error && <Title>Произошла ошибка</Title>} */}
        </Container>
      </Section>
      <Modal open={open} onClose={() => setOpen(false)}>
        <CreateTestModal onClick={() => setOpen(false)} />
      </Modal>
      {/* <Container> */}
      {/* <StyledButton maxWidth="180px" onClick={() => setOpen(true)}>
            Создать тест
          </StyledButton> */}
      {/* </Container> */}
    </div>
  );
};
