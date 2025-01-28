import { Container } from 'app/layout';
import { StyledButton, Title } from 'shared/lib';
import { VideoFilter } from 'features/VideoFilter';
import { VideoPreview } from 'widgets/VideoPreview';
import { videos } from '../consts/consts';
import { Section, VideosContainer, MoreButton } from './VideoCatalog.styles';
import { Dialog, Modal } from '@mui/material';
import { CreateVideoModal } from 'features/CreateVideo';
import { useRef, useState } from 'react';

export const VideoCatalogPage = () => {
  const [open, setOpen] = useState(true);

  const modalRef = useRef<HTMLDivElement>(null);

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
          <StyledButton maxWidth="250px" onClick={() => setOpen(true)}>
            Создать видеолекцию
          </StyledButton>
        </MoreButton>
      </Container>
      <Modal open={open} onClose={() => setOpen(false)}>
        <CreateVideoModal onClick={() => setOpen(false)} />
      </Modal>
    </div>
  );
};
