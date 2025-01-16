import { FC } from 'react';
import { Text20Bold } from 'shared/lib/ui/Text';
import { ProfileBlock, SliderCardContainer } from './SliderCard.style';

import VisibilityIcon from '@mui/icons-material/Visibility';

interface ISliderCard {
  image: string;
  title: string;
  avatar: string;
  name: string;
  date: string;
  views: string;
  id: string;
}

export const SliderCard: FC<ISliderCard> = ({ title, image, avatar, name, date, views, id }) => {
  return (
    <SliderCardContainer to={`/blog/${id}`}>
      <img src={image} alt={title} />
      <Text20Bold>{title}</Text20Bold>
      <ProfileBlock>
        <img src={avatar} alt={name} className="avatar" />
        <div className="profile-info">
          <h1>{name}</h1>
          <div className="profile-info-bottom">
            <p>{date}</p>
            <div className="profile-views">
              <VisibilityIcon sx={{ width: '14px' }} />
              <p>{views}</p>
            </div>
          </div>
        </div>
      </ProfileBlock>
    </SliderCardContainer>
  );
};
