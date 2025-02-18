import React from 'react';
import { CloseIconContainer, ModalContainer } from './CreateTestModal.styles';

import CloseIcon from '@mui/icons-material/Close';
import { useAppDispatch, useAppSelector } from 'shared/lib';
import { setField } from '../../model/CreateTestSlice';

import { SecondStep } from './steps/SecondStep';
import { FirstStep } from './steps/FirstStep';

interface CreateTestModalProps {
  onClick: () => void;
  onClose: () => void;
}

export const CreateTestModal = React.forwardRef<HTMLDivElement, CreateTestModalProps>(
  ({ onClick, onClose }, modalRef) => {
    const data = useAppSelector((state) => state.createTest);
    const dispatch = useAppDispatch();

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
          <FirstStep handleChangePage={handleChangePage} />
        ) : (
          <SecondStep data={data} onClose={onClose} handleChangePage={handleChangePage} />
        )}
      </ModalContainer>
    );
  },
);
