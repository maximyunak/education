import React from 'react';
import {
  AuthorContainer,
  DescContainer,
  TestInfo,
  TestPreviewContainer,
} from './TestPreview.styles';
import { Text12, Text17, Text20Bold } from 'shared/lib';

import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { useGetThemesQuery } from 'entities/Themes';

export const TestPreview = ({ title, duration, questions_count, theme_id, author }: any) => {
  const { data: themesData, isLoading, error } = useGetThemesQuery();

  const currentTheme = themesData?.items.find((el) => el.id === theme_id);

  return (
    <TestPreviewContainer>
      <TestInfo>
        <Text17>{currentTheme?.name}</Text17>
        <div className="info">
          <div className="duration">
            <AccessTimeIcon
              sx={{
                '@media (max-width: 1000px)': {
                  fontSize: 14,
                },
              }}
            />
            <Text12>{duration} мин.</Text12>
          </div>
          <Text12>{questions_count} вопроса</Text12>
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
