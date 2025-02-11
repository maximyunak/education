import { $api } from 'shared/api';
import { TestType } from '../model/TestType';
import { AxiosResponse } from 'axios';

interface CreateTestResponse {
  success: boolean;
  message: string;
  items: TestType;
}

export const createTestRequest = async (
  TestData: TestType,
): Promise<AxiosResponse<CreateTestResponse>> => {
  try {
    const res = await $api.post('tests', TestData);
    return res;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
