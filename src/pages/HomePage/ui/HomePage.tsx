import { stonksImage } from 'shared/assets/images';
import { Banner } from 'widgets/Banner';

const bannerInfo = [
  {
    title: 'Повышение квалификации и профессиональная переподготовка',
    subtitle: 'Университет дополнительного профессионального образования',
    buttons: [
      {
        title: 'Выбрать курс',
        variant: 'contained' as const,
      },
      {
        title: 'Консультация',
        variant: 'outlined' as const,
      },
    ],
    image: stonksImage,
    info: [
      {
        title: '187',
        subtitle: 'Курсов',
      },
      {
        title: '187',
        subtitle: 'Курсов',
      },
      {
        title: '187',
        subtitle: 'Курсов',
      },
    ],
  },
];

export const HomePage = () => {
  return (
    <div>
      <Banner {...bannerInfo[0]} />
    </div>
  );
};
