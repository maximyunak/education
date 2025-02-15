import React from 'react';
import {
  AuthorContainer,
  DescContainer,
  SortedInfo,
  TestInfo,
  TestPreviewContainer,
} from './TestPreview.styles';
import { Text12, Text16, Text17, Text20Bold, TextGray } from 'shared/lib';

import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { useGetThemesQuery } from 'entities/Themes';
import { TestPreviewType } from 'entities/Tests';

export const TestPreview = ({
  id,
  title,
  duration,
  popularity_count,
  updated_at,
  questions_count,
  theme_id,
  author,
  description,
}: TestPreviewType) => {
  const { data: themesData, isLoading, error } = useGetThemesQuery();

  const currentTheme = themesData?.items.find((el) => el.id === theme_id);

  const date = new Date(updated_at);
  const year = date.getFullYear().toString().slice(-2); // Последние 2 цифры года
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Месяц с ведущим нулем
  const day = String(date.getDate()).padStart(2, '0'); // День с ведущим нулем

  return (
    <TestPreviewContainer>
      <TestInfo>
        <Text12>{currentTheme?.name}</Text12>
        <div className="info">
          <div className="duration">
            <AccessTimeIcon
              sx={{
                fontSize: 16,
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
        <div>
          <Text12>{description}</Text12>
        </div>
      </DescContainer>
      <AuthorContainer>
        <Text12>{author || 'автор'}</Text12>
      </AuthorContainer>
      <TextGray>
        <SortedInfo>
          <Text12>Прохождений - {popularity_count}</Text12>
          <Text12>{`${day}.${month}.${year}`}</Text12>
        </SortedInfo>
      </TextGray>
    </TestPreviewContainer>
  );
};
