import { Checkbox } from '@mui/material';
import { AnswerType } from 'features/CreateTest/model/TestType';
import React from 'react';
import { StyledInput } from 'shared/lib';

export const AnswerBlock = ({ answerTitle, is_correct }: AnswerType) => {
  return (
    <div>
      <StyledInput
        startAdornment={<Checkbox sx={{ padding: 0, marginRight: 2 }} checked={is_correct} />}
        value={answerTitle}
        maxWidth={406}
        rounded={6}
      />
    </div>
  );
};
