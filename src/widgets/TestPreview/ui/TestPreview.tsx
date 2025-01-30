import { TestPreviewType } from 'entities/TestPreview/model/TestPreviewType';
import React from 'react';
import {
  AuthorContainer,
  DescContainer,
  TestInfo,
  TestPreviewContainer,
} from './TestPreview.styles';
import { Text12, Text17, Text20Bold } from 'shared/lib';

import AccessTimeIcon from '@mui/icons-material/AccessTime';

export const TestPreview = ({ id, title, time, questions, category, author }: TestPreviewType) => {
  return (
    <TestPreviewContainer>
      <TestInfo>
        <Text17>{category}</Text17>
        <div className="info">
          <div className="duration">
            <AccessTimeIcon
              sx={{
                '@media (max-width: 1000px)': {
                  fontSize: 14,
                },
              }}
            />
            <Text12>{time} мин.</Text12>
          </div>
          <Text12>{questions} вопроса</Text12>
        </div>
      </TestInfo>
      <DescContainer>
        <Text20Bold>{title}</Text20Bold>
      </DescContainer>
      <AuthorContainer>
        <Text12>{author}</Text12>
      </AuthorContainer>
    </TestPreviewContainer>
  );
};
