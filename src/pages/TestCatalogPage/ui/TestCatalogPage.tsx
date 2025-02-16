import { Modal, Dialog, DialogContent, DialogActions, Button } from '@mui/material';
import { Container } from 'app/layout';
import { SearchFilter } from 'features/SearchFilter';
import { StyledButton, Text16, Title, useAppSelector } from 'shared/lib';

import { DialogContainer, FlexCenter, Section, TestsContainer } from './TestCatalog.styles';
import { TestPreview } from 'widgets/TestPreview';
import { CreateTestModal } from 'features/CreateTest';
import React, { useState } from 'react';
import { TestPreviewType, useGetTestsQuery } from 'entities/Tests';
import { Loader } from 'shared/lib/ui/Loader';
import { NotFound } from 'shared/lib/ui/NotFound';
import { ScrollTop } from 'widgets/ScrollTop';

export const TestCatalogPage = () => {
  // ! filter data
  const { sortingMode, filterThema, filterText } = useAppSelector((state) => state.SearchFilter);
  const [open, setOpen] = useState(false);
  const [limit] = React.useState(9);
  const [page, setPage] = React.useState(1);

  const [showCloseDialog, setShowCloseDialog] = useState(false);

  const [allTests, setAllTests] = useState<TestPreviewType[]>([]);

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

  React.useEffect(() => {
    if (!testsData?.items) {
      return;
    }
    if (page !== 1) {
      setAllTests((prevTests) => [...prevTests, ...testsData.items].slice(0, limit * page));
    } else {
      setAllTests(testsData.items);
    }
  }, [page, testsData?.items, limit]);

  const handleClose = () => {
    setOpen(false);
    setShowCloseDialog(false);
  };

  const handleContinueEditing = () => {
    setShowCloseDialog(false);
  };

  const handleSaveAsDraft = () => {
    setShowCloseDialog(false);
    setOpen(false);
  };

  const handleCloseAttempt = () => {
    setShowCloseDialog(true);
  };

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
      <Modal
        open={open}
        onClose={(event, reason) => {
          if (reason === 'backdropClick' || reason === 'escapeKeyDown') {
            setShowCloseDialog(true);
          }
        }}
      >
        <CreateTestModal onClick={handleCloseAttempt} />
      </Modal>

      <Dialog
        open={showCloseDialog}
        onClose={() => setShowCloseDialog(false)}
        sx={{
          '@media (max-width: 540px)': {
            width: '100%',
            margin: 0,
            maxWidth: '100%',
            '.MuiDialog-paper': {
              width: '100%',
              margin: 0,
              maxWidth: '100%',
            },
          },
        }}
      >
        <DialogContainer>
          <Title>Сохранить тест?</Title>
          <Text16>Вы хотите сохранить тест в черновиках или продолжить редактирование?</Text16>
          <div>
            <Button onClick={handleClose} color="error">
              Не сохранять
            </Button>
            <Button onClick={handleSaveAsDraft} color="primary">
              Сохранить в черновики
            </Button>
          </div>
          <Button
            onClick={handleContinueEditing}
            color="primary"
            variant="contained"
            sx={{ py: 1 }}
          >
            <Text16>Продолжить редактирование</Text16>
          </Button>
        </DialogContainer>
      </Dialog>

      <FlexCenter>
        <StyledButton maxWidth="180px" onClick={() => setOpen(true)}>
          Создать тест
        </StyledButton>
      </FlexCenter>
      <ScrollTop />
    </div>
  );
};
