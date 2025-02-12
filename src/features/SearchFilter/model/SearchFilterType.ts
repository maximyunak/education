import { ThemeType } from 'entities/Themes';

export interface SearchFilterType {
  totalItems: number;
  sortingMode: sortingMode;
  filterThema: ThemeType[];
  filterText: string;
}

export type sortingMode = 'popular' | 'date';
