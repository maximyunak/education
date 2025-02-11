import { AxiosError, AxiosResponse } from 'axios';
import { FetchTestType } from '../model/fetchTestType';
import { $api } from 'shared/api';

interface SearchDataType {
  limit?: number;
  page?: number;
}

export const fetchTest = async (
  searchData?: SearchDataType,
): Promise<AxiosResponse<FetchTestType> | { error: AxiosError }> => {
  try {
    const res = await $api.get('/tests', { params: searchData });
    return res;
  } catch (error) {
    console.log('error fetchTest', error);
    if (error instanceof AxiosError) {
      return {
        error: error,
      };
    } else {
      return {
        error: new AxiosError('Произошла неизвестная ошибка', 'UNKNOWN_ERROR'),
      };
    }
  }
};

export const tests = await fetchTest();
