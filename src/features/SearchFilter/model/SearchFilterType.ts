export interface SearchFilterType {
  totalItems: number;
  sortingMode: sortingMode;
  filterThema: number[];
  filterText: string;
}

export type sortingMode = 'popularity_count' | 'updated_at';
