import { CourseBanner } from 'widgets/CourseBanner';
import { CourseSlider } from 'widgets/CourseSlider';
import { bannerInfo, slides } from '../consts/consts';
import { Title } from 'shared/lib/ui/Title'

import {
  CourseContainer,
  BgContainer,
  BgBlock,
} from './CoursePage.styles';

export const CoursePage = () => {

  return (
    <CourseContainer>
      {/* // ! banner section */}
      <CourseBanner {...bannerInfo} />
      <BgContainer>
        <BgBlock sx={{ background: '#F6F8F9' }}></BgBlock>
        <Title style={{ padding: '120px 0 40px 0' }}>Информация о курсе</Title>
        {/* // ! slider section */}
        <CourseSlider slides={slides} />
      </BgContainer>
    </CourseContainer>
  );
};
