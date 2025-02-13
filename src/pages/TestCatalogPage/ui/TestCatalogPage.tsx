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
  const { sortingMode, filterThema, filterText } = useAppSelector((state) => state.SearchFilter);

  const [open, setOpen] = useState(false);
  const [limit, setLimit] = React.useState(10);
  const [page, setPage] = React.useState(1);

  const {
    data: testsData,
    isLoading,
    error,
  } = useGetTestsQuery({
    limit,
    page,
    sort_by: sortingMode,
    theme_id: filterThema,
    search: filterText,
  });

  testsData?.items.forEach((el) => {
    console.log(el);
  });

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
                {testsData.items.map((el, index) => (
                  <TestPreview
                    key={`${el.id}__${index}`}
                    title={el.title}
                    id={el.id}
                    questions={el.questions.length}
                  />
                ))}
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
      <StyledButton maxWidth="180px" onClick={() => setOpen(true)}>
        Создать тест
      </StyledButton>
    </div>
  );
};
