import { FC } from 'react';

import {
  SliderCardContainer,
  ImageContainer,
  InfoContainer,
  Subtitle,
  Title,
  ListContainer,
  ListItem,
} from './SliderCard.styles';

interface SliderCardProps {
  image: string;
  title: string;
  subtitle: string;
  list: string[];
}

export const SliderCard: FC<SliderCardProps> = ({ image, title, subtitle, list }) => {
  return (
    <SliderCardContainer>

      <ImageContainer>
        <img src={image} alt="Course cover" />
      </ImageContainer>

      <InfoContainer>
        <Subtitle>{subtitle}</Subtitle>
        <Title>{title}</Title>
        <ListContainer>
          {list.map((item, index) => (
            <ListItem key={`info-item--${index}`}>{item}</ListItem>
          ))}
        </ListContainer>
      </InfoContainer>

    </SliderCardContainer>
  );
};
