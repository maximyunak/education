export interface SearchFilterType {
  totalItems: number;
  sortingMode: sortingMode;
  filterThema: filterThemaItemsType[];
  filterText: string;
}

export type sortingMode = 'popular' | 'date';

export type filterThemaItemsType = (typeof filterThemaItems)[number];

export const filterThemaItems = ['мемы', 'индусы', 'гадания'] as const;
