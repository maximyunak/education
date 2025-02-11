import { TestType } from './TestType';

export interface FetchTestType {
  items: TestType[];
  total: number;
  page: number;
  size: number;
}
