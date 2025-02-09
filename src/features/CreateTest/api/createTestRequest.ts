import { $api } from 'shared/api';
import { TestType } from '../model/TestType';

export const createTestRequest = async (TestData: TestType) => {
  try {
    const res = await $api.post('tests', TestData);
    return res;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
