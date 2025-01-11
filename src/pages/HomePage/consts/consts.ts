import { EducationImage, LawyerImage, stonksImage } from 'shared/assets/images';

import { BioTechImage } from 'shared/assets/images';

export const slides = [
  {
    image: EducationImage,
    title: 'Педагогика',
    description: 'Педагог высшего образования по программам подготовки кадров высшей квалификации',
    academicHours: '250',
  },
  {
    image: BioTechImage,
    title: 'Медицина',
    description: 'Педагог высшего образования по программам подготовки кадров высшей квалификации',
    academicHours: '250',
  },
  {
    image: LawyerImage,
    title: 'Экономика',
    description: 'Педагог высшего образования по программам подготовки кадров высшей квалификации',
    academicHours: '250',
  },
  {
    image: EducationImage,
    title: 'Психология',
    description: 'Педагог высшего образования по программам подготовки кадров высшей квалификации',
    academicHours: '250',
  },
  {
    image: BioTechImage,
    title: 'Бизнес',
    description: 'Педагог высшего образования по программам подготовки кадров высшей квалификации',
    academicHours: '250',
  },
  {
    image: LawyerImage,
    title: 'Юриспруденция',
    description:
      'Педагог высшего образования по программам подготовки кадров высшей квалификации его образования по программам подготовки кадров высшей квалификации',
    academicHours: '250',
  },
];
export const tabs = [
  'Все курсы',
  'Педагогика',
  'Психология',
  'Медицина',
  'Юриспруденция',
  'Бизнес',
  'Экономика',
];

export const bannerInfo = {
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
};
