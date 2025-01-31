import React, { useState } from 'react';
import {
  ButtonsBlock,
  CloseIconContainer,
  DescriptionContainer,
  InputTitle,
  InputsBlock,
  ModalContainer,
} from './CreateTestModal.styles';

import DeleteIcon from '@mui/icons-material/Delete';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CloseIcon from '@mui/icons-material/Close';
import { Input } from '@mui/material';
import { StyledButton } from 'shared/lib';

export const CreateTestModal = React.forwardRef<HTMLDivElement, { onClick: () => void }>(
  ({ onClick }, modalRef) => {
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value, name } = e.target;
      switch (name) {
        case 'title':
          setTitle(value);
          break;
        case 'desc':
          setDesc(value);
          break;
      }
    };

    return (
      <ModalContainer>
        <CloseIconContainer>
          <CloseIcon onClick={onClick} />
        </CloseIconContainer>
        <DescriptionContainer>
          <InputsBlock>
            <InputTitle
              value={title}
              name="title"
              onChange={handleChange}
              placeholder="Введите название теста"
            />
            <Input
              name="desc"
              value={desc}
              onChange={handleChange}
              fullWidth
              placeholder="Описание теста"
            />
          </InputsBlock>
          <ButtonsBlock>
            <StyledButton variant="outlined" maxWidth="160px">
              Предпросмотр
            </StyledButton>
            <StyledButton maxWidth="160px">Дальше</StyledButton>
          </ButtonsBlock>
        </DescriptionContainer>
      </ModalContainer>
    );
  },
);
