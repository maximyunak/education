import { Container } from 'app/layout';
import { StyledButton, Title } from 'shared/lib';
import { VideoFilter } from 'features/SearchFilter';
import { VideoPreview } from 'widgets/VideoPreview';
import { videos } from '../consts/consts';
import { Section, VideosContainer, MoreButton } from './VideoCatalog.styles';

export const VideoCatalogPage = () => {
  return (
    <div>
      <Section>
        <Container>
          <Title>Каталог видеолекций</Title>
          <VideoFilter />
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
