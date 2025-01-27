import React, { FC } from 'react';
import {
  InfoContainer,
  PlayIcon,
  Preview,
  TimeContainer,
  VideoContainer,
} from './VideoPreview.styles';

import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Text12, Text20Bold, TextGray } from 'shared/lib';
import { Link } from 'react-router-dom';

interface IVideo {
  id: string;
  title: string;
  views: number;
  date: string;
  time: string;
  image?: string;
}

export const VideoPreview: FC<IVideo> = ({ title, views, date, time, image, id }) => {
  return (
    <VideoContainer>
      <Preview style={{ border: image ? 'none' : '2px solid #e5e5e5' }}>
        {image && <img src={image} />}

        <Link to={`/video-lecture/${id}`}>
          <PlayIcon>
            <PlayArrowIcon />
          </PlayIcon>
        </Link>
        <TimeContainer>
          <Text12>{time}</Text12>
        </TimeContainer>
      </Preview>
      <Text20Bold>{title}</Text20Bold>
      <InfoContainer>
        <Text12>
          <TextGray>{date}</TextGray>
        </Text12>
        <div>
          <VisibilityIcon sx={{ color: '#8f8f8f' }} />
          <Text12>
            <TextGray>{views}</TextGray>
          </Text12>
        </div>
      </InfoContainer>
    </VideoContainer>
  );
};
