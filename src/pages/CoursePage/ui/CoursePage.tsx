import { CourseBanner } from 'widgets/CourseBanner';
import { bannerInfo } from '../consts/consts';
import { Banner } from 'widgets/Banner';

export const CoursePage = () => {
  return (
    <div>
      {/* // ! banner section */}
      <CourseBanner {...bannerInfo} />
    </div>
  );
};
