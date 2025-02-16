import React from 'react';

export const Dialog = () => {
  return (
    <Dialog open={showCloseDialog} onClose={() => setShowCloseDialog(false)}>
      <Title>Сохранить тест?</Title>
      <DialogContent>
        Вы хотите сохранить тест в черновиках или продолжить редактирование?
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => {
            setShowCloseDialog(false);
            setOpen(false);
          }}
          color="error"
        >
          Не сохранять
        </Button>
        <Button
          onClick={() => {
            // Здесь добавьте логику сохранения в черновики
            setShowCloseDialog(false);
            setOpen(false);
          }}
          color="primary"
        >
          Сохранить в черновики
        </Button>
        <Button onClick={() => setShowCloseDialog(false)} color="primary" variant="contained">
          Продолжить редактирование
        </Button>
      </DialogActions>
    </Dialog>
  );
};
