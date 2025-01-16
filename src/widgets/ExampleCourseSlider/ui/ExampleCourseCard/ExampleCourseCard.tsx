import { FC } from 'react';
import {
  ExampleCourseCardContainer,
  ExampleCourseImage,
  ExampleTextInfo,
  MobileButton,
} from './ExampleCourseCard.styles';
import { StyledButton, Text16, Text36 } from 'shared/lib';

interface ExampleCourseCardProps {
  title: string;
  description: string;
  image?: string;
}

import exampleCourseImage from '../exampleCourse.png';

export const ExampleCourseCard: FC<ExampleCourseCardProps> = ({ title, description, image }) => {
  return (
    <ExampleCourseCardContainer>
      <ExampleTextInfo>
        <Text16>{title}</Text16>
        <Text36>{description}</Text36>
        <StyledButton maxWidth="180px">Смотреть все</StyledButton>
      </ExampleTextInfo>
      <ExampleCourseImage src={image || exampleCourseImage} alt="" />
      <MobileButton>
        <StyledButton maxWidth="180px">Смотреть все</StyledButton>
      </MobileButton>
    </ExampleCourseCardContainer>
  );
};
