import { Modal } from '@mui/material';
import { Container } from 'app/layout';
import { SearchFilter } from 'features/SearchFilter';
import { StyledButton, Title, useAppSelector } from 'shared/lib';

import { FlexCenter, Section, TestsContainer } from './TestCatalog.styles';
import { TestPreview } from 'widgets/TestPreview';
import { CreateTestModal } from 'features/CreateTest';
import React, { useState } from 'react';
import { TestType, useGetTestsQuery } from 'entities/Tests';
import { Loader } from 'shared/lib/ui/Loader';
import { NotFound } from 'shared/lib/ui/NotFound';

export const TestCatalogPage = () => {
  // ! filter data
  const { sortingMode, filterThema, filterText } = useAppSelector((state) => state.SearchFilter);
  const [open, setOpen] = useState(false);
  const [limit, setLimit] = React.useState(9);
  const [page, setPage] = React.useState(1);

  const [allTests, setAllTests] = useState<TestType[]>([]);

  // ! tests data
  const {
    data: testsData,
    isLoading,
    error,
    isFetching,
  } = useGetTestsQuery({
    limit,
    skip: (page - 1) * limit,
    sort_by: sortingMode,
    theme_ids: filterThema,
    search: filterText,
  });
  console.log('🚀 ~ TestCatalogPage ~ isFetching:', isFetching);
  console.log('🚀 ~ TestCatalogPage ~ testsData:', testsData);

  React.useEffect(() => {
    if (!testsData?.items) {
      return;
    }
    if (page !== 1) {
      setAllTests((prevTests) => [...prevTests, ...testsData.items].slice(0, limit * page));
    } else {
      setAllTests(testsData.items);
    }
  }, [testsData?.items]);

  return (
    <div>
      <Section>
        <Container>
          <Title>Каталог тестов</Title>
          <SearchFilter />
          {testsData?.items && testsData.items.length > 0 && !error ? (
            <>
              <TestsContainer>
                {allTests.map((el, index) => (
                  <TestPreview key={`${el.id}__${index}`} {...el} />
                ))}
              </TestsContainer>

              {!isFetching && !isLoading && page !== Math.ceil(testsData?.total / limit) && (
                <FlexCenter>
                  <StyledButton marginTop="50px" maxWidth="180px" onClick={() => setPage(page + 1)}>
                    Загрузить еще 10
                  </StyledButton>
                </FlexCenter>
              )}
            </>
          ) : (
            <Title>Ничего не найдено</Title>
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
