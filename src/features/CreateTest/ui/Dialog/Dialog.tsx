import React from 'react';
import { Dialog, Button } from '@mui/material';
import { DialogContainer } from './Dialog.styles';
import { Text16, Title, useAppDispatch, useAppSelector } from 'shared/lib';
import { clearSlice } from 'features/CreateTest/model/CreateTestSlice';
import { TestStatus, useCreateTestMutation } from 'entities/Tests';

interface DialogCreateTestProps {
  showCloseDialog: boolean;
  setShowCloseDialog: (show: boolean) => void;
  handleClose: () => void;
  handleContinueEditing: () => void;
}

export const DialogCreateTest = ({
  showCloseDialog,
  setShowCloseDialog,
  handleClose,
  handleContinueEditing,
}: DialogCreateTestProps) => {
  const dispatch = useAppDispatch();
  const [createTest] = useCreateTestMutation();
  const data = useAppSelector((state) => state.createTest);

  const handleSaveAsDraft = async () => {
    try {
      await createTest({ ...data, status: TestStatus.DRAFT });
      dispatch(clearSlice());
      // handleClose();
    } catch (error) {
      console.log(error);
    }
  };
  return (
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
        <Button onClick={handleContinueEditing} color="primary" variant="contained" sx={{ py: 1 }}>
          <Text16>Продолжить редактирование</Text16>
        </Button>
      </DialogContainer>
    </Dialog>
  );
};
