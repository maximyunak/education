import { FC } from 'react';
import {
  ExampleCourseCardContainer,
  ExampleCourseImage,
  ExampleTextInfo,
  MobileButton,
} from './ExampleCourseCard.styles';
import { PlayIcon, StyledButton, Text16, Text36 } from 'shared/lib';

interface ExampleCourseCardProps {
  title: string;
  description: string;
  image?: string;
}

const ImageContainer = styled('div')`
  position: relative;
`;

import exampleCourseImage from '../exampleCourse.png';
import { styled } from '@mui/material';

export const ExampleCourseCard: FC<ExampleCourseCardProps> = ({ title, description, image }) => {
  return (
    <ExampleCourseCardContainer>
      <ExampleTextInfo>
        <Text16>{title}</Text16>
        <Text36>{description}</Text36>
        <StyledButton maxWidth="180px">Смотреть все</StyledButton>
      </ExampleTextInfo>
      <ImageContainer>
        <ExampleCourseImage src={image || exampleCourseImage} alt="" />
        <PlayIcon />
      </ImageContainer>
      <MobileButton>
        <StyledButton maxWidth="180px">Смотреть все</StyledButton>
      </MobileButton>
    </ExampleCourseCardContainer>
  );
};
