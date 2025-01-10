import { FC } from 'react';
import {
  Slider,
  SliderCardInfo,
  SliderCardTitle,
  SliderCardDescription,
  SliderCardAcademicHours,
  SliderContent,
  SliderFooter,
} from './SliderCard.styles';

import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

interface SliderCardProps {
  image: string;
  title: string;
  description: string;
  academicHours: string;
}

export const SliderCard: FC<SliderCardProps> = ({ image, title, description, academicHours }) => {
  return (
    <Slider>
      <SliderContent>
        <img src={image} alt="" />
        <SliderCardInfo>
          <SliderCardTitle>{title}</SliderCardTitle>
          <SliderCardDescription>{description}</SliderCardDescription>
          <SliderFooter>
            <SliderCardAcademicHours>
              <AccessTimeIcon color="primary" />
              от {academicHours} ак. ч.
            </SliderCardAcademicHours>
            <Link to={`/course/${title}`}>
              <Button variant="outlined" sx={{ textTransform: 'none' }}>
                Подробнее
              </Button>
            </Link>
          </SliderFooter>
        </SliderCardInfo>
      </SliderContent>
    </Slider>
  );
};
