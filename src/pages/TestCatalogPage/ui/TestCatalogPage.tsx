import { Modal, styled } from '@mui/material';
import { Container } from 'app/layout';
import { SearchFilter } from 'features/SearchFilter';
import { StyledButton, Title, useAppSelector } from 'shared/lib';

import { FlexCenter, Section, TestsContainer } from './TestCatalog.styles';
import { TestPreview } from 'widgets/TestPreview';
import { CreateTestModal } from 'features/CreateTest';
import React, { useState } from 'react';
import { useGetTestsQuery } from 'entities/Tests';
// import { useGetThemesQuery } from 'entities/Themes';
import { Loader } from 'shared/lib/ui/Loader';
import { NotFound } from 'shared/lib/ui/NotFound';

export const TestCatalogPage = () => {
  // ! filter data
  const { sortingMode, filterThema, filterText } = useAppSelector((state) => state.SearchFilter);
  const [open, setOpen] = useState(false);
  const [limit, setLimit] = React.useState(9);
  const [page, setPage] = React.useState(1);

  // ! tests data
  const {
    data: testsData,
    isLoading,
    error,
    isFetching,
  } = useGetTestsQuery({
    limit,
    page,
    sort_by: sortingMode,
    theme_ids: filterThema,
    search: filterText,
  });

  return (
    <div>
      <Section>
        <Container>
          <Title>Каталог тестов</Title>
          <SearchFilter />
          {testsData && !error && (
            <>
              <TestsContainer>
                {testsData.items.map((el, index) => (
                  <TestPreview key={`${el.id}__${index}`} {...el} />
                ))}
              </TestsContainer>
              <FlexCenter>
                <StyledButton marginTop="50px" maxWidth="180px" onClick={() => setPage(page + 1)}>
                  Загрузить еще 10
                </StyledButton>
              </FlexCenter>
            </>
          )}
          {(isLoading || isFetching) && <Loader />}
          {error && (
            <FlexCenter>
              <NotFound />
              <Title>Произошла ошибка</Title>
            </FlexCenter>
          )}
        </Container>
      </Section>
      <Modal open={open} onClose={() => setOpen(false)}>
        <CreateTestModal onClick={() => setOpen(false)} />
      </Modal>
      <StyledButton maxWidth="180px" onClick={() => setOpen(true)}>
        Создать тест
      </StyledButton>
    </div>
  );
};
