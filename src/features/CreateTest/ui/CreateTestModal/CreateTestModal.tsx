import React, { useState } from 'react';
import { CloseIconContainer, ModalContainer } from './CreateTestModal.styles';

import CloseIcon from '@mui/icons-material/Close';
import { useAppDispatch, useAppSelector } from 'shared/lib';
import { setField } from '../../model/CreateTestSlice';

import { SecondStep } from './steps/SecondStep';
import { FirstStep } from './steps/FirstStep';

export const CreateTestModal = React.forwardRef<HTMLDivElement, { onClick: () => void }>(
  ({ onClick }, modalRef) => {
    // ! store
    const data = useAppSelector((state) => state.createTest);
    const dispatch = useAppDispatch();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value, name } = e.target;
      dispatch(setField({ name, value }));
    };

    const handleChangePage = (page: number) => {
      dispatch(
        setField({
          name: 'page',
          value: page,
        }),
      );
    };

    return (
      <ModalContainer ref={modalRef} tabIndex={-1}>
        <CloseIconContainer>
          <CloseIcon onClick={onClick} />
        </CloseIconContainer>
        {data.page === 1 ? (
          <FirstStep handleChange={handleChange} handleChangePage={handleChangePage} />
        ) : (
          <SecondStep
            data={data}
            handleChange={handleChange}
            onClose={onClick}
            handleChangePage={handleChangePage}
          />
        )}
      </ModalContainer>
    );
  },
);
