import { Container } from 'app/layout';
import { StyledButton, Title } from 'shared/lib';
import { VideoPreview } from 'widgets/VideoPreview';
import { videos } from '../consts/consts';
import { Section, VideosContainer, MoreButton } from './VideoCatalog.styles';
import { SearchFilter } from 'features/SearchFilter';
import { useState } from 'react';

export const VideoCatalogPage = () => {
  const [state, setstate] = useState('');
  
  return (
    <div>
      <Section>
        <Container>
          <Title>Каталог видеолекций</Title>
          <SearchFilter />
          <VideosContainer>
            {videos.map((el, id) => (
              <VideoPreview key={`${el.views}_${id}`} {...el} />
            ))}
          </VideosContainer>
        </Container>
      </Section>
      <Container>
        <MoreButton>
          <StyledButton maxWidth="180px">Загрузить еще 10</StyledButton>
        </MoreButton>
      </Container>
    </div>
  );
};
