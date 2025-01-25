import { styled } from '@mui/material';
import { Container } from 'app/layout';
import React from 'react';
import { Title } from 'shared/lib';
import { VideoFilter } from 'features/VideoFilter';

export const Section = styled('section')`
  padding: 80px 0;
  &.bg-blue {
    background-color: #f6f8f9;
  }
  @media (max-width: 1180px) {
    padding: 80px 0;
  }
  @media (max-width: 800px) {
    padding: 60px 0;
  }
  @media (max-width: 620px) {
    padding: 40px 0;
  }
`;

export const VideoCatalogPage = () => {
  return (
    <div>
      <Section>
        <Container>
          <Title>Каталог видеолекций</Title>
          <VideoFilter />
        </Container>
      </Section>
    </div>
  );
};
